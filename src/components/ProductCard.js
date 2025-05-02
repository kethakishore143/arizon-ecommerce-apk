import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function ProductCart({ product }) {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleAddToCart = () => {
    setIsLoading(true);
    addToCart(product); 
    setIsAdded(true); 
    setIsLoading(false); 
    setTimeout(() => setIsAdded(false), 2000); 
  };

  return (
    <div className="product-card grid grid-cols-1 gap-4 border border-gray-300 p-4 rounded-lg shadow-lg">
      
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain rounded-lg"
      />

      
      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-800">{product.title}</h3>
        <p className="text-lg text-gray-600">${product.price}</p>
      </div>

      
      <button
        onClick={handleAddToCart}
        disabled={isLoading}
        className={`mt-4 w-full py-2 px-4 rounded-lg font-semibold text-white 
          ${isAdded ? 'bg-green-500' : 'bg-blue-500'} 
          ${isLoading ? 'cursor-wait opacity-50' : 'hover:bg-blue-600'}`}
      >
        {isLoading ? 'Adding...' : isAdded ? 'Added' : 'Add to Cart'}
      </button>
    </div>
  );
}
