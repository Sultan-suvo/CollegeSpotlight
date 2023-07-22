import React, { useEffect, useState } from 'react';
import College from './College';

const Colleges = () => {
    const [colleges, setColleges] = useState([]);
    useEffect(() => {
        fetch('colleges.json')
            .then(res => res.json())
            .then(categories => setColleges(categories))
    }, [])
    return (
        <div className='mt-24'>
        <div className='text-center'>
            <h1 className='text-5xl font-bold mb-4'>Top Colleges</h1>  
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 mt-8 gap-8'>
            {
                colleges.map(college => <College
                key={college.id}
                college={college}
                >                       
                </College>)
            }
        </div>
        
    </div>
    );
};

export default Colleges;