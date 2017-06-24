// import 'promise-polyfill';
// import 'isomorphic-fetch';
import {h, render} from 'preact';
import './style';
import {
	ApolloClient,
	ApolloProvider,
	createNetworkInterface
} from 'react-apollo';
import {getToken} from './lib/auth';

let root;

const networkInterface = createNetworkInterface({
	uri: 'http://localhost:3000/graphql'
});

networkInterface.use([{
	applyMiddleware(req, next) {
		if (!req.options.headers) {
			req.options.headers = {};
		}

		let token = getToken();

		req.options.headers['authorization'] = token ? token : null;

		next();
	}
}]);

const client = new ApolloClient({
	networkInterface
});

function init() {
	let App = require('./components/app').default;
	root    = render(<ApolloProvider client={client}><App /></ApolloProvider>, document.body, root);
}

// register ServiceWorker via OfflinePlugin, for prod only:
if (process.env.NODE_ENV === 'production') {
	require('./pwa');
}

// in development, set up HMR:
if (module.hot) {
	//require('preact/devtools');   // turn this on if you want to enable React DevTools!
	module.hot.accept('./components/app', () => requestAnimationFrame(init));
}

init();
