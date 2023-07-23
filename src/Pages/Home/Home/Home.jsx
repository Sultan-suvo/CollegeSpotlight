import React from 'react';
import AllColleges from '../AllColleges/AllColleges';
import CollegeGallery from '../CollegeGallery/CollegeGallery';
import ResearchPaper from '../ResearchPaper/ResearchPaper';

const Home = () => {
    return (
        <div>
            <AllColleges></AllColleges>
            <CollegeGallery></CollegeGallery>
            <ResearchPaper></ResearchPaper>
        </div>
    );
};

export default Home;