import React, { Component } from 'react';
import '../Common/Stage.scss';
import SimpleButton from '../Common/SimpleButton';
import StageHeader from '../Common/StageHeader';
import Confetti from '../Common/Confetti';
import update from 'immutability-helper';
const classes = require('classnames');

class Stage extends Component {

	/////////////////////////////////////////////////////////////////////////////
	//
	//   STAGE 14
	//
	/////////////////////////////////////////////////////////////////////////////

	constructor(props) {
		super(props);
		
		this.state = {
			a: false,
			b: false,
			c: false
		};
	}

	/////////////////////////////////////////////////////////////////////////////
	//
	//   YOUR CODE HERE
	//
	/////////////////////////////////////////////////////////////////////////////

	toggleA() {
		// TODO: toggle just the "a" state (remember Stage 8)

		
	}

	toggleB() {
		// TODO: toggle just the "b" state

		
	}

	toggleC() {
		// TODO: toggle just the "c" state

		
	}

	/////////////////////////////////////////////////////////////////////////////
	//
	//   NOTHING TO SEE HERE
	//
	/////////////////////////////////////////////////////////////////////////////

	stageComplete() {	
		const complete = this.state.a && this.state.b && this.state.c;
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
		const action_a = () => {this.toggleA()};
		const action_b = () => {this.toggleB()};
		const action_c = () => {this.toggleC()};

		return (
			<div className="page-root-stage">
				<div className="stage-content">
					<StageHeader selection={this.props.stage}/>
					<div className="stage-body">
						<div className="panels">
							<div className={classes("panel", {active: this.state.a})}>A</div>
							<div className={classes("panel", {active: this.state.b})}>B</div>
							<div className={classes("panel", {active: this.state.c})}>C</div>
						</div>
						<div className="actions">
							<div className="action">
								<SimpleButton active={true} label={"State"} action={stateAction}/>
							</div>
							<div className="action full">
								<div className="action"><SimpleButton active={true} label={"A"} action={action_a}/></div>
								<div className="action"><SimpleButton active={true} label={"B"} action={action_b}/></div>
								<div className="action"><SimpleButton active={true} label={"C"} action={action_c}/></div>
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