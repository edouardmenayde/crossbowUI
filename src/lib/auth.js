const TOKEN        = 'token';
const localStorage = global.localStorage;

export function saveToken(token) {
    localStorage.setItem(TOKEN, token);
}

export function removeToken() {
    localStorage.removeItem(TOKEN);
}

export function getToken() {
    return localStorage.getItem(TOKEN);
}
