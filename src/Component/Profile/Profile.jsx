import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const { displayName, email, emailVerified, photoURL } = user;

  return (
    <div className="max-w-6xl mx-auto">
      <div className="my-12 flex justify-between">
        <div>
          <h1 className="mb-4 text-xl font-semibold">{displayName}</h1>
          <img src={photoURL} alt="" />
        </div>
        <div>
          <p className="text-xl font-semibold mb-3">Your appointment:</p>
          <p>
            {emailVerified
              ? "Thanks for verifying your email"
              : "Verify your email please!"}
          </p>
        </div>
        <p className="text-xl font-semibold">{email ? email : "No email?!"}</p>
      </div>
    </div>
  );
};

export default Profile;
