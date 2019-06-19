import React from "react";
import { Link } from 'react-router-dom';


const About = () => {
	return (
		
		<section className="about">
			<h2>About Us</h2>

			<div className="text">
				Extract annotated portions of HTML into React components as separate modules.
				The structure of HTML is preserved by importing child components and replacing appropriate pieces of HTML with them.
				As a result you get an entire components tree ready to be rendered.
			</div>

			<Link to="/">Back to Home</Link>

		</section>
		
	);
};



export default About;