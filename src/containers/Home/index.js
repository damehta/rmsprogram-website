import React from 'react';
import '../style.css';
import Card from '../../components/UI/Card';
import Carousel from '../../components/Carousel';
import { SocialIcon } from 'react-social-icons';

const Home = props => {
    return(
        <div>
            <Carousel />

            <div className="container">
            <div className="homeContainer">
                <Card>
                    <section className="container">
                        <div className="blogHeader">
                            <h1 className="postTitle">Our Mission</h1>
                            <span className="blogBody">
                                <p>Research Made Simple (RMS) is a student run organization that works to provide high school students an opportunity to develop and publish their own research project.
                                ​   <br/><br/>Through a rigorous 8-week program, students will be given the tools needed to develop their own research project on a topic on their choice. They will be guided from start to finish on how to formulate, conduct, write, and publish their work. The program is completely free.
                                    <br/><br/>Additionally, this program will allow and and encourage students to meet with other students with similar interests and share ideas. Students will be also able to make meaningful connections with their peers and foster lifelong friendships. 
                                </p>
                                Join us in our mission: 
                                    <SocialIcon url="https://www.linkedin.com/company/research-made-simple/" style={{ height: 40, width: 40, left: 10, margin: 0 }}/>
                                    <SocialIcon url="https://www.instagram.com/thermsprogram/" style={{ height: 40, width: 40, left: 20, margin: 0 }}/>
                                    <SocialIcon url="https://www.medium.com/thermsprogram/" style={{ height: 40, width: 40, left: 30, margin: 0 }}/>
                            </span>
                        </div>
                    </section>
                </Card>
            </div>
            <div className="homeContainer">
                <Card>
                    <section className="container" >
                        <iframe title="Research Journal - 2020" src="https://drive.google.com/file/d/1U12hOoqGlDMASMtkAHGVQX3t9K06OPEq/preview" height="480" width="100%"></iframe>
                        {/* <iframe src="" height="480" width="100%"></iframe> */}
                    </section>
                    
                </Card>
            </div>
            </div>
        </div>
    );
}

export default Home;