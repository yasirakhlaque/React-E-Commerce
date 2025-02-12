import '../styles/CategoriesOption.css';
import { useContext } from 'react';
import { ThemeContext } from '../App';

export default function CategoriesOption() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    let options = [
        { img: "Images/laptop.png", alt: "Laptop" },
        { img: "Images/phone.png", alt: "Phone" },
        { img: "Images/tablet.png", alt: "Tablet" },
        { img: "Images/headphone.png", alt: "Headphones" },
        { img: "Images/tech.png", alt: "Headphones" }
    ];

    return (
        <div className={`categories-option ${theme}`}>
            {
                options.map((op, index) => (
                    <img key={index} src={op.img} alt={op.alt} />
                ))
            }
        </div>
    );
}