import React from 'react'
import Card from '../UI/Card';
import '../style.css';
/**
* @author
* @function Speaker
        {
            "id": 1,
            "blogCategory":"Featured",
            "blogTitle": "One",
            "postedOn" : "September 13, 2020",
            "author" : "Aatmi Mehta",
            "blogImage" : "../../blogPostImages/gs7-DrHirenPatel.png",
            "blogText" : "Dr. Hiren Patel, MD, MCHM Dr. Hiren patel is a doctor and also has a MCHM from Harvard University. He completed his residency at NYU Brooklyn. He currently works to manage hospitals all across the US.      Thank you so much for speaking to us Dr. Patel! It was so incredible to hear about your inspiring journey and your exciting career! ​Recording Unavailable"
        },

                        // <img src={require(`./../../blogPostImages/${props.blogImage.toLowerCase()}`)} alt="{props.blogTitle}"></img>
**/

// var imgFolder = '../../blogPostImages/';
const Speaker = (props) => {
  return(
        <div className="speakerContainer">
            {/* <div > */}
                <Card>
                    <div className="postImageContainer"  style={{marginBottom:'20px',padding:'10px', boxSizing:'border-box'}}> 
                        <span className="blogCategory">{props.blogCategory}</span>
                        <span className="postedBy">By {props.author}</span>
                        <span className="postedBy">{props.postedOn}</span>
                        <h1 className="postTitle">{props.blogTitle}</h1>
                        <p className="speakerPBody">{props.blogText}
                            <img src={require(`../../blogPostImages/${props.blogImage}`)} alt="{props.blogTitle}"></img>
                        </p>
                    </div>
                </Card>
        </div>
   )

 }

export default Speaker