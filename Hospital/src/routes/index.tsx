import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Common/HomePage";
import Signin from "../pages/Common/Signin";
import SignUp from "../pages/Common/Signup";
import LandingScreen from "../pages/Doctor/Home/Homepage";



const router = createBrowserRouter([
    { path: '/*', element: <Home /> },
    { path: '/signin', element: <Signin /> },
    { path: '/signup', element: <SignUp /> },
    { path: '/homepage', element: <LandingScreen /> }
]);

export default router;