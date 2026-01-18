import "./ProductCard.css";
import { useContext } from "react";
import { CartContext } from "./context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  const handleAdd = () => {
    addToCart(product);
    alert("Product added to cart 🛒");
  };

  return (
    <div className="product-card">
      <div className="img-box">
        <img src={product.image} alt={product.title} />
      </div>

      <h3>{product.title}</h3>
      <p className="price">₹ {product.price}</p>

      <button onClick={handleAdd}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
