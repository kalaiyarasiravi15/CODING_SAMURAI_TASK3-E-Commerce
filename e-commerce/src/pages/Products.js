import "./Products.css";
import productData from "../data/productData";
import ProductCard from "../ProductCard";

function Products() {
  return (
    <>
      
      <section className="products-hero">
        <h1>Shop With Us</h1>
        <p>Explore our wide range of quality products</p>
      </section>

     
      <section className="products-section">
        <div className="product-grid">
          {productData.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Products;
