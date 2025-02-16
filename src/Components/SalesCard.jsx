import '../styles/SalesCard.css';
import { useContext, useState } from 'react';
import { ThemeContext } from '../App';
import { CartContext } from "../Context/CartContext";

export default function SalesCard({ products }) {  // Accept products as a prop
    const { theme } = useContext(ThemeContext);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const { AddToCart } = useContext(CartContext);

    const handleCardClick = (product) => {
        setSelectedProduct(product);
    };

    const handleCloseDetailView = () => {
        setSelectedProduct(null);
    };

    const handleAddToCart = (product) => {
        AddToCart(product);
    };

    return (
        <>
            <div className="sales-container">  {/* Wrap all cards */}
                {products.map((product, index) => (
                    <div className={`sales-card ${theme}`} key={index} onClick={() => handleCardClick(product)}>
                        <div className="item-img">
                            <img src={product.itemImage} alt={product.itemName} />
                            <div className="add-to-cart" onClick={(e) => { e.stopPropagation(); handleAddToCart(product); }}>
                                <i className="fa-solid fa-plus"></i>
                            </div>
                        </div>
                        <div className="item-name">
                            <h3>{product.itemName}</h3>
                            <p>{product.itemAbt.slice(0, 30)}...</p>
                        </div>
                        <div className="item-price">
                            <h4>{product.itemPrice}</h4>
                        </div>
                    </div>
                ))}
                {selectedProduct && (
                    <DetailedProductView
                        product={selectedProduct}
                        onClose={handleCloseDetailView}
                        theme={theme}
                        onAddToCart={handleAddToCart}
                    />
                )}
            </div>
        </>
    );
}

function DetailedProductView({ product, onClose, theme, onAddToCart }) {
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
                <button onClick={() => onAddToCart(product)}>Add</button>
            </div>
        </div>
    );
}
