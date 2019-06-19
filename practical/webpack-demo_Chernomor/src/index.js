import _ from 'lodash';
import "./scss/main.scss";

function component() {
	let element = document.createElement('div');

	// Lodash, currently included via a script, is required for this line to work
	element.innerHTML = _.join(['Hello 6', 'webpack'], ' ');

	console.log("hello, world sdffsdfsdfsdsdf 222");

	return element;
}

document.body.appendChild(component());