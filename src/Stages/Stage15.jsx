import React, { Component } from 'react';
import '../Common/Stage.scss';
import SimpleButton from '../Common/SimpleButton';
import SimpleBar from '../Common/SimpleBar';
import StageHeader from '../Common/StageHeader';
import Confetti from '../Common/Confetti';
import update from 'immutability-helper';
const classes = require('classnames');

class Stage extends Component {

	/////////////////////////////////////////////////////////////////////////////
	//
	//   STAGE 15
	//
	/////////////////////////////////////////////////////////////////////////////

	constructor(props) {
		super(props);
		
		this.state = {
			grofit: 0
		};
	}

	/////////////////////////////////////////////////////////////////////////////
	//
	//   YOUR CODE HERE
	//
	/////////////////////////////////////////////////////////////////////////////

	increaseGrofit() {
		// TODO: Add 500 grofit each time you press the button. Click until it gets > 9000;

		
	}

	/////////////////////////////////////////////////////////////////////////////
	//
	//   NOTHING TO SEE HERE
	//
	/////////////////////////////////////////////////////////////////////////////

	stageComplete() {	
		const complete = this.state.grofit && this.state.grofit > 9000;
		if (complete) {
			Confetti.celebrate();
		}
		return complete;
	}

	nextStage() {
		if (this.stageComplete()) {
			const nextStageURL = `/${this.props.stage + 1}`;
			this.props.history.push(nextStageURL);
		}
	}

	echoState() {
		const echoString = `(Stage ${this.props.stage}) State:`;
		console.log(echoString, this.state);
	}

	render() {
		const complete = this.stageComplete();

		const nextAction = () => {this.nextStage()};
		const stateAction = () => {this.echoState()};
		const grofitAction = () => {this.increaseGrofit()};

		return (
			<div className="page-root-stage">
				<div className="stage-content">
					<StageHeader selection={this.props.stage}/>
					<div className="stage-body">
						<div className="grofit-wrapper">
							<SimpleBar max={9500} value={this.state.grofit}/>
						</div>
						<div className="actions">
							<div className="action">
								<SimpleButton active={true} label={"State"} action={stateAction}/>
							</div>
							<div className="action full">
								<SimpleButton active={true} label={"Increase Grofit"} action={grofitAction}/>
							</div>
						</div>
						<div className="separator"></div>
						<SimpleButton locked={!complete} active={complete} label={"Next Stage"} action={nextAction}/>
					</div>
				</div>
			</div>
		);
	}
}

export default Stage;