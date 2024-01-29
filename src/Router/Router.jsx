import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Component/Home/Home";
import Profile from "../Component/Profile/Profile";
import Services from "../Component/Services/Services";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
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


{/* <div class="flex mt-10 aos-init aos-animate" data-aos="fade-up" data-aos-delay="400" data-aos-offset="100"></div> */}