const BASE_URL = 'http://localhost:9000';

function postJson(path: string, data: unknown): Promise<Response> {
  return fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
}

type credentials = {
  username: string;
  password: string;
};

export function login(credentials: credentials) {
  return postJson('/auth/login', credentials);
}
