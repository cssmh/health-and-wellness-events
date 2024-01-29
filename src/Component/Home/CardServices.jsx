import PropTypes from "prop-types";
const CardServices = ({ getServices }) => {
  console.log(getServices);
  const { name, description, image_url } = getServices;
  return (
    <div className="border border-gray-300 p-5 rounded-lg flex flex-col">
      <div className="flex-grow">
      <h1 className="text-xl text-custom-blue mb-2 font-semibold text-center">
        {name}
      </h1>
      <img src={image_url} alt="" />
      <p className="my-2 text-gray-500">{description}</p>
      </div>
      <button className="bg-custom-blue w-full text-white py-1 rounded-md">
        Choose {name}
      </button>
    </div>
  );
};

CardServices.propTypes = {
  getServices: PropTypes.object,
};

export default CardServices;
