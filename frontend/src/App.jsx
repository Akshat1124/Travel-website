import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import TourDetailsPage from './pages/TourDetailsPage';
import MyBookingsPage from './pages/MyBookingsPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import TourListPage from './pages/TourListPage';
import UserListPage from './pages/UserListPage';
import TourCreatePage from './pages/TourCreatePage';
import TourEditPage from './pages/TourEditPage';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      {/* Add padding to the bottom of main to prevent content from being hidden by the bottom nav */}
      <main className="flex-grow container mx-auto p-4 md:p-6 pb-24 md:pb-6">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/tour/:id" element={<TourDetailsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/mybookings" element={<MyBookingsPage />} />
          
          {/* Placeholder routes for new nav items */}
          <Route path="/search" element={<h1>Search Page</h1>} />
          <Route path="/profile" element={<h1>Profile Page</h1>} />

          {/* Admin Routes */}
          <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
          <Route path="/admin/tourlist" element={<TourListPage />} />
          <Route path="/admin/userlist" element={<UserListPage />} />
          <Route path="/admin/tour/create" element={<TourCreatePage />} />
          <Route path="/admin/tour/:id/edit" element={<TourEditPage />} />
        </Routes>
      </main>
      
      <BottomNav />
      <div className="hidden md:block">
        <Footer />
      </div>
    </div>
  );
}

export default App;