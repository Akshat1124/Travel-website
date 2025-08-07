import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboardPage = () => {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        <div style={{ border: '1px solid #ccc', padding: '20px' }}>
          <h3>Manage Tours</h3>
          <Link to="/admin/tourlist">Go to Tours</Link>
        </div>
        <div style={{ border: '1px solid #ccc', padding: '20px' }}>
          <h3>Manage Users</h3>
          <Link to="/admin/userlist">Go to Users</Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
