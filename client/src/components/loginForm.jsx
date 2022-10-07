import React, { useContext, useState } from 'react'
import { userContext } from '../context/userContext';
import { loginUser } from '../services/auth';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { token, setToken } = useContext(userContext);

  const handleSubmit = async(e) => {
    e.preventDefault();
    const response = await loginUser({ username, password });
    console.log(response)
    setToken(response.token);
    window.sessionStorage.setItem("token", response.token);
    // window.sessionStorage.setItem("username", username);
  }

  return (
    <div className="App">
      <form action="">
        <label htmlFor="username">
          Username
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          password
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}
