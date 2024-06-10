import { useParams } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Button } from "flowbite-react";
import { useState } from "react";
import MyModal from "./MyModal";

const PetViewDetails = () => {
    const [openModal, setOpenModal] = useState(false);

    let {id}=useParams()
    const axiosSecure=useAxiosSecure()
    console.log(id);
    const { data: viewdetails ='', refetch ,isLoading} = useQuery({
        queryKey: ['viewdetails',id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/viewdetails/${id}`);
            return res.data;
        }
    })

    console.log(viewdetails);


    function onCloseModal() {
        setOpenModal(false);
        // setEmail('');
      }
    return (
      isLoading ? <h1>Loading</h1> : <section>

       
            
            <aside>
                <div className="w-full h-[600px] ">
                       <img className="w-full h-full object-cover" src={viewdetails.image} alt="" /> 
                </div>
            

                <div id="content" className="m-4">
                 <h1 className="text-4xl font-bold"> Pet Name: {viewdetails.name} </h1>
                 <h5 className="font-semibold text-2xl"> Category:  {viewdetails.category}</h5>
                 <h6 className="font-semibold">Age:{viewdetails.age}</h6>
                 <h5 className="font-semibold">Location:{viewdetails.location}</h5>
               
                 <h5 className=""> <span className="font-semibold">Date:</span> {new Date(viewdetails.date).toISOString().split('T')[0].split('-').reverse().join('/')} </h5>
                 <h5 className=""> <span className="font-semibold">Time:</span> {viewdetails.time} </h5>
                 <p> <span className="font-semibold">Short Description:</span> {viewdetails.shortDescription}</p>
                <p> <span className="font-semibold">Long Description:</span> {viewdetails.longDescription}</p>
                <Button className="mt-5" onClick={() => setOpenModal(true)}>Adopt</Button>
                <MyModal 
                onCloseModal={onCloseModal}
                 openModal={openModal}
                 name={viewdetails.name}
                 allinfo={{age:viewdetails.age,location:viewdetails.location,adoptorEmail:viewdetails.email,shortDescription:viewdetails.shortDescription,longDescription:viewdetails.longDescription,petName:viewdetails.name}}
                 ></MyModal>
                </div>
            </aside>
        </section>
    );
};

export default PetViewDetails;