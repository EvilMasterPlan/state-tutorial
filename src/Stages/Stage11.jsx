import React, { Component } from 'react';
import '../Common/Stage.scss';
import SimpleButton from '../Common/SimpleButton';
import StageHeader from '../Common/StageHeader';
import Confetti from '../Common/Confetti';
import update from 'immutability-helper';

class Stage extends Component {

	/////////////////////////////////////////////////////////////////////////////
	//
	//   STAGE 11
	//
	/////////////////////////////////////////////////////////////////////////////

	constructor(props) {
		super(props);
		
		this.state = {
			foods: {
				pizza: 'pineapple',
				sandwich: 'fish'
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

		TODO: let's try again, but with fewer hints. Change the sandwich to 'ham' using both

			- setState
			- update function

			try not to reference previous stages

		*/
		
		
	}

	/////////////////////////////////////////////////////////////////////////////
	//
	//   NOTHING TO SEE HERE
	//
	/////////////////////////////////////////////////////////////////////////////

	stageComplete() {
		const complete = (this.state.foods || {}).sandwich === 'ham';
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

		const testAction = () => {this.testMyCode()};
		const nextAction = () => {this.nextStage()};
		const stateAction = () => {this.echoState()};

		return (
			<div className="page-root-stage">
				<div className="stage-content">
					<StageHeader selection={this.props.stage}/>
					<div className="stage-body">
						<div className="actions">
							<div className="action"><SimpleButton active={true} label={"State"} action={stateAction}/></div>
							<div className="action full"><SimpleButton active={true} label={"Test My Code"} action={testAction}/></div>
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