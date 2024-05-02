import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../Context/DataContext';
import './CartModal.scss';

const CartModal = ({ closeModal }) => {
    const { cart } = useContext(DataContext);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const calculateTotal = () => {
            return cart.reduce((acc, el) => acc + el.price, 0);
        };

        setTotal(calculateTotal());
    }, [cart]);

    return (
        <div className="cart-modal">
            <div className="modal-content">
                <span className="close" onClick={closeModal}>&times;</span>
                <h2>Cart Items</h2>
                <div className="cart-items">
                    {cart.map((product) => (
                        <div key={product.id} className='cart-item'>
                            <img src={product.img} alt='product-card' />
                            <h3 className='name'>{product.name}</h3>
                            <h4 className='price'>{product.price}$</h4>
                        </div>
                    ))}
                </div>
                <div className="total">
                    <h3>Total a pagar: {total} $</h3>
                </div>
                <button onClick={closeModal}>Cerrar</button>
            </div>
        </div>
    );
};

export default CartModal;


