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


let router=createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
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
        element:<Dashboard></Dashboard>,
        children:[
            {
                path:'users',
                element:<Users></Users>
            },
            {
                path:'allpets',
                element:<AllPets></AllPets>
            },
            {
                path:'alldonations',
                element:<AllDonations></AllDonations>
            },
            {
                path:'addpet',
                element:<AddPet></AddPet>
            },
            {
                path:'myaddedpet',
                element:<MyAddedPets></MyAddedPets>
            },
            {
                path:'updatepet/:id',
                element: <UpdatePet></UpdatePet>
            },
            {
                path:'adoptionrequest',
                element:<AdoptionRequest></AdoptionRequest>
            },
            {
                path:'createdonationcampaign',
                element:<CreateDonationCampaign></CreateDonationCampaign>
            },
            {
                path:'mydonationcampaigns',
                element:<MyDonationCampaigns></MyDonationCampaigns>
            },
            {
                path:'mydonations',
                element:<MyDonations></MyDonations>
            },
            {
                path:'onedonation/:id',
                element:<EditDonation></EditDonation>
            }
        ]
    }
])

export default router