import {h, Component} from 'preact';
import style from '../style.less';

export default class ProjectNameInputStep extends Component {
	setProject = event => this.setState({project: event.target.value});

	submit = event => {
		event.preventDefault();

		const {project} = this.state;

		this.props.advance({project});
	};

	render() {
		let placeholder = 'Project name';

		return <div class={style.container}>
			<div className={style.inputGroup}>
				<form onSubmit={this.submit}>
					<input
						class={style.projectInput}
						required="required"
						id="project"
						name="projet"
						type="text"
						autocomplete="off"
						ref={(input) => {
							this.input = input;
						}}
						onInput={this.setProject}
					/>
					<label for="project" class={style.projectLabel}>{placeholder}</label>
				</form>
			</div>
		</div>;
	}

	componentWillMount() {
		this.setState({
			timeout: setTimeout(() => {
				this.input.focus();
			}, 350)
		});
	}

	componentWillUnmount() {
		const {timeout} = this.state;

		clearTimeout(timeout);
	}
}
