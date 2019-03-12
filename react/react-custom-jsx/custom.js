ReactDOM.render(React.createElement(
	'h1',
	null,
	'Hello, world!'
), document.getElementById('root'));

function Welcome(props) {
	return React.createElement(
		'h1',
		null,
		'\u041F\u0440\u0438\u0432\u0435\u0442, ',
		props.name
	);
}

var element = React.createElement(Welcome, { name: '\u0410\u043B\u0438\u0441\u0430' });

ReactDOM.render(element, document.getElementById('root'));