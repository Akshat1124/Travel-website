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
      } catch (error) {
        console.error('Error fetching tours:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading tours...</div>;
  }

  return (
    <div>
      <div className="text-center py-10 md:py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">Find Your Next Adventure</h1>
        <p className="text-lg text-gray-600 mt-4">Unforgettable journeys to the world's most amazing destinations.</p>
      </div>

      <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">Available Tours</h2>

      {tours.length === 0 ? (
        <p className="text-center text-gray-500 py-10">No tours available at the moment.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <Tour key={tour._id} tour={tour} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;