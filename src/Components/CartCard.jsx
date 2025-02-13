import '../styles/CartCard.css'
import { ThemeContext } from '../App';
import { useContext } from 'react';

export default function CartCard({ itemImage, itemName, itemAbt, itemPrice }) {
    const { theme } = useContext(ThemeContext);

    return (
        <>
            <div className={`cart-card ${theme}`}>
                <div className="cart-item-img">
                    <img src={itemImage} alt={itemName} />
                </div>
                <div className="cart-item-details">
                    <h2>{itemName}</h2>
                    <p>{itemAbt.slice(0, 30)}</p>
                    <h1>{itemPrice}</h1>
                </div>
                <div className="cart-options">
                    <button className="delete"><i className="fa-solid fa-trash"></i></button>
                </div>
            </div>
        </>
    )
}