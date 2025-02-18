import { useState, useContext } from "react";
import '../styles/Laptop.css';
import SalesCard from '../Components/SalesCard';
import Navbar from '../Components/Navbar';
import Sortbtn from '../Components/Sortbtn';
import { ThemeContext } from "../App";
import SideBar from "../Components/SideBar";
import Footer from "../Components/Footer";

export default function Phones({ themebtn, toggle }) {
    const { theme } = useContext(ThemeContext);
    const [smartphoneData, setSmartphoneData] = useState([ 
        { 
            itemImage: "Images/Smartphones/phone1.png", 
            itemName: "Samsung Galaxy S23 Ultra", 
            itemAbt: "Experience cutting-edge technology with the Samsung Galaxy S23 Ultra. Featuring a stunning 6.8-inch Dynamic AMOLED 2X display with a 120Hz refresh rate, it delivers ultra-smooth visuals. Powered by the Snapdragon 8 Gen 2 processor, this smartphone ensures seamless multitasking and gaming. The 200MP quad-camera system captures breathtaking photos with incredible detail. With a 5000mAh battery and 45W fast charging, you stay powered throughout the day. The Galaxy S23 Ultra is your ultimate flagship experience.", 
            itemPrice: "Rs.1,24,999" 
        },
        { 
            itemImage: "Images/Smartphones/phone2.png", 
            itemName: "Apple iPhone 15 Pro Max", 
            itemAbt: "Discover the power of titanium with the Apple iPhone 15 Pro Max. The 6.7-inch Super Retina XDR display with ProMotion delivers an immersive experience. Equipped with the A17 Pro chip, it provides lightning-fast performance and efficiency. The 48MP triple-camera system ensures stunning photography, while the 5x telephoto zoom brings distant subjects closer. With USB-C connectivity, improved battery life, and iOS 17, the iPhone 15 Pro Max redefines premium smartphones.", 
            itemPrice: "Rs.1,59,999" 
        },
        { 
            itemImage: "Images/Smartphones/phone3.png", 
            itemName: "OnePlus 11 5G", 
            itemAbt: "Stay ahead with the OnePlus 11 5G, designed for speed and efficiency. The 6.7-inch QHD+ AMOLED display with a 120Hz refresh rate delivers ultra-smooth visuals. Powered by the Snapdragon 8 Gen 2 processor and 16GB RAM, it ensures unbeatable performance. The Hasselblad-tuned 50MP triple-camera setup captures true-to-life photos. With a 5000mAh battery and 100W SUPERVOOC charging, power is never a concern. The OnePlus 11 5G is built for those who demand the best.", 
            itemPrice: "Rs.64,999" 
        },
        { 
            itemImage: "Images/Smartphones/phone4.png", 
            itemName: "Google Pixel 8 Pro", 
            itemAbt: "Experience the best of Google with the Pixel 8 Pro. Featuring an AI-powered 50MP main camera and a Tensor G3 processor, it captures stunning details and ensures smooth performance. The 6.7-inch LTPO OLED display with a 120Hz refresh rate provides an immersive viewing experience. With Magic Eraser and Real Tone, your photos are always perfect. The Pixel 8 Pro offers 7 years of software updates, ensuring longevity. This is not just a smartphone; it’s a Pixel.", 
            itemPrice: "Rs.1,06,999" 
        },
        { 
            itemImage: "Images/Smartphones/phone5.png", 
            itemName: "Xiaomi 13 Pro", 
            itemAbt: "Unleash pro-level photography with the Xiaomi 13 Pro. The 1-inch Sony IMX989 sensor in the 50MP triple-camera setup ensures DSLR-like shots. Powered by the Snapdragon 8 Gen 2 and a 6.73-inch LTPO AMOLED display, it delivers flagship performance. The 120W HyperCharge technology gets you from 0 to 100% in minutes. With a ceramic body and sleek design, the Xiaomi 13 Pro is the epitome of elegance and power.", 
            itemPrice: "Rs.79,999" 
        },
        { 
            itemImage: "Images/Smartphones/phone6.png", 
            itemName: "Vivo X90 Pro", 
            itemAbt: "Revolutionize mobile photography with the Vivo X90 Pro, featuring a 50MP ZEISS-tuned triple-camera setup. The MediaTek Dimensity 9200 processor delivers smooth and efficient performance. The 6.78-inch AMOLED display with 120Hz refresh rate offers a vibrant viewing experience. The 4870mAh battery with 120W fast charging ensures you never run out of power. The Vivo X90 Pro is designed for creators and professionals.", 
            itemPrice: "Rs.74,999" 
        },
        { 
            itemImage: "Images/Smartphones/phone7.png", 
            itemName: "Realme GT Neo 5", 
            itemAbt: "Enter the future with Realme GT Neo 5, featuring a 144Hz AMOLED display for ultra-fluid interactions. The Snapdragon 8+ Gen 1 processor ensures top-tier gaming performance. The 50MP Sony IMX890 sensor with OIS guarantees crystal-clear shots. With 150W fast charging, you get a full day’s power in just 10 minutes. The Realme GT Neo 5 is built for speed, style, and performance.", 
            itemPrice: "Rs.45,999" 
        },
        { 
            itemImage: "Images/Smartphones/phone8.png", 
            itemName: "iQOO 11 5G", 
            itemAbt: "Experience extreme speed with the iQOO 11 5G, powered by the Snapdragon 8 Gen 2 processor. The 6.78-inch 2K E6 AMOLED display with 144Hz refresh rate ensures a breathtaking visual experience. The 50MP GN5 sensor delivers flagship-level photography. With 120W fast charging, your phone reaches 100% in under 25 minutes. The iQOO 11 5G is made for gaming, productivity, and performance enthusiasts.", 
            itemPrice: "Rs.59,999" 
        },
        { 
            itemImage: "Images/Smartphones/phone1.png", 
            itemName: "Samsung Galaxy A54", 
            itemAbt: "Capture stunning shots with the Samsung Galaxy A54’s 50MP OIS camera. The 6.4-inch Super AMOLED display with a 120Hz refresh rate ensures smooth scrolling. Powered by the Exynos 1380 processor, it delivers efficient performance. The 5000mAh battery keeps you connected all day, and the IP67 water resistance ensures durability. The Galaxy A54 is perfect for those who want premium features on a budget.", 
            itemPrice: "Rs.38,999" 
        },
        { 
            itemImage: "Images/Smartphones/phone2.png", 
            itemName: "Nothing Phone (2)", 
            itemAbt: "Experience a fresh take on smartphones with the Nothing Phone (2). Featuring a transparent design with LED Glyph Interface, it stands out in a sea of regular phones. The Snapdragon 8+ Gen 1 processor ensures a flagship experience, while the 6.7-inch LTPO OLED display delivers stunning visuals. The 50MP dual-camera system, tuned for true-to-life photography, makes every shot incredible. The Nothing Phone (2) is for those who dare to be different.", 
            itemPrice: "Rs.49,999" 
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
                <div className="item-data">
                    <div className="categories-small">
                        <SideBar />
                    </div>
                    <SalesCard products={smartphoneData} />
                </div>
                <Footer/>
            </div>
        </>
    )
}