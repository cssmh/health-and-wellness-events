import { Link } from "react-router-dom";
import banner from "../../assets/banner.png";
const Banner = () => {
  return (
    <div className="max-w-6xl mx-auto mb-12 mt-3">
      <div className="flex justify-between items-center gap-2">
        <div className="w-3/5">
          <p className="text-custom-blue font-bold">BEST PRACTICES</p>
          <h1 className="text-5xl font-semibold text-[#004861] my-4">
            Clinic with Innovative<br></br> Approach To Treatment
          </h1>
          <p className="mb-2">
            Nemo ipsam egestas volute turpis dolores ut aliquam quaerat<br></br>{" "}
            sodales sapien undo pretium purus feugiat dolor impedit
          </p>
          <p>
            Maecenas gravida porttitor nunc, quis vehicula magna luctus<br></br>{" "}
            tempor. Quisque vel laoreet turpis urna augue,<br></br> viverra a
            augue eget, dictum tempor diam pulvinar massa purus nulla
          </p>
          <Link to={"/"}>
            <button className="bg-custom-blue my-5 text-white px-4 rounded-md py-2">
              Get an Appointment
            </button>
          </Link>
        </div>
        <div className="w-2/5">
          <img src={banner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
