import {h, Component} from 'preact';
import {Router, route} from 'preact-router';
import {getToken} from "../lib/auth";

import Header from './header';
import Home from './home';
import NotFound from './not-found';
import Signup from './signup';
import Signin from './signin';
import Signout from './signout';
import Container from './container';
import Dashboard from './dashboard';
import ProjectCreateWizard from './dashboard/project-create-wizard';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class AuthenticatedRoute extends Component {
    componentWillMount() {
        this.authenticated = !!getToken();
        if (!this.authenticated) {
            console.log(this.authenticated);
            route('/signin');
        }
    }

    render({route: Route, ...props}) {
        return this.authenticated && <Route {...props} />;
    }
}

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
            <MuiThemeProvider>
                <div id="app">
                    <Header/>
                    <Container>
                        <Router onChange={this.handleRoute}>
                            <Home path="/"/>
                            <Signin path="/signin"/>
                            <Signup path="/signup"/>
                            <AuthenticatedRoute path="/signout" route={Signout}/>
                            <AuthenticatedRoute path="/dashboard" route={Dashboard}/>
                            <AuthenticatedRoute path="/dashboard/project/create" route={ProjectCreateWizard}/>
                            <NotFound default/>
                        </Router>
                    </Container>
                </div>
            </MuiThemeProvider>
        );
    }
}
