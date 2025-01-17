import React, { useEffect, useRef, useState, } from 'react';
import '../../css/Animations.css';

import Footnote from '../footer/Footnote';
import PortfolioWebsite from './portfoliowebsite/PortfolioWebsite.jsx';

import { useNavigate } from 'react-router-dom';

function Projects(){
    
    const navigate = useNavigate(); // Hook for programmatic navigation

    const handleButtonClick = () => {
        navigate('/'); // Navigate to the desired route
    };

    return (
        <div>
            <div onClick={handleButtonClick} className='fixed text-primary hover:text-accent z-30 m-auto top-20 right-6 border-2 border-primary hover:border-accent rounded-full cursor-pointer bg-base-100'>
            <svg className='w-8 h-auto fill-current m-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><title>leftarrow</title><g id="Left-2" data-name="Left"><polygon points="24 12.001 2.914 12.001 8.208 6.706 7.501 5.999 1 12.501 7.5 19.001 8.207 18.294 2.914 13.001 24 13.001 24 12.001"/></g></svg>
            </div>

            
                <div class="flex-grow overflow-y-auto">
                    <div className='flex flex-col opacityZero SlideInFade'>
                        <div className='font-notosansjp py-4 leading-none mr-12 font-extrabold tablet:text-5xl text-4xl text-color-primary overflow-hidden'>
                            All Projects
                        </div>
                        <div className='font-notosansjp font-extralight tablet:text-xl text-lg text-color-accent'>
                            Take a look around and see what I've been working on lately.
                            <div className="divider"/>
                        </div>
                    </div>
                    <div className='flex flex-col h-screen overflow-hidden'>
                        <div className='grid tablet:grid-cols-2 desktop:grid-cols-4'>
                            <PortfolioWebsite />
                            
                            <PortfolioWebsite />
                        </div>
                    </div>
                <Footnote className='sticky bottom-0'/>
            </div>
        </div>
    )
}

export default Projects;