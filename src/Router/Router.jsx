import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Component/Home/Home";
import Profile from "../Component/Profile/Profile";
import ErrorPage from "../Component/ErrorPage/ErrorPage";
import CardDetails from "../Component/Home/CardDetails";
import Appointment from "../Component/Appointment/Appointment";
import Login from "../Component/Login/Login";
import Register from "../Component/Register/Register";

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
        element: <Profile></Profile>
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
        element: <Appointment></Appointment>
      },
      {
        path: "/service/:id",
        element: <CardDetails></CardDetails>,
        loader: ()=> fetch("/services.json")
      },
    ]
  },
]);

export default Router;