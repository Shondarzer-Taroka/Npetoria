import { useParams } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Button } from "flowbite-react";
// import { Button } from "flowbite-react";
import { useState } from "react";
import DonationModal from "./DonationModal";
// import MyModal from "./MyModal";

const DonationDetails = () => {
    let { id } = useParams()
    const [openModal, setOpenModal] = useState(false);
    const axiosSecure = useAxiosSecure()
    console.log(id);
    const { data: donationdetails = '', refetch, isLoading } = useQuery({
        queryKey: ['viewdetails', id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/donationdetails/${id}`);
            return res.data;
        }
    })
    console.log(donationdetails);

    function onCloseModal() {
        setOpenModal(false);
        // setEmail('');
      }

    return (
        isLoading ? <h1>Loading</h1> : <section>

            <aside>
                <div className="w-full h-[600px] ">
                    <img className="w-full h-full object-cover" src={donationdetails.image} alt="" />
                </div>


                <div id="content" className="m-4">
                    <h1 className="text-4xl font-bold"> Pet Name: {donationdetails.name} </h1>
                    {/* <h5 className="font-semibold text-2xl"> Category:  {viewdetails.category}</h5> */}
                    <h6 className="font-semibold">Time:{donationdetails.time}</h6>
                    {/* <h5 className="font-semibold">Location:{viewdetails.location}</h5> */}
                    {/* <h5 className="font-semibold">Location:{donationdetails.lastDate}</h5> */}
                    <h5 className=""> <span className="font-semibold">Last Date:</span> {new Date(donationdetails.lastDate).toISOString().split('T')[0].split('-').reverse().join('/')} </h5>
                    {/* <h5 className=""> <span className="font-semibold">Time:</span> {viewdetails.time} </h5> */}
                    <p> <span className="font-semibold">Short Description:</span> {donationdetails.shortDescription}</p>
                    <p> <span className="font-semibold">Long Description:</span> {donationdetails.longDescription}</p>
                    <Button className="mt-5" onClick={() => setOpenModal(true)}>Donate Now</Button>
                    {/* <MyModal 
                onCloseModal={onCloseModal}
                 openModal={openModal}
                 name={viewdetails.name}
                 allinfo={viewdetails}
                 ></MyModal> */}
                 <DonationModal
                    onCloseModal={onCloseModal}
                    openModal={openModal}
                    askedforId={donationdetails._id}
                 ></DonationModal>
                </div>
            </aside>
        </section>
    );
};

export default DonationDetails;