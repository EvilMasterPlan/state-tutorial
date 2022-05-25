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
	//   STAGE 16
	//
	/////////////////////////////////////////////////////////////////////////////

	constructor(props) {
		super(props);
		
		this.state = {
			factions: {
				grineer: 1000,
				corpus: 0,
				sentient: 300
			}
		};
	}

	/////////////////////////////////////////////////////////////////////////////
	//
	//   YOUR CODE HERE
	//
	/////////////////////////////////////////////////////////////////////////////

	testMyCode() {
		/*

		TODO: Each time you hit the "Balance Grofit" button:

		    - Add 50 grofit to the corpus
		    - subtract 50 grofit from the grineer
		    - subtract 50 grofit fro the sentient

		    Remember to use the update function (with {$set: x})

		    Hit the button until the corpus has ALL the grofit

		*/

		
	}

	/////////////////////////////////////////////////////////////////////////////
	//
	//   NOTHING TO SEE HERE
	//
	/////////////////////////////////////////////////////////////////////////////

	stageComplete() {	
		const complete = this.state.factions.grineer <= 0 && this.state.factions.sentient <= 0 & this.state.factions.corpus >= 1000;
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
		const testMyCode = () => {this.testMyCode()};

		return (
			<div className="page-root-stage">
				<div className="stage-content">
					<StageHeader selection={this.props.stage}/>
					<div className="stage-body">
						<div className="grofit-wrapper">
							<div className="grofit">
								<div className={classes("label", {active: this.state.factions.grineer >= 1000})}>G</div>
								<SimpleBar max={1000} value={this.state.factions.grineer}/>
							</div>
							<div className="grofit">
								<div className={classes("label", {active: this.state.factions.corpus >= 1000})}>C</div>
								<SimpleBar max={1000} value={this.state.factions.corpus}/>
							</div>
							<div className="grofit">
								<div className={classes("label", {active: this.state.factions.sentient >= 1000})}>S</div>
								<SimpleBar max={1000} value={this.state.factions.sentient}/>
							</div>
						</div>
						<div className="actions">
							<div className="action">
								<SimpleButton active={true} label={"State"} action={stateAction}/>
							</div>
							<div className="action full">
								<SimpleButton active={true} label={"Balance Grofit"} action={testMyCode}/>
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