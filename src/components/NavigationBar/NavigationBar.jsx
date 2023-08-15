import { NavLink } from "react-router-dom";
import easyJobLog from '../../assets/images/easy-job-project-logo.png'
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";

const NavigationBar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    title: 'Success',
                    text: 'You have been successfully logged out',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
            })
    }

    const navItems = <>

        <NavLink
            to="/"
            className={({ isActive }) =>
                isActive ? "border-b-2 border-blue-500 px-2 py-1 text-blue-500 text-xl" : "hover:border-b-2 ease-in-out duration-200 px-2 py-1 border-blue-500 hover:text-blue-500 text-xl"
            }
        >
            Home
        </NavLink>


        <NavLink
            to="/aboutUs"
            className={({ isActive }) =>
                isActive ? "border-b-2 border-blue-500 px-2 py-1 text-blue-500 text-xl" : "hover:border-b-2 ease-in-out duration-200 px-2 py-1 border-blue-500 hover:text-blue-500 text-xl"
            }
        >
            About Us
        </NavLink>


        <NavLink
            to="/contactUs"
            className={({ isActive }) =>
                isActive ? "border-b-2 border-blue-500 px-2 py-1 text-blue-500 text-xl" : "hover:border-b-2 ease-in-out duration-200 px-2 py-1 border-blue-500 hover:text-blue-500 text-xl"
            }
        >
            Contact Us
        </NavLink>


        {
            user ?
                <button onClick={handleLogOut} className="bg-blue-600 text-white rounded-lg px-2 hover:bg-blue-800 ease-in-out duration-200 text-xl">Log Out</button>
                :
                <NavLink
                    to="/login"
                    className={({ isActive }) =>
                        isActive ? "border-b-2 border-blue-500 px-2 py-1 text-blue-500 text-xl" : "hover:border-b-2 ease-in-out duration-200 px-2 py-1 border-blue-500 hover:text-blue-500 text-xl"
                    }
                >
                    Login
                </NavLink>
        }
    </>

    return (
        <div className="navbar bg-base-100 justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">
                    <img className="w-[50px] h-[50px]" src={easyJobLog} alt="" />
                    <p className="text-4xl font-semibold">Easy Job</p>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    {navItems}
                </ul>
            </div>
        </div>
    );
};

export default NavigationBar;

