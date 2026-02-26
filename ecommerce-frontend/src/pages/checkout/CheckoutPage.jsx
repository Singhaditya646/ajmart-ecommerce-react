import { OrderSummary } from "./OrderSummary";
import { PaymentSummary } from "./PaymentSummary";
import "./checkout-header.css";
import "./CheckoutPage.css";
import { Link } from "react-router";
import logo from '../../assets/ajmart-logo-white.png';
import mobileLogo from '../../assets/ajmart-mobile-logo-white.png';

export function CheckoutPage({ cart, loadCart }) {
  let totalQuantity = 0;

  cart.forEach((cartItem) => {
    totalQuantity += cartItem.quantity;
  })

  return (
    <>
      <title>Checkout</title>
      <link rel="icon" type="image/png" href="/cart-favicon.png" />

      <div className="checkout-header">
        <div className="header-content">
          <div className="checkout-header-left-section">
            <Link to="/">
              <img className="logo" src={logo} />
              <img className="mobile-logo" src={mobileLogo} />
            </Link>
          </div>

          <div className="checkout-header-middle-section">
            Checkout (
            <Link className="return-to-home-link" to="/">
              {totalQuantity} items
            </Link>
            )
          </div>

          <div className="checkout-header-right-section">
            <img src="images/icons/checkout-lock-icon.png" />
          </div>
        </div>
      </div>

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary cart={cart} loadCart={loadCart} />

          <PaymentSummary cart={cart} loadCart={loadCart} />
        </div>
      </div>
    </>
  );
}
