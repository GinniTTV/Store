// NavBar.jsx

import React from 'react';
import './NavBar.scss'; // Importa los estilos
import {Link} from "react-router-dom";

const NavBar = () => {
  return (
    <div className='nav-container'>
      <nav className='navbar'>
        <h1 className='navbar-logo'>Tienda.</h1>
        <Link className='seeCarrito' to={"/Cart"}>🛒</Link>
      </nav>
    </div>
  );
};

export default NavBar;


