import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import Login from './pages/Login';
import Signup from './pages/Signup';
import DashboardUser from './pages/DashboardUser';
import DashboardRecruiter from './pages/DashboardRecruiter';
import LandingPage from './pages/LandingPage';
import ForgotPassword from './pages/ForgotPassword';

const ProtectedRoute = ({ children, allowedRole }: { children: React.ReactNode, allowedRole?: 'user' | 'recruiter' }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) return <div>Loading...</div>;

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (allowedRole && user.role !== allowedRole) {
    return <Navigate to={user.role === 'recruiter' ? '/recruiter-dashboard' : '/dashboard'} />;
  }

  return <>{children}</>;
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute allowedRole="user">
                  <DashboardUser />
                </ProtectedRoute>
              }
            />
            <Route path="/recruiter-dashboard"
              element={
                <ProtectedRoute allowedRole="recruiter">
                  <DashboardRecruiter />
                </ProtectedRoute>
              }
            />
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </AuthProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;

