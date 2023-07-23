import React from 'react';
import { Link } from 'react-router-dom';

const colleges = [
  'Harvard University',
  'Stanford University',
  'Massachusetts Institute of Technology (MIT)',
  'Yale University',
  'Princeton University',
  'California Institute of Technology (Caltech)',
  'Columbia University',
  'University of Chicago',
  'University of Pennsylvania',
  'University of California, Berkeley (UC Berkeley)',
  'Duke University',
  'University of Michigan - Ann Arbor',
  'Northwestern University',
  'University of California, Los Angeles (UCLA)',
  'University of Virginia',
  'Carnegie Mellon University',
  'University of North Carolina at Chapel Hill (UNC)',
  'New York University (NYU)',
  'University of California, San Diego (UCSD)',
  'University of Southern California (USC)'
];

const Admission = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4">College Names</h2>
        <ul className="space-y-2">
          {colleges.map((collegeName) => (
            <li
              key={collegeName}
              className="hover:bg-gray-100 rounded-lg p-2 cursor-pointer"
            >
              <Link href={`/admission/${collegeName}`} className="text-blue-500">
                {collegeName}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Admission;
