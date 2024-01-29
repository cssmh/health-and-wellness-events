import Patient from "../Patient/Patient";
import Banner from "./Banner";
import Doctors from "./Doctors";
import Motivate from "./Motivate";
import Services from "./Services";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Doctors></Doctors>
            <Patient></Patient>
            <Motivate></Motivate>
        </div>
    );
};

export default Home;