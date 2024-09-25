import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, clearCart } from '../redux/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);

  const handleRemove = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleClear = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>
      {items.length > 0 ? (
        <>
          <ul>
            {items.map(item => (
              <li key={item.id} className="flex justify-between border-b py-2">
                <span>{item.name}</span>
                <button 
                  className="text-red-500" 
                  onClick={() => handleRemove(item)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <button 
            className="bg-red-500 text-white py-2 px-4 rounded mt-4"
            onClick={handleClear}
          >
            Clear Cart
          </button>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
