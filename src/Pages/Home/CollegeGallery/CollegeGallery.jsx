import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const CollegeGallery = () => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [axiosSecure] = useAxiosSecure();

  useEffect(() => {
    // Fetch college graduate's group pictures from the server
    axiosSecure
      .get('/galleryColleges')
      .then((response) => {
        setGalleryImages(response.data);
      })
      .catch((error) => {
        console.error('Error fetching gallery images:', error);
      });
  }, [axiosSecure]);

  return (
    <div className='mx-4 mb-12'>
      <h2 className="text-2xl text-center my-12 font-bold mb-8">College Graduates Image Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {galleryImages.map((image) => (
          <div key={image.id} className="border rounded-lg overflow-hidden">
            <img src={image.imageUrl} alt={image.description} className="w-full h-48 object-cover" />
            <p className="p-2">{image.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollegeGallery;
