import banner from "../../assets/banner.png";
const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto flex justify-between">
      <div>
        <p className="text-custom-blue">BEST PRACTICES</p>
      </div>
      <div>
        <img src={banner} alt="" />
      </div>
    </div>
  );
};

export default Banner;
