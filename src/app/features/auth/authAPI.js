export function apiLogin(credentials) {
	return fetch('/api/login', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(credentials),
	}).then((res) => {
		if (!res.ok) {
			throw new Error('Failed to login');
		}
		return res.json();
	});
}
