import SalesCard from "../Components/SalesCard";
import '../styles/TopListed.css'
import { useContext } from 'react';
import { ThemeContext } from '../App';

export default function TopListed() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <>
            <div className={`top-listed ${theme}`}>
                <h1>Best Sales Item</h1>
                <div className="sales-cards">
                    <SalesCard />
                </div>
            </div>
        </>
    )
}