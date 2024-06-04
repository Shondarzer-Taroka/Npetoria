import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";


const DonationCampaigns = () => {
    const axiosSecure = useAxiosSecure();
    const { data: donationcampaign = [], refetch,isLoading} = useQuery({
        queryKey: ['donationcampaign'],
        queryFn: async () => {
            const res = await axiosSecure.get('/donationcampaign');
            return res.data;
        }
    })

    console.log(donationcampaign);
    return (
        isLoading ? <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">




          

        <Skeleton  height={'400px'} width={'100%'} >
        </Skeleton>
        <Skeleton  height={'400px'} width={'100%'} >
        </Skeleton>
        <Skeleton  height={'400px'} width={'100%'} >
        </Skeleton>
        <Skeleton  height={'400px'} width={'100%'} >
        </Skeleton>
        <Skeleton  height={'400px'} width={'100%'} >
        </Skeleton>
        <Skeleton  height={'400px'} width={'100%'} >
        </Skeleton>
        <Skeleton  height={'400px'} width={'100%'} >
        </Skeleton>
        <Skeleton  height={'400px'} width={'100%'} >
        </Skeleton>
        <Skeleton height={'400px'} width={'100%'} >
        </Skeleton>

    </section> :   <section>
            <aside className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                donationcampaign.map((value, index) => {
                    return <>
                        
                            <div key={index} className="flex flex-col gap-2 border rounded ">
                                <img className="w-full p-2" src={value.image} />
                                <div id="content" className="mt-3 p-2 flex flex-col ">
                                    <h1 className="font-bold text-3xl">Pet Name:{value.name}</h1>
                                    <h3> <span className="font-semibold "> Time:</span>{value?.time}</h3>
                                    <h5>Maximum Donation:$ {value.maximumDonation}</h5>
                                    <h5>Donated Amount:$ {value?.donatedAmount ? value?.donatedAmount :'0'}</h5>
                                    <Link to={`/donationdetails/${value._id}`}> <Button gradientDuoTone="purpleToPink" className="mt-4"> view details </Button></Link>
                                </div>
                            </div>
                      </>
                })
            }
              </aside>
        </section>
    );
};

export default DonationCampaigns;