const TOKEN = 'token';

let localStorage = global.localStorage;

export function saveToken(token) {
	localStorage.setItem(TOKEN, token);
}

export function getToken() {
	return localStorage.getItem(TOKEN);
}

