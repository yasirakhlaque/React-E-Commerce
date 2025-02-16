import Hero from './Hero';
import Section from './Section';
import TopListed from './TopListed';
import { useContext } from 'react';
import { ThemeContext } from '../App';
import Footer from '../Components/Footer';

export default function Landing() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <>
            <div className={`landing ${theme}`} id='home'>
                <Hero themebtn={theme} toggle={toggleTheme} />
            </div>
            <Section />
            <div id="top-section">
                <TopListed />
            </div>
            <Footer />
        </>
    );
}
