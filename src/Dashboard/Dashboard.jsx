import { Outlet } from "react-router-dom";
import SideBar from "../SideBar/SideBar";


const Dashboard = () => {
    return (
        <section>
            <aside className="flex gap-2">

                <article className="w-64 min-h-screen bg-orange-400">
                  <SideBar></SideBar>
                </article>

                <article className="flex-1">
                    <Outlet></Outlet>
                </article>
            </aside>
        </section>
    );
};

export default Dashboard;