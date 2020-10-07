import React from 'react';
import { SocialIcon } from 'react-social-icons';

// ReactDOM.render(<SocialIcon url="http://twitter.com/jaketrent" />, document.body);

const SocialMedia = (props) => {
	return(
		<div>
			<SocialIcon url="#" style={{ height: 22, width: 22, right: 30, margin: 0 }}/>
			<SocialIcon url="https://www.linkedin.com/company/research-made-simple/" style={{ height: 22, width: 22, right: 20, margin: 0 }}/>
			<SocialIcon url="https://www.instagram.com/thermsprogram/" style={{ height: 22, width: 22, right: 10, margin: 0 }}/>
		</div>
			);
}

export default SocialMedia