import React from 'react'
import '../style.css';

/**
* @author
* @function Logo
**/

const Logo = (props) => {
  return(
    <div className="logo">
        <img src={require('../../assets/rms-8.png')} alt="Research Made Simple" />
        <br/><a href="/">Research Made Simple</a>
    </div>
   )

 }

export default Logo