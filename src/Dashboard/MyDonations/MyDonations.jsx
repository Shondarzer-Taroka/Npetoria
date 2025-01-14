import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Button, Spinner, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { ToastContainer, toast } from "react-toastify";

const MyDonations = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext)
    const { data: mydonation = [], refetch ,isLoading} = useQuery({
        queryKey: ['mydonation', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/mydonation/${user?.email}`);
            return res.data;

        }
    })

    console.log(mydonation);

    // function handleRefund(transactionId) {
    //     console.log(transactionId);
    // }


    const handleRefund = async (transactionId) => {
        try {
            const response = await axiosSecure.post('/refund-payment', { paymentIntentId: transactionId });
            console.log('Refund successful:', response.data);
            toast.success(response.data.status)
            // Update UI or notify user about successful refund
        } catch (error) {
            console.error('Refund failed:', error);
            toast.error(error.response.data.error)
            // Handle error and notify user
        }
    };

    if (isLoading) {
        return <h1 className="flex justify-center"> <Spinner aria-label="Extra large spinner example" size="xl" /></h1>
    }


    if (mydonation.length == 0) {
        return <h1 className="text-4xl text-gray-300 font-bold text-center"> Not Found  Data </h1>
    }

    return (
        isLoading ? <h1 className="flex justify-center"> <Spinner aria-label="Extra large spinner example" size="xl" /></h1>:    <section>
            <h1 className="text-3xl font-bold uppercase text-center my-7"> My Donations</h1>
            <div className="overflow-x-auto">
                <Table hoverable>
                    <TableHead>
                        <TableHeadCell>Image</TableHeadCell>
                        <TableHeadCell>Pet Name</TableHeadCell>
                        <TableHeadCell> Donated Amount</TableHeadCell>
                        {/* <TableHeadCell>Price</TableHeadCell> */}
                        <TableHeadCell>
                            Refund
                        </TableHeadCell>
                    </TableHead>
                    <TableBody className="divide-y">

                        {mydonation.map((value, index) => {
                            return <>
                                <TableRow key={value._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        <img className="w-[60px] h-[60px]" src={value.donateImg} alt="" />
                                    </TableCell>
                                    <TableCell>{value.donateName}</TableCell>
                                    <TableCell>{value.amount / 100}</TableCell>
                                    <TableCell>
                                        <Button onClick={() => handleRefund(value.transactionId)}>Refund</Button>
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

export default MyDonations;