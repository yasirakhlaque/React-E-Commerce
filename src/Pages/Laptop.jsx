import { useState, useContext } from "react";
import '../styles/Laptop.css';
import SalesCard from '../Components/SalesCard';
import Navbar from '../Components/Navbar';
import Sortbtn from '../Components/Sortbtn';
import { ThemeContext } from "../App";

export default function Laptop({ themebtn, toggle }) {
    const { theme } = useContext(ThemeContext);
    const [laptopData, setLaptopData] = useState([
        {
            "itemImage": "Images/Laptops/laptop1.png",
            "itemName": "Lenovo ThinkPad X1 Carbon",
            "itemAbt": "Experience unparalleled performance and portability with the revolutionary Lenovo ThinkPad X1 Carbon...",
            "itemPrice": "Rs.149999"
        },
        {
            "itemImage": "Images/Laptops/laptop2.png",
            "itemName": "Apple MacBook Air M2",
            "itemAbt": "The Apple MacBook Air M2 redefines lightweight performance with its powerful Apple M2 chip...",
            "itemPrice": "Rs.114999"
        },
        {
            "itemImage": "Images/Laptops/laptop3.png",
            "itemName": "Dell XPS 15 9520",
            "itemAbt": "Power meets elegance with the Dell XPS 15 9520, featuring a 12th Gen Intel Core i9 processor...",
            "itemPrice": "Rs.219999"
        },
        {
            "itemImage": "Images/Laptops/laptop4.png",
            "itemName": "HP Spectre x360 14",
            "itemAbt": "The HP Spectre x360 14 offers unmatched versatility with its 2-in-1 convertible design...",
            "itemPrice": "Rs.149999"
        },
        {
            "itemImage": "Images/Laptops/laptop5.png",
            "itemName": "Asus ROG Zephyrus G14",
            "itemAbt": "Gaming meets portability with the Asus ROG Zephyrus G14, featuring an AMD Ryzen 9 6900HS processor...",
            "itemPrice": "Rs.139999"
        },
        {
            "itemImage": "Images/Laptops/laptop6.png",
            "itemName": "Acer Swift 3 OLED",
            "itemAbt": "Experience stunning visuals with the Acer Swift 3 OLED, powered by an Intel Core i5-1240P processor...",
            "itemPrice": "Rs.89999"
        },
        {
            "itemImage": "Images/Laptops/laptop7.png",
            "itemName": "MSI Katana GF66",
            "itemAbt": "Dominate the battlefield with the MSI Katana GF66, powered by an Intel Core i7-12700H...",
            "itemPrice": "Rs.94999"
        },
        {
            "itemImage": "Images/Laptops/laptop8.png",
            "itemName": "Samsung Galaxy Book2 Pro 360",
            "itemAbt": "The Samsung Galaxy Book2 Pro 360 is a premium 2-in-1 laptop featuring an Intel Core i7-1260P processor...",
            "itemPrice": "Rs.129999"
        },
        {
            "itemImage": "Images/Laptops/laptop1.png",
            "itemName": "Microsoft Surface Laptop 5",
            "itemAbt": "Sleek, stylish, and powerful, the Microsoft Surface Laptop 5 comes with an Intel Core i7-1265U processor...",
            "itemPrice": "Rs.134999"
        },
        {
            "itemImage": "Images/Laptops/laptop2.png",
            "itemName": "LG Gram 16",
            "itemAbt": "The LG Gram 16 is an ultra-lightweight powerhouse, featuring a 12th Gen Intel Core i7-1260P processor...",
            "itemPrice": "Rs.149999"
        }
    ])

    return (
        <>
            <div className={`datas ${theme}`}>
                <Navbar themebtn={themebtn} toggle={toggle} />
                <div className="top-det">
                    <h1>Explore Laptops From Top Brands</h1>
                    <Sortbtn setProducts={setLaptopData} products={laptopData} /> {/* ✅ Pass state */}
                </div>
                <SalesCard products={laptopData} />
            </div>
        </>
    );
}