import SalesCard from "../Components/SalesCard";
import '../styles/TopListed.css'
import { useContext } from 'react';
import { ThemeContext } from '../App';
import ShineText from '../Components/ShineText';

export default function TopListed() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <>
            <div className={`top-listed ${theme}`} id="top-section">
            <ShineText text="Best Sales Item" />
                <div className="sales-cards">
                    <SalesCard />
                </div>
            </div>
        </>
    )
}