import Patient from "../Patient/Patient";
import Banner from "./Banner";
import Doctors from "./Doctors";
import Motivate from "./Motivate";
import Services from "./Services";
import Team from "./Team";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Team></Team>
            <Doctors></Doctors>
            <Patient></Patient>
            <Motivate></Motivate>
        </div>
    );
};

export default Home;