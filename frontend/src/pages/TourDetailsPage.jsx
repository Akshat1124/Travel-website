import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuthContext from '../context/AuthContext.jsx';
import useAuth from '../hooks/useAuth';

const TourDetailsPage = () => {
  const [tour, setTour] = useState(null);
  const { id: tourId } = useParams();
  const { userInfo } = useContext(AuthContext);
  const { getAuthHeaders } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTour = async () => {
      try {
        const { data } = await axios.get(`/api/tours/${tourId}`);
        setTour(data);
      } catch (error) {
        console.error('Error fetching tour details:', error);
      }
    };

    fetchTour();
  }, [tourId]);

  const bookingHandler = async () => {
    if (!userInfo) {
      navigate('/login');
      return;
    }

    try {
      const { data } = await axios.post(
        '/api/bookings',
        { tourId: tour._id, price: tour.price },
        getAuthHeaders() // Using the custom hook here
      );

      alert('Your tour has been booked successfully!');
      navigate('/mybookings');
    } catch (error) {
      console.error('Booking failed:', error.response?.data?.message || error.message);
      alert('Booking failed. Please try again.');
    }
  };

  if (!tour) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{tour.name}</h1>
      <h3>Destination: {tour.destination}</h3>
      <p>{tour.description}</p>
      <p>Duration: {tour.duration} days</p>
      <h2>Price: ₹{tour.price}</h2>
      <button onClick={bookingHandler}>Book Now</button>
    </div>
  );
};

export default TourDetailsPage;
