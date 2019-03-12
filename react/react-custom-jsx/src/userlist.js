// import React, { Component } from 'react';

'use strict';

class User extends React.Component {
	render() {
		return (
			<li className={this.props.isChecked ? 'checkbox': ''} >
				<input
					type="checkbox"
					onChange={() => { this.props.toggleCheckboxChange()}}
				/>
				<span className="text-danger">{this.props.name}</span>
			</li>
		)
	}
}

class UserList extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			isChecked: new Array( this.props.users.length ).fill(false)
		};

		// Эта привязка обязательна для работы `this` в колбэке.
		// если не передвютсяникакие параметры в функцию
		//this.toggleCheckboxChange = this.toggleCheckboxChange.bind(this);
	};

	toggleCheckboxChange(index) {
		this.setState( (prevState) => ({
			isChecked: prevState.isChecked.map( (value, ind) => {
				return (ind === index) ? !value : value;
			})
		}));
	}

	render() {
		const listItems = this.props.users.map( (user,index) => {
			return  <User key={index}
			              name={user.name}
			              isChecked={this.state.isChecked[index]}
			              toggleCheckboxChange={this.toggleCheckboxChange.bind(this,index)}
					/>
		});

		return (
			<ul className="user-list">
				{listItems}
			</ul>
		);
	}
}

export default UserList;