import React, { useContext, useState, useEffect } from 'react';
import { DataContext } from '../../Context/DataContext';
import { getProducts } from '../../Api'; 
import './Products.scss';

const Products = () => {
    const { cart, setCart } = useContext(DataContext);
    const [products, setProducts] = useState([]);
    const [showAddedToCartMessage, setShowAddedToCartMessage] = useState(false); 
    const [showProductAlreadyInCartMessage, setShowProductAlreadyInCartMessage] = useState(false); 
    const [selectedProduct, setSelectedProduct] = useState(null); 

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsData = await getProducts();
                setProducts(productsData);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

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
            {products.map((product) => (
                <div className="product-wrapper" key={product._id}>
                    <div className={`card ${selectedProduct && selectedProduct._id === product._id ? 'selected' : ''}`}>
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
                    {showAddedToCartMessage && selectedProduct && selectedProduct._id === product._id && (
                        <div className="cart-message added-to-cart">
                            Producto añadido al carrito
                        </div>
                    )}
                    {showProductAlreadyInCartMessage && selectedProduct && selectedProduct._id === product._id && (
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

