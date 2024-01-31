import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-[80vh] max-w-6xl mx-auto">
        <Outlet></Outlet>
        <ToastContainer />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
