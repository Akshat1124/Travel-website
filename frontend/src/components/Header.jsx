import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext.jsx';

const Header = () => {
  const { userInfo, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const logoutHandler = () => {
    logout();
    navigate('/login');
  };

  return (
    <header style={{ padding: '1rem', borderBottom: '1px solid #ccc', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1>
        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Travelista</Link>
      </h1>
      <nav>
        <Link to="/" style={{ margin: '0 10px' }}>Home</Link>
        {userInfo ? (
          <>
            <Link to="/mybookings" style={{ margin: '0 10px' }}>My Bookings</Link>
            {userInfo.isAdmin && (
               <Link to="/admin/dashboard" style={{ margin: '0 10px' }}>Admin Dashboard</Link>
            )}
            <span style={{ margin: '0 10px' }}>Welcome, {userInfo.name}</span>
            <button onClick={logoutHandler}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" style={{ margin: '0 10px' }}>Login</Link>
            <Link to="/register" style={{ margin: '0 10px' }}>Register</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
