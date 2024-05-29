import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        axios("data.json").then((res) => setData(res.data));
    }, []);

    return (
        <DataContext.Provider value={{ data, cart, setCart }}>
            {children}
        </DataContext.Provider>
    );
};

export { DataContext, DataProvider };


