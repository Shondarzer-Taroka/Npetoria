import { createBrowserRouter } from "react-router-dom"
import Root from "../Root/Root"
import Register from "../Authentication/Register/Register"
import LogIn from "../Authentication/LogIn/LogIn"
import Home from "../Pages/Home/Home"
import Dashboard from "../Dashboard/Dashboard"
import AddPet from "../Dashboard/AddPet/AddPet"
import MyAddedPets from "../Dashboard/MyAddedPets/MyAddedPets"
import AdoptionRequest from "../Dashboard/AdoptionRequest/AdoptionRequest"
import CreateDonationCampaign from "../Dashboard/CreateDonationCampaign/CreateDonationCampaign"
import MyDonationCampaigns from "../Dashboard/MyDonationCampaigns/MyDonationCampaigns"
import MyDonations from "../Dashboard/MyDonations/MyDonations"
import Users from "../Dashboard/Users/Users"
import AllPets from "../Dashboard/AllPets/AllPets"
import AllDonations from "../Dashboard/AllDonations/AllDonations"
import EditDonation from "../Dashboard/EditDonation/EditDonation"
import UpdatePet from "../Dashboard/UpdatePet/UpdatePet"
import PetListing from "../Pages/PetListing/PetListing"
import PetViewDetails from "../Pages/PetViewDetails/PetViewDetails"
import DonationCampaigns from "../Pages/DonationCampaigns/DonationCampaigns"
import DonationDetails from "../Pages/DonationDetails/DonationDetails"
import PrivateRoute from "../PrivateRoute/PrivateRoute"
import AdminDashboard from "../Dashboard/AdminDashboard/AdminDashboard"
import UserDashboard from "../Dashboard/UserDashboard/UserDashboard"
import AdminRoute from "../Dashboard/AdminRoute/AdminRoute"
import Error from "../Pages/Error/Error"


let router=createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/donationcamp',
                element:<DonationCampaigns></DonationCampaigns>
            },
            {
                path:'/donationdetails/:id',
                element:<DonationDetails></DonationDetails>
            },
            {
                path:'/login',
                element: <LogIn></LogIn>
            },
            {
                path:'/petlist',
                element:<PetListing></PetListing>
            },
            {
                path:'/viewdetails/:id',
                element:<PetViewDetails></PetViewDetails>
            }
        ]
    },
    {
        path:'dashboard',
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children:[
            {
                path:"adminDashboard",
                element:<AdminRoute><AdminDashboard></AdminDashboard></AdminRoute>
            },
            {
                path:'userDashboard',
                element:<PrivateRoute><UserDashboard></UserDashboard></PrivateRoute>
            },
            {
                path:'users',
                element:<AdminRoute><Users></Users></AdminRoute>
            },
            {
                path:'allpets',
                element:<AdminRoute><AllPets></AllPets></AdminRoute>
            },
            {
                path:'alldonations',
                element:<AdminRoute><AllDonations></AllDonations></AdminRoute>
            },
            {
                path:'addpet',
                element:<PrivateRoute><AddPet></AddPet></PrivateRoute>
            },
            {
                path:'myaddedpet',
                element:<PrivateRoute><MyAddedPets></MyAddedPets></PrivateRoute>
            },
            {
                path:'updatepet/:id',
                element: <PrivateRoute><UpdatePet></UpdatePet></PrivateRoute>
            },
            {
                path:'adoptionrequest',
                element:<PrivateRoute><AdoptionRequest></AdoptionRequest></PrivateRoute>
            },
            {
                path:'createdonationcampaign',
                element:<PrivateRoute><CreateDonationCampaign></CreateDonationCampaign></PrivateRoute>
            },
            {
                path:'mydonationcampaigns',
                element:<PrivateRoute><MyDonationCampaigns></MyDonationCampaigns></PrivateRoute>
            },
            {
                path:'mydonations',
                element:<PrivateRoute><MyDonations></MyDonations></PrivateRoute>
            },
            {
                path:'onedonation/:id',
                element:<PrivateRoute><EditDonation></EditDonation></PrivateRoute>
            }
        ]
    }
])

export default router