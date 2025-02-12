import '../styles/Section.css';
import CategoriesOption from "../Components/CategoriesOptions";
import { useContext } from 'react';
import { ThemeContext } from '../App';

export default function Section() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <>
            <div className={`categories ${theme}`}>
                <h1>Explore The Top Categories Featured</h1>
                <p>The Categories are featured and are trending now</p>
                <div className="categories-options">
                    <CategoriesOption />
                </div>
            </div>
        </>
    )
}