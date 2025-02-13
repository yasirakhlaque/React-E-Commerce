import Hero from './Hero';
import Section from './Section';
import TopListed from './TopListed';
import { useContext } from 'react';
import { ThemeContext } from '../App';

export default function Landing() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <>
            <div className={`landing ${theme}`}>
                <Hero themebtn={theme} toggle={toggleTheme} />
            </div>
            <Section />
            <TopListed />
        </>
    );
}
