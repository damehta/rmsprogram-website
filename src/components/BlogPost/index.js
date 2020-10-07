import React, { useState, useEffect } from 'react';
import Card from '../UI/Card';
import '../style.css';
import blogPost from '../../data/GuestSpeakersData.json';

/**
* @author
* @function BlogPost
**/

const BlogPost = (pros) => {

    const [post, setPost] = useState({
        id: "" ,
        blogCategory: "" ,
        blogTitle : "" ,
        postedOn: "" ,
        author: "" ,
        blogImage: "" ,
        blogText: "",
        recordingLink: ""
    });
    const [slug, setSlug] = useState('');
    
    
    useEffect(() => {
        const slug = pros.match.params.slug;
        const post = blogPost.find(post => post.slug === slug);
        setPost(post);
        setSlug(slug);
    }, [post, pros.match.params.slug]);

    if(post.blogImage === "") return null;

  return(
        <div>
            <Card>
                <div className="blogHeader">
                    <span className="blogCategory">{post.blogCategory}</span>
                    <h1 className="postTitle">{post.blogTitle}</h1>
                    <span className="postedBy">posted on {post.postedOn} by {post.author}</span>
                    <span className="postBody">
                        {/* // <NavLink to="linkedin.com">Dr. Hiren patel</NavLink> */}
                        {post.blogTitle}
                    </span>
                </div>
                <div className="postImageContainer">
                    <img src={require('../../blogPostImages/gs7-DrHirenPatel.png')} alt="Guest Speaker #7: Dr. Hiren Patel MD MCHM"></img>
                </div>
            </Card>
        </div>
   )

 }

export default BlogPost