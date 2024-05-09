// validations.js
export const validateName = (name) => {
  if (!name.trim()) {
    return 'El nombre es requerido.';
  }
  return '';
};

export const validateCategory = (category) => {
  if (!category.trim()) {
    return 'La categoría es requerida.';
  }
  return '';
};

export const validatePrice = (price) => {
  if (!price || isNaN(price) || price <= 0) {
    return 'El precio es requerido y debe ser un número mayor que cero.';
  }
  return '';
};

export const validateStock = (stock) => {
  if (!stock || isNaN(stock) || stock <= 0) {
    return 'El stock es requerido y debe ser un número mayor que cero.';
  }
  return '';
};

export const validateBrand = (brand) => {
  if (!brand.trim()) {
    return 'La marca es requerida.';
  }
  return '';
};

export const validateAge = (age) => {
  if (!age || isNaN(age) || age <= 0) {
    return 'La edad es requerida y debe ser un número mayor que cero.';
  }
  return '';
};

export const validateDescription = (description) => {
  if (!description.trim()) {
    return 'La descripción es requerida.';
  }
  return '';
};

export const validatePhoto = (photo) => {
  if (!photo) {
    return 'La foto es requerida.';
  }
  return '';
};







  