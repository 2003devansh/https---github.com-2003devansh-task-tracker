import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // null means no one is logged in
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    try {
      if (storedUser) {
        setUser(JSON.parse(storedUser));  // Try to parse the data safely
      }
    } catch (error) {
      console.error("Error parsing user data:", error);
      localStorage.removeItem('user');  // Clear invalid data from localStorage
    }
  }, []);

  const login = (userData, token) => {
    console.log("Login called with", userData, token); // Debugging line
    setUser(userData);  // Update user context
    setToken(token);     // Update token context
    localStorage.setItem('user', JSON.stringify(userData)); // Save user in localStorage
    localStorage.setItem('token', token); // Save token in localStorage
  };
  

  const logout = () => {
    setUser(null);
    setToken('');
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
