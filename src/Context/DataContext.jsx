import React, { createContext, useState, useEffect } from 'react';
import { getProducts } from '../Api';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const products = await getProducts();
                setData(products);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <DataContext.Provider value={{ data, cart, setCart }}>
            {children}
        </DataContext.Provider>
    );
};



