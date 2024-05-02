import React from 'react';
import FormContacto from '../../components/FormContact';
import './contacto.scss';

const Contacto = () => {
    const handleSubmit = (formData) => {
        // Lógica para enviar los datos a la API
        fetch('https://6615bdb2b8b8e32ffc7ba142.mockapi.io/API_cosmic_v1/contacto', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'Proyect-mine', // Tu API key aquí
            },
            body: JSON.stringify(formData),
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Error al enviar el formulario. Por favor, inténtalo de nuevo.');
            }
            return response.json();
        })
        .then((data) => {
            console.log('Respuesta de la API:', data);
            alert('Formulario enviado con éxito.'); // Puedes mostrar un mensaje de éxito
            window.location.reload(); // Refrescar la página después del envío exitoso
        })
        .catch((error) => {
            if (error.message !== 'Error al enviar el formulario. Por favor, inténtalo de nuevo.') {
                console.error('Error al enviar datos:', error.message);
                alert('Error al enviar el formulario. Por favor, inténtalo de nuevo.');
            }
        });
    };

    return (
        <div className="contacto-container">
            <h2 className="form-title">Contacto</h2>
            <FormContacto onSubmit={handleSubmit} />
        </div>
    );
};

export default Contacto;
