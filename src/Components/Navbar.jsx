import { useContext, useState } from 'react';
import { ThemeContext } from '../App';
import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import '../styles/Navbar.css'

export default function Navbar({ themebtn, toggle }) {
    const { theme } = useContext(ThemeContext);
    const { cartItem } = useContext(CartContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={`navbar ${theme}`}>
            <div className="navbar-container">
                <div className="navbar-logo">
                    <Link to={'/'}>LOGO</Link>
                </div>

                <div className="navbar-hamburger" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className={`navbar-content ${isMenuOpen ? 'active' : ''}`}>
                    <nav className="navbar-menu">
                        <ul>
                            <li><HashLink smooth to="/#home">Home</HashLink></li>
                            <li><HashLink smooth to="/#top-section">Top</HashLink></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/help">Help</Link></li>
                        </ul>
                    </nav>

                    <div className="navbar-actions">
                        <button className="theme-btn" onClick={toggle}>
                            {themebtn === 'dark' ? 
                                <i className="fa-solid fa-sun"></i> : 
                                <i className="fa-solid fa-moon"></i>
                            }
                        </button>
                        
                        <Link to="/cart" className="cart-btn">
                            <i className="fa-solid fa-cart-shopping"></i>
                            {cartItem.length > 0 && (
                                <span className="cart-count">{cartItem.length}</span>
                            )}
                        </Link>
                        
                        <div className="auth-buttons">
                            <button className="login-btn">Login</button>
                            <button className="signup-btn">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}