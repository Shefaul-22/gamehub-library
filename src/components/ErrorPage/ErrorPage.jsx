import React from 'react';
import errorPageImg from '../../assets/pageError-404.png';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='bg-[#bdd7e7]'>
            <div className="flex flex-col items-center justify-center text-center p-6 my-4 md:my-7 ">

                <img className='w-72 h-72 mb-8 pt-10' src={errorPageImg} alt="" />

                <h2 className="text-2xl md:text-5xl font-semibold mb-2 mt-6 text-[#001943]">Oops, page not found!</h2>

                <p className="text-gray-700 my-3 text-[14px] md:text-xl">The page you are looking for is not available.
                </p>

                <Link
                    to="/"
                    className="btn btn-primary mt-2 text-white"
                >
                    Go Back Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;