import React, { useState, useEffect } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [axiosSecure] = useAxiosSecure();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axiosSecure.get('/reviews');
        setReviews(response.data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, [axiosSecure]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-center mb-6">Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews.map((review) => (
          <div key={review._id} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <p className="font-bold">Review: {review.review}</p>
            <p className="font-bold">Rating: {review.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
