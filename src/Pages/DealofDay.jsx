import '../styles/DealofDay.css'
import { useContext } from 'react';
import { ThemeContext } from '../App';

export default function DealofDay(){
    const { theme } = useContext(ThemeContext);
    return(
        <div className={`deal-fo-day ${theme}`}>
            <h1>Deal Of The Day</h1>
            <div className="deal-content">
                <div className="deal-img">
                    <img src="Images/shop.png" alt="deal" />
                </div>
                <div className="deal-data">
                    <h2>Item Name</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, ullam consequuntur facilis fuga, aliquid alias eaque praesentium ducimus illum tempora recusandae ab itaque? Reprehenderit aut ducimus tempora nisi, illo perspiciatis.</p>
                    <h3><span>Rs.17999</span>Rs.15999</h3>
                    <button className="deal-buy">Buy Now</button>
                </div>
            </div>
        </div>
    )
}