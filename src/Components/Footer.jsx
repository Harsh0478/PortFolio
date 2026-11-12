import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Harsh Rathod</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="footer__link">
              Contact Us
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="/"
            className="footer__social-link"
            target="_blank" rel="noreferrer noopener"
          >
            <i className="bx bxl-instagram"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/harshrathod047/"
            className="footer__social-link"
            target="_blank" rel="noreferrer noopener"
          >
            <i className="bx bxl-linkedin"></i>
          </a>

          <a
            href="https://github.com/Harsh0478"
            className="footer__social-link"
            target="_blank" rel="noreferrer noopener"
          >
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="/"
            className="footer__social-link"
            target="_blank" rel="noreferrer noopener"
          >
            <i className="bx bxl-twitter"></i>
          </a>
        </div>
        
        <span className="footer__copy">2025 Harsh Rathod. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
