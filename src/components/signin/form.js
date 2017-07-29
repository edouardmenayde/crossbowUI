import {h, Component} from 'preact';
import style from './style.less';
import {graphql} from 'react-apollo';
import SIGNIN_MUTATION from '../../graphql/mutations/signin-mutation.graphql';
import {route} from 'preact-router';
import {saveToken} from '../../lib/auth';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

@graphql(SIGNIN_MUTATION)
export default class SigninForm extends Component {
	submit = event => {
		event.preventDefault();

		let {mutate} = this.props;

		mutate({
			variables    : {
				input: this.state,
			},
			updateQueries: {
				me: (previousData, {mutationResult: {data: {signin: {user}}}}) => {
					return {
						...previousData,
						me: {
							...previousData.me,
							user,
						},
					};
				},
			},
		}).then(({data: {signin: {token}}}) => {
			saveToken(token);

			route('/dashboard');
		}).catch(error => {
			console.error(error);
		});
	};

	setUsername = event => this.setState({username: event.target.value});

	setPassword = event => this.setState({password: event.target.value});

	render({}, {username, password}) {
		return (
			<div class={style.signin}>
				<form onSubmit={this.submit}>
					<Paper class={style.signinForm}>
						<h1 class={style.title}>Signin</h1>

						<TextField style={{width: '100%'}} name="username" hintText="John Doe." onChange={this.setUsername}
											 value={username}/>

						<TextField style={{width: '100%'}} name="password" hintText="Strong password" onChange={this.setPassword}
											 value={password}
											 type="password"/>

						<RaisedButton style={{'margin-top': '1rem'}} label="Signin" type="submit" primary={true}/>
					</Paper>
				</form>
			</div>
		);
	}
}
