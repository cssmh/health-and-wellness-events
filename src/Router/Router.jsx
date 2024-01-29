import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Component/Home/Home";
import Profile from "../Component/Profile/Profile";
import ErrorPage from "../Component/ErrorPage/ErrorPage";
import CardDetails from "../Component/Home/CardDetails";
import Appointment from "../Component/Appointment/Appointment";
import Login from "../Component/Login/Login";
import Register from "../Component/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/profile",
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/appointment",
        element: <PrivateRoute><Appointment></Appointment></PrivateRoute>,
        loader: ()=> fetch("/services.json")
      },
      {
        path: "/service/:id",
        element: <PrivateRoute><CardDetails></CardDetails></PrivateRoute>,
        loader: ()=> fetch("/services.json")
      },
    ]
  },
]);

export default Router;