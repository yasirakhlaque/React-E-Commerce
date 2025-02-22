import '../styles/CartCard.css'
import { ThemeContext } from '../App';
import { useContext } from 'react';

export default function CartCard({ itemImage, itemName, itemAbt, itemPrice, product, removeFromCart }) {
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
                    <button className="delete" onClick={() => removeFromCart(product)}>
                        <lord-icon
                            src="https://cdn.lordicon.com/hwjcdycb.json"
                            trigger="hover"
                            stroke="bold"
                            state="morph-trash-in"
                            colors="primary:#121331,secondary:#000000">
                        </lord-icon>
                        </button>
                </div>
            </div>
        </>
    )
}