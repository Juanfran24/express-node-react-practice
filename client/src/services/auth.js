const API = 'http://localhost:4000';

export const registerUser = async (payload) => {
  const { username, password } = payload;
  const ENDPOINT = '/v1/register';
  const objReq = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password
    })
  }
  const path = `${API}${ENDPOINT}`;
  const response = await fetch(path, objReq);
  return response.json();
}

export const loginUser = async (payload) => {
  const { username, password } = payload;
  const ENDPOINT = '/v1/login';
  const objReq = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password
    })
  }
  const path = `${API}${ENDPOINT}`;
  const response = await fetch(path, objReq);
  return response.json();
}