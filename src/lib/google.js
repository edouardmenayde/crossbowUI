// export function authorize(config = {}) {
// 	console.log('auth')
// 	return new Promise((resolve) => {
//
// 		Object.assign(config, {
// 			authEndpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
// 			key         : '1294422106-7cibi4rhbn5b5ds3j4ap8kfm90stbm2i.apps.googleusercontent.com',
// 			scope       : ['https://www.googleapis.com/auth/drive']
// 		}, config);
//
// 		const form = document.createElement('form');
//
// 		form.setAttribute('method', 'GET'); // Send as a GET request.
// 		form.setAttribute('action', config.authEndpoint);
//
// 		const params = {
// 			'client_id'             : config.key,
// 			'redirect_uri'          : 'http://localhost:8080',
// 			'scope'                 : config.scope.join('%2C'),
// 			'state'                 : 'try_sample_request',
// 			'include_granted_scopes': 'true',
// 			'response_type'         : 'token'
// 		};
//
// 		// Add form parameters as hidden input values.
// 		for (let p in params) {
// 			if (params.hasOwnProperty(p)) {
// 				let input = document.createElement('input');
//
// 				input.setAttribute('type', 'hidden');
// 				input.setAttribute('name', p);
// 				input.setAttribute('value', params[p]);
//
// 				form.appendChild(input);
// 			}
// 		}
//
// 		document.body.appendChild(form);
// 		form.submit();
// 	});
// }

function constructUrl(config) {
	const matching = /^[a-z]+:\/\/[^\/]*/.exec(window.location);

	if (!matching) {
		return '';
	}

	return `${config.authEndpoint}?client_id=${config.key}&redirect_uri=${config.redirectUri}&scope=${config.scope.join('%2C')}&include_granted_scopes=true&response_type=${config.responseType}&access_type=offline& state=state_parameter_passthrough_value`;
}

export function authorize(config = {}) {
	Object.assign(config, {
		authEndpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
		redirectUri : 'http://localhost:8080/dashboard/oauthcallback',
		key         : '1294422106-khj2u54eerknrg3435c4pc2knvdpvuab.apps.googleusercontent.com',
		scope       : ['https://www.googleapis.com/auth/drive'],
		responseType: 'code',
		width       : 420,
		height      : 470
	}, config);

	const width  = config.width;
	const height = config.height;
	const left   = window.screenX + (window.innerWidth - width) / 2;
	const top    = window.screenY + (window.innerHeight - height) / 2;

	const url = constructUrl(config);

	window.open(url, 'Google', `width=${width},height=${height},left=${left},top=${top}`);
}

