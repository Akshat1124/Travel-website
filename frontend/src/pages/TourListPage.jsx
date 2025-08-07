import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from '../hooks/useAuth';
import { Link } from 'react-router-dom';

const TourListPage = () => {
  const [tours, setTours] = useState([]);
  const { getAuthHeaders } = useAuth();

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const { data } = await axios.get('/api/tours');
        setTours(data);
      } catch (error) {
        console.error('Error fetching tours:', error);
      }
    };
    fetchTours();
  }, []);

  const deleteHandler = async (id) => {
    if (window.confirm('Are you sure you want to delete this tour?')) {
      try {
        await axios.delete(`/api/tours/${id}`, getAuthHeaders());
        setTours(tours.filter((tour) => tour._id !== id));
      } catch (error) {
        console.error('Failed to delete tour', error);
        alert('Tour could not be deleted.');
      }
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>All Tours</h2>
        {/* THIS IS THE BUTTON THAT WAS MISSING */}
        <Link to="/admin/tour/create">
          <button style={{ backgroundColor: 'green', color: 'white', border: 'none', padding: '10px 15px', cursor: 'pointer' }}>
            + Create Tour
          </button>
        </Link>
      </div>
      {tours.map(tour => (
        <div key={tour._id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #eee', padding: '10px 0' }}>
          <div>
            <p><strong>Name:</strong> {tour.name}</p>
            <p><strong>Destination:</strong> {tour.destination}</p>
          </div>
          <div>
            <Link to={`/admin/tour/${tour._id}/edit`}>
              <button style={{ backgroundColor: 'blue', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer', marginRight: '5px' }}>
                Edit
              </button>
            </Link>
            <button onClick={() => deleteHandler(tour._id)} style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TourListPage;
