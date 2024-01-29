import { useLoaderData } from "react-router-dom";
import {
  getLocalStorage,
  removeFromLocalStorage,
} from "../../LocalStorage/LocalStorage";
import { useEffect, useState } from "react";
import AppointmentCard from "./AppointmentCard";
import swal from "sweetalert";

const Appointment = () => {
  const [match, setMatch] = useState([]);

  const allData = useLoaderData();
  useEffect(() => {
    const getLocalIds = getLocalStorage();
    const bothMatch = allData.filter((data) => getLocalIds.includes(data.id));
    setMatch(bothMatch);
  }, [allData]);

  //   remove from appointment
  const handleRemove = (idx) => {
    console.log(idx);
    const filterThatId = match.filter((data) => data.id !== idx);
    setMatch(filterThatId);
    removeFromLocalStorage(idx);
    swal("Good job!", "Deleted successfully!", "success");
  };
  //   remove from appointment end

  return (
    <div>
      <h1 className="text-xl text-center my-5 font-semibold">
        Your Total appointment: {match.length}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl lg:mx-auto gap-3 mx-3">
        {match.map((solo) => (
          <AppointmentCard
            key={solo.id}
            getCard={solo}
            handleRemove={handleRemove}
          ></AppointmentCard>
        ))}
      </div>
    </div>
  );
};

export default Appointment;
