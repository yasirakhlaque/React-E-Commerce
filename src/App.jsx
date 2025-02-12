import './App.css'
import Landing from './Pages/Landing'
import Section from './Pages/Section'
import { useEffect, useState, createContext } from 'react';
import TopListed from './Pages/TopListed';

export const ThemeContext = createContext();
function App() {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  }
  return (
    <>
      <div className={`app ${theme}`}>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <Landing themebtn={theme} toggle={toggleTheme} />
          <Section />
          <TopListed />
        </ThemeContext.Provider>
      </div>
    </>
  )
}

export default App;
