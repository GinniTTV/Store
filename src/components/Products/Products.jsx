import React, { useContext, useState } from 'react';
import { DataContext } from '../../Context/DataContext';
import '../Products/Products.scss';

const Products = () => {
    const { data, cart, setCart } = useContext(DataContext);
    const [message, setMessage] = useState('');

    const buyProducts = (product) => {
        const updatedCart = [...cart];
        const existingItem = updatedCart.find(item => item.id === product.id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            updatedCart.push({ ...product, quantity: 1 });
        }
        setCart(updatedCart);
        setMessage(`"${product.name}" has been added to the cart!`);
        setTimeout(() => {
            setMessage('');
        }, 3000); // Hide message after 3 seconds
    };

    return (
        <div className="product-list">
            {data.map((product) => (
                <div className="card" key={product.id}>
                    <img src={product.img} alt='img-product-card' />
                    <h3>{product.name}</h3>
                    <h4>{product.price}$</h4>
                    <button onClick={() => buyProducts(product)}>Buy</button>
                </div>
            ))}
            {message && <div className="message">{message}</div>}
        </div>
    );
};

export default Products;


