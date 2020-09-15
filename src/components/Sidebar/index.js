import React from 'react'
import './style.css';
import Card from '../UI/Card';

/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {
  return(
      <div className="sidebarContainer">
            <Card style={{marginBottom: '20px'}}>
                <div className="cardHeader">
                    <span>Important Dates</span>
                </div>
                <div className="cardBullet">
                    <ul>
                        <li><b>06/01/2021</b> - Application</li>
                        <li><b>06/05/2021</b> - Admissions</li>
                        <li><b>06/08/2021</b> - Program Starts</li>
                        <li><b>08/01/2021</b> - Research paper publish</li>
                    </ul>
                    <br></br>
                </div>
            </Card>
            <Card>
                <div className="cardHeader">
                    <span>Schedule </span>
                    
                </div>
            </Card>
      </div>
   )

 }

export default Sidebar