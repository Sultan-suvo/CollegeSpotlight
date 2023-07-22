import React, { useState } from 'react';

const College = ({ college }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="bg-white shadow-md rounded-md p-4 my-4">
      <img className="h-48 w-3/4 rounded-lg mx-auto mb-4" src={college.college_image} alt={college.college_name} />
      <div className="text-center">
        <h2 className="text-xl font-bold mb-2">{college.college_name}</h2>
        <p className="text-gray-600">Rating: {college.college_rating}</p>
        <p className="text-gray-600">Admission Date: {college.admission_date}</p>
        <p className="text-gray-600">Research Count: {college.research_count}</p>
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2 transition duration-300"
          onClick={toggleDetails}
        >
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
        {showDetails && (
          <div className="mt-4">
            <h3 className="text-lg font-bold mb-2">Events:</h3>
            <ul className="list-disc pl-4">
              {college.details.events.map((event, index) => (
                <li key={index} className="text-gray-600">{event}</li>
              ))}
            </ul>

            <h3 className="text-lg font-bold mt-4 mb-2">Sports Facilities:</h3>
            <ul className="list-disc pl-4">
              {college.details.sports_facilities.map((facility, index) => (
                <li key={index} className="text-gray-600">{facility}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default College;
