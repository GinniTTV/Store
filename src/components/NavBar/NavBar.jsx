import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CartModal from '../CartModal/CartModal'; // Importa el componente del modal del carrito
import './NavBar.scss';

const NavBar = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <nav className='navbar'>
            <Link to="/" className='navbar-logo'>Tienda</Link>
            <ul className='nav-links'>
                <li><Link to="/" className='nav-link'>Inicio</Link></li>
                <li><Link to="/alta" className='nav-link'>Alta</Link></li>
                <li><Link to="/contacto" className='nav-link'>Contacto</Link></li>
            </ul>
            <button className='cart-link' onClick={openModal}>🛒</button>
            {modalOpen && <CartModal closeModal={closeModal} />}
        </nav>
    );
};

export default NavBar;










