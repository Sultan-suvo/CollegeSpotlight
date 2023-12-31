import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Colleges from "../Pages/Colleges/Colleges";
import Admission from "../Pages/Admission/Admission";
import MyCollege from "../Pages/MyCollege/MyCollege";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import CollegeDetails from "../Pages/Colleges/CollegeDetails";
import AdmissionForm from "../Pages/Admission/AdmissionForm";
import BestCollegeDetails from "../Pages/Home/AllColleges/BestCollegeDetails";
import PrivateRoute from "./PrivateRoute";
import Profile from "../Pages/Profile/Profile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "college/:id",
                element: <PrivateRoute>
                    <BestCollegeDetails></BestCollegeDetails>
                </PrivateRoute>,
            },
            {
                path: "colleges",
                element: <Colleges></Colleges>,
            },
            {
                path: "showDetails",
                element: <CollegeDetails></CollegeDetails>,
            },
            {
                path: "admission",
                element: <Admission></Admission>,
            },
            {
                path: "admission/:collegeName",
                element: <AdmissionForm></AdmissionForm>,
            },
            {
                path: "myCollege",
                element: <MyCollege></MyCollege>,
            },
            {
                path: "profile",
                element: <Profile></Profile>,
            },
            {
                path: "login",
                element: <Login></Login>,
            },
            {
                path: "register",
                element: <Register></Register>,
            },
        ]
    },
]);

export default router;