import api from '../../api'; // <-- import your centralized API
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { OrdersGrid } from "./OrdersGrid";
import trashIcon from "../../assets/trash-icon.svg";
import "./OrdersPage.css";

export function OrdersPage({ cart, loadCart }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrdersData = async() => {
      const response = await api.get("/api/orders?expand=products");
      setOrders(response.data);
    }

    fetchOrdersData();
  }, []);

  return (
    <>
      <title>Orders</title>
      <link rel="icon" type="image/png" href="/orders-favicon.png" />

      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <OrdersGrid orders={orders} loadCart={loadCart} />

        <button className="reset-button"
          onClick={async ()=> {
            await api.post('/api/reset');
            setOrders([]);

            await loadCart();
          }}
        >
          <img
            src={trashIcon}
            className="trash-icon"
          />
          Reset
        </button>
      </div>
    </>
  );
}
