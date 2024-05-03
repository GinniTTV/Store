import React, { useContext } from 'react';
import { DataContext } from '../../Context/DataContext';
import './CartModal.scss';
import CartTotal from '../CartContent/CartTotal';

const CartModal = ({ closeModal }) => {
    const { cart, setCart } = useContext(DataContext);

    const handleRemoveItem = (id) => {
        const updatedCart = cart.filter((item) => item.id !== id);
        setCart(updatedCart);
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
                            <p>Cantidad: {product.quantity}</p>
                            <button onClick={() => handleAddQuantity(product.id)}>+</button>
                            <button onClick={() => handleSubtractQuantity(product.id)}>-</button>
                            <button onClick={() => handleRemoveItem(product.id)}>Eliminar</button>
                        </div>
                    ))}
                </div>
                <div className="total">
                    <CartTotal />
                </div>
                <button onClick={closeModal}>Cerrar</button>
            </div>
        </div>
    );
};

export default CartModal;
