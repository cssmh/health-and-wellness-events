import prescription from "../../assets/med.png";
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { setToLocalStorage } from "../../LocalStorage/LocalStorage";

const CardDetails = () => {
  const [match, setMatch] = useState([]);
  const { name, description, image_url, more } = match;

  const allData = useLoaderData();
  const { id } = useParams();
  useEffect(() => {
    const bothMatching = allData.find((data) => id.includes(data.id));
    setMatch(bothMatching);
  }, [allData, id]);

  const localStorageSet = (idx, name) => {
    setToLocalStorage(idx, name);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row">
        <p className="my-3 text-gray-500 px-4 lg:px-0">{more}</p>
        <img className="lg:w-1/5 p-3" src={prescription} alt="" />
      </div>
      <h1 className="text-2xl text-custom-blue mb-2 font-semibold pl-3 lg:pl-0">{name}</h1>
      <img src={image_url} className="my-4 mx-1 lg:mx-0" alt="" />
      <button
        onClick={() => localStorageSet(match.id, name)}
        className="bg-custom-blue my-5 text-white px-4 rounded-md py-2 ml-3 lg:ml-0"
      >
        Get an Appointment
      </button>
      <p className="text-gray-500 px-3 lg:px-0">{description}</p>
    </div>
  );
};

export default CardDetails;
