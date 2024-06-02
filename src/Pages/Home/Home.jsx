import Header from "../Header/Header";
import About from "../HomePageLayout/About/About";
import Banner from "../HomePageLayout/Banner/Banner";
import CallUs from "../HomePageLayout/CallUs/CallUs";
import Album from "../HomePageLayout/Extra/Album/Album";
import CrazyTeam from "../HomePageLayout/Extra/CazyTeam/CrazyTeam";
import MyNavBar from "../NavBar/NavBar";


const Home = () => {
    return (
        <div>
            {/* <MyNavBar></MyNavBar> */}
            <Banner></Banner>
            <CallUs></CallUs>
            <About></About>
            <Album></Album>
            <CrazyTeam></CrazyTeam>
          
          {/* <Header></Header> */}
        </div>
    );
};

export default Home;