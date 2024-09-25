import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import productImage1 from '../assets/product-placeholder1.jpg'; 
import productImage2 from '../assets/product-placeholder2.jpg'; 
import productImage3 from '../assets/product-placeholder3.jpg'; 

const products = [
  { id: 1, name: 'Product 1', image: productImage1 },
  { id: 2, name: 'Product 2', image: productImage2 },
  { id: 3, name: 'Product 3', image: productImage3 },
];

const ProductList = () => {
  const dispatch = useDispatch();

  const handleAdd = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <><h1 className="text-3xl font-bold text-gray-800 mb-6">Product List</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map(product => (
        <div key={product.id} className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-lg font-bold mb-2">{product.name}</h2>
            <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
  onClick={() => handleAdd(product)}
>
  Add to Cart
</button>

          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default ProductList;
