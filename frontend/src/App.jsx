import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import TourDetailsPage from './pages/TourDetailsPage';
import MyBookingsPage from './pages/MyBookingsPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import TourListPage from './pages/TourListPage';
import UserListPage from './pages/UserListPage';
import TourCreatePage from './pages/TourCreatePage';
import TourEditPage from './pages/TourEditPage'; // <-- Import new page

function App() {
  return (
    <div>
      <Header />
      <main style={{ padding: '2rem' }}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/tour/:id" element={<TourDetailsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/mybookings" element={<MyBookingsPage />} />

          {/* Admin Routes */}
          <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
          <Route path="/admin/tourlist" element={<TourListPage />} />
          <Route path="/admin/userlist" element={<UserListPage />} />
          <Route path="/admin/tour/create" element={<TourCreatePage />} />
          <Route path="/admin/tour/:id/edit" element={<TourEditPage />} /> {/* <-- Add new route */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
