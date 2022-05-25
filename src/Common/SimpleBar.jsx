import React, { Component } from 'react';
import './Inputs.scss';
const classes = require('classnames');

class SimpleBar extends Component {
	render() {
		const max = this.props.max || 100;
		const value = this.props.value || 1;
		const progressPercent = Math.floor((Math.min(Math.max(0, (value || 1)), max) / max) * 100);
		const widthString = `${progressPercent}%`;
		return (
			<div className="component-root-simple-bar">
				<div className="abs background"></div>
				<div className="abs value" style={{width: widthString}}></div>
			</div>
		);
	}
}

export default SimpleBar;