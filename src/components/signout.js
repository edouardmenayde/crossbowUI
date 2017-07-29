import {withApollo} from 'react-apollo';
import {removeToken} from "../lib/auth";
import {route} from 'preact-router';

class Signout {
    componentWillMount() {
        removeToken();

        this.props.client.resetStore();

        route('/');
    }

    render() {
        return null;
    }
}

export default withApollo(Signout);
