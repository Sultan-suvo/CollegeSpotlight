import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const College = ({ college }) => {

    const handleShowDetails = () => {
        localStorage.setItem('selectedCollege', JSON.stringify(college));
    };

    return (
        <div className="bg-white shadow-md rounded-md p-4 my-4">
            <img className="h-48 w-3/4 rounded-lg mx-auto mb-4" src={college.college_image} alt={college.college_name} />
            <div className="text-center">
                <h2 className="text-xl font-bold mb-2">{college.college_name}</h2>
                <p className="text-gray-600">Rating: {college.college_rating}</p>
                <p className="text-gray-600">Admission Date: {college.admission_date}</p>
                <p className="text-gray-600 mb-3">Research Count: {college.research_count}</p>
                <Link to='/showDetails'
                    className="mt-4 bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2 transition duration-300"
                    onClick={handleShowDetails}
                >
                    Show Details
                </Link>
            </div>
        </div>
    );
};

export default College;
