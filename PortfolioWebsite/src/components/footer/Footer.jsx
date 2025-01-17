import Contact from './Contact';

function footer(){
    return (
        <div className='flex flex-col justify-between min-h-screen'>
            <Contact />
            <div className='font-notosansjp font-light text-color-secondary text-md tablet:lg text-center'>
                Developed by Josh Blinn © 2024. All Rights Reserved.
            </div>
        </div>
    )
}

export default footer;