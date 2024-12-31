import { Outlet } from "react-router-dom";
import MyNavBar from "../Pages/NavBar/NavBar";
import 'tailwindcss/tailwind.css';
import Footer from "../Pages/Footer/Footer";


const Root = () => {
    return (
        <section className="min-h-screen bg-white dark:bg-gray-900">
            <div className="max-w-6xl mx-auto p-4 text-black dark:text-white">
                {/* <ThemeToggle></ThemeToggle> */}
                {/* <NavBar></NavBar> */}
                <MyNavBar></MyNavBar>
                {/* <Home></Home> */}
                <Outlet></Outlet>
        
            </div>
            <Footer></Footer>
            
        </section>
    );
};

export default Root;