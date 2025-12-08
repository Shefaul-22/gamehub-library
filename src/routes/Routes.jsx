import React from 'react';
import { createBrowserRouter } from "react-router";
import RootLayout from '../RootLayout/RootLayout';
import HomePage from '../components/Pages/HomePage';

const router = createBrowserRouter([

    {
        path: "/",
        element: <RootLayout></RootLayout>,
        children: [
            {
                index: true,
                Component: HomePage,
            }
        ]
    },
]);

export default router;