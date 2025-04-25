// src/pages/Register.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../api/auth';
import useAuth from '../hooks/useAuth';
import { motion } from 'framer-motion';

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await registerUser(form);
      login(res.user, res.token);
      navigate('/');
    } catch (err) {
      alert('Registration failed');
    }
  };

  return (
    <motion.div
      className="p-4 max-w-md mx-auto"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-semibold mb-4">Register</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <motion.input
          type="text"
          placeholder="Name"
          className="border p-2 rounded"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        <motion.input
          type="email"
          placeholder="Email"
          className="border p-2 rounded"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        />
        <motion.input
          type="password"
          placeholder="Password"
          className="border p-2 rounded"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        />
        <motion.button
          type="submit"
          className="bg-green-600 text-white py-2 rounded"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Register
        </motion.button>
      </form>
    </motion.div>
  );
};

export default Register;
