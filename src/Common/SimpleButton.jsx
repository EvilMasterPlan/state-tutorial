import React, { Component } from 'react';
import './Inputs.scss';
import { BsShieldLock } from 'react-icons/bs';
const classes = require('classnames');

class SimpleButton extends Component {
	render() {
		const label = this.props.label || '';
		const action = this.props.action || (() => {});
		const locked = this.props.locked || false;
		return (
			<div onClick={action} className={classes("component-root-simple-button noselect", {active: this.props.active})}>
				{locked && <div className="icon"><BsShieldLock/></div>}
				<div className="label noselect">{label}</div>
			</div>
		);
	}
}

export default SimpleButton;