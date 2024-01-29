import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Component/Home/Home";
import Profile from "../Component/Profile/Profile";
import ErrorPage from "../Component/ErrorPage/ErrorPage";
import CardDetails from "../Component/Home/CardDetails";
import Appointment from "../Component/Appointment/Appointment";

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