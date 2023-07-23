import React from 'react';

const BestCollegeDetails = () => {
  // Retrieve the selected college data from localStorage
  const selectedCollege = JSON.parse(localStorage.getItem('selectedCollege'));

  return (
    <div className="college-details-container text-center mx-4 md:w-2/4 md:mx-auto border my-12 rounded-lg p-4">
      <img src={selectedCollege.image} alt={selectedCollege.name} className="w-64 h-32 rounded-lg mx-auto mb-4" />
      <h2 className="text-lg font-bold text-center mb-2">{selectedCollege.name}</h2>
      <p className="text-sm text-gray-500 mb-2"><strong>Admission Process:</strong> {selectedCollege.admissionDates}</p>
      <p className="text-sm text-gray-500 mb-2"><strong>Events Details:</strong> {selectedCollege.events}</p>
      <p className="text-sm text-gray-500 mb-2"><strong>Research Works:</strong> {selectedCollege.researchHistory}</p>
      <p className="text-sm text-gray-500 mb-4"><strong>Sports Categories:</strong> {selectedCollege.sports}</p>
      {/* Add more sections and details as needed */}
    </div>
  );
};

export default BestCollegeDetails;
