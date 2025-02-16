import '../styles/CategoriesOption.css';
import { useContext } from 'react';
import { ThemeContext } from '../App';
import { Link } from 'react-router-dom';

export default function CategoriesOption() {
    const { theme } = useContext(ThemeContext); // No need for toggleTheme here
    let options = [
        { img: "Images/laptop.png", alt: "Laptop", link: "/Laptop" },
        { img: "Images/phone.png", alt: "Phone", link: "/Phones" },
        { img: "Images/tablet.png", alt: "Tablet", link: "/tablet" },
        { img: "Images/headphone.png", alt: "Headphones", link: "/headphone" },
        { img: "Images/tech.png", alt: "Tech", link: "/tech" } // Corrected alt and link
    ];

    return (
        <div className={`categories-option ${theme}`}>
            {options.map((op, index) => (
                <Link key={index} to={op.link} className="category-link">
                    <img src={op.img} alt={op.alt} className="category-image" /> 
                </Link>
            ))}
        </div>
    );
}