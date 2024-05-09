import React, { useContext } from 'react';
import { DataContext } from '../../Context/DataContext';
import CartElements from './CartElements';
import CartTotal from './CartTotal';
import './CartContent.scss';

const CartContent = () => {
    const { cart } = useContext(DataContext);

    return (
        <div className="cart-content">
            {cart.length > 0 ? (
                <>
                    <h2>Artículos del carrito</h2>
                    <CartElements />
                    <CartTotal />
                </>
            ) : (
                <h2>Carrito de compras vacío</h2>
            )}
        </div>
    );
};

export default CartContent;
