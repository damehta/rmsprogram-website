import React from 'react'
import '../style.css';
import { NavLink } from "react-router-dom";
import SocialMedia from '../SocialMedia';
/**
* @author
* @function Header
**/

const Header = (props) => {
  return(
    <header className="header">
        <nav className="headerMenu">
            <NavLink to="/">RESEARCH MADE SIMPLE</NavLink>
            <NavLink to="/meet-our-team">Meet Our Team</NavLink>
            <NavLink to="/contact-us">Contact Us</NavLink>
        </nav>
        <div>
            <SocialMedia />
        </div>
    </header>
   )

 }

export default Header