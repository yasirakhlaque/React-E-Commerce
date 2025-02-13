import '../styles/Hero.css'
import { useContext } from 'react';
import { ThemeContext } from '../App';
import { Link } from 'react-router-dom';

export default function Hero({ themebtn, toggle }) {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <>
            <div className={`landing ${theme}`}>
                <div className="nav">
                    <div className="navigation">
                        <div className="logo">LOGO</div>
                        <div className="menu">
                            <ul>
                                <li>HOME</li>
                                <li>TOP</li>
                                <li>CONTACT</li>
                                <li>HELP</li>
                            </ul>
                        </div>
                    </div>
                    <div className="credidentials">
                        <ul>
                            <button className="theme-toggle" onClick={toggle}>
                                {themebtn === 'dark' ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}
                            </button>
                           <Link to={"/cart"}> <li><button className="cart-icon"><i className="fa-solid fa-cart-shopping"></i></button></li></Link>
                            <li><button className="login-btn">Login</button></li>
                            <li><button className="Signup-btn">SignUP</button></li>
                        </ul>
                    </div>
                </div>
                <div className="dialogue">
                    <div className="dialog-img1">
                        <img src="Images/headphone2.png" alt="Images" />
                    </div>
                    <div className="dialogue-content">
                        <h1>You Are At Right Place</h1>
                        <p>The place where you will get so many tech product at the same place at resonable cost. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, autem.</p>
                        <button className='explore'>Explore</button>
                    </div>
                    <div className="dialog-img2">
                        <img src="Images/headphone2.png" alt="Images" />
                    </div>
                </div>
            </div>
        </>
    )
}