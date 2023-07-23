import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Providers/AuthProvider';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const AdmissionForm = ({ collegeName }) => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      candidateName: user?.displayName || '',
      candidateEmail: user?.email || '',
    },
  });

  const onSubmit = async (data) => {
    // Show a confirmation dialog using SweetAlert before submitting the form
    const result = await Swal.fire({
      title: 'Submit Form',
      text: 'Are you sure you want to submit the form?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, submit it!',
    });

    if (result.isConfirmed) {
      try {
        const response = await axiosSecure.post('/admissionCollege', data);

        if (response.status === 200) {
          console.log('Form data successfully submitted to the server.');
          // Show success message using SweetAlert
          Swal.fire({
            title: 'Success!',
            text: 'Form data successfully submitted to the server.',
            icon: 'success',
          });
        } else {
          console.error('Failed to submit form data to the server.');
          Swal.fire({
            title: 'Error!',
            text: 'Failed to submit form data to the server.',
            icon: 'error',
          });
        }
      } catch (error) {
        console.error('Error submitting form data:', error);
        // Show error message using SweetAlert
        Swal.fire({
          title: 'Error!',
          text: 'Error submitting form data to the server.',
          icon: 'error',
        });
      }
    }
  };


  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-center mb-6">Admission Form for {collegeName}</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">
        <div>
          <label className="block">
            Candidate Name:
            <input
              type="text"
              {...register('candidateName', { required: true })}
              defaultValue={user?.displayName || ''}
              className="block w-full border rounded-md p-2 focus:outline-none focus:border-blue-500"
            />
            {errors.candidateName && <span className="text-red-500">This field is required</span>}
          </label>
        </div>
        <div>
          <label className="block">
            Subject:
            <input
              type="text"
              {...register('subject', { required: true })}
              className="block w-full border rounded-md p-2 focus:outline-none focus:border-blue-500"
            />
            {errors.subject && <span className="text-red-500">This field is required</span>}
          </label>
        </div>
        <div>
          <label className="block">
            Candidate Email:
            <input
              type="email"
              {...register('candidateEmail', { required: true })}
              defaultValue={user?.email || ''}
              className="block w-full border rounded-md p-2 focus:outline-none focus:border-blue-500"
            />
            {errors.candidateEmail && <span className="text-red-500">This field is required</span>}
          </label>
        </div>
        <div>
          <label className="block">
            Candidate Phone number:
            <input
              type="tel"
              {...register('candidatePhone', { required: true })}
              className="block w-full border rounded-md p-2 focus:outline-none focus:border-blue-500"
            />
            {errors.candidatePhone && <span className="text-red-500">This field is required</span>}
          </label>
        </div>
        <div>
          <label className="block">
            Address:
            <input
              type="text"
              {...register('address', { required: true })}
              className="block w-full border rounded-md p-2 focus:outline-none focus:border-blue-500"
            />
            {errors.address && <span className="text-red-500">This field is required</span>}
          </label>
        </div>
        <div>
          <label className="block">
            Date of Birth:
            <input
              type="date"
              {...register('dateOfBirth', { required: true })}
              className="block w-full border rounded-md p-2 focus:outline-none focus:border-blue-500"
            />
            {errors.dateOfBirth && <span className="text-red-500">This field is required</span>}
          </label>
        </div>
        <div className="col-span-2">
          <label className="block">
            Image:
            <input
              type="file"
              {...register('image', { required: true })}
              accept="image/*"
              className="block w-full border rounded-md p-2 focus:outline-none focus:border-blue-500"
            />
            {errors.image && <span className="text-red-500">This field is required</span>}
          </label>
        </div>
        <div className="col-span-2 flex justify-center">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdmissionForm;
