import React from 'react'
import Logo from '../Logo';
import TopNavbar from '../TopNavbar';
import Card from '../UI/Card';
import '../style.css';

/**
* @author
* @function Hero
**/

const Hero = (props) => {
  return(
    <div>
        <Card>
            <div style = {{ padding: '40px 0' }}>
                <Logo/>
            </div>
            <TopNavbar/>
        </Card>
    </div>
   )

 }

export default Hero