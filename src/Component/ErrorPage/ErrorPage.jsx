import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import error from "../../assets/error.jpeg"
const ErrorPage = () => {
    return (
        <div className="text-center">
            <img className="mx-auto my-10" src={error} alt="" />
            <p className="text-6xl font-semibold">Whoops! That page doesn't exist.</p>
            <p className="text-gray-500 text-lg my-8">The page you requested could not be found</p>
           <Link to={"/"}><button className="bg-slate-800 text-white rounded-xl px-8 py-4 flex items-center justify-center mx-auto gap-2"> <FaArrowLeft /> Back to Home</button></Link>
        </div>
    );
};

export default ErrorPage;