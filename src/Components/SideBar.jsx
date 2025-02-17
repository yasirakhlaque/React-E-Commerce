import '../styles/SideBar.css'
import { useContext } from 'react';
import { ThemeContext } from '../App';
import { Link } from 'react-router-dom';

export default function SideBar(){
    const { theme } = useContext(ThemeContext); // No need for toggleTheme here
    let options = [
        { img: "Images/laptop.png", alt: "Laptop", link: "/Laptop" },
        { img: "Images/phone.png", alt: "Phone", link: "/Phones" },
        { img: "Images/tablet.png", alt: "Tablet", link: "/Tablets" },
        { img: "Images/headphone.png", alt: "Headphones", link: "/HeadPhones" },
        { img: "Images/tech.png", alt: "Tech", link: "/Chargers" } // Corrected alt and link
    ];

    return (
        <div className={`sidebar-option ${theme}`}>
            {options.map((op, index) => (
                <Link key={index} to={op.link} className="sidebar-link">
                    <img src={op.img} alt={op.alt} className="sidebar-image" /> 
                </Link>
            ))}
        </div>
    );
}


