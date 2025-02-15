import { useContext } from "react";
import CartCard from "../Components/CartCard";
import Navbar from "../Components/Navbar";
import "../styles/Cart.css";
import { ThemeContext } from "../App";
import { CartContext } from "../Context/CartContext"; // ✅ Import Context

export default function Cart({ themebtn, toggle }) {
    const { theme } = useContext(ThemeContext);
    const { cartItem, removeFromCart } = useContext(CartContext); // ✅ Correct usage

    return (
        <>
            <Navbar themebtn={themebtn} toggle={toggle} />
            <div className={`cart ${theme}`}>
                <div className="cart-items">
                    {cartItem.length > 0 ? (
                        cartItem.map((item, index) => (
                            <CartCard
                                key={index}
                                itemImage={item.itemImage}
                                itemName={item.itemName}
                                itemAbt={item.itemAbt}
                                itemPrice={item.itemPrice}
                                product={item} // ✅ Pass product object
                                removeFromCart={removeFromCart} // ✅ Pass function
                            />
                        ))
                    ) : (
                        <h2>Your cart is empty.</h2>
                    )}
                </div>
                <div className="total-bill">
                    <h1>Total Bill</h1>
                    <ul>
                        {cartItem.map((item, index) => (
                            <li key={index}>
                                <i className="fa-solid fa-store"></i>
                                {item.itemName} (x{item.copies})
                            </li>
                        ))}
                    </ul>
                    <h4>Total Items: {cartItem.length}</h4>
                    <h3>Total: Rs.{cartItem.reduce((sum, item) => sum + parseInt(item.itemPrice.replace("Rs.", "")) * item.copies, 0)}</h3>
                    <button className="buy">Buy All</button>
                </div>
            </div>
        </>
    );
}
