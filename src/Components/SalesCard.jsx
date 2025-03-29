import '../styles/SalesCard.css';
import { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../App';
import { CartContext } from "../Context/CartContext";

export default function SalesCard({ products }) {  // Accept products as a prop
    const { theme } = useContext(ThemeContext);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const { AddToCart } = useContext(CartContext);
    const [addedToCart, setAddedToCart] = useState({});

    const handleCardClick = (product) => {
        setSelectedProduct(product);
    };

    const handleCloseDetailView = () => {
        setSelectedProduct(null);
    };

    const handleAddToCart = (product) => {
        AddToCart(product);
        
        // Show visual feedback when adding to cart
        setAddedToCart({
            ...addedToCart,
            [product.itemName]: true
        });

        // Reset the feedback after animation time
        setTimeout(() => {
            setAddedToCart({
                ...addedToCart,
                [product.itemName]: false
            });
        }, 1500);
    };

    // Close modal with ESC key
    useEffect(() => {
        const handleEscKey = (event) => {
            if (event.key === 'Escape' && selectedProduct) {
                handleCloseDetailView();
            }
        };

        window.addEventListener('keydown', handleEscKey);
        
        // Prevent scrolling when modal is open
        if (selectedProduct) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            window.removeEventListener('keydown', handleEscKey);
            document.body.style.overflow = 'auto';
        };
    }, [selectedProduct]);

    return (
        <>
            <div className="sales-container">  {/* Wrap all cards */}
                {products.map((product, index) => (
                    <div className={`sales-card ${theme}`} key={index} onClick={() => handleCardClick(product)}>
                        <div className="item-img">
                            <img src={product.itemImage} alt={product.itemName} />
                            <div 
                                className={`add-to-cart ${addedToCart[product.itemName] ? 'added' : ''}`} 
                                onClick={(e) => { 
                                    e.stopPropagation(); 
                                    handleAddToCart(product); 
                                }}
                            >
                                {addedToCart[product.itemName] ? (
                                    <i className="fa-solid fa-check"></i>
                                ) : (
                                    <i className="fa-solid fa-plus"></i>
                                )}
                            </div>
                        </div>
                        <div className="item-name">
                            <h3>{product.itemName}</h3>
                            <p>{product.itemAbt.slice(0, 60)}...</p>
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
                        isAdded={addedToCart[selectedProduct.itemName]}
                    />
                )}
            </div>
        </>
    );
}

function DetailedProductView({ product, onClose, theme, onAddToCart, isAdded }) {
    return (
        <>
            <div className="modal-backdrop" onClick={onClose}></div>
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
                    <button 
                        onClick={() => onAddToCart(product)}
                        className={isAdded ? 'added' : ''}
                    >
                        {isAdded ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                </div>
            </div>
        </>
    );
}
