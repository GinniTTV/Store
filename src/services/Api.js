// services/api.js

import axios from 'axios';

const API_URL = 'https://6615bdb2b8b8e32ffc7ba142.mockapi.io/API_cosmic_v1';

export const fetchCards = async () => {
    try {
        const response = await axios.get(`${API_URL}/cards`);
        return response.data;
    } catch (error) {
        console.error('Error fetching cards:', error);
        return [];
    }
};
