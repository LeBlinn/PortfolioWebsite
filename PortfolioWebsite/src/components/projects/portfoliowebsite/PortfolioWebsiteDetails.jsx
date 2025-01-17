import '../../../css/Animations.css'
import projectImage from '../../../assets/projectImage.png';
// import leftArrow from '../../../assets/leftArrow.svg';
import Footnote from '../../footer/Footnote';

import { useNavigate } from 'react-router-dom';


function PortfolioWebsiteDetails(){
    
    const navigate = useNavigate(); // Hook for programmatic navigation

    const handleButtonClick = () => {
        navigate('/'); // Navigate to the desired route
    };

    return (
        <div>
            <div onClick={handleButtonClick} className='fixed text-primary hover:text-accent z-30 m-auto top-20 right-6 border-2 border-primary hover:border-accent rounded-full cursor-pointer bg-base-100'>
            <svg className='w-8 h-auto fill-current m-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><title>leftarrow</title><g id="Left-2" data-name="Left"><polygon points="24 12.001 2.914 12.001 8.208 6.706 7.501 5.999 1 12.501 7.5 19.001 8.207 18.294 2.914 13.001 24 13.001 24 12.001"/></g></svg>
            </div>

            <div className='relative z-10 mr-6 ml-6 mt-12 mb-auto tablet:mr-24 tablet:ml-24 tablet:mt-12 desktop:mr-32 desktop:ml-32'>
                <div>
                    <div className='opacityZero SlideInFade'>
                        <div className='font-notosansjp font-extralight tablet:text-xl text-lg text-color-accent'>
                            Web Development
                        </div>
                        <div className='font-notosansjp font-extrabold tablet:text-5xl text-4xl text-color-primary overflow-hidden'>
                            Portfolio Website
                        </div>
                    </div>
                    <div className='grid tablet:grid-cols-2'>
                        <div>
                            <div className='p-4'/>
                            <div className='font-notosansjp font-light text-color-secondary text-lg tablet:text-xl text-left'>
                                This website was made in order to showcase my projects and skills. 
                                It was made using the React framework with TailwindCSS.<br/><br/>
                                The website is hosted in a docker container running Nginx on my home server.
                            </div>
                            <div className='p-4'/>
                        </div>    
                            <a href='https://github.com/LeBlinn/PortfolioWebsite'
                            target="_blank"
                            rel="noopener noreferrer" 
                            className='flex flex-row self-end gap-2 underline font-notosansjp font-extralight text-secondary hover:text-accent text-lg tablet:text-xl text-left p-4'>
                                Open Project <svg className='w-10 h-auto rotate-180 text-color-primary fill-current'  onClick={handleButtonClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><title>leftarrow</title><g id="Left-2" data-name="Left"><polygon points="24 12.001 2.914 12.001 8.208 6.706 7.501 5.999 1 12.501 7.5 19.001 8.207 18.294 2.914 13.001 24 13.001 24 12.001"/></g></svg>
                            </a>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={projectImage} alt='projectImage' />
                        <div className='p-2' />
                    </div>
                    <div>
                        <img src={projectImage} alt='projectImage' />
                        <div className='p-2' />
                    </div>
                    <div>
                        <img src={projectImage} alt='projectImage' />
                        <div className='p-2' />
                    </div>
                    <div>
                        <img src={projectImage} alt='projectImage' />
                        <div className='p-2' />
                    </div>
                </div>
            </div>
            <Footnote />
        </div>
    )
}

export default PortfolioWebsiteDetails;