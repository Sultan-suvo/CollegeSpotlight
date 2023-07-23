// AllColleges.js
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import CollegeCard from './AllCollegesCard';

const AllColleges = () => {
    const [allColleges, setAllColleges] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredColleges, setFilteredColleges] = useState([]);
    const [axiosSecure] = useAxiosSecure();

    useEffect(() => {
        const fetchColleges = async () => {
            try {
                const response = await axiosSecure.get('/allColleges');
                setAllColleges(response.data);
                setFilteredColleges(response.data);
            } catch (error) {
                console.error('Error fetching colleges:', error);
            }
        };

        fetchColleges();
    }, [axiosSecure]);

    const handleSearch = (event) => {
        const searchValue = event.target.value.toLowerCase();
        setSearchQuery(searchValue);

        // Filter colleges based on the search query
        const filteredColleges = allColleges.filter(college =>
            college.name.toLowerCase().includes(searchValue)
        );
        setFilteredColleges(filteredColleges);
    };

    return (
        <section>
            <div className="max-w-md mx-auto mt-8">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearch}
                    placeholder="Search for a college name"
                    className="w-full px-4 py-2 border rounded-md shadow-md"
                />
            </div>

            <h2 className="text-3xl mt-12 text-center font-bold mb-4">Best Universities Around the World</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 p-4">
                {filteredColleges.map((college) => (
                    <CollegeCard key={college.id} college={college} />
                ))}
            </div>
        </section>
    );
};

export default AllColleges;
