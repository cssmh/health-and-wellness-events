import Patient from "../Patient/Patient";
import Banner from "./Banner";
import Doctors from "./Doctors";
import Services from "./Services";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Doctors></Doctors>
            <Patient></Patient>
        </div>
    );
};

export default Home;