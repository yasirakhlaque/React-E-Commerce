import './App.css';
import { useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Pages/Landing';
import Cart from './Pages/Cart';
import TopListed from './Pages/TopListed';
import Laptop from './Pages/Laptop';
import CartProvider from './Context/CartContext';
import Phones from './Pages/Phones';
import HeadPhones from './Pages/HeadPhones';
import Tablets from './Pages/Tablets';
import Chargers from './Pages/Chargers';

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <CartProvider>
      <Router>
        <div className={`app ${theme}`}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/cart" element={<Cart themebtn={theme} toggle={toggleTheme} />} />
            <Route path="/TopListed" element={<TopListed />} />
            <Route path="/Laptop" element={<Laptop themebtn={theme} toggle={toggleTheme}/>} />
            <Route path="/Phones" element={<Phones themebtn={theme} toggle={toggleTheme}/>} />
            <Route path="/HeadPhones" element={<HeadPhones themebtn={theme} toggle={toggleTheme}/>} />
            <Route path="/Tablets" element={<Tablets themebtn={theme} toggle={toggleTheme}/>} />
            <Route path="/Chargers" element={<Chargers themebtn={theme} toggle={toggleTheme}/>} />
          </Routes>
        </div>
      </Router>
      </CartProvider>
    </ThemeContext.Provider>
  );
}

export default App;
