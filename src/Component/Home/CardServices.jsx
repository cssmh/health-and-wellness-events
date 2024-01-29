import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const CardServices = ({ getServices }) => {
  // console.log(getServices);
  const { id, name, description, image_url } = getServices;
  return (
    <div
      className="border border-gray-300 p-5 rounded-lg flex flex-col"
      data-aos="zoom-in"
      data-aos-delay="400"
      data-aos-offset="100"
    >
      <div className="flex-grow">
        <h1 className="text-xl text-custom-blue mb-2 font-semibold text-center">
          {name}
        </h1>
        <img src={image_url} alt="" />

        <p className="my-2 text-gray-500">{description}</p>
      </div>
      <Link to={`/service/${id}`}>
        <button className="bg-custom-blue w-full text-white py-1 rounded-md">
          Choose {name}
        </button>
      </Link>
    </div>
  );
};

CardServices.propTypes = {
  getServices: PropTypes.object,
};

export default CardServices;
