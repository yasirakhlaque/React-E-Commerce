import { useState, useContext } from "react";
import '../styles/Laptop.css';
import SalesCard from '../Components/SalesCard';
import Navbar from '../Components/Navbar';
import Sortbtn from '../Components/Sortbtn';
import { ThemeContext } from "../App";

export default function Tablets({ themebtn, toggle }) {
    const { theme } = useContext(ThemeContext);
    const [tabletData, setTabletData] = useState([
        {
            "itemImage": "Images/Tablets/tablet1.png",
            "itemName": "Apple iPad Pro M2",
            "itemAbt": "Experience ultimate performance with the Apple iPad Pro M2, featuring the powerful M2 chip and a stunning Liquid Retina XDR display...",
            "itemPrice": "Rs.112999"
        },
        {
            "itemImage": "Images/Tablets/tablet2.png",
            "itemName": "Samsung Galaxy Tab S9 Ultra",
            "itemAbt": "The Samsung Galaxy Tab S9 Ultra redefines Android tablets with its massive 14.6-inch AMOLED display and Snapdragon 8 Gen 2 processor...",
            "itemPrice": "Rs.108999"
        },
        {
            "itemImage": "Images/Tablets/tablet3.png",
            "itemName": "Microsoft Surface Pro 9",
            "itemAbt": "A tablet that can replace your laptop, the Microsoft Surface Pro 9 features a powerful Intel Core i7 processor and a detachable keyboard...",
            "itemPrice": "Rs.124999"
        },
        {
            "itemImage": "Images/Tablets/tablet4.png",
            "itemName": "Lenovo Tab P12 Pro",
            "itemAbt": "Enjoy immersive entertainment with the Lenovo Tab P12 Pro, featuring a 12.6-inch AMOLED display and Dolby Atmos sound...",
            "itemPrice": "Rs.69999"
        },
        {
            "itemImage": "Images/Tablets/tablet5.png",
            "itemName": "Xiaomi Pad 6 Pro",
            "itemAbt": "Powerful and affordable, the Xiaomi Pad 6 Pro comes with a Snapdragon 8+ Gen 1 processor and a 120Hz display...",
            "itemPrice": "Rs.42999"
        },
        {
            "itemImage": "Images/Tablets/tablet1.png",
            "itemName": "Realme Pad X",
            "itemAbt": "The Realme Pad X is a budget-friendly tablet with a large 11-inch 2K display and a Snapdragon 695 processor...",
            "itemPrice": "Rs.27999"
        },
        {
            "itemImage": "Images/Tablets/tablet2.png",
            "itemName": "OnePlus Pad",
            "itemAbt": "The OnePlus Pad brings a sleek design and flagship performance with a Dimensity 9000 processor and a 144Hz refresh rate...",
            "itemPrice": "Rs.39999"
        },
        {
            "itemImage": "Images/Tablets/tablet3.png",
            "itemName": "Amazon Fire HD 10",
            "itemAbt": "A great value entertainment tablet, the Amazon Fire HD 10 features a Full HD display and seamless Alexa integration...",
            "itemPrice": "Rs.15999"
        },
    ]);    

    return (
        <>
            <div className={`datas ${theme}`}>
                <Navbar themebtn={themebtn} toggle={toggle} />
                <div className="top-det">
                    <h1>Explore Tablets From Top Brands</h1>
                    <Sortbtn setProducts={setTabletData} products={tabletData} /> {/* ✅ Pass state */}
                </div>
                <SalesCard products={tabletData} /> 
            </div>
        </>
    )
}