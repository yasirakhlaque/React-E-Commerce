import { useState, createContext } from "react";
import SuccessAdd from "../Components/SuccessAdd";

export const CartContext = createContext(null);

export default function CartProvider({ children }) {
    const [cartItem, setCartItem] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showRemove, setShowRemove] = useState(false);
    const [currentProduct, setCurrentProduct] = useState(null);

    // Add to cart function
    const AddToCart = (product) => {
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

        // Set current product for notification
        setCurrentProduct(product);
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
    };

    // Remove from cart function
    const removeFromCart = (product) => {
        setCartItem(prevCart => {
            return prevCart
                .map(item =>
                    item.itemName === product.itemName
                        ? { ...item, copies: item.copies - 1 }
                        : item
                )
                .filter(item => item.copies > 0);
        });

        setTotalItems(prevTotal => prevTotal - 1);
        setTotalPrice(prevPrice => prevPrice - parseInt(product.itemPrice.replace("Rs.", "")));

        // Set current product for notification
        setCurrentProduct(product);
        setShowRemove(true);
        setTimeout(() => setShowRemove(false), 3000);
    };

    // Sorting functions (High to Low & Low to High)
    const sortByPriceHigh = (products) => {
        return [...products].sort((a, b) =>
            parseInt(b.itemPrice.replace("Rs.", "")) - parseInt(a.itemPrice.replace("Rs.", ""))
        );
    };

    const sortByPriceLow = (products) => {
        return [...products].sort((a, b) =>
            parseInt(a.itemPrice.replace("Rs.", "")) - parseInt(b.itemPrice.replace("Rs.", ""))
        );
    };

    return (
        <CartContext.Provider value={{
            cartItem,
            totalItems,
            totalPrice,
            AddToCart,
            removeFromCart,
            sortByPriceHigh,
            sortByPriceLow
        }}>
            {children}
            {showSuccess && <SuccessAdd state={"Add to"} productName={currentProduct?.itemName} />}
            {showRemove && <SuccessAdd state={"Removed From"} productName={currentProduct?.itemName} />}
        </CartContext.Provider>
    );
}
