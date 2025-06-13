import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface RegisterProps {
  setUser: (user: { name: string }) => void;
}

export default function Register({ setUser }: RegisterProps) {
  const [name, setName] = useState('');
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
      const regResp = await fetch('/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, username: email, password })
      });
      if (!regResp.ok) {
        const data = await regResp.json().catch(() => ({}));
        setError((data as any).error || 'Registration failed');
        setLoading(false);
        return;
      }

      const loginResp = await fetch('/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: email, password })
      });
      if (!loginResp.ok) {
        setError('Registered but login failed');
        setLoading(false);
        return;
      }
      const { token } = await loginResp.json();

      localStorage.setItem('token', token);
      const user = { name };
      setUser(user);
      localStorage.setItem('user', JSON.stringify(user));

      navigate('/');
    } catch (err) {
      console.error(err);
      setError('Network error');
      setLoading(false);
    }
  };

  return (
    <main>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          disabled={loading}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          disabled={loading}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          disabled={loading}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? 'Creating account…' : 'Create Account'}
        </button>
      </form>
    </main>
  );
}
