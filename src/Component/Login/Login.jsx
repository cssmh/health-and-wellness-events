import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="bg-[#F3F3F3]">
        <div className="hero min-h-[88vh]">
          <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100">
            <h1 className="text-custom-blue text-2xl text-center pt-7 font-semibold border-b pb-6 mx-8">
              Login your account
            </h1>
            <form className="card-body py-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Email address</span>
                </label>
                <input
                  type="email"
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
            <div className="text-center mb-6 text-sm font-semibold">
              <p>
                Dont’t Have An Account ?{" "}
                <Link to={"/register"} className="text-custom-blue">
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;