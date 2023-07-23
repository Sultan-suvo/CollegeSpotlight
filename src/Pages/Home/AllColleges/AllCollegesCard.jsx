import React from 'react';
import { Link } from 'react-router-dom';

const CollegeCard = ({ college }) => {
  const handleDetailsClick = () => {
    // Store the college data in localStorage
    localStorage.setItem('selectedCollege', JSON.stringify(college));
  };

  return (
    <div className="border rounded-lg shadow-md p-4">
      <img src={college.image} alt={college.name} className="w-64 h-32 rounded-lg mx-auto mb-4" />
      <h2 className="text-lg font-bold text-center mb-2">{college.name}</h2>
      <p className="text-sm text-gray-500 mb-2">Admission Dates: {college.admissionDates}</p>
      <p className="text-sm text-gray-500 mb-2">Events: {college.events}</p>
      <p className="text-sm text-gray-500 mb-2">Research History: {college.researchHistory}</p>
      <p className="text-sm text-gray-500 mb-4">Sports: {college.sports}</p>
      <Link to={`/college/${college.name}`} onClick={handleDetailsClick} className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
        Details
      </Link>
    </div>
  );
};

export default CollegeCard;
