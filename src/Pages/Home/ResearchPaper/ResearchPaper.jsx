import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const ResearchPaper = () => {
  const [researchPapers, setResearchPapers] = useState([]);
  const [axiosSecure] = useAxiosSecure();

  useEffect(() => {
    // Fetch the research paper links from the server
    axiosSecure.get('/researchPaper')
      .then(response => {
        setResearchPapers(response.data);
      })
      .catch(error => {
        console.error('Error fetching research papers:', error);
      });
  }, [axiosSecure]);

  return (
    <div className="bg-white m-4 md:m-0 p-6 rounded-lg text-center shadow-md my-12">
      <h2 className="text-3xl text-center my-12 font-bold mb-8">Recommended Research Papers</h2>
      <ul className="space-y-4">
        {researchPapers.map((paper, index) => (
          <li
            key={index}
            className="flex items-center bg-blue-100 border border-blue-200 rounded-lg p-4"
          >
            <a
              href={paper.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-medium"
            >
              {paper.title}
            </a>
            <span className="text-gray-500 ml-2">- {paper.author}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResearchPaper;
