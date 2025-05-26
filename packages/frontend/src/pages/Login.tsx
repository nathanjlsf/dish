import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface LoginProps {
  setUser: (user: { name: string }) => void;
}

export default function Login({ setUser }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const fakeName = email.split('@')[0];
    const user = { name: fakeName };

    setUser(user);
    localStorage.setItem('user', JSON.stringify(user));

    navigate('/');
  };

  return (
    <main>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button type="submit">Log In</button>
        <p>
          <Link to="/register">Don't have an account? Register</Link>
        </p>
      </form>
    </main>
  );
}