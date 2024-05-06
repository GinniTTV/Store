import React, { useContext } from 'react';
import { DataContext } from '../../Context/DataContext';
import './Products.scss';

const Products = () => {
    const { data, cart, setCart } = useContext(DataContext);

    const handleAddToCart = (product) => {
        const existingItem = cart.find((item) => item.id === product.id);
        if (existingItem) {
            alert('Este producto ya está en el carrito');
        } else {
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
            <div className="card" key={product.id}>
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
        ))}
    </div>
    
    );
};

export default Products;




