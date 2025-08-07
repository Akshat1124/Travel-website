import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const TourEditPage = () => {
  const { id: tourId } = useParams();
  const navigate = useNavigate();
  const { getAuthHeaders } = useAuth();

  const [name, setName] = useState('');
  const [destination, setDestination] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [duration, setDuration] = useState(0);
  const [image, setImage] = useState('');

  useEffect(() => {
    const fetchTourDetails = async () => {
      try {
        const { data } = await axios.get(`/api/tours/${tourId}`);
        setName(data.name);
        setDestination(data.destination);
        setDescription(data.description);
        setPrice(data.price);
        setDuration(data.duration);
        setImage(data.image);
      } catch (error) {
        console.error('Failed to fetch tour details', error);
      }
    };
    fetchTourDetails();
  }, [tourId]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `/api/tours/${tourId}`,
        { name, destination, description, price, duration, image },
        getAuthHeaders()
      );
      alert('Tour updated successfully!');
      navigate('/admin/tourlist');
    } catch (error) {
      console.error('Failed to update tour', error);
      alert('Tour update failed.');
    }
  };

  return (
    <div>
      <h2>Edit Tour</h2>
      <form onSubmit={submitHandler}>
        <div><label>Name:</label><input type="text" value={name} onChange={(e) => setName(e.target.value)} required /></div>
        <div><label>Destination:</label><input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} required /></div>
        <div><label>Description:</label><textarea value={description} onChange={(e) => setDescription(e.target.value)} required /></div>
        <div><label>Price (₹):</label><input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required /></div>
        <div><label>Duration (days):</label><input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} required /></div>
        <div><label>Image Path:</label><input type="text" value={image} onChange={(e) => setImage(e.target.value)} required /></div>
        <button type="submit">Update Tour</button>
      </form>
    </div>
  );
};

export default TourEditPage;
