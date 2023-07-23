// AllColleges.js
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import CollegeCard from './AllCollegesCard';

const AllColleges = () => {
  const [allColleges, setAllColleges] = useState([]);
  const [axiosSecure] = useAxiosSecure();

  useEffect(() => {
    const fetchColleges = async () => {
      try {
        const response = await axiosSecure.get('/allColleges');
        setAllColleges(response.data);
      } catch (error) {
        console.error('Error fetching colleges:', error);
      }
    };

    fetchColleges();
  }, [axiosSecure]);

  return (
    <section>
      <h2 className="text-3xl mt-12 text-center font-bold mb-4">Best Universities Around the World</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 p-4">
        {allColleges.map((college) => (
          <CollegeCard key={college.id} college={college} />
        ))}
      </div>
    </section>
  );
};

export default AllColleges;
