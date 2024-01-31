import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { getLocalStorage } from "../../LocalStorage/LocalStorage";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const { displayName, email, emailVerified, photoURL } = user;

  const getLocalIdx = getLocalStorage();

  return (
    <div className="max-w-6xl mx-auto">
      <div className="my-12 flex flex-col lg:flex-row justify-between">
        <div>
          <h1 className="text-center mb-4 text-xl font-semibold px-5 lg:px-0">
            {displayName}
          </h1>
          <img className="lg:w-48 mx-auto" src={photoURL} alt="" />
        </div>
        <div className="text-center mt-6 lg:mt-0">
          <p className="text-xl font-semibold">
            Your appointment: {getLocalIdx.length}
          </p>
          <p className="text-custom-blue mb-3">
            Wait for your call
          </p>
          <p>
            {emailVerified
              ? "Thanks for verifying your email"
              : "Verify your email please!"}
          </p>
        </div>
        <p className="text-xl text-center font-semibold">{email ? email : "No email?!"}</p>
      </div>
    </div>
  );
};

export default Profile;
