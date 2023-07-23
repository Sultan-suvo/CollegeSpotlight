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
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Recommended Research Papers</h2>
      <ul className="space-y-4">
        {researchPapers.map((paper, index) => (
          <li key={index} className="flex items-center">
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
