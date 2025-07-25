import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useEffect, useState } from 'react';
const AuthContext = createContext(undefined);
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const stored = localStorage.getItem('user');
        if (stored)
            setUser(JSON.parse(stored));
    }, []);
    const login = (userData, token) => {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(userData));
        setUser(userData);
    };
    const logout = () => {
        localStorage.clear();
        setUser(null);
    };
    return (_jsx(AuthContext.Provider, { value: { user, login, logout }, children: children }));
};
export default AuthContext;
