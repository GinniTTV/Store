// CartContent.jsx
import React, { useContext, useState } from 'react';
import { DataContext } from '../../Context/DataContext';
import './CartContent.scss';
import CartModal from '../CartModal/CartModal'; // Importa el componente del modal

const CartContent = () => {
    const { cart } = useContext(DataContext);
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const calculateTotal = () => {
        return cart.reduce((total, product) => total + product.price * product.quantity, 0);
    };

    return (
        <>
            <div className='cart-container' onClick={openModal}>
                <span className='cart-count'>{cart.length}</span>
            </div>
            {modalOpen && <CartModal closeModal={closeModal} cart={cart} total={calculateTotal()} />} {/* Renderiza el modal si modalOpen es true */}
        </>
    );
};

export default CartContent;


