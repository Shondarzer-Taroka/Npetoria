import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Button, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const AllDonations = () => {
    const axiosSecure = useAxiosSecure();
    const { data: alldonations = [], refetch } = useQuery({
        queryKey: ['alldonations'],
        queryFn: async () => {
            const res = await axiosSecure.get('/alldonationsbyadmincampaign');
            // console.log();
            return res.data;
        }
    })
    console.log(alldonations);

    // delete donations
    function handledelete(id) {
   
        axiosSecure.delete(`/campaigndeletebyadmin/${id}`)
            .then(res => {
                console.log(res.data);

                if (res.data.deletedCount > 0) {
                    refetch()
                    toast.success('successfully deleted')
                }
            })
            .catch(err => {
                console.log(err);
            })
        // console.log(id);
    }

    // pause donation
    async function handlePaused(e,id) {
        // console.log(e.target.innerText==='paused');
         console.log(id);
        // e.target.innerText==='paused' ? e.target.innerText='unpaused' :'paused'
        if (e.target.innerText==='paused') {
            e.target.innerText='unpaused'

            const res = await axiosSecure.put(`/campaignspause/${id}`,{isPaused:'unpaused'});
            console.log(res.data);
            // return res.data;
        }
        else if ( e.target.innerText==='unpaused') {
            e.target.innerText='paused'

            const res = await axiosSecure.put(`/campaignspause/${id}`,{isPaused:'paused'});
            console.log(res.data);
            // return res.data;
        }
        // setPause(!pause)
    }
    return (
        <section>
            <div className="overflow-x-auto">
                <Table hoverable>
                    <TableHead>
                        <TableHeadCell>Pet name</TableHeadCell>
                        <TableHeadCell>Maximum donation amount</TableHeadCell>
                        {/* <TableHeadCell>Location</TableHeadCell> */}
                        <TableHeadCell>Action</TableHeadCell>
                    </TableHead>
                    <TableBody className="divide-y">

                        {alldonations.map((value, index) => {
                            return <>
                                <TableRow key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {value.name}
                                    </TableCell>
                                    {/* <TableCell>{value.category}</TableCell> */}
                                    <TableCell>{value.maximumDonation}</TableCell>
                                    <TableCell>
                                        <div className="flex gap-2">
                                            <Button onClick={()=>handledelete(value._id)} gradientMonochrome="failure">Delete</Button>
                                            <Link to={`/dashboard/onedonation/${value._id}`}><Button color="blue"  >Edit</Button></Link>
                                            <Button onClick={()=>handlePaused(event,value._id)} color="failure" pill>{value.isPaused? value.isPaused:'paused'}</Button>
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

export default AllDonations;