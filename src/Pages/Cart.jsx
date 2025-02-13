import CartCard from '../Components/CartCard';
import Navbar from '../Components/Navbar';
import '../styles/Cart.css'
import { ThemeContext } from '../App';
import { useContext } from 'react';

export default function Cart({ themebtn, toggle }) {

    const { theme } = useContext(ThemeContext);

    let cart = [
        { itemImage: "Images/laptop1.png", itemName: "Laptop of India by amazon", itemAbt: "Experience unparalleled performance and portability with the revolutionary [Laptop Name].  Engineered for the modern professional and creative, this laptop boasts a blazing-fast [Processor Name] processor, ensuring seamless multitasking and lightning-quick application loading.  Immerse yourself in vibrant visuals on the stunning [Screen Size] [Resolution] display, perfect for both work and entertainment.  The sleek, lightweight design makes it the ideal companion for travel, while the long-lasting battery keeps you productive throughout your day.  Featuring [RAM] of memory and a lightning-fast [Storage Type] drive, you'll have ample space for your files and experience near-instant boot times.  The [Laptop Name] is not just a laptop; it's your gateway to limitless possibilities", itemPrice: "Rs.49999" },
        { itemImage: "Images/smartphone1.png", itemName: "Smartphone of India by amazon", itemAbt: "Capture every moment in breathtaking detail with the [Smartphone Name].  Featuring a cutting-edge [Camera Specs] camera system, this smartphone empowers you to take professional-quality photos and videos with ease.  The vibrant [Screen Size] [Resolution] display brings your content to life, while the powerful [Processor Name] processor ensures smooth performance for all your apps and games.  Stay connected all day long with the long-lasting battery, and never worry about running out of space thanks to the generous [Storage Capacity].  The [Smartphone Name] is more than just a phone; it's your personal assistant, entertainment hub, and creative tool, all in the palm of your hand.", itemPrice: "Rs.7999" },
        { itemImage: "Images/laptop1.png", itemName: "Laptop of India by amazon", itemAbt: "Experience unparalleled performance and portability with the revolutionary [Laptop Name].  Engineered for the modern professional and creative, this laptop boasts a blazing-fast [Processor Name] processor, ensuring seamless multitasking and lightning-quick application loading.  Immerse yourself in vibrant visuals on the stunning [Screen Size] [Resolution] display, perfect for both work and entertainment.  The sleek, lightweight design makes it the ideal companion for travel, while the long-lasting battery keeps you productive throughout your day.  Featuring [RAM] of memory and a lightning-fast [Storage Type] drive, you'll have ample space for your files and experience near-instant boot times.  The [Laptop Name] is not just a laptop; it's your gateway to limitless possibilities", itemPrice: "Rs.49999" },
        { itemImage: "Images/smartphone1.png", itemName: "Smartphone of India by amazon", itemAbt: "Capture every moment in breathtaking detail with the [Smartphone Name].  Featuring a cutting-edge [Camera Specs] camera system, this smartphone empowers you to take professional-quality photos and videos with ease.  The vibrant [Screen Size] [Resolution] display brings your content to life, while the powerful [Processor Name] processor ensures smooth performance for all your apps and games.  Stay connected all day long with the long-lasting battery, and never worry about running out of space thanks to the generous [Storage Capacity].  The [Smartphone Name] is more than just a phone; it's your personal assistant, entertainment hub, and creative tool, all in the palm of your hand.", itemPrice: "Rs.7999" },
        { itemImage: "Images/laptop1.png", itemName: "Laptop of India by amazon", itemAbt: "Experience unparalleled performance and portability with the revolutionary [Laptop Name].  Engineered for the modern professional and creative, this laptop boasts a blazing-fast [Processor Name] processor, ensuring seamless multitasking and lightning-quick application loading.  Immerse yourself in vibrant visuals on the stunning [Screen Size] [Resolution] display, perfect for both work and entertainment.  The sleek, lightweight design makes it the ideal companion for travel, while the long-lasting battery keeps you productive throughout your day.  Featuring [RAM] of memory and a lightning-fast [Storage Type] drive, you'll have ample space for your files and experience near-instant boot times.  The [Laptop Name] is not just a laptop; it's your gateway to limitless possibilities", itemPrice: "Rs.49999" },
        { itemImage: "Images/smartphone1.png", itemName: "Smartphone of India by amazon", itemAbt: "Capture every moment in breathtaking detail with the [Smartphone Name].  Featuring a cutting-edge [Camera Specs] camera system, this smartphone empowers you to take professional-quality photos and videos with ease.  The vibrant [Screen Size] [Resolution] display brings your content to life, while the powerful [Processor Name] processor ensures smooth performance for all your apps and games.  Stay connected all day long with the long-lasting battery, and never worry about running out of space thanks to the generous [Storage Capacity].  The [Smartphone Name] is more than just a phone; it's your personal assistant, entertainment hub, and creative tool, all in the palm of your hand.", itemPrice: "Rs.7999" },
    ];

    return (
        <>
            <Navbar themebtn={themebtn} toggle={toggle} />
            <div className={`cart ${theme}`}>
                <div className="cart-items">
                    {cart.map((item, index) => (
                        <CartCard itemImage={item.itemImage} itemName={item.itemName} itemAbt={item.itemAbt} itemPrice={item.itemPrice} key={index} />
                    ))}
                </div>
                <div className="total-bill">
                    <h1>Here is the Total Bill</h1>
                    <p>Buy At Once</p>
                    <ul>
                        {
                            cart.map((item, index) => (
                                <li key={index} ><i className="fa-solid fa-store"></i>{item.itemName}</li>
                            ))
                        }
                    </ul>
                    <h4>Total Item :{totalItem(cart)}</h4>
                    <h3>Total: Rs.{total(cart)}</h3>
                    <button className="buy">Buy All</button>
                </div>
            </div>
        </>
    )
}

function totalItem(cart){
    return cart.length;
}

function total(cart) {
    return cart.reduce((sum, item) => sum + parseInt(item.itemPrice.replace("Rs.", "")), 0);
}