import { Link, useNavigate } from "react-router-dom";
import loginImage from '../../assets/images/login-image.jpg'
import { useContext } from "react";
import { AuthContext } from './../../providers/AuthProviders';
import Swal from "sweetalert2";


const SignUp = () => {

    const { createUser } = useContext(AuthContext)

    const navigate = useNavigate()

    const handleSignUp = event => {
        event.preventDefault()

        const form = event.target
        const email = form.email.value
        const password = form.password.value

        createUser(email, password)
            .then(() => {
                Swal.fire({
                    title: 'Success',
                    text: 'Your account has been created successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
                navigate('/')
            })
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <div className='min-h-screen'>
            <div className='flex items-center'>
                <div className='lg:flex justify-center items-center w-10/12 lg:w-1/2 mx-auto rounded-xl bg-slate-200 lg:h-[500px]'>
                    <div className='lg:w-1/2 lg:h-[500px]'>
                        <img className='lg:rounded-s-xl rounded-t-xl h-full w-full' src={loginImage} alt="" />
                    </div>
                    <div className='p-10 lg:w-1/2'>
                        <h2 className='text-3xl font-semibold'>Sign Up</h2>
                        <form onSubmit={handleSignUp}>
                            <div className="relative z-0 w-full mb-6 group mt-5">
                                <input type="email" name="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="password" name="password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                            </div>
                            <div className='text-center mt-5 mx-auto'>
                                <input className='bg-[#2563EB] text-white py-3 rounded hover:bg-blue-800 ease-in-out duration-200 cursor-pointer w-full' type="submit" value="Sign Up" />
                            </div>
                            <div className='mt-5 text-center font-bold'>Or</div>
                            <div className='mt-5'>
                                <Link to='/login'><button className='border-[#2563EB] text-[#2563EB] border-2 py-3 rounded hover:bg-blue-800 ease-in-out duration-200 cursor-pointer w-full hover:text-white'>Login</button></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;