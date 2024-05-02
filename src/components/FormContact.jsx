import React, { useState } from 'react';
import { validateName, validateEmail, validateComments } from '../utils/contacto.validations'; // Importa las validaciones
import '../Pages/Contacto/contacto';

const FormContacto = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        comentarios: '',
    });
    const [fieldErrors, setFieldErrors] = useState({});
    const [alertMessage, setAlertMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setFieldErrors({ ...fieldErrors, [name]: '' }); // Limpiar el error al cambiar el valor del campo
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm(formData);
        setFieldErrors(validationErrors);

        if (Object.values(validationErrors).every(error => error === '')) {
            onSubmit(formData);
            setFormData({ nombre: '', email: '', comentarios: '' }); // Limpiar el formulario después del envío
            setAlertMessage('Enviado con éxito.');
        } else {
            setAlertMessage('Por favor, completa todos los campos correctamente.');
        }
    };

    const validateForm = (formData) => {
        const errors = {};
        errors.nombre = validateName(formData.nombre);
        errors.email = validateEmail(formData.email);
        errors.comentarios = validateComments(formData.comentarios);
        return errors;
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Nombre:</label>
                <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                {fieldErrors.nombre && <span className="error">{fieldErrors.nombre}</span>}
            </div>
            <div className="form-group">
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
                {fieldErrors.email && <span className="error">{fieldErrors.email}</span>}
            </div>
            <div className="form-group">
                <label>Comentarios:</label>
                <textarea name="comentarios" value={formData.comentarios} onChange={handleChange} />
                {fieldErrors.comentarios && <span className="error">{fieldErrors.comentarios}</span>}
            </div>
            <button type="submit">Enviar</button>
            {alertMessage && <div className="success-message">{alertMessage}</div>}
        </form>
    );
};

export default FormContacto;