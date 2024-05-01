import React, { useState } from 'react';
import FormAltaProductos from '../../components/FormAlta/AltaProducts';
import './Alta.scss';

const AltaProducto = () => {
    const [alertMessage, setAlertMessage] = useState('');

    const handleSubmit = (formData) => {
        fetch('https://6615bdb2b8b8e32ffc7ba142.mockapi.io/API_cosmic_v1/productos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'Proyect-mine', // Tu API key aquí
            },
            body: JSON.stringify(formData),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Error al guardar el producto. Por favor, intenta nuevamente.');
                }
                setAlertMessage('Éxito al guardar el producto.');
                // No es recomendable recargar la página, en su lugar, puedes limpiar el formulario
                // window.location.reload(); // Refrescar la página después de guardar
            })
            .catch((error) => {
                console.error('Error al enviar datos:', error.message);
                // Solo establece el mensaje de error si realmente hubo un error de red o similar
                if (!error.message.includes('Error al guardar el producto')) {
                    setAlertMessage('Error al guardar el producto. Por favor, intenta nuevamente.');
                }
            });
    };

    return (
        <div className="alta-container">
            <h2 className="form-title">Alta de Productos</h2>
            <FormAltaProductos onSubmit={handleSubmit} />
            {alertMessage && <div className="success-message">{alertMessage}</div>}
        </div>
    );
};

export default AltaProducto;