import React, { useState } from 'react';
import {
  validateName,
  validatePrice,
  validateStock,
  validateCategory,
  validateBrand,
  validateAge,
  validateDescription,
  validatePhoto,
} from '../../utils/validations';
import '../../Pages/Alta/Alta.scss';

const FormAltaProductos = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    categoria: '',
    precio: '',
    stock: '',
    marca: '',
    edadDesde: '',
    edadHasta: '',
    descripcionCorta: '',
    descripcionLarga: '',
    foto: '',
    envioSinCargo: false,
  });

  const [fieldErrors, setFieldErrors] = useState({});
  const [alertMessage, setAlertMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: fieldValue });

    // Validar el campo que se está modificando
    const validationError = validateField(name, fieldValue);
    setFieldErrors({ ...fieldErrors, [name]: validationError });
  };

  const validateField = (fieldName, value) => {
    switch (fieldName) {
      case 'nombre':
        return validateName(value);
      case 'categoria':
        return validateCategory(value);
      case 'precio':
        return validatePrice(value);
      case 'stock':
        return validateStock(value);
      case 'marca':
        return validateBrand(value);
      case 'edadDesde':
      case 'edadHasta':
        return validateAge(value);
      case 'descripcionCorta':
      case 'descripcionLarga':
        return validateDescription(value);
      case 'foto':
        return validatePhoto(value);
      default:
        return '';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    setFieldErrors(validationErrors);

    const hasErrors = Object.values(validationErrors).some((error) => error);
    if (!hasErrors) {
      onSubmit(formData);
      setAlertMessage('Éxito de envío.');
      setFormData({
        nombre: '',
        categoria: '',
        precio: '',
        stock: '',
        marca: '',
        edadDesde: '',
        edadHasta: '',
        descripcionCorta: '',
        descripcionLarga: '',
        foto: '',
        envioSinCargo: false,
      }); // Limpiar el formulario después del envío
    } else {
      setAlertMessage('Por favor, completa todos los campos correctamente.');
    }
  };

  const validateForm = (formData) => {
    const errors = {};

    for (const fieldName in formData) {
      if (formData.hasOwnProperty(fieldName)) {
        errors[fieldName] = validateField(fieldName, formData[fieldName]);
      }
    }

    return errors;
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Nombre:</label>
        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
        {fieldErrors.nombre && <span className="error">{fieldErrors.nombre}</span>}
      </div>

      <div className="form-group">
        <label>Categoría:</label>
        <input type="text" name="categoria" value={formData.categoria} onChange={handleChange} />
        {fieldErrors.categoria && <span className="error">{fieldErrors.categoria}</span>}
      </div>

      <div className="form-group">
        <label>Precio:</label>
        <input type="number" name="precio" value={formData.precio} onChange={handleChange} />
        {fieldErrors.precio && <span className="error">{fieldErrors.precio}</span>}
      </div>

      <div className="form-group">
        <label>Stock:</label>
        <input type="number" name="stock" value={formData.stock} onChange={handleChange} />
        {fieldErrors.stock && <span className="error">{fieldErrors.stock}</span>}
      </div>

      <div className="form-group">
        <label>Marca:</label>
        <input type="text" name="marca" value={formData.marca} onChange={handleChange} />
        {fieldErrors.marca && <span className="error">{fieldErrors.marca}</span>}
      </div>

      <div className="form-group">
        <label>Edad Desde:</label>
        <input type="number" name="edadDesde" value={formData.edadDesde} onChange={handleChange} />
        {fieldErrors.edadDesde && <span className="error">{fieldErrors.edadDesde}</span>}
      </div>

      <div className="form-group">
        <label>Edad Hasta:</label>
        <input type="number" name="edadHasta" value={formData.edadHasta} onChange={handleChange} />
        {fieldErrors.edadHasta && <span className="error">{fieldErrors.edadHasta}</span>}
      </div>

      <div className="form-group">
        <label>Descripción Corta:</label>
        <textarea name="descripcionCorta" value={formData.descripcionCorta} onChange={handleChange} />
        {fieldErrors.descripcionCorta && <span className="error">{fieldErrors.descripcionCorta}</span>}
      </div>

      <div className="form-group">
        <label>Descripción Larga:</label>
        <textarea name="descripcionLarga" value={formData.descripcionLarga} onChange={handleChange} />
        {fieldErrors.descripcionLarga && <span className="error">{fieldErrors.descripcionLarga}</span>}
      </div>

      <div className="form-group">
        <label>Foto:</label>
        <input type="file" name="foto" onChange={handleChange} />
        {fieldErrors.foto && <span className="error">{fieldErrors.foto}</span>}
      </div>

      <div className="form-group checkbox-group">
        <label>
          <input
            type="checkbox"
            name="envioSinCargo"
            checked={formData.envioSinCargo}
            onChange={handleChange}
          />
          Envío sin Cargo
        </label>
        {fieldErrors.envioSinCargo && <span className="error">{fieldErrors.envioSinCargo}</span>}
      </div>

      <button type="submit">Guardar</button>
      {alertMessage && <div className="success-message">{alertMessage}</div>}
    </form>
  );
};

export default FormAltaProductos;