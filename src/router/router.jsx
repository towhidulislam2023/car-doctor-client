import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import LoginLayout from "../Layout/LoginLayout/LoginLayout";
import SignupLayout from "../Layout/SignupLayout/SignupLayout";
import Checkout from "../Pages/Checkout/Checkout";
import BookingCart from "../Pages/BookingCart/BookingCart";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/checkout/:id",
                element:<Checkout></Checkout>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: "/bookingCart",
                element: <PrivateRoute><BookingCart></BookingCart></PrivateRoute>,
                // loader: () => fetch("http://localhost:5000/bookkedServices")
            },
            
        ]
    },
    {
        path:"/login",
        element:<LoginLayout></LoginLayout>
    },
    {
        path:"/signup",
        element:<SignupLayout></SignupLayout>
    }
]);
export default router;