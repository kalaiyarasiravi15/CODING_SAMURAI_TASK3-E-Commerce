import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Checkout.css";

function Checkout() {
  const { cart, total } = useContext(CartContext);

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      {cart.map((item, index) => (
        <p key={index}>{item.title} - ₹{item.price}</p>
      ))}
      <h3>Total: ₹ {total}</h3>
      <button>Place Order</button>
    </div>
  );
}

export default Checkout;
