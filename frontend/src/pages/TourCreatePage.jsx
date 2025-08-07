import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const TourCreatePage = () => {
  const [name, setName] = useState('');
  const [destination, setDestination] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [duration, setDuration] = useState(0);
  const [image, setImage] = useState('/images/sample.jpg'); // Default image for now

  const { getAuthHeaders } = useAuth();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        '/api/tours',
        { name, destination, description, price, duration, image },
        getAuthHeaders()
      );
      alert('Tour created successfully!');
      navigate('/admin/tourlist');
    } catch (error) {
      console.error('Failed to create tour', error);
      alert('Tour creation failed.');
    }
  };

  return (
    <div>
      <h2>Create New Tour</h2>
      <form onSubmit={submitHandler}>
        <div><label>Name:</label><input type="text" value={name} onChange={(e) => setName(e.target.value)} required /></div>
        <div><label>Destination:</label><input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} required /></div>
        <div><label>Description:</label><textarea value={description} onChange={(e) => setDescription(e.target.value)} required /></div>
        <div><label>Price (₹):</label><input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required /></div>
        <div><label>Duration (days):</label><input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} required /></div>
        <div><label>Image Path:</label><input type="text" value={image} onChange={(e) => setImage(e.target.value)} required /></div>
        <button type="submit">Create Tour</button>
      </form>
    </div>
  );
};

export default TourCreatePage;
