import { Modal } from "flowbite-react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
const CampaignModal = ({ openModal, onCloseModal, donationid }) => {

    const axiosSecure = useAxiosSecure();
    const { data: donators = [], refetch } = useQuery({
        queryKey: ['donators', donationid],
        queryFn: async () => {
            const res = await axiosSecure.get(`/donators/${donationid}`);
            return res.data;

        }
    })

    console.log(donationid);
    console.log(donators);

    return (
        <div>
            <Modal show={openModal} size="md" onClose={() => onCloseModal()} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6">

                        <Table hoverable>
                            <TableHead>
                                <TableHeadCell>User Name</TableHeadCell>
                                <TableHeadCell>Donated Amount</TableHeadCell>
                            </TableHead>
                            <TableBody className="divide-y">

                                {
                                    donators.map((value, index) => {
                                        return <>
                                            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                    {value.userName}
                                                </TableCell>
                                                <TableCell>${value.amount/100}</TableCell>

                                            </TableRow>
                                        </>
                                    })
                                }
                            </TableBody>
                        </Table>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default CampaignModal;