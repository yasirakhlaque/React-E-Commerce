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
                        <h1>You Are At Right Place</h1>
                        <p>The place where you will get so many tech products at the same place at a reasonable cost. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, autem.</p>
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
