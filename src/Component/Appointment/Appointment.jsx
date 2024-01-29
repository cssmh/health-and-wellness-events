import { useLoaderData } from "react-router-dom";
import { getLocalStorage } from "../../LocalStorage/LocalStorage";
import { useEffect, useState } from "react";
import AppointmentCard from "./AppointmentCard";

const Appointment = () => {
  const [match, setMatch] = useState([]);

  const allData = useLoaderData();
  useEffect(() => {
    const getLocalIds = getLocalStorage();
    const bothMatch = allData.filter((data) => getLocalIds.includes(data.id));
    setMatch(bothMatch);
  }, [allData]);

  return (
    <div>
      <h1 className="text-xl text-center my-3 font-semibold">
        Your Total appointment: {match.length}
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 max-w-6xl lg:mx-auto gap-3 mx-3">
        {match.map((solo) => (
          <AppointmentCard key={solo.id} getCard={solo}></AppointmentCard>
        ))}
      </div>
    </div>
  );
};

export default Appointment;
