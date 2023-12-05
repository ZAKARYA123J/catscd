
import React from 'react';
import './navbar1.css'; 
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="menu-icon">&#9776;</div>
      <div className="logo">logo</div>
      <div className="menu">
        <Link to={'/'}>Home</Link>
        <Link to={'/Contact'}>Contact &#9742;</Link> 
        
      </div>
    </nav>
  );
};

export default Navbar;
