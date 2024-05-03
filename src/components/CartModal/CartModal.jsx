import React, { useContext, useState } from 'react';
import { DataContext } from '../../Context/DataContext';
import './CartModal.scss';
import CartTotal from '../CartContent/CartTotal';

const CartModal = ({ closeModal }) => {
    const { cart, setCart } = useContext(DataContext);
    const [total, setTotal] = useState(0);

    const handleRemoveItem = (id) => {
        const updatedCart = cart.filter((item) => item.id !== id);
        setCart(updatedCart);
        updateTotal(updatedCart);
    };

    const updateTotal = (updatedCart) => {
        const totalAmount = updatedCart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setTotal(totalAmount);
    };

    const handlePurchase = () => {
        if (cart.length === 0) {
            alert('El carrito de compras está vacío. Añade algunos productos antes de realizar la compra.');
            return;
        }

        // Simulación de procesamiento de pago
        setTimeout(() => {
            alert('¡Su pago ha sido procesado exitosamente!');
            setCart([]); // Limpiar el carrito después de la compra
            closeModal();
            window.location.reload(); // Refrescar la página para actualizar el carrito
        }, 1000);
    };

    return (
        <div className="cart-modal">
            <div className="modal-content">
                <span className="close" onClick={closeModal}>&times;</span>
                {cart.length > 0 ? (
                    <>
                        <h2>Artículos del carrito</h2>
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
                        <CartTotal total={total} /> {/* Aquí se usa el componente CartTotal */}
                        <button onClick={handlePurchase}>Pagar</button>
                        <button onClick={closeModal}>Cerrar</button>
                    </>
                ) : (
                    <h2>Carrito de compras vacío</h2>
                )}
            </div>
        </div>
    );
};

export default CartModal;



