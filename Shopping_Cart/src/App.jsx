import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ProductList from './components/ProductList.jsx';
import Cart from './components/Cart.jsx';
import cartIcon from './assets/cart-icon.svg';

const App = () => {
  const [viewCart, setViewCart] = useState(false);
  const cartItemsCount = useSelector((state) => state.cart.items.length);

  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold">My Store</h1>

        {/* Cart button with custom icon */}
        <button
          className="relative bg-blue-500 text-white p-2 rounded"
          onClick={() => setViewCart(!viewCart)}
        >
          <img src={cartIcon} alt="Cart" className="w-6 h-6" />
          {cartItemsCount > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartItemsCount}
            </span>
          )}
        </button>
      </header>

      {/* Conditionally render either the product list or the cart */}
      {viewCart ? <Cart /> : <ProductList />}
    </div>
  );
};

export default App;
