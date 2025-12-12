import React from 'react';
import { createBrowserRouter } from "react-router";
import RootLayout from '../RootLayout/RootLayout';
import Register from '../components/Pages/Register';
import Login from '../components/Pages/Login';
import HomePage from '../components/Pages/Home/HomePage';
import Allgames from '../components/Pages/Allgames';
import GameDetails from '../components/Pages/GameDetails';
import PrivateRoute from '../provider/PrivateRoute';
import UserDetails from '../components/Pages/UserDetails';
import ForgotPassword from '../components/Pages/ForgotPassword';
import UpdateProfile from '../components/Pages/UpdateProfile';
import ErrorPage from '../components/ErrorPage/ErrorPage';

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
                element: <PrivateRoute>
                    <GameDetails></GameDetails>
                </PrivateRoute>
            },
            {
                path: "allgames/gameDetails/:id",
                element: <PrivateRoute>
                    <GameDetails></GameDetails>
                </PrivateRoute>
            },
            {
                path: "userDetails",
                element: <PrivateRoute><UserDetails></UserDetails></PrivateRoute>
            },

            {
                path: "forgotPassword",
                Component: ForgotPassword
            },
            {
                path: "updateProfile",
                element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
            },

            {
                path: "*",
                Component: ErrorPage
            }
        ]
    },
]);

export default router;