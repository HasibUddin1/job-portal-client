import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaUsers } from "react-icons/fa";


const SingleCompanyDetails = () => {

    const { id } = useParams()

    const [company, setCompany] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/singleCompany/${id}`)
            .then(res => res.json())
            .then(data => setCompany(data))
    }, [])
    

    return (
        <div className="w-9/12 mx-auto min-h-screen">
            <div className='flex gap-20 justify-center items-center mt-10 mb-10'>
                <div className='flex flex-col w-1/2'>
                    <h1 className='text-6xl font-bold'>{company?.name}</h1>
                    <h3 className='text-3xl font-semibold mt-5'>Location: {company?.location}</h3>
                    <p className='text-xl mt-5'>{company?.description}</p>
                    <h4 className='text-2xl flex items-center gap-2 mt-5'>Employees: {company?.employees} <FaUsers></FaUsers></h4>
                    <Link to='/'>
                        <button className='bg-blue-500 hover:bg-blue-700 ease-in-out duration-200 px-6 py-2 text-white rounded-xl w-1/6 font-semibold mt-5'>Go Back</button>
                    </Link>
                </div>
                <div className="w-1/2">
                    <img className='rounded-xl' src={company?.photo} alt="" />
                </div>
            </div>
        </div>
    );
};

export default SingleCompanyDetails;