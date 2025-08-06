import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../context/AuthContext.jsx';
import useAuth from '../hooks/useAuth';

const MyBookingsPage = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const { userInfo } = useContext(AuthContext);
  const { getAuthHeaders } = useAuth();

  useEffect(() => {
    const fetchMyBookings = async () => {
      if (!userInfo) {
        setLoading(false);
        return;
      }
      try {
        const { data } = await axios.get('/api/bookings', getAuthHeaders());
        setBookings(data);
      } catch (error) {
        console.error('Failed to fetch bookings', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMyBookings();
  }, [userInfo]); // <-- THE FIX IS HERE

  if (loading) {
    return <p>Loading bookings...</p>;
  }

  return (
    <div>
      <h2>My Bookings</h2>
      {bookings.length === 0 ? (
        <p>You have no bookings.</p>
      ) : (
        <ul>
          {bookings.map((booking) => (
            <li key={booking._id} style={{ border: '1px solid #ccc', margin: '10px 0', padding: '10px' }}>
              <strong>{booking.tour?.name || 'Tour not available'}</strong> - {booking.tour?.destination || ''}
              <p>Booked on: {new Date(booking.createdAt).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyBookingsPage;
