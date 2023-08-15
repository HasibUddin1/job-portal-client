import bannerImage from '../../../assets/images/easy-job-banner-image.jpg'
import jobSeekerImage from '../../../assets/images/job-seeker-image.png'
import jobPosterImage from '../../../assets/images/job-poster-image.png'
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './Banner.css'

const Banner = () => {

    const [activeButton, setActiveButton] = useState('job seeker')

    return (
        <div className='lg:h-[800px] bg-cover lg:-mt-24' style={{ backgroundImage: `url(${bannerImage})` }}>
            <div className='lg:flex lg:items-end lg:w-9/12 mx-auto justify-between lg:h-full'>
                <div className='lg:w-1/2 lg:pe-40 lg:flex flex-col justify-center lg:h-[700px] pt-10 lg:pt-0'>
                    <div className='flex gap-5 mb-5'>
                        <button onClick={() => setActiveButton('job poster')} className={
                            activeButton === 'job poster' ?
                                'px-4 py-2 text-xl font-semibold border-2 border-blue-600 bg-blue-600 text-white' :
                                'px-4 py-2 text-xl font-semibold border-2 border-blue-600 text-blue-600 hover:bg-blue-600 ease-in-out duration-200 hover:text-white'
                        }>Job Poster</button>
                        <button onClick={() => setActiveButton('job seeker')} className={
                            activeButton === 'job seeker' ?
                                'px-4 py-2 text-xl font-semibold border-2 border-blue-600 bg-blue-600 text-white' :
                                'px-4 py-2 text-xl font-semibold border-2 border-blue-600 text-blue-600 hover:bg-blue-600 ease-in-out duration-200 hover:text-white'
                        }>Job Seeker</button>
                    </div>
                    <CSSTransition
                        in={activeButton === 'job seeker'}
                        timeout={300}
                        classNames="fade-up"
                        unmountOnExit
                    >
                        <div>
                            <h4 className='text-4xl font-bold'>Searching for a Job? Find the <span className='text-blue-500'>Best Job</span> that fit you so that you can build your career</h4>
                        </div>
                    </CSSTransition>

                    <CSSTransition
                        in={activeButton === 'job poster'}
                        timeout={300}
                        classNames="fade-up"
                        unmountOnExit
                    >
                        <div>
                            <h4 className='text-4xl font-bold'>Searching for an Employee? Find the <span className='text-blue-500'>Best Employee</span> for your company</h4>
                        </div>
                    </CSSTransition>
                </div>
                <div className='lg:w-1/2 lg:h-[700px] lg:flex flex-col justify-end'>
                    <CSSTransition
                        in={activeButton === 'job seeker'}
                        timeout={300}
                        classNames="fade-up"
                        unmountOnExit
                    >
                        <div className='lg:h-full'>
                            <img className='lg:h-full' src={jobSeekerImage} alt="" />
                        </div>
                    </CSSTransition>

                    <CSSTransition
                        in={activeButton === 'job poster'}
                        timeout={300}
                        classNames="fade-up"
                        unmountOnExit
                    >
                        <div className='lg:h-full'>
                            <img className='lg:h-full' src={jobPosterImage} alt="" />
                        </div>
                    </CSSTransition>
                </div>
            </div>
        </div>
    );
};

export default Banner;