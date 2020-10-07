import React from 'react'
import '../style.css';
import { NavLink } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
/**
* @author
* @function Navbar
**/

const TopNavbar = (props) => {
  return(
        <div className="navbar">
          <ul className="navbarMenu">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/post">Posts</NavLink></li>
                {/* <ul className="summer2020"> */}
                <li><NavLink to="#">Apply</NavLink></li>
                <li><NavLink to="/guest-speakers">Guest Speakers</NavLink></li>
                <li><NavLink to="/students-work">Students Work</NavLink></li>
                    {/* </ul> */}
                <li><NavLink to="/journals">Journals</NavLink></li>
                <li><NavLink to="/donate">Donate</NavLink></li>
                <li><NavLink to="/faq">FAQ</NavLink></li>
                <li><ul className="navbarMenu">
                    <li><NavLink to="/one">Journals</NavLink></li>
                    <li><NavLink to="/Two">Journals</NavLink></li>
                  </ul>
                </li>

            {/*
            <div className="search">
                <input type = "text" placeholder="Search" />
                <img src={require('../../assets/icons/SearchMagnifier-32.png')} alt="Search" sizes="" />
            </div> 
            */}
          </ul>
        </div>

   )

 }

export default TopNavbar

