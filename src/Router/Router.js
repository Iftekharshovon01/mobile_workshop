import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Products from "../Pages/Products/Products";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./Privateroute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('categories.json')
            },
            {
                path: '/category',
                element: <Products></Products>,
                loader: () => fetch(`phone.json`)
            },
            {
                path: '/products',
                element: <Products></Products>,
                loader: () => fetch(`phone.json`)
            }
            ,
            {
                path: '/login',
                element: <Login></Login>
            }

            ,
            {
                path: '/register',
                element: <Register></Register>
            }
            ,
            {
                path: '/blog',
                element: <Blog></Blog>
            }

        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            },

        ]
    }
])

export default router;