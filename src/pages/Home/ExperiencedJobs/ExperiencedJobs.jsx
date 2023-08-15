import { useEffect, useState } from "react";
import SingleJob from "../../../components/SingleJob/SingleJob";


const ExperiencedJobs = () => {

    const [jobs, setJobs] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/experiencedJobs')
            .then(res => res.json())
            .then(data => {
                const topExperiencedJobs = data.slice(0, 6)
                setJobs(topExperiencedJobs)
            })
    }, [])

    const handleSeeAllJobs = () => {
        fetch('http://localhost:5000/allJobs')
            .then(res => res.json())
            .then(data => setJobs(data))
    }


    return (
        <div className="mb-10">
            <h1 className="text-center text-4xl mt-20 font-bold mb-10">Discover Experienced <span className="text-blue-500">Jobs</span></h1>
            <div data-aos="fade-up" className="w-9/12 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">
                {
                    jobs.map(singleJob => <SingleJob
                        key={singleJob._id}
                        singleJob={singleJob}
                    ></SingleJob>)
                }
            </div>
            <div className="text-center">
                <button onClick={handleSeeAllJobs} className={
                    jobs.length > 6 ?
                        'hidden' :
                        'px-4 py-2 text-xl font-semibold border-2 border-blue-600 text-blue-600 hover:bg-blue-600 ease-in-out duration-200 hover:text-white'
                }>See All Jobs</button>
            </div>
        </div>
    );
};

export default ExperiencedJobs;