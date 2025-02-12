import '../styles/SalesCard.css'
import { useContext } from 'react';
import { ThemeContext } from '../App';
import { useState } from 'react';

export default function SalesCard() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [selectedProduct, setSelectedProduct] = useState(null);

    let items = [ // Renamed to 'items' for clarity
        { itemImage: "Images/laptop1.png", itemName: "Laptop of India by amazon", itemAbt: "Experience unparalleled performance and portability with the revolutionary [Laptop Name].  Engineered for the modern professional and creative, this laptop boasts a blazing-fast [Processor Name] processor, ensuring seamless multitasking and lightning-quick application loading.  Immerse yourself in vibrant visuals on the stunning [Screen Size] [Resolution] display, perfect for both work and entertainment.  The sleek, lightweight design makes it the ideal companion for travel, while the long-lasting battery keeps you productive throughout your day.  Featuring [RAM] of memory and a lightning-fast [Storage Type] drive, you'll have ample space for your files and experience near-instant boot times.  The [Laptop Name] is not just a laptop; it's your gateway to limitless possibilities", itemPrice: "Rs.49999" },
        { itemImage: "Images/smartphone1.png", itemName: "Smartphone of India by amazon", itemAbt: "Capture every moment in breathtaking detail with the [Smartphone Name].  Featuring a cutting-edge [Camera Specs] camera system, this smartphone empowers you to take professional-quality photos and videos with ease.  The vibrant [Screen Size] [Resolution] display brings your content to life, while the powerful [Processor Name] processor ensures smooth performance for all your apps and games.  Stay connected all day long with the long-lasting battery, and never worry about running out of space thanks to the generous [Storage Capacity].  The [Smartphone Name] is more than just a phone; it's your personal assistant, entertainment hub, and creative tool, all in the palm of your hand.", itemPrice: "Rs.7999" },
        { itemImage: "Images/headphone1.png", itemName: "Headphone of India by amazon", itemAbt: "Immerse yourself in a world of pure audio bliss with the [Headphone Name] headphones.  Experience rich, deep bass, crystal-clear highs, and perfectly balanced mids, delivering an unparalleled listening experience.  The comfortable, over-ear design provides exceptional noise isolation, allowing you to focus on your music or podcasts without distractions.  Whether you're commuting, working out, or relaxing at home, the [Headphone Name] headphones are your perfect audio companion.  Featuring [Connectivity Type] connectivity and a long-lasting battery, you can enjoy your favorite tunes for hours on end.  The [Headphone Name] headphones are not just headphones; they're your personal concert hall.", itemPrice: "Rs.799" },
        { itemImage: "Images/charger1.png", itemName: "Charger of India by amazon", itemAbt: "Keep your devices powered up and ready to go with the [Charger Name] fast charger.  This compact and portable charger delivers a rapid charge, so you can get back to your day quickly.  Featuring [Wattage/Amperage] output, it's compatible with a wide range of devices.  The durable construction ensures long-lasting performance, and the [Safety Features] protect your devices from overcharging and overheating.  The [Charger Name] is not just a charger; it's your reliable power source.", itemPrice: "Rs.249" },
        { itemImage: "Images/cover1.png", itemName: "Cover of India by amazon", itemAbt: "Protect your investment with the stylish and durable [Cover Name] phone cover.  Crafted from high-quality materials, this cover provides excellent protection against scratches, bumps, and drops.  The slim and lightweight design adds minimal bulk to your phone, while the precise cutouts ensure easy access to all ports and buttons.  Available in a variety of colors and styles, you can choose the perfect cover to match your personality.  The [Cover Name] is not just a cover; it's your phone's bodyguard", itemPrice: "Rs.129" },
        { itemImage: "Images/tablet1.png", itemName: "Tablet of India by amazon", itemAbt: "Experience the perfect blend of productivity and entertainment with the [Tablet Name].  The stunning [Screen Size] [Resolution] display is ideal for watching movies, browsing the web, and working on projects.  Powered by a [Processor Name] processor, this tablet delivers smooth performance for all your apps and games.  The long-lasting battery ensures you can stay productive and entertained throughout your day.  With [Storage Capacity] of storage, you'll have plenty of space for your files, photos, and videos.  The [Tablet Name] is not just a tablet; it's your portable entertainment center and productivity powerhouse.", itemPrice: "Rs.17999" },
    ];

    const handleCardClick = (product) => {
        setSelectedProduct(product);
    };

    const handleCloseDetailView = () => {
        setSelectedProduct(null);
    };

    return (
        <>
            {
                items.map((product, index) => ( // Correct usage: product, index
                    <div className={`sales-card ${theme}`} key={index} onClick={() => handleCardClick(product)}> {/* Added key prop */}
                        <div className="item-img">
                            <img src={product.itemImage} alt="Images" /> {/* Use product.itemImage */}
                            <div className="add-to-cart">
                                <i className="fa-solid fa-plus"></i>
                            </div>
                        </div>
                        <div className="item-name">
                            <h3>{product.itemName}</h3> {/* Use product.itemName */}
                            <p>{product.itemAbt.slice(0, 30)}</p> {/* Use product.itemAbt */}
                        </div>
                        <div className="item-price">
                            <h4>{product.itemPrice}</h4> {/* Use product.itemPrice */}
                        </div>
                    </div>
                ))
            }
            {selectedProduct && ( // Conditional rendering
                <DetailedProductView
                    product={selectedProduct}
                    onClose={handleCloseDetailView}
                    theme={theme}
                />
            )}
        </>
    );
}



function DetailedProductView({ product, onClose, theme }) {
    return (
        <div className={`detailed-view ${theme}`}>
            <div className="close-btn-container">
                <button onClick={onClose} className='close-btn'><i className="fa-solid fa-xmark"></i></button>
            </div>
            <div className="detailed">
                <div className="detailed-img">
                    <img src={product.itemImage} alt={product.itemName} />
                </div>
                <div className="detailed-data">
                    <h1>{product.itemName}</h1>
                    <p>{product.itemAbt}</p>
                    <h4>{product.itemPrice}</h4>
                </div>
            </div>
        </div>
    );
}