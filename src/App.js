import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Alta from './Pages/Alta/Alta';
import CartContent from './components/CartContent/CartContent';
import { DataProvider } from './Context/DataContext'; // Importa el proveedor de contexto

function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alta" element={<Alta />} />
          <Route path="/cart" element={<CartContent />} />
        </Routes>
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;



