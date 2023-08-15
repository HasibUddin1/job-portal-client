import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";
import ExperiencedJobs from "../ExperiencedJobs/ExperiencedJobs";
import FresherJobs from "../FresherJobs/FresherJobs";
import TopCompanies from "../TopCompanies/TopCompanies";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FresherJobs></FresherJobs>
            <ExperiencedJobs></ExperiencedJobs>
            <TopCompanies></TopCompanies>
            <Blog></Blog>
        </div>
    );
};

export default Home;