import React from 'react'
import '../style.css';
import { NavLink } from "react-router-dom";
import Navbar from '../Navbar';
/**
* @author
* @function Header
**/

const Header = (props) => {
  return(
    <header className="header">
        <nav className="headerMenu">
            <NavLink to="/">RESEARCH MADE SIMPLE</NavLink>
            <NavLink to="/about-us">About Us</NavLink>
            <NavLink to="/contat-us">Contact Us</NavLink>
        </nav>
        <div>
            Social Media Links
        </div>
    </header>
   )

 }

export default Header