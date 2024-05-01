import React, { useContext } from 'react';
import { DataContext } from '../../Context/DataContext';
import '../Products/Products.scss';

const Products = () => {
    const { data, cart, setCart } = useContext(DataContext);

    const buyProducts = (product) => {
        console.log(product);
        const updatedCart = [...cart, product];
        setCart(updatedCart);
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
        </div>
    );
};

export default Products;


