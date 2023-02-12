import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import "./checkout.styles.scss";
import { styleButton } from "../authentication/authentication.component";


const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => {
       
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      }
      )}
      <div className="total">TOTAL: ₦ {cartTotal}</div>
      <a
      
        style={{
          ...styleButton,
          border: "none",
          padding: "1rem",
          margin: "2.3rem 0",
          borderRadius: "8px",
          listStyleType: 'none'
        }}
       
      >
        Buy Now
      </a>
    </div>
  );
};

export default Checkout;
