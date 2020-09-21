import React from 'react';
import './style.css';
import Card from '../../components/UI/Card';
import { NavLink } from 'react-router-dom';

const Home = props => {
    const gallaryHeight = 450;

    return(
        <div className="container">
            <div className="homeContainer">
                <Card>
                    <section className="container">
                        <div className="blogHeader">
                        <h1 className="postTitle">Our Mission</h1>
                        <span className="blogBody">
                            <p>Research Made Simple (RMS) is a student run organization that works to provide high school students an opportunity to develop and publish their own research project.
                                ​<br/>Through a rigorous 8-week program, students will be given the tools needed to develop their own research project on a topic on their choice. They will be guided from start to finish on how to formulate, conduct, write, and publish their work. The program is completely free.
                                <br/>Additionally, this program will allow and and encourage students to meet with other students with similar interests and share ideas. Students will be also able to make meaningful connections with their peers and foster lifelong friendships. 
                            </p>
                            <NavLink to="https://www.linkedin.com/company/research-made-simple/" >Program Linkedin: here</NavLink>
                        </span>
                        </div>
                    </section>
                </Card>
            </div>
            <div className="homeContainer">
                <Card>
                    <section className="container" >
                        <iframe src="https://drive.google.com/file/d/1U12hOoqGlDMASMtkAHGVQX3t9K06OPEq/preview" height="480" width="100%"></iframe>
                        {/* <iframe src="" height="480" width="100%"></iframe> */}
                    </section>
                    
                </Card>
            </div>
            
        </div>
    );
}

export default Home;