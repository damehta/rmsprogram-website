import React from 'react'
import './style.css';
import Speaker from '../../components/Speaker';

/**
* @author
* @function GuestSpeakers
**/

const GuestSpeakers = (props) => {
  return(
        <section className="container">
            <Speaker/>
            <Speaker/>
        </section>

   )

 }

export default GuestSpeakers