import aboutUsImage from '../../assets/images/about-us-image.jpg'

const AboutUs = () => {
    return (
        <div className='w-9/12 mx-auto mt-20 mb-20'>
            <h4 className="text-2xl text-center font-semibold mb-2">Get to Know Us</h4>
            <h1 className="text-4xl text-center font-bold mb-10">About Us</h1>
            <div className='md:flex gap-10 items-center mb-20'>
                <div className='md:w-1/2 mb-10 md:mb-0'>
                    <img className='rounded-xl' src={aboutUsImage} alt="" />
                </div>
                <div className='md:w-1/2'>
                    <h4 className='text-rose-600 font-semibold text-2xl'>Who are we?</h4>
                    <h2 className='text-4xl font-bold mb-5'>We provide best jobs in technology field</h2>
                    <p className='text-xl'>Welcome to Easy Job, your ultimate destination for navigating the dynamic landscape of career opportunities. Whether you're a fresh graduate looking to kick-start your journey or an experienced professional seeking your next challenge, JobConnect connects you with a diverse range of job listings across industries.</p>
                    <br />
                    <p className='text-xl mb-5'>With an intuitive interface, Easy Job makes job hunting a breeze. Browse through an extensive array of job openings, filter by location, industry, or experience level, and apply seamlessly with just a few clicks.</p>
                    <hr className='mb-5' />
                    <div className='md:flex justify-between text-xl mb-10'>
                        <div>
                            <p><span className='font-semibold'>Name:</span> Easy Job</p>
                            <p><span className='font-semibold'>Email:</span> easyjob@gmail.com</p>
                        </div>
                        <div>
                            <p><span className='font-semibold'>Employees:</span> 220</p>
                            <p><span className='font-semibold'>From:</span> Mirpur, Dhaka-1216</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;