import "./TrackingPage.css";
import { useParams, Link } from 'react-router';
import { useState, useEffect } from "react";
import api from '../api'; // use centralized api
import dayjs from 'dayjs';
import { Header } from '../components/Header';

export function TrackingPage( {cart }) {
  const {orderId, productId } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchTrackingData = async () => {
      const response = await api.get(`/api/orders/${orderId}?expand=products`)
      setOrder(response.data);
    }

    fetchTrackingData();
  }, [orderId]);

  if(!order){
    return null;
  }

  const orderProduct = order.products.find((orderProduct) => {
    return orderProduct.productId === productId;
  });

  if(!orderProduct) return null;

  return (
    <>
     <title>Tracking</title>
     <link rel="icon" type="image/png" href="/tracking-favicon.png" />

      <Header cart={cart} />
      <div className="tracking-page">
        <div className="order-tracking">
          <Link className="back-to-orders-link link-primary" to="/orders">
            View all orders
          </Link>

          <div className="delivery-date">Arriving on {dayjs(orderProduct.estimatedDeliveryTimeMs).format('dddd, MMMM D')}</div>

          <div className="product-info">
            {orderProduct.product.name}
          </div>

          <div className="product-info">Quantity: {orderProduct.quantity}</div>

          <img
            className="product-image"
            src={orderProduct.product.image}
          />

          <div className="progress-labels-container">
            <div className="progress-label">Preparing</div>
            <div className="progress-label current-status">Shipped</div>
            <div className="progress-label">Delivered</div>
          </div>

          <div className="progress-bar-container">
            <div className="progress-bar"></div>
          </div>
        </div>
      </div>
    </>
  );
}
