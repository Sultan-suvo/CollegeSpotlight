import React from 'react';

const CollegeDetails = () => {
  // Get the specific college data from localStorage
  const selectedCollege = JSON.parse(localStorage.getItem('selectedCollege'));

  return (
    <div className="mt-4">
      {selectedCollege && (
        <div className="bg-white shadow-lg rounded-md p-4">
          <img className="h-48 w-3/4 md:w-1/4 rounded-lg mb-4" src={selectedCollege.college_image} alt={selectedCollege.college_name} />
          <h2 className="text-2xl font-bold mb-2">{selectedCollege.college_name}</h2>
          <p className="text-gray-600">Rating: {selectedCollege.college_rating}</p>
          <p className="text-gray-600">Admission Date: {selectedCollege.admission_date}</p>
          <p className="text-gray-600">Research Count: {selectedCollege.research_count}</p>

          {/* Display events */}
          {selectedCollege.details && selectedCollege.details.events && selectedCollege.details.events.length > 0 && (
            <div className="mt-4">
              <h3 className="text-lg font-bold mb-2 text-blue-800">Events:</h3>
              <ul className="list-disc pl-4">
                {selectedCollege.details.events.map((event, index) => (
                  <li key={index} className="text-gray-600">
                    {event}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Display sports facilities */}
          {selectedCollege.details && selectedCollege.details.sports_facilities && selectedCollege.details.sports_facilities.length > 0 && (
            <div className="mt-4">
              <h3 className="text-lg font-bold mb-2 text-blue-800">Sports Facilities:</h3>
              <ul className="list-disc pl-4">
                {selectedCollege.details.sports_facilities.map((facility, index) => (
                  <li key={index} className="text-gray-600">
                    {facility}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CollegeDetails;
