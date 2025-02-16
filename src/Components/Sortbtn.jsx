import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { ThemeContext } from '../App';
import '../styles/Sortbtn.css'

export default function Sortbtn({ setProducts, products }) {
    const { theme } = useContext(ThemeContext);
    const { sortByPriceHigh, sortByPriceLow } = useContext(CartContext);

    const handleSortChange = (event) => {
        const value = event.target.value;
        if (value === "high") {
            setProducts(sortByPriceHigh(products));
        } else if (value === "low") {
            setProducts(sortByPriceLow(products));
        }
    };

    return (
        <div className={`sort-btn ${theme}`}>
            <select onChange={handleSortChange}>
                <option value="">Sort by Price</option>
                <option value="high">High to Low</option>
                <option value="low">Low to High</option>
            </select>
        </div>
    );
}
