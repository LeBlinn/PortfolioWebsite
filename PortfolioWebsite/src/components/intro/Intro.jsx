import '../../css/Animations.css';
import picture from './../../assets/josh.jpg';

function Intro(){
    return (
        <div className='tablet:grid tablet:grid-cols-2'>
            <div>
                <div className='grid grid-rows-2 opacityZero SlideInFade'>
                    <div className='font-notosansjp font-extrabold tablet:text-5xl text-4xl text-color-primary overflow-hidden'>
                        Josh Blinn
                    </div>
                    <div className='font-notosansjp font-extralight tablet:text-xl text-lg text-color-accent'>
                        Graduating Computer Engineering Student @UOttawa
                    </div>
                </div>
                <div className='p-4'/>
                <div className='font-notosansjp font-light tablet:text-xl text-lg text-color-secondary'>
                    "With self-discipline most anything is possible."<br/>
                    -Theodore Roosevelt
                </div>
            </div>
            <img src={picture} className='w-64 h-auto rounded-full m-auto mt-10'></img>
        </div>
    )
}

export default Intro;