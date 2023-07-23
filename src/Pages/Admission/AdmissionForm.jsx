import React from 'react';
import { useForm } from 'react-hook-form';

const AdmissionForm = ({ collegeName }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Perform form submission logic here using the form data (data)
    console.log('Form data submitted:', data);
  };

  return (
    <div>
      <h2>Admission Form for {collegeName}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>
            Candidate Name:
            <input type="text" {...register('candidateName', { required: true })} />
            {errors.candidateName && <span>This field is required</span>}
          </label>
        </div>
        <div>
          <label>
            Subject:
            <input type="text" {...register('subject', { required: true })} />
            {errors.subject && <span>This field is required</span>}
          </label>
        </div>
        <div>
          <label>
            Candidate Email:
            <input type="email" {...register('candidateEmail', { required: true })} />
            {errors.candidateEmail && <span>This field is required</span>}
          </label>
        </div>
        <div>
          <label>
            Candidate Phone number:
            <input type="tel" {...register('candidatePhone', { required: true })} />
            {errors.candidatePhone && <span>This field is required</span>}
          </label>
        </div>
        <div>
          <label>
            Address:
            <input type="text" {...register('address', { required: true })} />
            {errors.address && <span>This field is required</span>}
          </label>
        </div>
        <div>
          <label>
            Date of Birth:
            <input type="date" {...register('dateOfBirth', { required: true })} />
            {errors.dateOfBirth && <span>This field is required</span>}
          </label>
        </div>
        <div>
          <label>
            Image:
            <input type="file" {...register('image', { required: true })} accept="image/*" />
            {errors.image && <span>This field is required</span>}
          </label>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AdmissionForm;
