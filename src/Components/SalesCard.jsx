import '../styles/SalesCard.css'
import { useContext } from 'react';
import { ThemeContext } from '../App';

export default function SalesCard() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    let items = [ // Renamed to 'items' for clarity
        { itemImage: "Images/laptop1.png", itemName: "Laptop of India by amazon", itemAbt: "This is the best waterproof laptop....", itemPrice: "Rs.49999" },
        { itemImage: "Images/smartphone1.png", itemName: "Smartphone of India by amazon", itemAbt: "This is the best waterproof laptop....", itemPrice: "Rs.7999" },
        { itemImage: "Images/headphone1.png", itemName: "Headphone of India by amazon", itemAbt: "This is the best waterproof laptop....", itemPrice: "Rs.799" },
        { itemImage: "Images/charger1.png", itemName: "Charger of India by amazon", itemAbt: "This is the best waterproof laptop....", itemPrice: "Rs.249" },
        { itemImage: "Images/cover1.png", itemName: "Cover of India by amazon", itemAbt: "This is the best waterproof laptop....", itemPrice: "Rs.129" },
        { itemImage: "Images/tablet1.png", itemName: "Tablet of India by amazon", itemAbt: "This is the best waterproof laptop....", itemPrice: "Rs.17999" },
    ];

    return (
        <>
            {
                items.map((product, index) => ( // Correct usage: product, index
                    <div className={`sales-card ${theme}`} key={index}> {/* Added key prop */}
                        <div className="item-img">
                            <img src={product.itemImage} alt="Images" /> {/* Use product.itemImage */}
                            <div className="add-to-cart">
                                <i className="fa-solid fa-plus"></i>
                            </div>
                        </div>
                        <div className="item-name">
                            <h3>{product.itemName}</h3> {/* Use product.itemName */}
                            <p>{product.itemAbt}</p> {/* Use product.itemAbt */}
                        </div>
                        <div className="item-price">
                            <h4>{product.itemPrice}</h4> {/* Use product.itemPrice */}
                        </div>
                    </div>
                ))
            }
        </>
    );
}