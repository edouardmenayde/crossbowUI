import {h, Component} from 'preact';
import {Router} from 'preact-router';

import Header from './header';
import Home from './home';
import Signup from './signup';
import Signin from './signin';
import Container from './container';
import Dashboard from './dashboard';
import ProjectCreateWizard from './dashboard/project-create-wizard';

export default class App extends Component {
	/** Gets fired when the route changes.
	 *  @param {Object} event    "change" event from [preact-router](http://git.io/preact-router)
	 *  @param {string} event.url  The newly routed URL
	 */
	handleRoute = event => {
		this.currentUrl = event.url;
	};

	render() {
		return (
			<div id="app">
				<Header />
				<Container>
					<Router onChange={this.handleRoute}>
						<Home path="/"/>
						<Signup path="/signup"/>
						<Signin path="/signin"/>
						<Dashboard path="/dashboard"/>
						<ProjectCreateWizard path="/dashboard/project/create"/>
					</Router>
				</Container>
			</div>
		);
	}
}
