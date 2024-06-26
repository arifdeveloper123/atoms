import React from 'react';
import "./styles.css"
import '@fortawesome/fontawesome-free/css/all.min.css'

const SubFooter = () => {
  return (
    <div className="sub-footer">
      <div className="sub-footer-content">
      <div className="sub-footer-links">
          <a href="#">© 2024 Airbnb, Inc.</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Sitemap</a>
          <a href="#">Company details</a>
      </div>
        <div className="sub-footer-right">
          <div className="language-currency">
            <a href="#"><span className="icon-globe"></span> English (IN)</a>
            <a href="#"><span className="icon-currency"></span> INR</a>
          </div>
      <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
        </div>
        </div>
    </div>
  );
};

export default SubFooter;
