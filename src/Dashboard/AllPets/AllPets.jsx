import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Button, Spinner, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

const AllPets = () => {

    const axiosSecure = useAxiosSecure();
    const { data: allpets = [], refetch,isLoading } = useQuery({
        queryKey: ['allpets'],
        queryFn: async () => {
            const res = await axiosSecure.get('/allpets');
            // console.log();
            return res.data;
        }
    })
    console.log(allpets);

    // delete pet
    function handledelete(id) {
   
        axiosSecure.delete(`/petdelete/${id}`)
            .then(res => {
                console.log(res.data);

                if (res.data.deletedCount > 0) {
                    refetch()
                    toast.success('successfully delete')
                }
            })
            .catch(err => {
                console.log(err);
            })
        // console.log(id);
    }

   async function handlePetStatus(event,id,status) {
        console.log(event.target,id,status);
        
        if (status===false) {
            // event.target.innerText='Adopted'
            // console.log('yes');
            const res = await axiosSecure.patch(`/petstatusbyadmin/${id}`,{adopted:true});
            console.log(res.data);
            if (res.data.modifiedCount) {
                refetch()
            }
        }  
        else if (status===true) {
            const res = await axiosSecure.patch(`/petstatusbyadmin/${id}`,{adopted:false});
            if (res.data.modifiedCount) {
                refetch()
            }
            console.log(res.data);
        }
    }
    return (
      isLoading ? <h1 className="flex justify-center"> <Spinner aria-label="Extra large spinner example" size="xl" /></h1>:  <section>
        <h1 className="text-3xl font-bold text-center uppercase my-7"> All pets</h1>
            <div className="overflow-x-auto">
                <Table hoverable>
                    <TableHead>
                        <TableHeadCell>Pet name</TableHeadCell>
                        <TableHeadCell>Category</TableHeadCell>
                        <TableHeadCell>Location</TableHeadCell>
                        <TableHeadCell>Action</TableHeadCell>
                    </TableHead>
                    <TableBody className="divide-y">

                        {allpets.map((value, index) => {
                            return <>
                                <TableRow key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {value.name}
                                    </TableCell>
                                    <TableCell>{value.category}</TableCell>
                                    <TableCell>{value.location}</TableCell>
                                    <TableCell>
                                        <div className="flex gap-2">
                                            <Button onClick={() => handledelete(value._id)} gradientMonochrome="failure">Delete</Button>
                                            <Link to={`/dashboard/updatepet/${value._id}`}>  <Button gradientMonochrome="success">Update</Button></Link>
                                          
                                            <Button onClick={()=>handlePetStatus(event,value._id,value.adopted)} gradientMonochrome="purple">{value.adopted?'Adopted':'Not Adopted'}</Button>
                                        </div>

                                    </TableCell>

                                </TableRow>
                            </>
                        })}

                    </TableBody>
                </Table>
            </div>
            <ToastContainer></ToastContainer>
        </section>
    );
};

export default AllPets;
