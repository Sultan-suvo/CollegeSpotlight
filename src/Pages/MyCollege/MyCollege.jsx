import React, { useState, useEffect, useContext } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { AuthContext } from '../../Providers/AuthProvider';

const MyCollege = () => {
  const [admissionData, setAdmissionData] = useState([]);
  const [axiosSecure] = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const fetchAdmissionData = async () => {
      if (user && user.email) {
        try {
          const response = await axiosSecure.get(`/admissionCollege/${user.email}`);
          setAdmissionData(response.data);
        } catch (error) {
          console.error('Error fetching admission data:', error);
        }
      }
    };

    fetchAdmissionData();
  }, [axiosSecure, user]);

  const handleReviewSubmit = async () => {
    try {
      const response = await axiosSecure.post('/reviews', {
        email: user.email,
        review,
        rating,
      });

      if (response.status === 200) {
        console.log('Review submitted successfully.');
        // You can perform additional actions here, such as updating the reviews section on the home page.
      }
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  return (
    <div className='my-12 m-4 md:mx-0'>
      <h2 className="text-3xl font-bold text-center mb-6">My College Admission Details</h2>
      {admissionData.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {admissionData.map((admission) => (
            <div key={admission._id} className="bg-white p-6 rounded-lg shadow-md">
              <p className="font-bold">Candidate Email: {admission.candidateEmail}</p>
              <p>Subject: {admission.subject}</p>
              <p>Phone: {admission.candidatePhone}</p>
              <p>Address: {admission.address}</p>
              <p>Date of Birth: {admission.dateOfBirth}</p>
            </div>
          ))}
        </div>
      )}

      {/* Review Input Field */}
      <div className="my-8">
        <h2 className="text-2xl font-bold mb-4">Add a Review</h2>
        <textarea
          rows="4"
          className="block w-full border rounded-md p-2 focus:outline-none focus:border-blue-500"
          placeholder="Write your review..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
        <label className="block mt-4">
          Rating:
          <input
            type="number"
            min="1"
            max="5"
            className="block w-16 border rounded-md p-2 focus:outline-none focus:border-blue-500"
            value={rating}
            onChange={(e) => setRating(parseInt(e.target.value))}
          />
        </label>
        <button
          type="button"
          onClick={handleReviewSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
        >
          Submit Review
        </button>
      </div>
    </div>
  );
};

export default MyCollege;
