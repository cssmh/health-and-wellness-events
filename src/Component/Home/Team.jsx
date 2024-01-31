import team from "../../assets/hd.png";
const Team = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center my-10 bg-blue-300 rounded-lg">
      <div className="lg:w-3/5 px-10 pt-8 lg:pt-0">
        <h1 className="text-5xl text-white font-semibold">
          We are always here for you! Trust Yourself, Be Strong
        </h1>
        <p className="text-lg mt-2 my-4">
          Thank you for trusting us.<br></br>We are at the peak of medical
          professionals today!
        </p>
      </div>
      <div className="lg:w-2/5">
        <img src={team} alt="" />
      </div>
    </div>
  );
};

export default Team;
