import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import LogLayout from "../layout/LogLayout";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
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