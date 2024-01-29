import pulse from "../../assets/pulse.png";
import d1 from "../../assets/1.jpg";
import d2 from "../../assets/2.jpg";
import d3 from "../../assets/3.jpg";
import d4 from "../../assets/4.jpg";
const Doctors = () => {
  return (
    <div className="mb-12">
      <div className="mb-5">
        <p className="text-center">OUR DOCTOR</p>
        <h1 className="text-3xl font-semibold text-center my-3">
          Our Dedicated Doctors Team
        </h1>
        <img src={pulse} className="mx-auto w-16" alt="" />
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <img
          src={d1}
          data-aos="fade-right"
          className="bg-white p-1 border-2 rounded-md mx-auto"
          alt=""
          title="Dr. Robert"
        />
        <img
          src={d2}
          data-aos="fade-right"
          className="bg-white p-1 border-2 rounded-md mx-auto"
          alt=""
          title="Dr. Sumaiya Easmin"
        />
        <img
          src={d3}
          data-aos="fade-left"
          className="bg-white p-1 border-2 rounded-md mx-auto"
          alt=""
          title="Dr. Kamrunnahar Kona"
        />
        <img
          src={d4}
          data-aos="fade-left"
          className="bg-white p-1 border-2 rounded-md mx-auto"
          alt=""
          title="Dr. Khubayed Siam"
        />
      </div>
    </div>
  );
};

export default Doctors;
