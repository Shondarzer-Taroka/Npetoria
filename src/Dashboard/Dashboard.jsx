// import { Outlet } from "react-router-dom";
// import SideBar from "../SideBar/SideBar";
// import MyNavBar from "../Pages/NavBar/NavBar";
// import 'tailwindcss/tailwind.css';
// import { RiMenu2Fill, RiMenu3Fill } from "react-icons/ri";
// import { useState } from "react";


// const Dashboard = () => {
//     const [isCollapse, setIsCollapse] = useState(false)

//     function changCollapse() {
//         setIsCollapse(!isCollapse)
//     }
//     return (
//         <section className="min-h-screen bg-white dark:bg-gray-900">
//             <div className=" text-black dark:text-white">
//                 <MyNavBar></MyNavBar>
//                 <aside className="flex gap-2">


//                     {

//                         isCollapse || <div>

//                             <article className="w-64 absolute lg:relative min-h-screen bg-blue-500 transition delay-150 duration-300 ease-in-out">
//                                 <SideBar></SideBar>
//                             </article>

//                         </div>

//                     }





//                     <article className="flex-1">
//                         <article className="w-full h-[50px] bg-slate-300 flex items-center">
//                             {isCollapse || <RiMenu2Fill className="ml-2 " onClick={changCollapse} />}
//                             {isCollapse && <RiMenu3Fill className="ml-2" onClick={changCollapse} />}

//                         </article>
//                         <Outlet></Outlet>
//                     </article>

//                 </aside>
//             </div>

//         </section>
//     );
// };

// export default Dashboard;


















import { Outlet } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import MyNavBar from "../Pages/NavBar/NavBar";
import 'tailwindcss/tailwind.css';
import { RiMenu2Fill, RiMenu3Fill } from "react-icons/ri";
import { useContext, useState } from "react";
import { FaRegWindowClose } from "react-icons/fa";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Dashboard = () => {
    const [isCollapse, setIsCollapse] = useState(false); // Desktop sidebar toggle state
    const [isMobileOpen, setIsMobileOpen] = useState(false); // Mobile sidebar toggle state

    const changCollapse = () => setIsCollapse(!isCollapse);
    const toggleMobileSidebar = () => setIsMobileOpen(!isMobileOpen);

    let { user, logout, spinner } = useContext(AuthContext)
    // console.log(isAdmin);
    function handleLogOut() {
        logout()
            .then(res => {
                localStorage.removeItem('petoria-access');
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <section className="min-h-screen bg-white dark:bg-gray-900">
            <div className="text-black dark:text-white">
                {/* Desktop Top Bar */}
                <MyNavBar />

                <aside className="flex gap-2">
                    {/* Desktop Sidebar */}
                    {!isCollapse && (
                        <div className=" hidden lg:block">
                            <article className="w-64 absolute lg:relative min-h-screen bg-blue-500 transition delay-150 duration-300 ease-in-out">
                                <SideBar />
                            </article>
                        </div>
                    )}

                    {/* Mobile Sidebar */}
                    {isMobileOpen && (
                        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 lg:hidden">
                            <article className="w-64 h-full bg-blue-500 fixed top-0 left-0 z-50 shadow-lg">
                                <SideBar toggleMobileSidebar={toggleMobileSidebar} />
                                <RiMenu3Fill className="hidden lg:block" onClick={toggleMobileSidebar} />
                                <FaRegWindowClose
                                    size={24}
                                    className="absolute md:hidden top-0 right-0 text-white cursor-pointer"
                                    onClick={toggleMobileSidebar}
                                />
                            </article>
                        </div>
                    )}

                    {/* Content Area */}
                    <article className="flex-1">
                        <article className="w-full h-[50px] bg-slate-300 flex items-center justify-between px-4 lg:hidden">
                            {/* Mobile Toggle Button */}
                            {isMobileOpen ? (
                                <RiMenu3Fill size={24} onClick={toggleMobileSidebar} />
                            ) : (
                                <RiMenu2Fill size={24} onClick={toggleMobileSidebar} />
                            )}
                            <div className="flex justify-end w-full gap-2 items-center">
                                <div className="flex ">
                                    <span>
                                        <span className="block text-sm">{user?.displayName}</span>
                                        <span className="block truncate text-sm font-medium">{user?.email}</span>
                                    </span>
                                    <img alt="User settings" className="border rounded-full w-[50px] h-[50px]" src={user?.photoURL} />

                                </div>
                                <div className="">
                                    <button className={'w-full text-left px-4 py-2 text-white  rounded-sm bg-blue-500'} onClick={handleLogOut}>Log out</button>

                                </div>
                            </div>
                        </article>

                        {/* Desktop Sidebar Toggle Button */}
                        <article className="w-full h-[50px] bg-slate-300 flex items-center hidden lg:flex">
                            {isCollapse || <RiMenu2Fill className="ml-2" onClick={changCollapse} />}
                            {isCollapse && <RiMenu3Fill className="ml-2" onClick={changCollapse} />}



                            <div className="flex justify-end w-full gap-2 items-center">
                                <div className="flex ">
                                    <span>
                                        <span className="block text-sm">{user?.displayName}</span>
                                        <span className="block truncate text-sm font-medium">{user?.email}</span>
                                    </span>
                                    <img alt="User settings" className="border rounded-full w-[50px] h-[50px]" src={user?.photoURL} />

                                </div>
                                <div className="">
                                    <button className={'w-full text-left px-4 py-2 text-white  rounded-sm bg-blue-500'} onClick={handleLogOut}>Log out</button>

                                </div>
                            </div>

                        </article>

                        <Outlet />
                    </article>
                </aside>
            </div>
        </section>
    );
};

export default Dashboard;






