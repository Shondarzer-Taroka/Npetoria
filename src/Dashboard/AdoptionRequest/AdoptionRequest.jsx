import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Button, Spinner, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
const AdoptionRequest = () => {

    const axiosSecure = useAxiosSecure()
    const { user } = useContext(AuthContext)
    const { data: adoptorsrequest = [], refetch, isLoading } = useQuery({
        queryKey: ['adoptorsrequest', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/adoptorsrequest/${user?.email}`);
            return res.data;
        }
    })
    if (isLoading) {
           return <h1 className="flex justify-center"> <Spinner aria-label="Extra large spinner example" size="xl" /></h1>
       }
   
   
       if (adoptorsrequest.length == 0) {
           return <h1 className="text-4xl text-gray-300 font-bold text-center"> No Adoption Requests Data </h1>
       }

    return (
        <section>
                         <h1 className="text-3xl font-bold uppercase text-center my-7">Adoption Resquests</h1>
            <div className="overflow-x-auto">
                <Table hoverable>
                    <TableHead>
                        <TableHeadCell>User name</TableHeadCell>
                        <TableHeadCell>Email</TableHeadCell>
                        <TableHeadCell>Phone Number</TableHeadCell>
                        <TableHeadCell>Location</TableHeadCell>
                    </TableHead>
                    <TableBody className="divide-y">

                        {adoptorsrequest.map((value, index) => {
                            return <>
                                <TableRow key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {value.userName}
                                    </TableCell>
                                    <TableCell>{value.email}</TableCell>
                                    <TableCell>{value.phoneNumber}</TableCell>
                                    <TableCell>{value.myaddress}</TableCell>
                                    <TableCell>
                                        <div className="flex gap-2">
                                            <Button onClick={() => {}} gradientMonochrome="purple">Accept</Button>
                                            {/* <Link to={`/dashboard/updatepet/${value._id}`}>  <Button gradientMonochrome="success">Update</Button></Link> */}

                                            <Button onClick={() =>{}}  gradientMonochrome="failure">Reject</Button>
                                        </div>

                                    </TableCell>

                                </TableRow>
                            </>
                        })}

                    </TableBody>
                </Table>
            </div>
        </section>
    );
};

export default AdoptionRequest;