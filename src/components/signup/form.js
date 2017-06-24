import {h, Component} from 'preact';
import style from './style.less';
import {
	gql,
	graphql
} from 'react-apollo';

class SignupForm extends Component {
	submit = event => {
		event.preventDefault();

		let {mutate} = this.props;

		mutate({
			variables: {
				input: this.state
			}
		}).then(() => {
			// Should act
		}).catch(error => {
			console.error(error);
		});
	};

	setUsername = event => this.setState({username: event.target.value});

	setPassword = event => this.setState({password: event.target.value});

	render({}, {username, password}) {
		return (
			<div class={style.signup}>
				<form class="form" onSubmit={this.submit}>
					<fieldset>
						<legend>Signup</legend>

						<div class="form-group">
							<label for="username">Username</label>
							<input name="username" value={username} type="text" placeholder="John Doe." required autofocus
										 onInput={this.setUsername}/>
						</div>

						<div class="form-group">
							<label for="password">Password</label>
							<input name="password" value={password} type="password" placeholder="Strong password" required
										 onInput={this.setPassword}/>
						</div>

						<div class="form-group">
							<input name="submit" type="submit"/>
						</div>
					</fieldset>
				</form>
			</div>
		);
	}
}


const signupMutation = gql`
	mutation signup($input: SignupInput!) {
		signup(input: $input) {
			user{
				id,
				username
			}
		}
	}
`;

const FormSignupWithMutation = graphql(signupMutation)(SignupForm);

export default FormSignupWithMutation;
