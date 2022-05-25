import React, { Component } from 'react';
import './Inputs.scss';
import { stageCount } from '../Common/Utils';
const classes = require('classnames');

class StageHeader extends Component {

	renderDot(index) {
		const current = (this.props.selection || 1);
		const active = index === (current - 1);
		const complete = index < (current - 1);
		const key = `dot_${index}`;
		return (<div key={key} className={classes("dot", {active: active, complete: complete})}></div>);
	}

	render() {
		const index = (this.props.selection || 1);
		return (
			<div className="component-root-header">
				<div className="title">{`Stage ${index} / ${stageCount}`}</div>
				<div className="dots">
					{Array(stageCount).fill(0).map((e, index) => this.renderDot(index))}
				</div>
			</div>
		);
	}
}

export default StageHeader;