import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './components/login';
import Home from './components/home';
import About from './components/about';

function App() {
  const token = useSelector((state) => state.auth.token);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={token ? <About /> : <Navigate to="/login" />} />
      <Route path="/" element={token ? <Home /> : <Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
