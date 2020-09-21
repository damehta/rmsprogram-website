import React from 'react'
import '../style.css';
import { NavLink } from "react-router-dom";

/**
* @author
* @function Navbar
**/

const Navbar = (props) => {
  return(
   <div className="navbar">
       <ul className="navbarMenu">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/program-info">Program Info</NavLink></li>
            <li><NavLink to="/post">Posts</NavLink></li>
            <li>
                {/* <ul className="summer2020"> */}
                    <li><NavLink to="#">Apply</NavLink></li>
                    <li><NavLink to="/guest-speakers">Guest Speakers</NavLink></li>
                    <li><NavLink to="/students-work">Students Work</NavLink></li>
                {/* </ul> */}
            </li>
            <li><NavLink to="/journals">Journals</NavLink></li>
            <li><NavLink to="/donate">Donate</NavLink></li>
            <li><NavLink to="/faq">FAQ</NavLink></li>
        </ul>
        {/* <div className="search">
            <input type = "text" placeholder="Search" />
            <img src={require('../../assets/icons/SearchMagnifier-32.png')} alt="Search" sizes="" />
        </div> */}
    </div>
   )

 }

export default Navbar