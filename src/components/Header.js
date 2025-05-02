import { useState } from 'react';
import { Link } from 'react-router-dom';
import MiniCart from './MiniCart';

export default function Header() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center relative">
      <Link to="/" className="text-xl font-bold text-blue-600">Arizon</Link>
      <nav className="space-x-4 flex items-center">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <button
          onClick={() => setCartOpen(!cartOpen)}
          className="relative hover:text-blue-600"
        >
          🛒
        </button>
      </nav>
      <MiniCart isOpen={cartOpen} />
    </header>
  );
}
