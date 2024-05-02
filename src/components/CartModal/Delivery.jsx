import React, { useContext, useState } from 'react';
import { DataContext } from '../../Context/DataContext';

const Delivery = ({ onCalculateTotal }) => {
    const { cart } = useContext(DataContext);
    const [deliveryOption, setDeliveryOption] = useState(false);

    const calculateTotal = () => {
        const totalParcial = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        const totalFinal = deliveryOption ? totalParcial + 10 : totalParcial;
        onCalculateTotal(totalFinal);
    };

    const handleDeliveryOption = () => {
        setDeliveryOption(!deliveryOption);
    };

    return (
        <div className="delivery">
            <label>
                <input type="checkbox" checked={deliveryOption} onChange={handleDeliveryOption} />
                Entrega con $10 extra
            </label>
            <button onClick={calculateTotal}>Calcular Total</button>
        </div>
    );
};

export default Delivery;


