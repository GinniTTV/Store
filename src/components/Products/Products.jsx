import React, { useContext, useState } from 'react';
import { DataContext } from '../../Context/DataContext';
import './Products.scss';

const Products = () => {
    const { data, cart, setCart } = useContext(DataContext);
    const [showAddedToCartMessage, setShowAddedToCartMessage] = useState(false); 
    const [showProductAlreadyInCartMessage, setShowProductAlreadyInCartMessage] = useState(false); 
    const [selectedProduct, setSelectedProduct] = useState(null); 

    const handleAddToCart = (product) => {
        const existingItem = cart.find((item) => item.id === product.id);
        if (existingItem) {
            setShowProductAlreadyInCartMessage(true); 
            setSelectedProduct(product); 
            setTimeout(() => {
                setShowProductAlreadyInCartMessage(false);
                setSelectedProduct(null); 
            }, 3000); 
        } else {
            setShowAddedToCartMessage(true); 
            setSelectedProduct(product);
            setTimeout(() => {
                setShowAddedToCartMessage(false);
                setSelectedProduct(null);
            }, 3000); 
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    const handleAddQuantity = (id) => {
        const updatedCart = cart.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCart(updatedCart);
    };

    const handleSubtractQuantity = (id) => {
        const updatedCart = cart.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        ).filter(item => item.quantity > 0);
        setCart(updatedCart);
    };

    return (
        <div className="product-list">
            {data.map((product) => (
                <div className="product-wrapper" key={product.id}>
                    <div className={`card ${selectedProduct && selectedProduct.id === product.id ? 'selected' : ''}`}>
                        <img src={product.img} alt='img-product-card' />
                        <h3>{product.name}</h3>
                        <h4>{product.price}$</h4>
                        <p className="description">{product.description}</p> 
                        <button onClick={() => handleAddToCart(product)}>Comprar</button>
                        {cart.some(item => item.id === product.id) ? (
                            <div className="quantity-buttons">
                                <button onClick={() => handleAddQuantity(product.id)}>+</button>
                                <button onClick={() => handleSubtractQuantity(product.id)}>-</button>
                            </div>
                        ) : null}
                    </div>
                    {/* Mostrar el mensaje cuando se agrega un producto al carrito */}
                    {showAddedToCartMessage && selectedProduct && selectedProduct.id === product.id && (
                        <div className="cart-message added-to-cart">
                            Producto añadido al carrito
                        </div>
                    )}
                    {showProductAlreadyInCartMessage && selectedProduct && selectedProduct.id === product.id && (
                        <div className="cart-message product-already-in-cart">
                            Este producto ya está en el carrito
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Products;