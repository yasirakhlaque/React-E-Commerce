import { useState, useContext } from "react";
import '../styles/Laptop.css';
import SalesCard from '../Components/SalesCard';
import Navbar from '../Components/Navbar';
import Sortbtn from '../Components/Sortbtn';
import { ThemeContext } from "../App";
import SideBar from "../Components/SideBar";
import Footer from "../Components/Footer";

export default function Laptop({ themebtn, toggle }) {
    const { theme } = useContext(ThemeContext);
    const [laptopData, setLaptopData] = useState([ 
        { 
            itemImage: "Images/Laptops/laptop1.png", 
            itemName: "Lenovo ThinkPad X1 Carbon", 
            itemAbt: "Experience unparalleled performance and portability with the Lenovo ThinkPad X1 Carbon. Engineered for professionals, this laptop boasts an Intel Core i7-1260P processor, ensuring seamless multitasking. Immerse yourself in vibrant visuals on the 14-inch 2.8K OLED display, perfect for both work and entertainment. The sleek, lightweight design makes it the ideal travel companion, while the 57Wh battery keeps you productive throughout your day. Featuring 16GB RAM and a 1TB SSD, you'll have ample space for your files and experience near-instant boot times. The ThinkPad X1 Carbon is not just a laptop; it's your gateway to limitless possibilities.", 
            itemPrice: "Rs.1,74,999" 
        },
        { 
            itemImage: "Images/Laptops/laptop2.png", 
            itemName: "Apple MacBook Air M2", 
            itemAbt: "Designed for speed and efficiency, the Apple MacBook Air M2 delivers exceptional performance with the powerful Apple M2 chip. The 13.6-inch Liquid Retina display offers stunning color accuracy, making it perfect for creative professionals and media consumption. With a fanless design, the MacBook Air operates silently while maintaining peak performance. The lightweight aluminum body ensures ultra-portability, and the 18-hour battery life keeps you productive on the go. Equipped with 16GB unified memory and a 512GB SSD, it guarantees fast load times and smooth multitasking. The MacBook Air M2 redefines power in a slim form factor.", 
            itemPrice: "Rs.1,24,999" 
        },
        { 
            itemImage: "Images/Laptops/laptop3.png", 
            itemName: "Dell XPS 15", 
            itemAbt: "The Dell XPS 15 is a powerhouse designed for creators and professionals. Featuring a 15.6-inch 4K UHD+ InfinityEdge touch display, it delivers stunning clarity and true-to-life colors. Powered by the Intel Core i9-13900H processor and NVIDIA RTX 4070 GPU, it handles demanding tasks with ease. The ultra-thin bezels enhance the immersive experience, while the carbon-fiber chassis adds durability. With 32GB RAM and a 1TB SSD, you get ultra-fast performance and storage. A long-lasting 86Wh battery ensures you stay productive all day long.", 
            itemPrice: "Rs.2,49,999" 
        },
        { 
            itemImage: "Images/Laptops/laptop4.png", 
            itemName: "Asus ROG Strix G16", 
            itemAbt: "Take gaming to the next level with the Asus ROG Strix G16. Powered by the Intel Core i7-13650HX and NVIDIA RTX 4060 GPU, this laptop delivers exceptional gaming performance. The 16-inch FHD+ 165Hz display ensures ultra-smooth visuals, reducing motion blur in fast-paced games. Featuring a dedicated cooling system with liquid metal and a vapor chamber, it stays cool under pressure. With 16GB DDR5 RAM and a 1TB PCIe 4.0 SSD, enjoy lightning-fast load times. The ROG Strix G16 is built for gamers who demand the best.", 
            itemPrice: "Rs.1,49,999" 
        },
        { 
            itemImage: "Images/Laptops/laptop5.png", 
            itemName: "HP Spectre x360", 
            itemAbt: "The HP Spectre x360 redefines flexibility with its 2-in-1 convertible design. Featuring a stunning 13.5-inch OLED touchscreen display, it offers exceptional color accuracy and deep blacks. Powered by the Intel Core i7-1255U processor, this laptop delivers efficient performance with great battery life. The premium aluminum chassis gives it a sleek and durable build, while the 360-degree hinge allows you to use it in multiple modes. With 16GB RAM and a 1TB SSD, experience seamless multitasking and fast storage. The Spectre x360 is not just a laptop; it’s your perfect blend of power and elegance.", 
            itemPrice: "Rs.1,59,999" 
        },
        { 
            itemImage: "Images/Laptops/laptop6.png", 
            itemName: "Acer Predator Helios 300", 
            itemAbt: "Unleash your gaming potential with the Acer Predator Helios 300. Equipped with an Intel Core i7-12700H and NVIDIA RTX 3070 Ti, this laptop delivers outstanding gaming performance. The 15.6-inch QHD 165Hz display ensures smooth and immersive gameplay. Advanced cooling technology with AeroBlade fans keeps temperatures under control during intense gaming sessions. With 16GB DDR5 RAM and a 1TB NVMe SSD, expect rapid load times and efficient multitasking. The Predator Helios 300 is built for gamers who demand top-tier performance.", 
            itemPrice: "Rs.1,34,999" 
        },
        { 
            itemImage: "Images/Laptops/laptop7.png", 
            itemName: "Microsoft Surface Laptop 5", 
            itemAbt: "Sleek, stylish, and powerful, the Microsoft Surface Laptop 5 is the perfect blend of elegance and performance. Featuring a 13.5-inch PixelSense touchscreen with ultra-thin bezels, it delivers a stunning visual experience. Powered by the Intel Core i7-1265U, it ensures seamless productivity for professionals and students. The lightweight design and all-day battery life make it a perfect travel companion. With 16GB RAM and a 512GB SSD, it offers ample storage and speed. The Surface Laptop 5 is ideal for those who want performance with a premium look.", 
            itemPrice: "Rs.1,29,999" 
        },
        { 
            itemImage: "Images/Laptops/laptop8.png", 
            itemName: "Asus ZenBook 14 OLED", 
            itemAbt: "Work in style with the Asus ZenBook 14 OLED. Featuring a gorgeous 14-inch 2.8K OLED HDR display, this laptop is a treat for the eyes. Powered by an AMD Ryzen 7 7730U processor, it delivers efficient performance while consuming less power. The ultra-slim 16.9mm body makes it incredibly portable. With 16GB RAM and a 512GB SSD, it ensures smooth multitasking. The ZenBook 14 OLED is designed for professionals who demand both aesthetics and performance.", 
            itemPrice: "Rs.94,999" 
        },
        { 
            itemImage: "Images/Laptops/laptop2.png", 
            itemName: "Dell Inspiron 14 2-in-1", 
            itemAbt: "The Dell Inspiron 14 2-in-1 is perfect for those who need versatility. Featuring a 14-inch FHD+ touchscreen, it seamlessly switches between laptop and tablet mode. Powered by the Intel Core i5-1335U, it offers smooth performance for daily tasks. The lightweight design and solid build quality make it a great choice for students and professionals. With 8GB RAM and a 512GB SSD, you get fast performance without compromises. The Inspiron 14 2-in-1 adapts to your needs effortlessly.", 
            itemPrice: "Rs.74,999" 
        },
        { 
            itemImage: "Images/Laptops/laptop1.png", 
            itemName: "LG Gram 16", 
            itemAbt: "Experience ultra-lightweight computing with the LG Gram 16. Weighing just 1.2kg, this laptop packs a 16-inch WQXGA IPS display with amazing clarity. Powered by the Intel Core i7-1360P processor, it delivers strong performance for both work and entertainment. The massive 80Wh battery ensures up to 20 hours of battery life, perfect for on-the-go users. With 16GB LPDDR5 RAM and a 1TB SSD, it offers top-tier speed and storage. The LG Gram 16 is the ultimate ultra-light laptop for professionals and travelers.", 
            itemPrice: "Rs.1,49,999" 
        }
    ]);
    

    return (
        <>
            <div className={`datas ${theme}`} id="laptop">
                <Navbar themebtn={themebtn} toggle={toggle} />

                <div className="top-det">
                    <h1>Explore Laptops From Top Brands</h1>
                    <Sortbtn setProducts={setLaptopData} products={laptopData} /> {/* ✅ Pass state */}
                </div>
                <div className="item-data">
                    <div className="categories-small">
                        <SideBar />
                    </div>
                    <SalesCard products={laptopData} />
                </div>
                <Footer/>
            </div>
        </>
    );
}