import React from 'react';
import { createBrowserRouter } from "react-router";
import RootLayout from '../RootLayout/RootLayout';
import HomePage from '../components/Pages/HomePage';
import Register from '../components/Pages/Register';
import Login from '../components/Pages/Login';

const router = createBrowserRouter([

    {
        path: "/",
        element: <RootLayout></RootLayout>,
        children: [
            {
                index: true,
                Component: HomePage,
            },
            {
                path: "register",
                Component: Register
            },

            {
                path: "login",
                Component: Login,
            }
        ]
    },
]);

export default router;