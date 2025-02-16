import '../styles/Footer.css'


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                {/* Shop Section */}
                <div className="footer-section">
                    <h3>Shop</h3>
                    <ul>
                        <li><a href="#">New Arrivals</a></li>
                        <li><a href="#">Best Sellers</a></li>
                        <li><a href="#">Sales & Deals</a></li>
                        <li><a href="#">Gift Cards</a></li>
                    </ul>
                </div>

                {/* Customer Service Section */}
                <div className="footer-section">
                    <h3>Customer Service</h3>
                    <ul>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Shipping Policy</a></li>
                        <li><a href="#">Returns & Exchanges</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>

                {/* About Section */}
                <div className="footer-section">
                    <h3>About Us</h3>
                    <ul>
                        <li><a href="#">Our Story</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Store Locations</a></li>
                    </ul>
                </div>

                {/* Newsletter Section */}
                <div className="footer-section">
                    <h3>Stay Connected</h3>
                    <p>Subscribe to our newsletter for updates and exclusive offers!</p>
                    <div className="newsletter-form">
                        <input type="email" placeholder="Enter your email" />
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="footer-bottom">
                <div className="copyright">
                    © 2025 Your Store. All rights reserved.
                </div>
                <div className="legal-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Cookie Policy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;