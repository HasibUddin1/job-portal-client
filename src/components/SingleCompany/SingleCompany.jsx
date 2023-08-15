import { TiLocation } from "react-icons/ti";
import { FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

const SingleCompany = ({ singleCompany }) => {

    const { _id, name, location, employees, specialties, photo } = singleCompany

    return (
        <div className="flex flex-col items-center rounded-lg shadow-2xl md:flex-row md:max-w-xl bg-slate-100 lg:w-1/3 p-5 lg:p-0">
            <img className="w-1/3 h-full rounded-s-lg" src={photo} alt="" />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{name}</h5>
                <div className="flex items-center justify-between">
                    <p className="mb-3 font-normal text-gray-700 flex items-center gap-1 text-xl"><TiLocation></TiLocation> {location}</p>
                    <div className="mb-3 font-normal text-gray-700 flex items-center gap-2 text-xl">
                        <FaUsers></FaUsers>
                        <p className="font-bold">{employees}</p>
                    </div>
                </div>
                <div>
                    <p>Specialties</p>
                    <ul className="list-inside list-disc">
                        {
                            specialties.map(specialty => <li
                                key={specialty}
                            >{specialty}</li>)
                        }
                    </ul>
                </div>
                <div className="text-end">
                    <Link to={`/singleCompanyDetails/${_id}`}>
                        <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 apply-now-btn text-blue-600 w-32">View Details
                            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleCompany;