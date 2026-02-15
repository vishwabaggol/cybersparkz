import React from 'react';

export const Logo = ({ className = "h-10 w-10" }: { className?: string }) => (
    <img src="/logo.jpg" alt="Cybersparkz Logo" className={`${className} object-contain`} />
);

export const LogoText = () => (
    <div className="flex items-center space-x-3">
        <Logo className="h-10 w-10" />
        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Cybersparkz
        </span>
    </div>
);
