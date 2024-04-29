import React, { useContext } from 'react';
import { DataContext } from '../../Context/DataContext';

const Products = () => {
    const { data } = useContext(DataContext);

    return (
        <div className="product-list">
            {data.map((product) => (
                <div className="card" key={product.id}>
                    <img src={product.img} alt='img-product-card' />
                    <h3>{product.name}</h3>
                    <h4>{product.price}$</h4>
                    <button>Buy</button>
                </div>
            ))}
        </div>
    );
};

export default Products;

