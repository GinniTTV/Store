import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'; // Asegúrate de tener la ruta correcta para importar NavBar
import Home from './Pages/Home/Home';
import Alta from './Pages/Alta/Alta';
import Contacto from './Pages/Contacto/contacto';
import Nosotros from './Pages/Nosotros/Nosotros';
import CartContent from './components/CartContent/CartContent';
import { DataProvider } from './Context/DataContext';

function App() {
  return (
    <div>
      <DataProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/alta" element={<Alta />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/nosotros" element={<Nosotros/>} />
            <Route path="/cart" element={<CartContent />} />
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </div>
  );
}

export default App;





