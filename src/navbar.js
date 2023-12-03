
import React from 'react';
import './navbar1.css'; // Import the CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="menu-icon">&#9776;</div>
      <div className="logo">logo</div>
      <div className="menu">
        <a href="#">Home</a>
        <a href="#">Contact &#9742;</a> 
        
      </div>
    </nav>
  );
};

export default Navbar;
