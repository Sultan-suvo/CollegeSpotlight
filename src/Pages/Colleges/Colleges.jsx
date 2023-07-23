import React, { useEffect, useState } from 'react';
import College from './College';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const Colleges = () => {
  const [colleges, setColleges] = useState([]);
  const [axiosSecure] = useAxiosSecure();

  useEffect(() => {
    // Fetch data from the backend API using axios with authentication headers
    axiosSecure
      .get('/topColleges') // Assuming the backend API is running on the same domain
      .then((response) => setColleges(response.data))
      .catch((error) => console.error('Error fetching data:', error));
  }, [axiosSecure]);

  return (
    <div className="mt-24">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Top Colleges</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-8">
        {colleges.map((college) => (
          <College key={college._id} college={college} />
        ))}
      </div>
    </div>
  );
};

export default Colleges;
