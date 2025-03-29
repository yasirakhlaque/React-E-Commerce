import '../styles/SuccessAdd.css'
import { useContext } from 'react';
import { ThemeContext } from '../App';

export default function SuccessAdd({ state, productName }) {
    const { theme } = useContext(ThemeContext);
    
    const getIcon = () => {
        return state === "Add to" 
            ? <i className="fa-solid fa-circle-check"></i> 
            : <i className="fa-solid fa-circle-minus"></i>;
    };
    
    const getStateText = () => {
        return state === "Add to" 
            ? "Added to Cart" 
            : "Removed from Cart";
    };
    
    return (
        <div className={`success-toast ${theme} ${state === "Add to" ? "add" : "remove"}`}>
            <div className="toast-content">
                <div className="toast-icon">
                    {getIcon()}
                </div>
                <div className="toast-text">
                    <p>{getStateText()}</p>
                    {productName && <h4>{productName}</h4>}
                </div>
            </div>
        </div>
    );
}
