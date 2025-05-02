import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CartPage from './Pages/CartPages';
import { CartProvider } from './context/CartContext';
import Home from './components/Home';

import './index.css';

function App() {
  return (
    <Router>
      <CartProvider>
        <Routes>
          <Route path="/arizon-ecommerce-apk" element={<Home/>} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;





