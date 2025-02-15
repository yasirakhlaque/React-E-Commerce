import { useContext } from 'react';
import { ThemeContext } from '../App';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import { HashLink } from 'react-router-hash-link';

export default function Navbar({ themebtn, toggle }) {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`nav ${theme}`}>
            <div className="navigation">
                <div className="logo">
                    <Link to={'/'}>
                        LOGO
                    </Link>
                </div>
                <div className="menu">
                    <ul>
                        <li><HashLink smooth to="/#home">HOME</HashLink></li>

                        <li>
                            <HashLink smooth to="/#top-section">TOP</HashLink>
                        </li>
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
                    <Link to={"/cart"}>
                        <li>
                            <button className="cart-icon"><i className="fa-solid fa-cart-shopping"></i></button>
                        </li>
                    </Link>
                    <li><button className="login-btn">Login</button></li>
                    <li><button className="Signup-btn">Sign Up</button></li>
                </ul>
            </div>
        </div>
    );
}
