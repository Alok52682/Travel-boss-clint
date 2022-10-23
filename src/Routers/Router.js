import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import Booking from "../Pages/Booking/Booking";
import Login from "../Pages/Common/Login";
import Register from "../Pages/Common/Register";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([{
    path: '/',
    element: <Main />,
    children: [
        {
            path: '/',
            loader: async () => fetch(`https://travel-boss-server.vercel.app/`),
            element: <Home />
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/register',
            element: <Register />
        },
        {
            path: 'booking/:id',
            element: <PrivateRoute><Booking /></PrivateRoute>,
            loader: async ({ params }) => fetch(`https://travel-boss-server.vercel.app/place/${params.id}`)
        }

    ]
}])

export default router;