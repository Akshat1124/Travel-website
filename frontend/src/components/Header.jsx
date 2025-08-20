import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext.jsx';
import { GoPerson } from "react-icons/go";

const Header = () => {
  const { userInfo, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const logoutHandler = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-40">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <h1 className="text-2xl font-bold text-blue-600">
            <Link to="/">Travelista</Link>
          </h1>
          <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Home</Link>
          <Link to="/mybookings" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">My Bookings</Link>
        </div>
        
        {/* Mobile Header */}
        <div className="md:hidden">
           <h1 className="text-2xl font-bold text-blue-600">
            <Link to="/">Travelista</Link>
          </h1>
        </div>

        {/* User Info / Login */}
        <div className="flex items-center space-x-4">
          {userInfo ? (
            <>
              {userInfo.isAdmin && (
                 <Link to="/admin/dashboard" className="hidden md:block text-gray-600 hover:text-blue-600 transition-colors duration-200">Admin</Link>
              )}
               <button onClick={logoutHandler} className="hidden md:block bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors duration-200 text-sm">
                Logout
              </button>
              <Link to="/profile" className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full">
                <GoPerson size={22} className="text-gray-600" />
              </Link>
            </>
          ) : (
             <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200 text-sm">Login</Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;