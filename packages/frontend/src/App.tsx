import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import RecipeDetail from './pages/RecipeDetail';
import Ingredients from './pages/Ingredients';
import ForYou from './pages/ForYou';
import Popular from './pages/Popular';
import { useState, useEffect } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  const [user, setUser] = useState<{ name: string } | null>(() => {
    const stored = localStorage.getItem('user');
    return stored ? JSON.parse(stored) : null;
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const [ingredients, setIngredients] = useState<string[]>(() => {
    const stored = localStorage.getItem("ingredients");
    return stored ? JSON.parse(stored) : [];
  });

  return (
    <Router>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} user={user} logout={logout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register setUser={setUser} />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/ingredients" element={<Ingredients ingredients={ingredients} setIngredients={setIngredients} />} />
        <Route path="/foryou" element={<ForYou ingredients={ingredients} />} />
        <Route path="/popular" element={<Popular />} />
      </Routes>
    </Router>
  );
}

export default App;
