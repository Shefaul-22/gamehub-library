
import React, { use } from 'react';
import { Link, Navigate, NavLink } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';




const Navbar = () => {

    const { user, logOutUser } = use(AuthContext);
    console.log(user)

    const handleSignOut = () => {
        logOutUser()
            .then(() => {
            })
            .catch(error => {
                console.error(error);

            })
    }

    const links = <>



        <li><NavLink to="/" className={({ isActive }) =>
            `btn btn-primary mr-3 mb-2 ${isActive ? "!bg-yellow-500 " : ""}`}>Home</NavLink></li>
        <li><NavLink to="/allGames" className={({ isActive }) =>
            `btn btn-primary mr-3 mb-2 ${isActive ? "!bg-yellow-500 " : ""}`}>All Games</NavLink>
        </li>



    </>

    return (
        <div className="navbar fixed top-0 left-0 w-full z-50 px-5 bg-gradient-to-r from-[#a83abe] to-[#791d43] backdrop-blur supports-[backdrop-filter]:backdrop-blur shadow-sm">

            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-gray-300 rounded-box z-[100] mt-3 w-52 p-2 shadow mb-3">

                        {
                            links
                        }

                    </ul>
                </div>
                <div className='flex justify-center items-center gap-1 '>

                    <a className=" text-2xl md:text-3xl font-bold text-white">Gamehub<span className='text-yellow-300 font-bold'>Library</span></a>
                </div>
            </div>





            <div className="navbar-end">
                <div className="navbar-center ml-15 hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        {
                            links
                        }
                    </ul>
                </div>

                {user ? (
                    <div className="flex justify-center items-center">



                        <div className="mr-2 mt-0">
                            <Link to="/userDetails">
                                <img
                                    className='w-9 h-9 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'

                                    alt=""
                                    src={user.photoURL ? user.photoURL : "https://ibb.co.com/G4qVmKJz"}
                                />
                            </Link>
                        </div>

                        <div>
                            <button
                                onClick={handleSignOut}
                                className="btn btn-primary py-[18px] btn-sm w-full text-white"
                            >Log Out
                            </button>
                        </div>



                    </div>
                ) : (
                    <div className='flex items-center justify-center'>

                        <NavLink
                            to="/register"
                            className={({ isActive }) =>
                                `btn btn-primary mr-3 mb-2 transition-all duration-200
             ${isActive ? "!bg-yellow-500 " : ""}`
                            }
                        >
                            Register
                        </NavLink>

                        <NavLink
                            to="/login"
                            className={({ isActive }) =>
                                `btn btn-primary mr-3 mb-2 transition-all duration-200
             ${isActive ? "!bg-yellow-500" : ""}`
                            }
                        >
                            Login
                        </NavLink>

                    </div>

                )}

            </div>

        </div>
    );
};

export default Navbar;
