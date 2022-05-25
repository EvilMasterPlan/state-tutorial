import React, { Component } from 'react';
import '../Common/Stage.scss';
import SimpleButton from '../Common/SimpleButton';
import StageHeader from '../Common/StageHeader';
import Confetti from '../Common/Confetti';

class Stage extends Component {

	/////////////////////////////////////////////////////////////////////////////
	//
	//   STAGE 1
	//
	/////////////////////////////////////////////////////////////////////////////

	constructor(props) {
		super(props);
		
		this.state = {
			win: false
		};
	}

	/////////////////////////////////////////////////////////////////////////////
	//
	//   YOUR CODE HERE
	//
	/////////////////////////////////////////////////////////////////////////////

	testMyCode() {
		/*

		TODO: set the win state to true using this.setState()
		Retype the code below (do not uncomment it!)

		this.setState({
		    win: true
		});

		*/

		
	}

	/////////////////////////////////////////////////////////////////////////////
	//
	//   NOTHING TO SEE HERE
	//
	/////////////////////////////////////////////////////////////////////////////

	stageComplete() {
		const complete = this.state.win === true;
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