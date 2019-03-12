// import React, { Component } from 'react';

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var User = function (_React$Component) {
	_inherits(User, _React$Component);

	function User() {
		_classCallCheck(this, User);

		return _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).apply(this, arguments));
	}

	_createClass(User, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			return React.createElement(
				'li',
				{ className: this.props.isChecked ? 'checkbox' : '' },
				React.createElement('input', {
					type: 'checkbox',
					onChange: function onChange() {
						_this2.props.toggleCheckboxChange();
					}
				}),
				React.createElement(
					'span',
					{ className: 'text-danger' },
					this.props.name
				)
			);
		}
	}]);

	return User;
}(React.Component);

var UserList = function (_React$Component2) {
	_inherits(UserList, _React$Component2);

	function UserList(props) {
		_classCallCheck(this, UserList);

		var _this3 = _possibleConstructorReturn(this, (UserList.__proto__ || Object.getPrototypeOf(UserList)).call(this, props));

		_this3.state = {
			isChecked: new Array(_this3.props.users.length).fill(false)
		};

		// Эта привязка обязательна для работы `this` в колбэке.
		// если не передвютсяникакие параметры в функцию
		//this.toggleCheckboxChange = this.toggleCheckboxChange.bind(this);
		return _this3;
	}

	_createClass(UserList, [{
		key: 'toggleCheckboxChange',
		value: function toggleCheckboxChange(index) {
			this.setState(function (prevState) {
				return {
					isChecked: prevState.isChecked.map(function (value, ind) {
						return ind === index ? !value : value;
					})
				};
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this4 = this;

			var listItems = this.props.users.map(function (user, index) {
				return React.createElement(User, { key: index,
					name: user.name,
					isChecked: _this4.state.isChecked[index],
					toggleCheckboxChange: _this4.toggleCheckboxChange.bind(_this4, index)
				});
			});

			return React.createElement(
				'ul',
				{ className: 'user-list' },
				listItems
			);
		}
	}]);

	return UserList;
}(React.Component);

// export default UserList;

ReactDOM.render(UserList, document.getElementById('userlist'));