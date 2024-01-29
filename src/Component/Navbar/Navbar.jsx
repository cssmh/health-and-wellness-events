import { useContext } from "react";
import navLogo from "../../assets/iconmain.png";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut().then().catch();
  };
  const allNav = (
    <>
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive
            ? "bg-custom-blue text-white px-2 py-1 rounded-md"
            : "px-2 py-1 rounded-md"
        }
      >
        Home
      </NavLink>
      <NavLink
        to={"/profile"}
        className={({ isActive }) =>
          isActive
            ? "bg-custom-blue text-white px-2 py-1 rounded-md"
            : "px-2 py-1 rounded-md"
        }
      >
        Profile
      </NavLink>
      <NavLink
        to={"/appointment"}
        className={({ isActive }) =>
          isActive
            ? "bg-custom-blue text-white px-2 py-1 rounded-md"
            : "px-2 py-1 rounded-md"
        }
      >
        Appointment
      </NavLink>
    </>
  );

  return (
    <div className="navbar bg-base-300 mt-4 mb-1 px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className=" -ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {allNav}
          </ul>
        </div>
        <Link
          to={"/"}
          className="flex items-center text-2xl gap-2 font-semibold"
        >
          <img className="w-12" src={navLogo} alt="" /> MediCare
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{allNav}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center">
            <img src={user.photoURL} className="w-10 rounded-2xl mr-2" alt="" />
            <h1>
              Hi, <span className="font-semibold mr-2">{user.displayName}</span>
            </h1>
            <button onClick={handleLogout} className="text-custom-blue">
              Logout
            </button>
          </div>
        ) : (
          <NavLink
            to={"/login"}
            className={({ isActive }) =>
              isActive
                ? "bg-custom-blue text-white px-2 py-1 rounded-md"
                : "px-2 py-1 rounded-md"
            }
          >
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
