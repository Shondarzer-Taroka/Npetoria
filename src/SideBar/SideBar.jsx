// import { NavLink } from "react-router-dom";
// import useAdmin from "../Hooks/useAdmin";


// const SideBar = ({toggleMobileSidebar}) => {
//     const [isAdmin] = useAdmin();

//     return (
//         <section>
//             <aside id="sideBar-1" className="flex mt-12 lg:mt-0 flex-col gap-4">
//                 {isAdmin &&
//                     <div>
//                         <div className="flex flex-col gap-4">
//                             <NavLink className={'border rounded px-2 py-3'} to={'/dashboard/adminDashboard'} onClick={toggleMobileSidebar} >Admin Dshboard</NavLink>
//                             <NavLink className={'border rounded px-2 py-3'} to={'/dashboard/users'} onClick={toggleMobileSidebar}>Users</NavLink>
//                             <NavLink className={'border rounded px-2 py-3'} to={'/dashboard/allpets'} onClick={toggleMobileSidebar}>All Pets</NavLink>
//                             <NavLink className={'border rounded px-2 py-3'} to={'/dashboard/alldonations'} onClick={toggleMobileSidebar}>All Donations</NavLink>
//                         </div>
//                         <div className="flex mt-4 items-center">
//                             <div className="h-[2px] w-full bg-black"></div>
//                             <p className="mx-2">or</p>
//                             <div className="h-[2px] w-[100%] bg-black"></div>
//                         </div>
//                     </div>
//                 }

//                 <NavLink className={'border rounded px-2 py-3'} to={'/dashboard/userDashboard'} onClick={toggleMobileSidebar}>User Dashboard</NavLink>
//                 <NavLink className={'border rounded px-2 py-3'} to={'/dashboard/addpet'} onClick={toggleMobileSidebar}>  Add a pet </NavLink>
//                 <NavLink className={'border rounded px-2 py-3'} to={'/dashboard/myaddedpet'} onClick={toggleMobileSidebar}>  My added pets </NavLink>
//                 <NavLink className={'border rounded px-2 py-3'} to={'/dashboard/adoptionrequest'} onClick={toggleMobileSidebar}>  Adoption Request</NavLink>
//                 <NavLink className={'border rounded px-2 py-3'} to={'/dashboard/createdonationcampaign'} onClick={toggleMobileSidebar}>  Create Donation Campaign</NavLink>
//                 <NavLink className={'border rounded px-2 py-3'} to={'/dashboard/mydonationcampaigns'} onClick={toggleMobileSidebar}>  My Donation Campaigns</NavLink>
//                 <NavLink className={'border rounded px-2 py-3'} to={'/dashboard/mydonations'} onClick={toggleMobileSidebar}>  My Donations</NavLink>
//             </aside>



//             <aside id="sideBar-2">

//             </aside>
//         </section>
//     );
// };

// export default SideBar;













import { NavLink } from "react-router-dom";
import { FaUser, FaPaw, FaHandsHelping, FaChartLine, FaPlusCircle, FaGift } from "react-icons/fa";
import useAdmin from "../Hooks/useAdmin";

const SideBar = ({ toggleMobileSidebar }) => {
    const [isAdmin] = useAdmin();

    return (
        <section className="p-4">
            <aside className="flex flex-col gap-4">
                {isAdmin && (
                    <div>
                        <div className="flex flex-col gap-4">
                            <NavLink className="flex items-center gap-2 border rounded px-4 py-3 hover:bg-blue-600 hover:text-white" to="/dashboard/adminDashboard" onClick={toggleMobileSidebar}>
                                <FaUser /> Admin Dashboard
                            </NavLink>
                            <NavLink className="flex items-center gap-2 border rounded px-4 py-3 hover:bg-blue-600 hover:text-white" to="/dashboard/users" onClick={toggleMobileSidebar}>
                                <FaUser /> Users
                            </NavLink>
                            <NavLink className="flex items-center gap-2 border rounded px-4 py-3 hover:bg-blue-600 hover:text-white" to="/dashboard/allpets" onClick={toggleMobileSidebar}>
                                <FaPaw /> All Pets
                            </NavLink>
                            <NavLink className="flex items-center gap-2 border rounded px-4 py-3 hover:bg-blue-600 hover:text-white" to="/dashboard/alldonations" onClick={toggleMobileSidebar}>
                                <FaHandsHelping /> All Donations
                            </NavLink>
                        </div>
                        <div className="flex mt-4 items-center">
                            <div className="h-[2px] w-full bg-black"></div>
                            <p className="mx-2">or</p>
                            <div className="h-[2px] w-full bg-black"></div>
                        </div>
                    </div>
                )}

                <NavLink className="flex items-center gap-2 border rounded px-4 py-3 hover:bg-blue-600 hover:text-white" to="/dashboard/userDashboard" onClick={toggleMobileSidebar}>
                    <FaUser /> User Dashboard
                </NavLink>
                <NavLink className="flex items-center gap-2 border rounded px-4 py-3 hover:bg-blue-600 hover:text-white" to="/dashboard/addpet" onClick={toggleMobileSidebar}>
                    <FaPlusCircle /> Add a Pet
                </NavLink>
                <NavLink className="flex items-center gap-2 border rounded px-4 py-3 hover:bg-blue-600 hover:text-white" to="/dashboard/myaddedpet" onClick={toggleMobileSidebar}>
                    <FaPaw /> My Added Pets
                </NavLink>
                <NavLink className="flex items-center gap-2 border rounded px-4 py-3 hover:bg-blue-600 hover:text-white" to="/dashboard/adoptionrequest" onClick={toggleMobileSidebar}>
                    <FaHandsHelping /> Adoption Request
                </NavLink>
                <NavLink className="flex items-center gap-2 border rounded px-4 py-3 hover:bg-blue-600 hover:text-white" to="/dashboard/createdonationcampaign" onClick={toggleMobileSidebar}>
                    <FaGift /> Create Donation Campaign
                </NavLink>
                <NavLink className="flex items-center gap-2 border rounded px-4 py-3 hover:bg-blue-600 hover:text-white" to="/dashboard/mydonationcampaigns" onClick={toggleMobileSidebar}>
                    <FaChartLine /> My Donation Campaigns
                </NavLink>
                <NavLink className="flex items-center gap-2 border rounded px-4 py-3 hover:bg-blue-600 hover:text-white" to="/dashboard/mydonations" onClick={toggleMobileSidebar}>
                    <FaGift /> My Donations
                </NavLink>
            </aside>
        </section>
    );
};

export default SideBar;
