import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      
      <section className="hero">
        <div className="hero-content">
          <h1>Your Smart Shopping Destination</h1>
          <p>
            Discover the best deals on electronics, gadgets, accessories and
            lifestyle products at ShopyKura.
          </p>
          <Link to="/products" className="hero-btn">
            Explore Products
          </Link>
        </div>
      </section>

      <section className="about">
        <h2>Why Shop With ShopyKura?</h2>
        <p>
          ShopyKura is a modern e-commerce platform designed to deliver quality
          products at affordable prices. We focus on customer satisfaction,
          secure payments, and fast delivery.
        </p>
      </section>

   
      <section className="features">
        <div className="feature-box">
          <h3> Fast Delivery</h3>
          <p>Quick and reliable delivery across India.</p>
        </div>

        <div className="feature-box">
          <h3> Secure Payments</h3>
          <p>100% safe checkout with trusted payment gateways.</p>
        </div>

        <div className="feature-box">
          <h3> Quality Products</h3>
          <p>Handpicked products with best quality assurance.</p>
        </div>

        <div className="feature-box">
          <h3> 24/7 Support</h3>
          <p>Our support team is always ready to help you.</p>
        </div>
      </section>

      <section className="banner">
        <h2>Big Deals | Big Savings</h2>
        <p>Grab exciting offers before they are gone!</p>
      </section>

      <section className="testimonials">
        <h2>What Our Customers Say</h2>

        <div className="testimonial-grid">
          <div className="testimonial">
            <p>
              “Amazing products and fast delivery. Totally satisfied with
              ShopyKura!”
            </p>
            <h4>- Arun</h4>
          </div>

          <div className="testimonial">
            <p>
              “Very smooth checkout experience and good customer support.”
            </p>
            <h4>- Priya</h4>
          </div>

          <div className="testimonial">
            <p>
              “Best e-commerce platform with affordable pricing.”
            </p>
            <h4>- Karthik</h4>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
