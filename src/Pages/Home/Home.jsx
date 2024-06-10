import Header from "../Header/Header";
import About from "../HomePageLayout/About/About";
import Banner from "../HomePageLayout/Banner/Banner";
import CallUs from "../HomePageLayout/CallUs/CallUs";
import Album from "../HomePageLayout/Extra/Album/Album";
import CrazyTeam from "../HomePageLayout/Extra/CazyTeam/CrazyTeam";
import MyNavBar from "../NavBar/NavBar";
import PetCategory from "../PetCategory/PetCategory";


const Home = () => {
    return (
        <div>
            {/* <MyNavBar></MyNavBar> */}
            <Banner></Banner>
            <PetCategory></PetCategory>
            <CallUs></CallUs>
            <About></About>
            <Album></Album>
            <CrazyTeam></CrazyTeam>
       
          
          {/* <Header></Header> */}
        </div>
    );
};

export default Home;