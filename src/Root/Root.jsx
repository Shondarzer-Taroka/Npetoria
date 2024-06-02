import { Outlet } from "react-router-dom";
import NavBar from "../Pages/NavBar/NavBar";
import Home from "../Pages/Home/Home";
import MyNavBar from "../Pages/NavBar/NavBar";



const Root = () => {
    return (
        <section>
            <div className="max-w-6xl mx-auto">
                {/* <NavBar></NavBar> */}
                <MyNavBar></MyNavBar>
                {/* <Home></Home> */}
                <Outlet></Outlet>
        
            </div>
            {/* <Footer></Footer> */}
            
        </section>
    );
};

export default Root;