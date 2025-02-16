import { useState, useContext } from "react";
import '../styles/Laptop.css';
import SalesCard from '../Components/SalesCard';
import Navbar from '../Components/Navbar';
import Sortbtn from '../Components/Sortbtn';
import { ThemeContext } from "../App";

export default function Chargers({ themebtn, toggle }) {
    const { theme } = useContext(ThemeContext);
    const [chargerData, setChargerData] = useState([
        {
            "itemImage": "Images/Chargers/charger1.png",
            "itemName": "Apple 20W USB-C Power Adapter",
            "itemAbt": "Fast charge your iPhone or iPad with the Apple 20W USB-C Power Adapter, designed for efficiency and safety...",
            "itemPrice": "Rs.1999"
        },
        {
            "itemImage": "Images/Chargers/charger2.png",
            "itemName": "Samsung 45W Super Fast Charger",
            "itemAbt": "Experience ultra-fast charging with the Samsung 45W Super Fast Charger, perfect for Galaxy devices...",
            "itemPrice": "Rs.2999"
        },
        {
            "itemImage": "Images/Chargers/charger3.png",
            "itemName": "Anker 65W GaN Fast Charger",
            "itemAbt": "The Anker 65W GaN Fast Charger provides high-speed charging with advanced GaN technology in a compact form...",
            "itemPrice": "Rs.3499"
        },
        {
            "itemImage": "Images/Chargers/charger4.png",
            "itemName": "OnePlus 80W SuperVOOC Charger",
            "itemAbt": "Charge your OnePlus device in minutes with the 80W SuperVOOC Charger, ensuring rapid and safe charging...",
            "itemPrice": "Rs.2799"
        },
        {
            "itemImage": "Images/Chargers/charger5.png",
            "itemName": "Xiaomi HyperCharge 120W Adapter",
            "itemAbt": "Power up your Xiaomi devices at lightning speed with the 120W HyperCharge adapter for an unparalleled charging experience...",
            "itemPrice": "Rs.3999"
        },
        {
            "itemImage": "Images/Chargers/charger6.png",
            "itemName": "Realme 65W SuperDart Charger",
            "itemAbt": "Realme’s 65W SuperDart Charger offers blazing-fast charging speeds while maintaining battery health...",
            "itemPrice": "Rs.2499"
        },
        {
            "itemImage": "Images/Chargers/charger4.png",
            "itemName": "Sony 18W Quick Charger",
            "itemAbt": "Sony's 18W Quick Charger ensures a reliable and safe charging experience for all compatible devices...",
            "itemPrice": "Rs.1499"
        },
        {
            "itemImage": "Images/Chargers/charger1.png",
            "itemName": "Baseus 65W Multi-Port Charger",
            "itemAbt": "The Baseus 65W Multi-Port Charger allows you to charge multiple devices simultaneously with high-speed output...",
            "itemPrice": "Rs.3299"
        }
    ]);
        

    return (
        <>
            <div className={`datas ${theme}`}>
                <Navbar themebtn={themebtn} toggle={toggle} />
                <div className="top-det">
                    <h1>Explore Tablets From Top Brands</h1>
                    <Sortbtn setProducts={setChargerData} products={chargerData} /> {/* ✅ Pass state */}
                </div>
                <SalesCard products={chargerData} /> 
            </div>
        </>
    )
}