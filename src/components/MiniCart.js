import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MiniCart({ isOpen }) {
  const { cartItems, removeItem } = useCart();
  const [subtotal, setSubtotal] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const newSubtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setSubtotal(newSubtotal);
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const filteredItems = cartItems.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="absolute right-4 top-16 w-80 bg-white dark:bg-gray-800 shadow-lg p-4 border z-50 rounded-md"
        >
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100">Mini Cart</h3>
            <button
              onClick={() => {
                document.documentElement.classList.toggle('dark');
              }}
              className="text-sm px-2 py-1 bg-gray-200 dark:bg-gray-600 dark:text-white rounded hover:bg-gray-300 dark:hover:bg-gray-500"
            >
              Toggle Dark Mode
            </button>
          </div>

          <input
            type="text"
            placeholder="Search in cart..."
            className="w-full mb-3 px-2 py-1 text-sm border rounded dark:bg-gray-700 dark:text-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {filteredItems.length === 0 ? (
            <p className="text-gray-500 dark:text-gray-400">Cart is empty</p>
          ) : (
            <div className="space-y-2">
              {filteredItems.map((item) => (
                <div key={item.id} className="flex items-center gap-2 justify-between">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-12 w-12 object-contain rounded"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200 line-clamp-1">{item.title}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.quantity} × ${item.price}</p>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 text-sm hover:text-red-700"
                  >
                    ✕
                  </button>
                </div>
              ))}
              <div className="border-t pt-2 text-right">
                <p className="font-semibold text-gray-800 dark:text-gray-100">
                  Subtotal: ${subtotal.toFixed(2)}
                </p>
                <div className="mt-2 flex justify-between">
                  <Link to="/cart" className="text-blue-600 dark:text-blue-400 text-sm hover:underline">
                    View Cart
                  </Link>
                  <button
                    disabled
                    className="bg-blue-500 text-white text-sm px-2 py-1 rounded opacity-50 cursor-not-allowed"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}