import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Colleges from "../Pages/Colleges/Colleges";
import Admission from "../Pages/Admission/Admission";
import MyCollege from "../Pages/MyCollege/MyCollege";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path: "/",
                element: <Home></Home>,  
            },
            {
                path: "colleges",
                element: <Colleges></Colleges>,  
            },
            {
                path: "admission",
                element: <Admission></Admission>,  
            },
            {
                path: "myCollege",
                element: <MyCollege></MyCollege>,  
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