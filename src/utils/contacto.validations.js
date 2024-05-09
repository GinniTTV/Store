export const validateName = (name) => {
    if (!name.trim()) {
        return 'El nombre es requerido.';
    }
    return '';
};

export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
        return 'El email es requerido y debe ser válido.';
    }
    return '';
};

export const validateComments = (comments) => {
    if (!comments.trim()) {
        return 'Los comentarios son requeridos.';
    }
    return '';
};

