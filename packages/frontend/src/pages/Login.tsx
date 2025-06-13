import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface LoginProps {
  setUser: (user: { name: string }) => void;
}

export default function Login({ setUser }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const resp = await fetch('/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: email, password }),
      });

      if (!resp.ok) {
        const data = await resp.json();
        setError(data.error || 'Login failed');
        setLoading(false);
        return;
      }

      const { token, name } = await resp.json();
      localStorage.setItem('token', token);
      setUser({ name });
      localStorage.setItem('user', JSON.stringify({ name }));

      navigate('/');
    } catch (err) {
      console.error(err);
      setError('Network error');
      setLoading(false);
    }
  };

  return (
    <main>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          disabled={loading}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
          disabled={loading}
        />

        <button type="submit" disabled={loading}>
          {loading ? 'Logging in…' : 'Log In'}
        </button>
      </form>
      <p>
        <Link to="/register">Don't have an account? Register</Link>
      </p>
    </main>
  );
}
