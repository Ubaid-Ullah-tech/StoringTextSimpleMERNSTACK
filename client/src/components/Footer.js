import React from 'react';
import '../components/Footer.css'
import Ubaid from '../components/Ubaid.jpg'; // Replace with the actual path to your image

const Footer = () => {
  return (
    <div className="footer-container">
      <img src={Ubaid} alt="Logo" className="logo-image" />
      <p>
        &copy; 2024 Your Todo App. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
