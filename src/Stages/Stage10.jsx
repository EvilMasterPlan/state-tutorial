import React, { Component } from 'react';
import '../Common/Stage.scss';
import SimpleButton from '../Common/SimpleButton';
import StageHeader from '../Common/StageHeader';
import Confetti from '../Common/Confetti';
import update from 'immutability-helper';

class Stage extends Component {

	/////////////////////////////////////////////////////////////////////////////
	//
	//   STAGE 10
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

		TODO: but what if we just wanted to replace ONE value in the state? Instead of replacing a whole top-level property (like "foods")?

			We use the "update" function to help us modify partial state.
			When you see things like "{$set: X}", that's using the update library.
			update is a function. It takes two objects, and uses one to modify the other:

			newObject = update(oldObject, howToModify);
			newObject = update({}, {})

			to set JUST the sandwich property of foods, we'll do:

			update(this.state, {
				foods: {
					sandwich: {$set: 'ham'}
				}
			});

			^ the first parameter is "this.state" (the old object).
			^ the second parameter is how to modify the old object:

			{
				foods: {
					sandwich: {$set: 'ham'}
				}
			}

			so all together:

			this.setState(update(this.state, {
				foods: {
					sandwich: {$set: 'ham'}
				}
			}));

		*/
		
		
		
		this.setState(update(this.state, {
			foods: {
				sandwich: {$set: 'ham'}
			}
		}));
		
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