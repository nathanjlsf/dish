import { Link } from 'react-router-dom';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  user?: { name: string } | null;
  logout?: () => void;
}

export default function Navbar({ darkMode, setDarkMode, user, logout }: NavbarProps) {
  return (
    <nav style={{ justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link to="/">Home</Link>
        <Link to="/foryou">For You</Link>
        <Link to="/popular">Popular</Link>
        <Link to="/ingredients">My Ingredients</Link>
      </div>
      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
        {user ? (
          <>
            <span>Welcome, {user.name}</span>
            <button className="btn-outline" onClick={logout}>Logout</button>
          </>
        ) : (
          <Link to="/login" className="btn">Login</Link>
        )}
        <button className="btn-outline" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>
    </nav>
  );
}
