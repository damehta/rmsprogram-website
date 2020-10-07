import React from 'react'
import ScriptTag from 'react-script-tag';
import Card from '../../components/UI/Card';
import '../style.css';
/**
* @author
* @function MeetOurTeam
**/

const MeetOurTeam = (props) => {
  return(

	  	<div className="container">
			<ScriptTag type="text/javascript" src="https://platform.linkedin.com/badges/js/profile.js" />
	  		<div  className="homeContainer">
		  		<Card >
		  			<table>
		  				<tr>
		  					<td>
		  						<div class="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="vertical" data-theme="light" data-vanity="aatmi-mehta"><a class="LI-simple-link" href='https://www.linkedin.com/in/aatmi-mehta?trk=profile-badge'>Aatmi Mehta</a>
		  						</div>
		  					</td>
		  					<td>
		  						<span className="blogTitle">	Program Founder/Director	</span>
		  						<span className="blogBody"> Aatmi is a rising junior at Dublin High School in California. She is an enthusiastic and motivated student with experience in science, medicine, business, and communication. Although young, Aatmi has extensive expertise as a tutor, writing coach, and more. In her free time, Aatmi loves playing badminton, as she is on the Varsity team at DHS. She also enjoys teaching dance and learning new skills!
		  						</span>
							</td>
						</tr>
					</table>
		    	</Card>
		    </div>
		    <div  className="homeContainer">
		    	<Card >

		  			<table>
		  				<tr>
		  					<td>
		  						<div class="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="horizontal" data-theme="dark" data-vanity="saivishnu-tulugu-34717b1a3"><a class="LI-simple-link" href='linkedin.com/in/saivishnu-tulugu-34717b1a3?trk=profile-badge'>Saivishnu Tulugu</a></div>
		  					</td>
		  					<td>
		  						<span className="blogTitle">	Program Founder/Director	</span>
		  						<span className="blogBody"> Saivishnu is a rising senior at Dublin High School. He is passionate about public health/medicine, but also enjoys learning about world cultures. In his free time he loves practicing martial arts, cooking new recipes, or reading a new book!
		  						</span>
							</td>
						</tr>
						<tr>
							<td>
								<div class="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="vertical" data-theme="dark" data-vanity="aatmi-mehta">
									<a class="LI-simple-link" href='https://www.linkedin.com/in/aatmi-mehta?trk=profile-badge'>Aatmi Mehta</a></div>
							</td>
						</tr>
						<tr>
							<td>
		    					<div class="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="vertical" data-theme="light" data-vanity="darshan0mehta">
		    						<a class="LI-simple-link" href='https://www.linkedin.com/in/darshan0mehta?trk=profile-badge'>Darshan Mehta</a></div>
							</td>
						</tr>
						<tr>
							<td>
					  			<div class="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="horizontal" data-theme="light" data-vanity="saivishnu-tulugu-34717b1a3">
					  			<a class="LI-simple-link" href='linkedin.com/in/saivishnu-tulugu-34717b1a3?trk=profile-badge'>Saivishnu Tulugu</a></div>
							</td>
						</tr>
					</table>
		    	</Card>
	    	</div>
	    </div>
    
   )

 }

export default MeetOurTeam