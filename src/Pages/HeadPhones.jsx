import { useState, useContext } from "react";
import '../styles/Laptop.css';
import SalesCard from '../Components/SalesCard';
import Navbar from '../Components/Navbar';
import Sortbtn from '../Components/Sortbtn';
import { ThemeContext } from "../App";
import SideBar from "../Components/SideBar";

export default function HeadPhones({ themebtn, toggle }) {
    const { theme } = useContext(ThemeContext);
    const [headphoneData, setHeadphoneData] = useState([
        {
            "itemImage": "Images/Headphones/headphone1.png",
            "itemName": "Sony WH-1000XM5",
            "itemAbt": "Experience industry-leading noise cancellation with the Sony WH-1000XM5, featuring adaptive sound control...",
            "itemPrice": "Rs.29999"
        },
        {
            "itemImage": "Images/Headphones/headphone2.png",
            "itemName": "Bose QuietComfort 45",
            "itemAbt": "The Bose QuietComfort 45 offers legendary comfort and exceptional noise cancellation for an immersive experience...",
            "itemPrice": "Rs.28999"
        },
        {
            "itemImage": "Images/Headphones/headphone3.png",
            "itemName": "Apple AirPods Max",
            "itemAbt": "Immerse yourself in high-fidelity audio with Apple AirPods Max, featuring spatial audio and an elegant design...",
            "itemPrice": "Rs.59999"
        },
        {
            "itemImage": "Images/Headphones/headphone4.png",
            "itemName": "Sennheiser Momentum 4",
            "itemAbt": "The Sennheiser Momentum 4 delivers premium sound quality with a 60-hour battery life and adaptive ANC...",
            "itemPrice": "Rs.34999"
        },
        {
            "itemImage": "Images/Headphones/headphone5.png",
            "itemName": "JBL Tour One M2",
            "itemAbt": "JBL Tour One M2 combines True Adaptive Noise Cancelling with JBL's signature sound for an unmatched audio experience...",
            "itemPrice": "Rs.24999"
        },
        {
            "itemImage": "Images/Headphones/headphone6.png",
            "itemName": "Beats Studio Pro",
            "itemAbt": "Feel the power of Beats Studio Pro, offering rich bass, lossless audio, and personalized spatial sound...",
            "itemPrice": "Rs.26999"
        },
        {
            "itemImage": "Images/Headphones/headphone7.png",
            "itemName": "Razer BlackShark V2 Pro",
            "itemAbt": "Designed for pro gamers, the Razer BlackShark V2 Pro delivers THX Spatial Audio and ultra-low latency performance...",
            "itemPrice": "Rs.18999"
        },
        {
            "itemImage": "Images/Headphones/headphone8.png",
            "itemName": "SteelSeries Arctis Nova Pro Wireless",
            "itemAbt": "The ultimate gaming headset, the SteelSeries Arctis Nova Pro Wireless features AI-powered noise cancellation and 360° spatial audio...",
            "itemPrice": "Rs.34999"
        },
        {
            "itemImage": "Images/Headphones/headphone9.png",
            "itemName": "HyperX Cloud Alpha Wireless",
            "itemAbt": "Experience an incredible 300-hour battery life with the HyperX Cloud Alpha Wireless, designed for immersive gaming...",
            "itemPrice": "Rs.21999"
        },
        {
            "itemImage": "Images/Headphones/headphone1.png",
            "itemName": "Audio-Technica ATH-M50XBT2",
            "itemAbt": "The Audio-Technica ATH-M50XBT2 delivers studio-quality sound with Bluetooth convenience for music lovers and professionals...",
            "itemPrice": "Rs.21999"
        }
    ]);

    return (
        <>
            <div className={`datas ${theme}`}>
                <Navbar themebtn={themebtn} toggle={toggle} />
                <div className="top-det">
                    <h1>Explore HeadPhones From Top Brands</h1>
                    <Sortbtn setProducts={setHeadphoneData} products={headphoneData} /> {/* ✅ Pass state */}
                </div>
                <div className="item-data">
                    <div className="categories-small">
                        <SideBar />
                    </div>
                    <SalesCard products={headphoneData} />
                </div>
            </div>
        </>
    )
}