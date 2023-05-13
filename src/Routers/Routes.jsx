import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import LogLayout from "../layout/LogLayout";
import BookingService from "../pages/BookingService/BookingService";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRouter from "../PrivateRouter/PrivateRouter";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: 'book/:id',
          element: <PrivateRouter><BookingService></BookingService></PrivateRouter>,
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path: '/bookings',
          element: <PrivateRouter><Bookings></Bookings></PrivateRouter>,
        }
      ]
    },
    {
      path: '/',
      element: <LogLayout></LogLayout>,
      children: [
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'singup',
          element: <Register></Register>
        },
      ]
    },
  ]);