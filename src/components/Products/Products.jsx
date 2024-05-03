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

    return (
        <div className="product-list">
            {data.map((product) => (
                <div className="card" key={product.id}>
                    <img src={product.img} alt='img-product-card' />
                    <h3>{product.name}</h3>
                    <h4>{product.price}$</h4>
                    <button onClick={() => handleAddToCart(product)}>Comprar</button>
                </div>
            ))}
        </div>
    );
};

export default Products;



