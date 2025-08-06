import React from 'react';

const Tour = ({ tour }) => {
  return (
    <div style={{ 
      border: '1px solid #ddd', 
      borderRadius: '8px', 
      padding: '1.5rem', 
      margin: '1rem',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      backgroundColor: '#fff'
    }}>
      {/* <img src={tour.image} alt={tour.name} style={{ width: '100%', borderRadius: '5px' }} /> */}
      <h3 style={{ color: '#333', marginBottom: '0.5rem' }}>{tour.name}</h3>
      <p style={{ color: '#666', marginBottom: '0.5rem' }}>
        <strong>Destination:</strong> {tour.destination}
      </p>
      <p style={{ color: '#777', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
        {tour.description.substring(0, 100)}...
      </p>
      <p style={{ color: '#666', marginBottom: '0.5rem' }}>
        <strong>Duration:</strong> {tour.duration} days
      </p>
      <h4 style={{ color: '#2c5aa0', fontSize: '1.2rem', margin: '0.5rem 0' }}>
        ${tour.price}
      </h4>
      <button style={{
        backgroundColor: '#2c5aa0',
        color: 'white',
        border: 'none',
        padding: '0.5rem 1rem',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '0.5rem'
      }}>
        View Details
      </button>
    </div>
  );
};

export default Tour;
