import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
    id: number;
    name: string;
    email: string;
    username: string;
    role: 'user' | 'recruiter';
    company_name?: string;
    company_address?: string; // Recruiter fields
    designation?: string;
    bio?: string; // User fields
    skills?: string;
    experience_level?: string;
    photo_url?: string;
    is_two_factor_enabled?: boolean;
}

interface AuthContextType {
    user: any;
    token: string | null;
    login: (token: string, userData: any) => void;
    logout: () => void;
    isLoading: boolean;
    setup2FA: () => Promise<{ secret: string, imageUrl: string }>;
    verify2FA: (token: string) => Promise<{ success: boolean }>;
    disable2FA: () => Promise<{ success: boolean }>;
    login2FA: (userId: number, token: string) => Promise<any>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<any>(null);
    const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
            // Validate token and get user data
            fetch('http://localhost:3000/api/auth/me', {
                headers: { 'Authorization': `Bearer ${storedToken}` }
            })
                .then(res => {
                    if (res.ok) return res.json();
                    throw new Error('Invalid token');
                })
                .then(data => setUser(data))
                .catch(() => {
                    localStorage.removeItem('token');
                    setToken(null);
                    setUser(null);
                })
                .finally(() => setIsLoading(false));
        } else {
            setIsLoading(false);
        }
    }, []);

    const login = (newToken: string, userData: any) => {
        localStorage.setItem('token', newToken);
        setToken(newToken);
        setUser(userData);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
        setUser(null);
    };

    const setup2FA = async () => {
        const token = localStorage.getItem('token');
        const res = await fetch('http://localhost:3000/api/auth/2fa/generate', {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${token}` }
        });
        if (!res.ok) throw new Error('Failed to generate 2FA');
        return res.json();
    };

    const verify2FA = async (code: string) => {
        const token = localStorage.getItem('token');
        const res = await fetch('http://localhost:3000/api/auth/2fa/verify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ token: code })
        });
        if (!res.ok) throw new Error('Verification failed');

        // Refresh user data to update is_two_factor_enabled
        const meRes = await fetch('http://localhost:3000/api/auth/me', {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        if (meRes.ok) {
            const userData = await meRes.json();
            setUser(userData);
        }

        return res.json();
    };

    const disable2FA = async () => {
        const token = localStorage.getItem('token');
        const res = await fetch('http://localhost:3000/api/auth/2fa/disable', {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${token}` }
        });
        if (!res.ok) throw new Error('Failed to disable 2FA');

        // Refresh user data
        const meRes = await fetch('http://localhost:3000/api/auth/me', {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        if (meRes.ok) {
            const userData = await meRes.json();
            setUser(userData);
        }

        return res.json();
    };

    const login2FA = async (userId: number, token: string) => {
        const res = await fetch('http://localhost:3000/api/auth/2fa/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId, token })
        });
        if (!res.ok) throw new Error('Invalid 2FA code');
        return res.json();
    };

    return (
        <AuthContext.Provider value={{ user, token, login, logout, isLoading, setup2FA, verify2FA, disable2FA, login2FA }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
