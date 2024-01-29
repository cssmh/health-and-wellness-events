import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Component/Home/Home";
import Profile from "../Component/Profile/Profile";
import Services from "../Component/Services/Services";
import ErrorPage from "../Component/ErrorPage/ErrorPage";

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
        path: "/services",
        element: <Services></Services>
      },
    ]
  },
]);

export default Router;