import {h, Component} from 'preact';
import style from './style.less';
import {graphql} from 'react-apollo';
import SIGNUP_MUTATION from '../../graphql/mutations/signup.graphql';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

@graphql(SIGNUP_MUTATION)
export default class SignupForm extends Component {

	constructor(props) {
		super(props);

		this.setState({
			username      : '',
			password      : '',
			repeatPassword: '',
			accountCreated: false,
		});
	}

	submit = event => {
		event.preventDefault();

		let {mutate}             = this.props;
		let {username, password} = this.state;

		mutate({
			variables: {
				input: {
					username,
					password,
				},
			},
		}).then(() => {
			this.setState({
				accountCreated: true,
			});
			// Should act
		}).catch(error => {
			console.error(error);
		});
	};

	setUsername = event => this.setState({username: event.target.value});

	setPassword = event => this.setState({password: event.target.value});

	setRepeatPassword = event => this.setState({repeatPassword: event.target.value});

	isPasswordValid = () => this.state.password.length > 10;

	isRepeatPasswordValid = () => this.state.password === this.state.repeatPassword;

	renderAccountCreated() {
		const {username} = this.state;

		return <div class={style.signup}>
			<Paper class={style.signedUp}>
				<h1 class={style.title}>Successful signup !</h1>
				<Divider/>
				<p>You created an account named <em>{username}</em>. Remember never to share your password with anyone : we will never
					ask it to you or send it to you in any form.</p>
			</Paper>
		</div>;
	}

	render({}, {accountCreated, username, password, repeatPassword}) {
		if (accountCreated) {
			return this.renderAccountCreated();
		}

		return (
			<div class={style.signup}>
				<form onSubmit={this.submit}>
					<Paper class={style.signupForm}>
						<h1 class={style.title}>Signup</h1>

						<TextField style={{width: '100%'}} name="username" hintText="John Doe." onChange={this.setUsername}
											 value={username}/>

						<TextField style={{width: '100%'}} name="password" hintText="Strong password" onChange={this.setPassword}
											 value={password}
											 errorText={this.isPasswordValid() ? '' : 'Password is not valid.'}
											 type="password"/>

						<TextField style={{width: '100%'}} name="repeat-password" hintText="Repeat password"
											 onChange={this.setRepeatPassword}
											 value={repeatPassword}
											 errorText={this.isRepeatPasswordValid() ? '' : 'The password must match the first one.'}
											 type="password"/>

						<RaisedButton style={{'margin-top': '1rem'}} label="Signup" type="submit" primary={true}
													disabled={!(this.isPasswordValid() && this.isRepeatPasswordValid())}/>
					</Paper>
				</form>
			</div>
		);
	}
}
