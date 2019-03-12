ReactDOM.render(
	<h1>Hello, world!</h1>,
	document.getElementById('root')
);




function Welcome(props) {
	return <h1>Привет, {props.name}</h1>;
}

const element = <Welcome name="Алиса" />;

ReactDOM.render(
	element,
	document.getElementById('root')
);