import React from 'react';
import './NavBar.scss';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='navbar'>
      <Link to="/" className='navbar-logo'>Tienda</Link>
      <ul className='nav-links'>
        <li><Link to="/" className='nav-link'>Home</Link></li>
        <li><Link to="/alta" className='nav-link'>Alta</Link></li>
        <li><Link to="/contacto" className='nav-link'>Contacto</Link></li>
      </ul>
      <Link to="/cart" className='cart-link'>🛒</Link>
    </nav>
  );
};

export default NavBar;








