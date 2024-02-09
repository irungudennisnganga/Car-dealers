import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="contact-info">
          <h3>Contact Us</h3>
          <p>Phone: <a href="tel:+254722123123">+254 722 123 123</a></p>
          <p>Email: <a href="mailto:cardealers@gmail.com">cardealers@gmail.com</a></p>
        </div>
        <div className="social-media">
          <h3>Follow Us</h3>
          <ul>
            <li>
              <a href="https://www.facebook.com/car-dealership" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-facebook-f"></i> Facebook
              </a>
            </li>
            <li>
              <a href="https://twitter.com/car-dealership" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-twitter"></i> Twitter
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/car-dealership" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram"></i> Instagram
              </a>
            </li>
          </ul>
        </div>
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()}Car Dealership . All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
  }  
export default Footer