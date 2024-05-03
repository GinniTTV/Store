import React, { useContext } from 'react';
import { DataContext } from '../../Context/DataContext';
import './CartContent.scss';

const CartElements = () => {
    const { cart } = useContext(DataContext);

    return (
        <div className='cartContent'>
            {cart.map((product) => (
                <div key={product.id} className='cartItem'>
                    <img src={product.img} alt='product-card' />
                    <h3 className='name'>{product.name}</h3>
                    <h4 className='price'>{product.price}$</h4>
                </div>
            ))}
        </div>
    );
};

export default CartElements;





