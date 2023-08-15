import { useContext } from 'react';
import './SingleJob.css'
import { AuthContext } from '../../providers/AuthProviders';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const SingleJob = ({ singleJob }) => {

    const { title, company, location, experience, postedDate, skills, logo } = singleJob

    const { user } = useContext(AuthContext)

    const navigate = useNavigate()

    const handleApplyButton = () => {

        const appliedJob = {
            userEmail: user?.email,
            title,
            company,
            location,
            experience,
            postedDate,
            skills,
            logo
        }

        if (user) {
            fetch('https://job-portal-server-omega.vercel.app/applyJob', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(appliedJob)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            title: 'Success',
                            text: 'Your have successfully applied for this job',
                            icon: 'success',
                            confirmButtonText: 'Ok'
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: '',
                text: "You must be logged in to apply for jobs",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login')
                }
            })
        }
    }

    return (

        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow">
            <div className='flex items-center justify-between'>
                <div>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-blue-500">{title}</h5>
                </div>
                <div>
                    <img className='w-[50px] h-[50px] rounded-full' src={logo} alt="" />
                </div>
            </div>
            <p className="font-normal ">Company: {company}</p>
            <p className="font-normal ">Location: {location}</p>
            <p className="font-normal ">Experience: {experience}</p>
            <p className="mb-3 font-normal ">Posted: {postedDate}</p>
            <p className=" mb-3 font-semibold text-xl text-center">Required Skills</p>
            <div className="mb-3 flex flex-wrap gap-2 p-2 rounded-lg">
                {
                    skills.map(skill => <p
                        key={skill}
                        className="p-2 border-2 border-blue-500 ms-2 font-semibold rounded-full text-blue-500"
                    >{skill}</p>)
                }
            </div>
            <button onClick={handleApplyButton} className="inline-flex items-center justify-between px-3 py-2 text-sm font-medium text-center rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 apply-now-btn">Apply Now
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </button>
        </div>
    );
};

export default SingleJob;

