import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Tour from '../components/Tour';

const HomePage = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const { data } = await axios.get('/api/tours');
        setTours(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching tours:', error);
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '2rem' }}>Loading tours...</div>;
  }

  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ color: '#2c5aa0', marginBottom: '0.5rem' }}>Welcome to Travelista</h1>
        <p style={{ color: '#666', fontSize: '1.1rem' }}>Discover amazing destinations around the world</p>
      </div>
      
      <h2 style={{ color: '#333', marginBottom: '1rem' }}>Available Tours ({tours.length})</h2>
      
      {tours.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#666' }}>No tours available at the moment.</p>
      ) : (
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1rem',
          marginTop: '1rem'
        }}>
          {tours.map((tour) => (
            <Tour key={tour._id} tour={tour} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
