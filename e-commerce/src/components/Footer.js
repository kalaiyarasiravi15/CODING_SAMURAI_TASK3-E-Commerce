import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h3>ShopyKura</h3>
          <p>
            Your trusted e-commerce partner for quality products and great
            prices.
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Why Us</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4>Customer Service</h4>
          <ul>
            <li>FAQ</li>
            <li>Returns</li>
            <li>Shipping</li>
            <li>Support</li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <p>Email: support@shopykura.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: India</p>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 ShopyKura. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
