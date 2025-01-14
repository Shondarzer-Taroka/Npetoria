import { useQuery } from "@tanstack/react-query";
import { Button, Spinner, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import '../MyDonationCampaigns/CampaignModal'
import CampaignModal from "../MyDonationCampaigns/CampaignModal";
import { Progress } from "flowbite-react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const MyDonationCampaigns = () => {
    const [openModal, setOpenModal] = useState(false);
    const [detailsid, setdetailsid] = useState('')
    let [pause, setPause] = useState(false)
    const {user}=useContext(AuthContext)
    let holdPause = useRef()
    const axiosSecure = useAxiosSecure();
    const { data: campaigns = [], refetch ,isLoading} = useQuery({
        queryKey: ['campaigns',user?.email],
        queryFn: async () => {
            // const res = await axiosSecure.get('/campaigns');
            // return res.data;
            const res=await axiosSecure.get(`/campaigns/${user?.email}`)
            return res.data;
        }
    })



    // const { data: donators = [], refetch:againfetch } = useQuery({
    //     queryKey: ['donators'],
    //     queryFn: async () => {
    //         const res = await axiosSecure.get(`/donators/${donationid}`);
    //         return res.data;
    //     }
    // })

   

    function onCloseModal() {

        setOpenModal(false);
        // refetch()
        // setEmail('');
    }

    


    async function handlePaused(e, id) {
        // console.log(e.target.innerText==='paused');
        
        // e.target.innerText==='paused' ? e.target.innerText='unpaused' :'paused'
        if (e.target.innerText === 'paused') {
            e.target.innerText = 'unpaused'

            const res = await axiosSecure.put(`/campaignspause/${id}`, { isPaused: 'paused' });
            console.log(res.data);
            // return res.data;
        }
        else if (e.target.innerText === 'unpaused') {
            e.target.innerText = 'paused'

            const res = await axiosSecure.put(`/campaignspause/${id}`, { isPaused: 'unpaused' });
            console.log(res.data);
            // return res.data;
        }
        // setPause(!pause)
    }

     if (isLoading) {
            return <h1 className="flex justify-center"> <Spinner aria-label="Extra large spinner example" size="xl" /></h1>
        }
    
    
        if (campaigns.length == 0) {
            return <h1 className="text-4xl text-gray-300 font-bold text-center"> Not Found Donations Data </h1>
        }
    return (
        <section>
            <h1 className="text-3xl font-bold uppercase text-center my-7"> My Donation campaings</h1>
            <div className="overflow-x-auto">
                <Table>
                    <TableHead>
                        <TableHeadCell>Pet name</TableHeadCell>
                        <TableHeadCell>Maximaum donation amount</TableHeadCell>
                        <TableHeadCell>donation progress bar</TableHeadCell>

                        <TableHeadCell>

                            action
                        </TableHeadCell>
                    </TableHead>
                    <TableBody className="divide-y">

                        {
                            campaigns.map((value, index) => {
                                return <>
                                    <TableRow key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                        <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                            {value.name}
                                        </TableCell>
                                        <TableCell>{value.maximumDonation}</TableCell>
                                        <TableCell>
                                            <Progress
                                                progress={value?.donatedAmount ? ((value.donatedAmount / 100) / Number(value.maximumDonation) * 100).toFixed(2) : 0}
                                                // progress={ value?.donatedAmount ? ((((Number(value.maximumDonation)- (value.donatedAmount/100) ))/(Number(value.maximumDonation)))*100).toFixed(2):0}
                                                progressLabelPosition="inside"
                                                textLabel="Flowbite"
                                                textLabelPosition="outside"
                                                size="lg"
                                                labelProgress
                                                labelText
                                            />
                                        </TableCell>

                                        <TableCell>
                                            <div className="flex gap-2">
                                                <Button onClick={() => handlePaused(event, value._id)} color="failure" pill>{value.isPaused ? (value.isPaused === 'paused' ? 'unpaused' : 'paused') : 'paused'}</Button>
                                                <Link to={`/dashboard/onedonation/${value._id}`}><Button color="blue"  >Edit</Button></Link>
                                                <Button onClick={() => { setOpenModal(true), setdetailsid(value._id) }} gradientMonochrome="info">View donators</Button>
                                                <CampaignModal
                                                    onCloseModal={onCloseModal}
                                                    openModal={openModal}
                                                    donationid={detailsid}
                                                ></CampaignModal>
                                            </div>
                                        </TableCell>
                                    </TableRow>


                                </>
                            })
                        }

                    </TableBody>
                </Table>
            </div>
        </section>
    );
};

export default MyDonationCampaigns;