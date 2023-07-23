import React, { useState, useEffect, useContext } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { AuthContext } from '../../Providers/AuthProvider';

const MyCollege = () => {
  const [admissionData, setAdmissionData] = useState([]);
  const [axiosSecure] = useAxiosSecure();
  const { user } = useContext(AuthContext);

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
    </div>
  );
};

export default MyCollege;
