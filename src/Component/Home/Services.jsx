import { useEffect, useState } from "react";
import pulse from "../../assets/pulse.png";
import CardServices from "./CardServices";
const Services = () => {
  const [dataServices, setDataServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setDataServices(data));
  }, []);

  return (
    <div className="mb-12">
      <div className="mb-5">
        <p className="text-center">OUR SERVICES</p>
        <h1 className="text-3xl font-semibold text-center my-3">
          We Care Our Patients.
        </h1>
        <img src={pulse} className="mx-auto w-16" alt="" />
      </div>
      <div className="gap-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {dataServices.map((solo) => (
          <CardServices key={solo.id} getServices={solo}></CardServices>
        ))}
      </div>
    </div>
  );
};

export default Services;
