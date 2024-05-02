import React, { useContext, useState } from 'react';
import { DataContext } from '../../Context/DataContext';
import './CartModal.scss';
import CartTotal from '../CartContent/CartTotal';
import Delivery from './Delivery';

const CartModal = ({ closeModal }) => {
    const { cart, setCart } = useContext(DataContext);
    const [totalWithDelivery, setTotalWithDelivery] = useState(0);

    const handleCalculateTotal = (total) => {
        setTotalWithDelivery(total);
    };

    const handlePurchase = () => {
        // Simulación de procesamiento de pago
        setTimeout(() => {
            alert('Su pago ha sido procesado exitosamente!');
            const trackingId = Math.floor(Math.random() * 1000);
            alert(`Su ID de seguimiento es: ${trackingId}`);
            setCart([]); // Limpiar el carrito después de la compra
            closeModal();
        }, 1000);
    };

    const handleClearCart = () => {
        setCart([]);
    };

    const handleRemoveItem = (id) => {
        const updatedCart = cart.filter((item) => item.id !== id);
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
                            <button onClick={() => handleRemoveItem(product.id)}>Eliminar</button>
                        </div>
                    ))}
                </div>
                <div className="total">
                    <CartTotal total={totalWithDelivery} />
                </div>
                <Delivery onCalculateTotal={handleCalculateTotal} />
                <button onClick={handlePurchase}>Pagar</button>
                <button onClick={handleClearCart}>Limpiar Carrito</button>
                <button onClick={closeModal}>Cerrar</button>
            </div>
        </div>
    );
};

export default CartModal;







