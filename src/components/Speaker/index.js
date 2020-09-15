import React from 'react'
import Card from '../UI/Card';
import './style.css';
/**
* @author
* @function Speaker
**/

const Speaker = (props) => {
  return(
        <div className="speakerContainer">
            {/* <div > */}
                <Card>
                    <div className="blogHeader"  style={{marginBottom:'20px',padding:'10px', boxSizing:'border-box'}}> 
                        <span className="blogCategory">Featured 1</span>
                        <h1 className="postTitle">Beautiful</h1>
                        <span className="postedBy">posted on September 13, 2020 by Aatmi Mehta</span>
                    </div>
                    <div className="postImageContainer">
                        <img src={require('../../blogPostImages/gs7-DrHirenPatel.png')} alt="Guest Speaker #7: Dr. Hiren Patel MD MCHM"></img>
                    </div>
                </Card>
            {/* </div>
            <div> */}
                {/* <Card>
                    <div className="blogHeader"  style={{marginBottom:'20px',padding:'10px', boxSizing:'border-box'}}> 
                        <span className="blogCategory">Featured 2</span>
                        <h1 className="postTitle">Beautiful</h1>
                        <span className="postedBy">posted on September 13, 2020 by Aatmi Mehta</span>
                    </div>
                    <div className="postImageContainer">
                        <img src={require('../../blogPostImages/gs7-DrHirenPatel.png')} alt="Guest Speaker #7: Dr. Hiren Patel MD MCHM"></img>
                    </div>
                </Card> */}
            {/* </div> */}
        </div>
   )

 }

export default Speaker