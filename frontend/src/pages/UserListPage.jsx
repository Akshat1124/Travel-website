import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from '../hooks/useAuth';

const UserListPage = () => {
  const [users, setUsers] = useState([]);
  const { getAuthHeaders } = useAuth();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await axios.get('/api/users', getAuthHeaders());
        setUsers(data);
      } catch (error) {
        console.error('Failed to fetch users', error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>All Users</h2>
      {users.map(user => (
        <div key={user._id} style={{ borderBottom: '1px solid #eee', padding: '10px 0' }}>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Admin:</strong> {user.isAdmin ? 'Yes' : 'No'}</p>
        </div>
      ))}
    </div>
  );
};

export default UserListPage;
