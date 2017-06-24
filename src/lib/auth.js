const TOKEN = 'token';

let localStorage = global.localStorage;

if (!localStorage) {
	console.warn('Local storage is not supported. Falling back to a mock.');

	class MockLocalStorage {
		storage = new Map();

		getItem(key) {
			return this.storage.get(key);
		}

		setItem(key, value) {
			this.storage.set(key, value);
		}
	}

	localStorage = new MockLocalStorage();
}

export function saveToken(token) {
	localStorage.setItem(TOKEN, token);
}

export function getToken() {
	return localStorage.getItem(TOKEN);
}

