import React from "react";
import { NavLink } from 'react-router-dom';

import logo from '../logo.svg';


const links_arre = [
	{id: 1, name: 'Home',	 href: '/' }, 
	{id: 2, name: 'About',   href: 'about' },
	{id: 3, name: 'Contact', href: 'contact' },
	{id: 4, name: '🤣 Weather', href: 'weather' }
];


function LinkItem(props){
	const link = props.link
  	//Правильно! Здесь не нужно указывать ключ:
  	return (
  		<li className="nav-item">
  			<NavLink className="nav-link" to={link.href}>
  				{link.name}
  			</NavLink>
  		</li>
  	);
}

function LinkList(props){  
	const links_arre = props.links_arre;
	const items = links_arre.map((link) => {
    	//Правильно! Здесь должен быть указан ключ:
    	return <LinkItem key={link.id} link={link} />;
	});
	return (
		<ul className="navbar-nav">
			{items}
		</ul>
	);
}

function Navigation() {
	return (

		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			
			<NavLink className="navbar-brand" exact to="/">
				<img src={logo} className="navbar-logo" alt="logo" /> Project
			</NavLink>

			<button
				type="button" className="navbar-toggler"
				data-toggle="collapse" data-target=".navbarNav" 
				aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse navbarNav">
				<LinkList links_arre={links_arre} />
			</div>
		</nav>
		
	);
}


export default Navigation;