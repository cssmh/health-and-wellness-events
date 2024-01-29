import motivate from "../../assets/yah.png";
const Motivate = () => {
  return (
    <div className="flex justify-between items-center mt-7 max-w-[1200px] mx-auto bg-blue-300 rounded-lg">
      <div className="w-3/5 pl-16">
        <h1 className="text-5xl text-white font-semibold">
          Don’t Let Your Health Take a Backseat!
        </h1>
        <p className="text-lg text-gray-800 mt-2">
          Schedule an appointment with one of our experienced<br></br> medical
          professionals today!
        </p>
      </div>
      <div className="w-2/5">
        <img src={motivate} alt="" />
      </div>
    </div>
  );
};

export default Motivate;
