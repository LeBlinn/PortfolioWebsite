import projectImage from '../../../assets/projectImage.png';

import { useNavigate } from 'react-router-dom';

function PortfolioWebsite(){

    const navigate = useNavigate(); // Hook for programmatic navigation

    const handleButtonClick = () => {
        navigate('/personalwebsite'); // Navigate to the desired route
    };

    return (
        <div className='p-4'>
            <div className="border-2 border-secondary rounded-lg bg-base-100 hover:shadow-lg transition-shadow duration-300 mr-2 ml-2 overflow-hidden max-w-full max-h-full">
                <figure>
                    <img
                    src={projectImage}
                    alt="Website" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Portfolio Website</h2>
                    <p>A simple website that showcases me, my projects, and my other social medias.</p>
                    <div className="card-actions justify-left mt-1">
                    <button onClick={handleButtonClick} className="btn btn-sm btn-primary hover:btn-accent rounded-lg">More Details</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioWebsite;