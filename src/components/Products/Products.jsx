import React, { useContext, useState } from 'react';
import { DataContext } from '../../Context/DataContext';
import './Products.scss';

const Products = () => {
    const { data, cart, setCart } = useContext(DataContext);
    const [showAddedToCartMessage, setShowAddedToCartMessage] = useState(false); // Estado para mostrar el mensaje de producto añadido al carrito
    const [showProductAlreadyInCartMessage, setShowProductAlreadyInCartMessage] = useState(false); // Estado para mostrar el mensaje de producto ya en el carrito
    const [selectedProduct, setSelectedProduct] = useState(null); // Estado para el producto seleccionado

    const handleAddToCart = (product) => {
        const existingItem = cart.find((item) => item.id === product.id);
        if (existingItem) {
            setShowProductAlreadyInCartMessage(true); // Mostrar el mensaje si el producto ya está en el carrito
            setSelectedProduct(product); // Guardar el producto seleccionado
            setTimeout(() => {
                setShowProductAlreadyInCartMessage(false);
                setSelectedProduct(null); // Limpiar el producto seleccionado después de 3 segundos
            }, 3000); // Ocultar el mensaje después de 3 segundos
        } else {
            setShowAddedToCartMessage(true); // Mostrar el mensaje de producto añadido al carrito
            setSelectedProduct(product); // Guardar el producto seleccionado
            setTimeout(() => {
                setShowAddedToCartMessage(false);
                setSelectedProduct(null); // Limpiar el producto seleccionado después de 3 segundos
            }, 3000); // Ocultar el mensaje después de 3 segundos
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
