import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

export default function Sortbtn({ setProducts, products }) {
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
        <div className="sort-btn">
            <select onChange={handleSortChange} style={{
                backgroundColor: "#24245f",
                border: "none",
                width: "22vh",
                height: "6vh",
                color: "white",
                borderRadius:"6px",
                outline:"none"
            }}>
                <option value="">Sort by Price</option>
                <option value="high">High to Low</option>
                <option value="low">Low to High</option>
            </select>
        </div>
    );
}
