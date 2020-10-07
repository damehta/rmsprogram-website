
import React from 'react';
import Slider from 'infinite-react-carousel';

export default class Carousel extends React.Component {
  render() {
    const settings =  {
      arrowsBlock: true,
      autoplay: true,
      autoplaySpeed: 3000,
      duration: 100,
      wheel: true,
      rows: 1,
      dots: true,
      pauseOnHover: true
    };
    return (
      <div style={{"text-color": "white", "background-color": "teal", display:"block", margin:"1em"}}>
        <Slider { ...settings }>
          <div >
            <h3 style={{"color": "white", "text-align": "center", margin: "16px 150px 0px 150px"}}>
            	RMS has given me and many low-income high school students an opportunity to conduct research in our desire of a topic, without any cost. RMS not only commits to guiding new research students  a step by step process to a well-written paper, it also provided me with connections and professional  guest speakers who come each week to give me guidance and knowledge in a career. Not to mention that you make great friendships along the way :)
				<br/>- Antonella Alarco
			</h3>
          </div>
          <div>
               	<span style={{"text-align": "left"}}>
               		<h3 style={{"color": "white", "text-align": "left", margin: "16px 150px 0px 150px"}}>
               			RMS is a program which guides the student through the research process in a systematic way. This allows the student to have flexibility and create a meaningful and exceptional research paper at the same time.
               		</h3>
               	</span>
            	<span style={{"text-align": "right"}}>
            		<h3 style={{"color": "white", "text-align": "right", margin: "0px 50px 0px 50px"}}>
            			- Ayank Maiti
            		</h3>
            	</span>
          </div>
          <div>
            <h3 style={{"color": "white", "text-align": "center", margin: "16px 50px 0px 50px"}}>
            	RMS is a great program if, like me, you don’t have much research experience. The mentors did a great job of guiding us through all the steps of writing a research paper, and they made sure we knew what we were doing. There was a lot of work to do, but I feel that it paid off because I created something I’m proud of.
				<br/>- Brynne Currier
			</h3>
          </div>
          <div>
            <h3 style={{"color": "white", "text-align": "center", margin: "16px 50px 0px 50px"}}>
            	The Research Made Simple program was an incredible help throughout the entire process - from coming up with plausible ideas to finishing touches! In the beginning, I had no idea where to start, and now I can proudly say that I’ve written a research paper. Furthermore, RMS hosted Q&A Zoom calls with a variety of professionals in the medical field, which was incredibly insightful and informational! I would definitely recommend the RMS program!
				<br/>- Dylan Lai
			</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
