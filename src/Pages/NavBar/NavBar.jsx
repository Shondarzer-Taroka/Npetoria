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

const MyNavBar = () => {

    let { user, logout, spinner } = useContext(AuthContext)
    let [isAdmin]=useAdmin()
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
        <div>
            {/* <Button>Click me</Button> */}
            <Navbar fluid rounded>
                <NavbarBrand href="">
                    <img src="/src/assets/react.svg" className="mr-3 h-6 sm:h-9" alt="" />
                    {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span> */}
                </NavbarBrand>



                <div className="flex gap-2 md:order-2">

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

                                { user && isAdmin && <DropdownItem><NavLink to={'/dashboard/adminDashboard'}>Dashboard</NavLink></DropdownItem>}
                                { user && !isAdmin && <DropdownItem><NavLink to={'/dashboard/userDashboard'}>Dashboard</NavLink></DropdownItem>}
                                {/* <DropdownItem>Settings</DropdownItem> */}
                                {/* <DropdownItem>Earnings</DropdownItem> */}
                                <DropdownDivider />
                                <DropdownItem onClick={handleLogOut}>Log out</DropdownItem>
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
                    <NavLink className={' border rounded-lg p-2 lg:border-0 lg:p-0'} to={'/donationcamp'}>DonationCampaigns</NavLink>
                </NavbarCollapse>
            </Navbar>
        </div>
    );
};

export default MyNavBar;