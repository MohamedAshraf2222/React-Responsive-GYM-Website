import React from "react";
import "./footer.css";
import logo from "../../assets/dumble.png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="gym__footer"data-aos='fade-up' data-aos-duration='1500'>
        <div className="gym__footer-content">
          <div className="footer-content">
            <div className="gym__navbar-logo">
              <div className="gym__navbar-img">
                <img src={logo} alt="logo" />
              </div>
              <h3>FitBody</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              aspernatur ipsum debitis porro vero enim!
            </p>
          </div>
          <div className="footer-box">
            <h4>Company</h4>
            <p>Our Programs</p>
            <p>Our Plan</p>
            <p>Become a member</p>
            <p>Our Programs</p>
          </div>
          <div className="footer-box">
            <h4>Quick Links</h4>
            <p>About</p>
            <p>Contact Us</p>
            <p>Support</p>
            <p>Our Programs</p>
          </div>
        </div>
        <p>Copyright -{year} developed by Mohamed Ashraf. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
