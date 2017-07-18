import {h, Component} from 'preact';

export class Wizard extends Component {
	constructor(props) {
		super(props);

		this.setState({
			currentStep: 0,
			data       : this.props,
		});
	}

	advance = (stepDate) => {
		const {currentStep, data} = this.state;
		const {steps}             = this.props;

		const nextStep = currentStep + 1;

		if (nextStep >= steps.length) {
			return;
		}

		this.setState({
			currentStep: nextStep,
			data       : Object.assign({}, data, stepDate),
		});
	};

	retreat = () => {
		const {currentStep} = this.state;

		const previousStep = currentStep - 1;

		if (previousStep < 0) {
			return;
		}

		this.setState({
			currentStep: previousStep,
		});
	};

	render({steps}, {currentStep, data}) {
		const Step = steps[currentStep];

		return <Step advance={this.advance} retreat={this.retreat} wizardState={data}/>;
	}
}
