import "./Contact.css";

function Contact() {
  return (
    <>
      
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Contact Us</h1>
          <p>We are here to help you anytime</p>
        </div>
      </section>

      
      <section className="contact-section">
        <div className="contact-container">
          
       
          <div className="contact-details">
            <h2>Get In Touch</h2>
            <p>
              Have questions about our products, orders, or services?
              Feel free to contact us. Our support team will respond as soon as possible.
            </p>

            <div className="detail-box">
              <h4> Address</h4>
              <p>ShopyKura Pvt Ltd, Chennai, Tamil Nadu, India</p>
            </div>

            <div className="detail-box">
              <h4> Phone</h4>
              <p>+91 98765 43210</p>
            </div>

            <div className="detail-box">
              <h4> Email</h4>
              <p>support@shopykura.com</p>
            </div>

            <div className="detail-box">
              <h4> Working Hours</h4>
              <p>Mon – Sat : 9:00 AM – 8:00 PM</p>
            </div>
          </div>

         
          <div className="contact-form">
            <h2>Send Message</h2>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="text" placeholder="Subject" />
              <textarea rows="5" placeholder="Your Message"></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>

        </div>
      </section>
    </>
  );
}

export default Contact;
