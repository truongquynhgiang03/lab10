import React from 'react';
import { useDispatch } from 'react-redux';
import { clearToken } from '../features/authSlice';
import { useNavigate, Link } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(clearToken());
    navigate('/login');
  };

  return (
    <div>
      <h2>Welcome to Home Page</h2>
      <nav>
        <Link to="/about">Go to About</Link>
      </nav>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
