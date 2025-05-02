import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartPage() {
  const { cartItems, removeItem, updateQuantity } = useCart();
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center gap-4 border p-4 rounded">
              <img src={item.image} alt={item.title} className="h-20 w-20 object-contain" />
              <div className="flex-1">
                <h4 className="font-semibold">{item.title}</h4>
                <p>${item.price}</p>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    className="px-2 bg-gray-200"
                    onClick={() => updateQuantity(item.id, -1)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="px-2 bg-gray-200"
                    onClick={() => updateQuantity(item.id, 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 text-sm"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="border-t pt-4 text-right">
            <p className="text-lg font-bold">Subtotal: ${subtotal.toFixed(2)}</p>
            <button
              className="mt-2 bg-blue-600 text-white px-4 py-2 rounded"
              disabled
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
      <Link to="/" className="inline-block mt-4 text-blue-600">&larr; Continue Shopping</Link>
    </div>
  );
}