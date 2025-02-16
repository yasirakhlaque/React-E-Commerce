import { useState, useContext } from "react";
import '../styles/Laptop.css';
import SalesCard from '../Components/SalesCard';
import Navbar from '../Components/Navbar';
import Sortbtn from '../Components/Sortbtn';
import { ThemeContext } from "../App";

export default function Phones({ themebtn, toggle }) {
    const { theme } = useContext(ThemeContext);
    const [smartphoneData, setSmartphoneData] = useState([
        {
            "itemImage": "Images/Smartphones/phone1.png",
            "itemName": "Apple iPhone 14 Pro",
            "itemAbt": "Experience next-level performance with the Apple iPhone 14 Pro, featuring the powerful A16 Bionic chip...",
            "itemPrice": "Rs.129999"
        },
        {
            "itemImage": "Images/Smartphones/phone2.png",
            "itemName": "Samsung Galaxy S23 Ultra",
            "itemAbt": "The Samsung Galaxy S23 Ultra redefines innovation with its 200MP camera and Snapdragon 8 Gen 2 processor...",
            "itemPrice": "Rs.124999"
        },
        {
            "itemImage": "Images/Smartphones/phone3.png",
            "itemName": "Google Pixel 7 Pro",
            "itemAbt": "Capture stunning details with the Google Pixel 7 Pro’s advanced AI-powered camera and Tensor G2 chip...",
            "itemPrice": "Rs.84999"
        },
        {
            "itemImage": "Images/Smartphones/phone4.png",
            "itemName": "OnePlus 11 5G",
            "itemAbt": "Speed meets elegance with the OnePlus 11 5G, powered by Snapdragon 8 Gen 2 and 120Hz AMOLED display...",
            "itemPrice": "Rs.61999"
        },
        {
            "itemImage": "Images/Smartphones/phone5.png",
            "itemName": "Xiaomi 13 Pro",
            "itemAbt": "Revolutionizing mobile photography, the Xiaomi 13 Pro features a 1-inch Sony IMX989 sensor and Snapdragon 8 Gen 2...",
            "itemPrice": "Rs.79999"
        },
        {
            "itemImage": "Images/Smartphones/phone6.png",
            "itemName": "Realme GT 3",
            "itemAbt": "Charge at lightning speed with the Realme GT 3, boasting 240W fast charging and Snapdragon 8+ Gen 1...",
            "itemPrice": "Rs.55999"
        },
        {
            "itemImage": "Images/Smartphones/phone7.png",
            "itemName": "Asus ROG Phone 6",
            "itemAbt": "Designed for gaming enthusiasts, the Asus ROG Phone 6 features a 165Hz AMOLED display and massive 6000mAh battery...",
            "itemPrice": "Rs.71999"
        },
        {
            "itemImage": "Images/Smartphones/phone8.png",
            "itemName": "Vivo X90 Pro",
            "itemAbt": "With Zeiss optics and a 1-inch sensor, the Vivo X90 Pro takes smartphone photography to new heights...",
            "itemPrice": "Rs.88999"
        },
        {
            "itemImage": "Images/Smartphones/phone1.png",
            "itemName": "Samsung Galaxy Z Fold4",
            "itemAbt": "Unfold the future with the Samsung Galaxy Z Fold4, a powerful foldable with Snapdragon 8+ Gen 1...",
            "itemPrice": "Rs.154999"
        },
        {
            "itemImage": "Images/Smartphones/phone2.png",
            "itemName": "iQOO 11 5G",
            "itemAbt": "The iQOO 11 5G brings flagship gaming performance with Snapdragon 8 Gen 2 and a 144Hz E6 AMOLED display...",
            "itemPrice": "Rs.59999"
        }
    ]);

    return (
        <>
            <div className={`datas ${theme}`}>
                <Navbar themebtn={themebtn} toggle={toggle} />
                <div className="top-det">
                    <h1>Explore Smartphones From Top Brands</h1>
                    <Sortbtn setProducts={setSmartphoneData} products={smartphoneData} /> {/* ✅ Pass state */}
                </div>
                <SalesCard products={smartphoneData} /> 
            </div>
        </>
    )
}