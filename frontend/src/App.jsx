import React, { useContext } from 'react'; // Make sure useContext is imported from React
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import { AuthContext } from './context/AuthContext';

// Pages
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import ProjectDetails from './pages/ProjectDetails';

const App = () => {
  const { user } = useContext(AuthContext); // Using useContext here

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Navigate to={user ? "/dashboard" : "/login"} />} />
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/dashboard" />} />
        <Route path="/register" element={!user ? <Register /> : <Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/project/:id" element={user ? <ProjectDetails /> : <Navigate to="/login" />} />
        {/* 404 fallback could go here */}
      </Routes>
    </>
  );
};

export default App;
