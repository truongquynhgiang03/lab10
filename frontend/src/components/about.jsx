import React from 'react';
import { useDispatch } from 'react-redux';
import { clearToken } from '../features/authSlice';
import { useNavigate, Link } from 'react-router-dom';

const About = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(clearToken());
    navigate('/login');
  };

  return (
    <div>
      <h2>Welcome to About us</h2>
      <nav>
        <Link to="/">Back to Home</Link>
      </nav>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default About;
