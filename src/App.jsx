import './App.css';
import { useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Pages/Landing';
import Cart from './Pages/Cart';
import TopListed from './Pages/TopListed';

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Router>
        <div className={`app ${theme}`}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/cart" element={<Cart themebtn={theme} toggle={toggleTheme} />} />
            <Route path="/TopListed" element={<TopListed />} />

          </Routes>
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
