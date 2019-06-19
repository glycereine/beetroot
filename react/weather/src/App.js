import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './assets/custom.css';


// import Header from "./components/Header";

import Navigation from "./components/Navigation";
import Main from "./components/Main";
import About from "./components/About";
import Contact from "./components/Contact";

// import Footer from "./components/Footer";


class App extends Component {
	render() {
		return (
			<Router>

				<Navigation />

				<Route
					exact
					component={Main}
					path="/"
				/>
				<Route
					exact
					component={About}
					path="/about"
				/>
				<Route
					exact
					component={Contact}
					path="/contact"
				/>

			</Router>

		);
	}
}

export default App;