import { FaLocationArrow, FaUser, FaWhatsapp } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
import contactImage from '../../assets/images/contact-section-image.jpg'


const Contact = () => {
    return (
        <div className='w-9/12 mx-auto mt-20 mb-20 min-h-screen'>
            <h4 className="text-2xl text-center font-semibold mb-2">Get in Touch</h4>
            <h1 className="text-4xl text-center font-bold mb-10">Our Contact Details</h1>
            <div className='md:flex items-center mb-20'>
                <div className='md:w-1/2 mb-10 md:mb-0'>
                    <img className='rounded-xl' src={contactImage} alt="" />
                </div>
                <div className='md:w-1/2'>
                    <h2 className='text-rose-600 font-bold text-2xl mb-2'>Message Us</h2>
                    <p className='text-xl mb-5'>If you have any offer, queries, suggestions, opinion, objection - feel free to let me know through email, phone or any other social media platform that I have shared in my portfolio.</p>
                    <div className='flex items-center gap-5 mb-5'>
                        <div>
                            <FaUser className='text-4xl text-rose-600'></FaUser>
                        </div>
                        <div>
                            <p className='font-bold'>Name</p>
                            <p>Easy Job</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 mb-5'>
                        <div>
                            <FaLocationArrow className='text-4xl text-rose-600'></FaLocationArrow>
                        </div>
                        <div>
                            <p className='font-bold'>Location</p>
                            <p>Mirpur, Dhaka -1216</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 mb-5'>
                        <div>
                            <FaWhatsapp className='text-4xl text-rose-600'></FaWhatsapp>
                        </div>
                        <div>
                            <p className='font-bold'>Whatsapp</p>
                            <p>+8801782149686</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 mb-5'>
                        <div>
                            <MdOutgoingMail className='text-4xl text-rose-600'></MdOutgoingMail>
                        </div>
                        <div>
                            <p className='font-bold'>Email</p>
                            <p>easyjob@gmail.com</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;