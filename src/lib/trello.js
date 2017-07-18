function constructUrl(config) {
	const matching = /^[a-z]+:\/\/[^\/]*/.exec(window.location);

	if (!matching) {
		return '';
	}

	return `${config.authEndpoint}/${config.version}/authorize?response_type=token&key=${config.key}&return_url=${matching[0]}&callback_method=postMessage&scope=${config.scope.join('%2C')}&expiration=${config.expiration}&name=${config.name}`;
}

export function authorize(config = {}) {
	Object.assign(config, {
		version     : 1,
		authEndpoint: 'https://trello.com',
		key         : '44063890f80c4341953060d5f146c6ee',
		scope       : ['write', 'read'],
		expiration  : 'never',
		name        : 'Crossbow',
		width       : 420,
		height      : 470,
	}, config);

	const width  = config.width;
	const height = config.height;
	const left   = window.screenX + (window.innerWidth - width) / 2;
	const top    = window.screenY + (window.innerHeight - height) / 2;

	const url = constructUrl(config);

	let openedWindow = window.open(url, 'Trello', `width=${width},height=${height},left=${left},top=${top}`);

	return new Promise((resolve, reject) => {
		window.addEventListener('message', function (event) {
			openedWindow.close();
			window.removeEventListener('message', this, false);

			if (!event.data) {
				return reject();
			}

			resolve(event.data);
		}, false);
	});
}
