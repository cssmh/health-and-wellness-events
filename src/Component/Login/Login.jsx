import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useContext, useRef } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const { signInUser, googlePopupLogin, githubPopupLogin, forgotPassword } =
    useContext(AuthContext);

  const handleGooglePopupLogin = () => {
    googlePopupLogin()
      .then((res) => {
        console.log(res.user);
        toast("Success google logged in");
      })
      .catch((err) => {
        toast(err.message);
      });
  };

  const handleGithubPopupLogin = () => {
    githubPopupLogin()
      .then((res) => {
        console.log(res.user);
        toast("Success github logged in");
      })
      .catch((err) => {
        toast(err.message);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((res) => {
        console.log(res.user);
        toast("Success logged in");
      })
      .catch((err) => {
        toast(err.message);
      });
  };

  const useRefer = useRef();
  const handleForgotPassword = () => {
    const getEmail = useRefer.current.value;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(getEmail)) {
      toast("Enter a valid email");
    } else {
      forgotPassword(getEmail)
        .then(() => {
          toast("Verification email sent");
        })
        .catch((err) => {
          toast(err.message);
        });
    }
  };

  return (
    <div className="bg-[#F3F3F3]">
      <div className="hero min-h-[88vh]">
        <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100">
          <h1 className="text-custom-blue text-2xl text-center pt-7 font-semibold border-b pb-6 mx-8">
            Login your account
          </h1>
          <form onSubmit={handleLogin} className="card-body py-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email address</span>
              </label>
              <input
                type="email"
                ref={useRefer}
                name="email"
                placeholder="Enter your email address"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a
                  onClick={handleForgotPassword}
                  href="#"
                  className="label-text-alt link link-hover font-semibold"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-3">
              <button className="btn bg-custom-blue hover:bg-[#403F3F] text-white font-semibold">
                Login
              </button>
            </div>
          </form>
          <div className="text-center mb-4 text-sm font-semibold">
            <p>
              Dont’t Have An Account ?{" "}
              <Link to={"/register"} className="text-custom-blue">
                Register
              </Link>
            </p>
          </div>
          <div className="mx-auto space-x-1">
            <button
              onClick={handleGooglePopupLogin}
              className="mb-5 text-2xl px-5 py-2 rounded-lg bg-red-100"
            >
              <FcGoogle />
            </button>
            <button
              onClick={handleGithubPopupLogin}
              className="mb-5 text-2xl px-5 py-2 rounded-lg bg-red-100"
            >
              <FaGithub />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
