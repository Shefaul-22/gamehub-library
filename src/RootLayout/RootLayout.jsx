import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet, useLocation } from 'react-router';
import Footer from '../components/Footer/Footer';
import DynamicTitle from '../components/DynamicTitle/DynamicTitle';

const RootLayout = () => {

    const location = useLocation();

   
    DynamicTitle(location);

    return (
        <div>
            <Navbar></Navbar>

            <Outlet></Outlet>

            <Footer></Footer>
        </div>
    );
};

export default RootLayout;