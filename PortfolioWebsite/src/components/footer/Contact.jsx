import resume from '../../assets/ResumeJoshBlinn.pdf';


function Contact(){
    return (
        <div>
            <div className='p-4'/>
            <div className='font-notosansjp font-bold text-color-primary text-2xl tablet:text-3xl text-left'>
                Contact
            </div>
            <div className='font-notosansjp font-light text-color-secondary text-lg tablet:text-xl text-left'>
                I am currently looking for a job in any topic related to Computer Engineering.
            </div>
            <div className='p-4'></div>
            <div>
                <ul className='font-notosansjp font-light text-color-secondary text-lg tablet:text-xl text-left underline'>
                    <li><a href={resume} target="_blank" rel="noopener noreferrer">Resume</a></li>
                    <li><a href="mailto:joshyblinn@gmail.com" target="_blank" rel="noopener noreferrer">joshyblinn@gmail.com</a></li>
                    <li><a href="https://www.linkedin.com/in/josh-blinn/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    <li><a href="https://github.com/LeBlinn" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Contact;