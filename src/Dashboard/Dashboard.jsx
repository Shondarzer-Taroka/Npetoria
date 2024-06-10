import { Outlet } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import MyNavBar from "../Pages/NavBar/NavBar";
import 'tailwindcss/tailwind.css';
import { Table, TableBody, TableCell, TableRow } from "flowbite-react";

const Dashboard = () => {
    return (
        <section className="min-h-screen bg-white dark:bg-gray-900">
            <div className=" text-black dark:text-white">
                <MyNavBar></MyNavBar>
                <aside className="flex gap-2">

                    <article className="w-64 min-h-screen bg-blue-500">
                        <SideBar></SideBar>
                    </article>

                    <article className="flex-1">
                        <Outlet></Outlet>
                    </article>
                    {/* table starts */}

                    {/* <div className="overflow-x-auto">
                        <Table hoverable>
                            <TableBody >
                                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <TableCell>
                                        <article className="flex-1">
                                            <Outlet></Outlet>
                                        </article>
                                    </TableCell>
                                </TableRow>

                            </TableBody>
                        </Table>
                    </div> */}

                    {/* table ends */}
                </aside>
            </div>

        </section>
    );
};

export default Dashboard;












