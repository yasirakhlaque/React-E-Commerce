import Hero from './Hero';
import Section from './Section';
import TopListed from './TopListed';
import { useContext, useState } from 'react';
import { ThemeContext } from '../App';
import Footer from '../Components/Footer';
import DealofDay from './DealofDay';
import OpeningAnimation from "../Components/OpeningAnimation";


export default function Landing() {
    const [showAnimation, setShowAnimation] = useState(true);
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div>
            {
                showAnimation ? (
                    <OpeningAnimation onComplete={() => setShowAnimation(false)} />
                ) : (
                    <>
                        <div className={`landing ${theme}`} id='home'>
                            <Hero themebtn={theme} toggle={toggleTheme} />
                        </div>
                        <Section />
                        <div id="top-section">
                            <TopListed />
                        </div>
                        <div id="deal">
                            <DealofDay />
                        </div>
                        <Footer />
                    </>
                )
            }
        </div>
    );
}

