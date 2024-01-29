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
    setToLocalStorage(idx, name)
  }
  
  return (
    <div className="max-w-7xl mx-auto">
      <p className="my-3">{more}</p>
      <h1 className="text-xl text-custom-blue mb-2 font-semibold">{name}</h1>
      <img src={image_url} className="my-4" alt="" />
      <button onClick={()=>localStorageSet(match.id, name)} className="bg-custom-blue my-5 text-white px-4 rounded-md py-2">
        Get an Appointment
      </button>
      <p>{description}</p>
    </div>
  );
};

export default CardDetails;
