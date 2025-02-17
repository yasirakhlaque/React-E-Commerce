import React, { useContext } from 'react';
import { ThemeContext } from '../App';
import '../styles/DealofDay.css'

export default function DealofDay() {
    const { theme } = useContext(ThemeContext);
    
    return (
        <div className={`deal-of-day ${theme}`}>
            <div className="deal-header">
                <h1>Deal Of The Day</h1>
                <div className="timer">
                    <span>04</span>:<span>30</span>:<span>00</span>
                </div>
            </div>
            
            <div className="deal-content">
                <div className="deal-img">
                    <img src="Images/shop.png" alt="deal" />
                    <div className="discount-badge">-20% OFF</div>
                </div>
                
                <div className="deal-data">
                    <h2>Premium Wireless Headphones</h2>
                    <p>Experience studio-quality sound with our latest noise-cancelling technology. Premium build quality with up to 40 hours of battery life.</p>
                    
                    <div className="price-container">
                        <div className="price">
                            <span className="original-price">Rs.17,999</span>
                            <span className="current-price">Rs.15,999</span>
                        </div>
                        <div className="savings">You Save: Rs.2,000</div>
                    </div>
                    
                    <div className="features">
                        <div className="feature-item">✓ Active Noise Cancellation</div>
                        <div className="feature-item">✓ 40-Hour Battery Life</div>
                        <div className="feature-item">✓ Premium Build Quality</div>
                    </div>
                    
                    <div className="button-container">
                        <button className="deal-buy">Buy Now</button>
                        <button className="deal-more">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
}