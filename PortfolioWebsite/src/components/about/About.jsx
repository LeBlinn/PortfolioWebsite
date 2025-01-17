import '../../css/Animations.css';

function About(){
    return (
        <div className='tablet:grid tablet:grid-cols-[1fr_3fr] tablet:gap-16'>
            <h1 className='font-notosansjp font-bold text-color-primary text-2xl tablet:text-3xl text-left'>About</h1>
            <p className='font-notosansjp font-light text-color-secondary text-lg tablet:text-xl text-left'>
                I’m a computer enthusiast with a deep passion for exploring the world of video games. 
                I often spend time with others who share my love for technology, and together we enjoy discovering new games. 
                When I'm not gaming, I find solace in reading and enjoy outdoor activities like kayaking.
            </p>
        </div>
    )
}

export default About;