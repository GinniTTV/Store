import React, { useContext } from 'react';
import { DataContext } from '../../Context/DataContext';

import CartElements from './CartElements';
import CartTotal from './CartTotal';

const CartContent = () => {
  const { cart } = useContext(DataContext);

  return cart.length > 0 ? (
     <>
       <CartElements />
       <CartTotal />
     </>
  ) : (

    <h2 className='cart-message-center'>Your cart is empty</h2>

  );
 
};

export default CartContent
