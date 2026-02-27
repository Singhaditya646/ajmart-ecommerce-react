import { HomePage } from './pages/home/HomePage'
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import { OrdersPage } from './pages/orders/OrdersPage';
import { TrackingPage } from './pages/TrackingPage';
import { Routes, Route } from 'react-router';
import { useEffect, useState } from "react";
import api from './api'; // use centralized api
import './App.css'

function App() {
  const [cart, setCart] = useState([]);

  const loadCart = async () => {//to share it across components
    const response = await api.get('/api/cart-items?expand=product'); // <-- use api instead of axios
    setCart(response.data);
  }

  useEffect(() => {
    loadCart();
  }, [])

  return (
    <Routes>
      <Route index element={ <HomePage cart={cart} loadCart={loadCart} /> } />
      <Route path="checkout" element={ <CheckoutPage cart={cart} loadCart={loadCart} /> } />
      <Route path="orders" element={ <OrdersPage cart={cart} loadCart={loadCart} /> } />
      <Route path="tracking/:orderId/:productId" element={ <TrackingPage cart={cart} /> } />
    </Routes>
  )
}

export default App
