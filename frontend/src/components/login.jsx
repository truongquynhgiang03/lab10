import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setToken } from '../features/authSlice';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (!username || !password) {
      alert("Username and Password are required");
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:5000/api/register', { username, password });
      dispatch(setToken(response.data.token));
      navigate('/');
    } catch (error) {
      console.error('Registration failed', error);
      alert("Registration failed");
    }
  };
  

  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Login</button>
    </div>
  );
};

export default Login;
