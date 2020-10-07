

import React from 'react'
import '../style.css';
import Card  from "../../components/UI/Card";
// import BlogPost from '../../components/BlogPost';
// import Sidebar from '../../components/Sidebar';

/**
* @author
* @function Post
**/

const ProgramInfo = (props) => {
  return(
        <section className="container">
        	<Card >
            	<h3>General Information</h3>
            	<p>The 2020 summer RMS program will take place from Tuesday June 16th, 2020 to Friday August 7th, 2020 and will be a 100% virtual experience.</p>
            	<p>
					Admitted students will be placed in a cohort based on their academic interest and peer mentor who will guide them through the research process. Each week students will work on one part of their research project ranging from developing a research question to conducting an experiment to writing an academic paper. All research, whether an experiment or analysis, must and will be done by the student entirely!!
					​There will be a weekly video call and task that students must complete. Failure to complete the work on time may result in removal from the program.
					Throughout the course of the program students will be given the opportunity to network with like-minded students, pursue their academic passions, and gain invaluable skills about writing academic papers. At the end of the program, students will produce a research paper and be guided on how to publish their work. 
					​As the program is completely free we rely on YOUR donations for funding. Therefore, please consider donating so we can continue providing more valuable resources and opportunities!
					IMPORTANT: PLEASE ONLY APPLY IF YOU ARE FULLY, 100% COMMITTED!! We have many, many well qualified applicants and it is unfair to them if you plan to miss or are not committed!!
				</p>
            </Card>
        </section>
    )
 }

export default ProgramInfo
