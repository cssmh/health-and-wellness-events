import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
  const navigateTo = useNavigate();
  const { createUser, updateNamePhoto } = useContext(AuthContext);
  const [view, setView] = useState(true);
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;

    const photoInputValue = e.target.photo.value;
    const defaultPhotoUrl =
      "https://raw.githubusercontent.com/cssmh/health-and-wellness-events/main/src/assets/default.jpg";

    const photo =
      photoInputValue.trim() !== "" ? photoInputValue : defaultPhotoUrl;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const checked = e.target.terms.checked;

    if (password.length < 6) {
      toast("Password must 6 character or more");
      return;
    } else if (
      !/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]).+$/.test(password)
    ) {
      toast("Use at least one uppercase and special character");
      return;
    } else if (!checked) {
      toast("Accept terms & condition");
      return;
    }

    createUser(email, password)
      .then((res) => {
        console.log(res.user);
        toast("Success Sign in");
        updateNamePhoto(name, photo)
          .then(() => {
            toast("also update name photo");
          })
          .catch((err) => {
            console.log(err.message);
          });
        navigateTo("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="hero min-h-[88vh]" data-aos="flip-right">
      <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100">
        <h1 className="text-custom-blue text-2xl text-center pt-7 font-semibold border-b pb-6 mx-8">
          Register your account
        </h1>
        <form onSubmit={handleRegister} className="card-body py-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Your Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter your Photo URL"
              className="input input-bordered"
            />
          </div>
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
          <div className="form-control relative">
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input
              type={view ? "password" : "text"}
              name="password"
              placeholder="Enter your password"
              className="input input-bordered"
              required
            />
            <span
              className="absolute top-[50px] right-3"
              onClick={() => setView(!view)}
            >
              {view ? <FaRegEyeSlash /> : <FaRegEye />}
            </span>
            <label className="label">
              <input type="checkbox" name="terms" id="" />
              <p className="text-sm ml-1">Accept Term & Conditions</p>
            </label>
          </div>
          <div className="form-control mt-2">
            <button className="btn bg-custom-blue hover:bg-[#403F3F] text-white font-semibold">
              Register
            </button>
          </div>
        </form>
        <div className="text-center mb-6 text-sm font-semibold">
          <p>
            Already Have An Account ?{" "}
            <Link to={"/login"} className="text-custom-blue">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
