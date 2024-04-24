import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <p>&copy; 2024 Style for All</p>
      <ul>
        <li className="footer-link">
          <Link to="/impressum">Impressum</Link>
        </li>
        <li className="footer-link">
          <Link to="/datenschutz">Datenschutz</Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
