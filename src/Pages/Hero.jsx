import '../styles/Hero.css';
import { useContext } from 'react';
import { ThemeContext } from '../App';
import Navbar from '../Components/Navbar';

export default function Hero({ themebtn, toggle }) {
    const { theme } = useContext(ThemeContext);

    return (
        <>
            <div className={`landing ${theme}`}>
                <Navbar themebtn={themebtn} toggle={toggle} />
                <div className="dialogue">
                    <div className="dialog-img1">
                        <img src="Images/headphone2.png" alt="Images" />
                    </div>
                    <div className="dialogue-content">
                        <h1>Tech That Fits Your Life, Prices That Fit Your Budget!</h1>
                        <p>Find the best tech products at unbeatable prices, all in one place. Shop smart, shop tech!</p>
                        <button className='explore'>Explore</button>
                    </div>
                    <div className="dialog-img2">
                        <img src="Images/headphone2.png" alt="Images" />
                    </div>
                </div>
            </div>
        </>
    );
}
