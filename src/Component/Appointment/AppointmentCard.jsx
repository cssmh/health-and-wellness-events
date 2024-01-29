import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const AppointmentCard = ({ getCard, handleRemove }) => {
  const { id, name, image_url, more } = getCard;

  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      className="border border-custom-blue p-4 rounded-lg"
    >
      <h1 className="text-xl text-custom-blue text-center mb-3">{name}</h1>
      <img className="w-56 mx-auto" src={image_url} alt="" />
      <p>{more.slice(0, 100)}</p>
      <Link to={`/service/${id}`}>
        <button className="bg-custom-blue text-white w-full py-1 mt-2">
          Details of {name}
        </button>
      </Link>
      <button
        onClick={() => handleRemove(id)}
        className="bg-custom-blue text-white w-full py-1 mt-2"
      >
        Remove Appointment
      </button>
    </div>
  );
};

AppointmentCard.propTypes = {
  getCard: PropTypes.object,
  handleRemove: PropTypes.func,
};

export default AppointmentCard;
