import {
    Avatar,
    Button,
    Dropdown,
    DropdownDivider,
    DropdownHeader,
    DropdownItem,
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarToggle,
    Spinner,
} from "flowbite-react";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link, NavLink } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const MyNavBar = () => {

    let { user, logout, spinner } = useContext(AuthContext)
    let [isAdmin] = useAdmin()
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
        <div className="">
            {/* <Button>Click me</Button> */}
                      
            {/* hare dark mode toggle */}
            
            <Navbar fluid rounded>
                <NavbarBrand href="">
                    <div className=" h-[30px] w-[100px]">
                    <img src='https://i.ibb.co/jJXqgwq/lggg.jpg' className="mr-3 w-full h-full bg-white rounded-xl" alt="" />
                    </div>
                </NavbarBrand>



                <div className="flex gap-2 md:order-2">


                  <ThemeToggle></ThemeToggle>

                    {spinner ? <Button color="gray">
                        <Spinner aria-label="Alternate spinner button example" size="sm" />
                        <span className="pl-3">Loading...</span>
                    </Button> : user ?
                        <div>


                            <Dropdown
                                arrowIcon={false}
                                inline
                                label={
                                    <Avatar alt="User settings" className="border rounded-full" img={user?.photoURL} rounded />
                                }
                            >
                                <DropdownHeader>
                                    <span className="block text-sm">{user?.displayName}</span>
                                    <span className="block truncate text-sm font-medium">{user?.email}</span>
                                </DropdownHeader>

                                {user && isAdmin && <DropdownItem><NavLink  className={'w-full text-left'} to={'/dashboard/adminDashboard'}>Dashboard</NavLink></DropdownItem>}
                                {user && !isAdmin && <DropdownItem><NavLink className={'w-full text-left'}  to={'/dashboard/userDashboard'}>Dashboard</NavLink></DropdownItem>}
                                {/* <DropdownItem>Settings</DropdownItem> */}
                                {/* <DropdownItem>Earnings</DropdownItem> */}
                                <DropdownDivider />
                                <DropdownItem className={'w-full text-left'}  onClick={handleLogOut}>Log out</DropdownItem>
                            </Dropdown>
                        </div> :

                        <div>
                            <Link to={'/login'}><button className="px-4 py-2 rounded-lg bg-blue-500 text-white">Log In</button> </Link>
                        </div>
                    }

                    <div>
                        <NavbarToggle />
                    </div>

                </div>

                <NavbarCollapse className="">
                    {/* <NavbarLink href="#" active>
                        Home
                    </NavbarLink>
                    <NavbarLink href="#">About</NavbarLink>
                    <NavbarLink href="#">Services</NavbarLink>
                    <NavbarLink href="#">Pricing</NavbarLink>
                    <NavbarLink href="#">Contact</NavbarLink> */}
                    {/* <div>

                    </div> */}
                    <NavLink className={' border rounded-lg p-2 lg:border-0 lg:p-0'} to={'/'}>Home</NavLink>
                    <NavLink className={' border rounded-lg p-2 lg:border-0 lg:p-0'} to={'/petlist'}>Pet Listing</NavLink>
                    <NavLink className={' border rounded-lg p-2 lg:border-0 lg:p-0'} to={'/donationcamp'}>Donation Campaigns</NavLink>
                </NavbarCollapse>
            </Navbar>
        </div>
    );
};

export default MyNavBar;




// second


