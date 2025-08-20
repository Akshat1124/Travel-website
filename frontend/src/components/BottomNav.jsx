import React from 'react';
import { NavLink } from 'react-router-dom';
import { GoHome, GoHeart, GoPerson } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";


const BottomNav = () => {
  const activeLink = 'text-blue-600';
  const inactiveLink = 'text-gray-500';

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-1px_10px_rgba(0,0,0,0.05)] md:hidden z-50">
      <div className="flex justify-around max-w-xl mx-auto">
        <NavLink to="/" className={({ isActive }) => `${isActive ? activeLink : inactiveLink} flex flex-col items-center justify-center p-3 w-full text-center hover:text-blue-600`}>
          <GoHome size={24} />
          <span className="text-xs mt-1">Home</span>
        </NavLink>
        <NavLink to="/mybookings" className={({ isActive }) => `${isActive ? activeLink : inactiveLink} flex flex-col items-center justify-center p-3 w-full text-center hover:text-blue-600`}>
          <GoHeart size={24} />
          <span className="text-xs mt-1">Bookings</span>
        </NavLink>
        <NavLink to="/search" className={({ isActive }) => `${isActive ? activeLink : inactiveLink} flex flex-col items-center justify-center p-3 w-full text-center hover:text-blue-600`}>
          <IoSearchOutline size={24} />
          <span className="text-xs mt-1">Search</span>
        </NavLink>
        <NavLink to="/profile" className={({ isActive }) => `${isActive ? activeLink : inactiveLink} flex flex-col items-center justify-center p-3 w-full text-center hover:text-blue-600`}>
          <GoPerson size={24} />
          <span className="text-xs mt-1">Profile</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default BottomNav;