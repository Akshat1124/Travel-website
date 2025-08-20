import React from 'react';
import { Link } from 'react-router-dom';

const Tour = ({ tour }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <Link to={`/tour/${tour._id}`}>
        <img src={tour.image} alt={tour.name} className="w-full h-56 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2 truncate">{tour.name}</h3>
          <p className="text-gray-600 mb-4">{tour.destination}</p>
          <div className="flex justify-between items-center">
            <p className="text-lg font-bold text-blue-600">₹{tour.price}</p>
            <span className="text-sm text-gray-500">{tour.duration} days</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Tour;