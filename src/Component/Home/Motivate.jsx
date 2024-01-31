import motivate from "../../assets/yah.png";
const Motivate = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center mt-7 bg-blue-300 rounded-lg">
      <div className="lg:w-3/5 pl-16 pt-8 lg:pt-0">
        <h1 className="text-5xl text-white font-semibold">
          Don’t Let Your Health Take a Backseat!
        </h1>
        <p className="text-lg text-gray-800 mt-2">
          Schedule an appointment with one of our experienced<br></br> medical
          professionals today!
        </p>
      </div>
      <div className="lg:w-2/5">
        <img src={motivate} alt="" />
      </div>
    </div>
  );
};

export default Motivate;
