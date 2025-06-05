import { useState } from 'react';
import api from '../api';

export function useAuth() {
  const [user, setUser] = useState(null);

  const login = async (username, password) => {
    const res = await api.post('/auth/login', { username, password });
    localStorage.setItem('token', res.data.token);
    setUser(res.data.user);
  };

  const register = async (username, password) => {
    await api.post('/auth/register', { username, password });
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return { user, login, register, logout };
}