import React from 'react';
import { createBrowserRouter } from "react-router";
import RootLayout from '../RootLayout/RootLayout';
import Register from '../components/Pages/Register';
import Login from '../components/Pages/Login';
import HomePage from '../components/Pages/Home/HomePage';
import Allgames from '../components/Pages/Allgames';
import GameDetails from '../components/Pages/GameDetails';

const router = createBrowserRouter([

    {
        path: "/",
        element: <RootLayout></RootLayout>,
        children: [
            {
                index: true,
                loader: () => fetch("/allgames.json"),
                Component: HomePage,
            },

            {
                path: "register",
                Component: Register
            },

            {
                path: "login",
                Component: Login,
            },

            {
                path: "allgames",
                Component: Allgames
            },
            {
                path: "gameDetails/:id",
                Component: GameDetails
            }
        ]
    },
]);

export default router;