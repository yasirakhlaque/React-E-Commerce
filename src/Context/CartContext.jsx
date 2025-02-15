import { useState, createContext } from "react";
import SuccessAdd from "../Components/SuccessAdd";

export const CartContext = createContext(null);

export default function CartProvider({ children }) {
    const [cartItem, setCartItem] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false); // State to manage SuccessAdd visibility
    const [showRemove, setShowRemove] = useState(false); // State to manage SuccessAdd visibility

    const AddToCart = (product) => {
        console.log("AddToCart called"); // Debugging log
        setCartItem(prevCart => {
            const existingItem = prevCart.find(item => item.itemName === product.itemName);
            if (existingItem) {
                return prevCart.map(item =>
                    item.itemName === product.itemName
                        ? { ...item, copies: item.copies + 1 }
                        : item
                );
            } else {
                return [...prevCart, { ...product, copies: 1 }];
            }
        });
    
        setTotalItems(prevTotal => prevTotal + 1);
        setTotalPrice(prevPrice => prevPrice + parseInt(product.itemPrice.replace("Rs.", "")));
    
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
    };

    const removeFromCart = (product) => {
        setCartItem(prevCart => {
            return prevCart
                .map(item =>
                    item.itemName === product.itemName
                        ? { ...item, copies: item.copies - 1 }
                        : item
                )
                .filter(item => item.copies > 0); // Remove items with 0 copies
        });

        setTotalItems(prevTotal => prevTotal - 1);
        setTotalPrice(prevPrice => prevPrice - parseInt(product.itemPrice.replace("Rs.", "")));

        setShowRemove(true);
        setTimeout(() => setShowRemove(false), 3000);
    };

    return (
        <CartContext.Provider value={{ cartItem, totalItems, totalPrice, AddToCart, removeFromCart }}>
            {children}
            {showSuccess && <SuccessAdd state={"Add to"}/>} {/* Render SuccessAdd only when showSuccess is true */}
            {showRemove && <SuccessAdd state={"Removed From"}/>} {/* Render SuccessAdd only when showSuccess is true */}
        </CartContext.Provider>
    );
}
