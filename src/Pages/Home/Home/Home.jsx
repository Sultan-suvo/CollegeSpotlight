import React from 'react';
import AllColleges from '../AllColleges/AllColleges';
import CollegeGallery from '../CollegeGallery/CollegeGallery';
import ResearchPaper from '../ResearchPaper/ResearchPaper';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <AllColleges></AllColleges>
            <CollegeGallery></CollegeGallery>
            <ResearchPaper></ResearchPaper>
            <Review></Review>
        </div>
    );
};

export default Home;