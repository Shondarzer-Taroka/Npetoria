// import { NavLink } from "react-router-dom";


// const SideBar = () => {
//     let isTrue=true

//     return (
//         <section>
//             <aside id="sideBar-1" className="flex flex-col gap-4">
//                 { isTrue &&
//                     <div>
//                         <div className="flex flex-col gap-4">
//                             <NavLink className={'border rounded px-2 py-3'} to={'/dashboard/users'}>Users</NavLink>
//                             <NavLink className={'border rounded px-2 py-3'} to={'/dashboard/allpets'}>All Pets</NavLink>
//                             <NavLink className={'border rounded px-2 py-3'} to={'/dashboard/alldonations'}>All Donations</NavLink>
//                         </div>
//                         <div className="flex mt-4 items-center">
//                             <div className="h-[2px] w-full bg-black"></div>
//                             <p className="mx-2">or</p>
//                             <div className="h-[2px] w-[100%] bg-black"></div>
//                         </div>
//                     </div>
//                 }
//                 <NavLink className={'border rounded px-2 py-3'} to={'/dashboard/addpet'}>  Add a pet </NavLink>
//                 <NavLink className={'border rounded px-2 py-3'} to={'/dashboard/myaddedpet'}>  My added pets </NavLink>
//                 <NavLink className={'border rounded px-2 py-3'} to={'/dashboard/adoptionrequest'}>  Adoption Request</NavLink>
//                 <NavLink className={'border rounded px-2 py-3'} to={'/dashboard/createdonationcampaign'}>  Create Donation Campaign</NavLink>
//                 <NavLink className={'border rounded px-2 py-3'} to={'/dashboard/mydonationcampaigns'}>  My Donation Campaigns</NavLink>
//                 <NavLink className={'border rounded px-2 py-3'} to={'/dashboard/mydonations'}>  My Donations</NavLink>
//             </aside>



//             <aside id="sideBar-2">

//             </aside>
//         </section>
//     );
// };

// export default SideBar;