import React from "react";
import { NavLink } from 'react-router-dom';

class Contact extends React.Component {
	render() {
		return (

			<section className="contact">
				<h2>Contact!</h2>


				<div className="text">
					Contact annotated portions of HTML into React components as separate modules.
					The structure of HTML is preserved by importing child components and replacing appropriate pieces of HTML with them.
					As a result you get an entire components tree ready to be rendered.
				</div>
				

				<NavLink exact to="/">Back to Home</NavLink>

			</section>


			
		);
	}
}

export default Contact;
