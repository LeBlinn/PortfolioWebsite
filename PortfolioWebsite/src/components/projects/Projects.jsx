import React, { useEffect, useRef, useState, } from 'react';
import '../../css/Animations.css';

import PortfolioWebsite from './portfoliowebsite/PortfolioWebsite.jsx';

import { useNavigate } from 'react-router-dom';

function Projects(){
    
    const navigate = useNavigate(); // Hook for programmatic navigation

    const handleButtonClick = () => {
        navigate('/projects'); // Navigate to the desired route
    };

    return (
        <div>
            <div>
                <div className='font-notosansjp font-bold text-color-primary text-2xl tablet:text-3xl text-center pb-2'>Latest Projects</div>
                <div className='p-1'/>
                <h2 className='font-notosansjp font-light text-color-secondary text-lg tablet:text-xl text-center'>
                    I bring ideas to life by building projects from the ground up. Take a look at some of my recent projects below.
                </h2>
                <div className="divider"/>
            </div>
            <div className='grid tablet:grid-cols-2'>
                <PortfolioWebsite />
                <PortfolioWebsite />
            </div>
            <div class='p-4'/>
            <div className="divider"/>
            <div className='grid'>
                <button onClick={handleButtonClick} className="btn btn-lg btn-primary hover:btn-accent rounded-lg">More Projects</button>
            </div>
        </div>
    )
}

export default Projects;