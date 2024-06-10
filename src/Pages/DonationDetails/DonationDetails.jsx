
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { useInfiniteQuery } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";
import { useInView } from "react-intersection-observer";
import React from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

// reco


import { useParams } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
// import { Button } from "flowbite-react";
import { useState } from "react";
import DonationModal from "./DonationModal";
// import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import DonationCampWithInfinite from "../DonationCampaigns/DonationCampWithInfinite";

const DonationDetails = () => {
    let { id } = useParams();
    const [openModal, setOpenModal] = useState(false);
    const axiosSecure = useAxiosSecure();
    console.log(id);
    const { data: donationdetails = '', refetch, isLoading } = useQuery({
        queryKey: ['viewdetails', id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/donationdetails/${id}`);
            return res.data;
        }
    });
    console.log(donationdetails);

    function onCloseModal() {
        setOpenModal(false);
    }
    // reco

    const axiosPublic = useAxiosPublic();

    const {
        data=[],
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        // isLoading,
        isError,
        error,
    } = useInfiniteQuery({
        queryKey: ['donationcampaign'],
        queryFn: async ({ pageParam = 0 }) => {
            const res = await axiosPublic.get(`/donationcampaign?page=${pageParam}&limit=10`);
            console.log(res.data);
            return res.data;
        },
        getNextPageParam: (lastPage, pages) => {
            return lastPage.length === 10 ? pages.length : undefined;
        }
    });

    const { ref, inView } = useInView({
        threshold: 1.0,
        onChange: (inView) => {
            if (inView && hasNextPage) {
                fetchNextPage();
            }
        }
    });

console.log(data);

    return (
        isLoading ? (
            <section>

                <aside>
                    <div className="w-full h-[600px]">
                        <Skeleton height={600} />
                    </div>

                    <div id="content" className="m-4">
                        <h1 className="text-4xl font-bold">
                            <Skeleton width={200} />
                        </h1>
                        <h6 className="font-semibold">
                            <Skeleton width={100} />
                        </h6>
                        <h5>
                            <Skeleton width={150} />
                        </h5>
                        <p>
                            <Skeleton count={3} />
                        </p>
                        <Button className="mt-5 bg-neutral-400" disabled>
                            <Skeleton width={100} height={40} />
                        </Button>
                    </div>
                </aside>
            </section>
        ) : (
            <section>
                <h1 className="text-3xl font-bold uppercase text-center my-7">Donation</h1>
                <aside>
                    <div className="w-full h-[600px] ">
                        <img className="w-full h-full object-cover" src={donationdetails.image} alt="" />
                    </div>

                    <div id="content" className="m-4">
                        <h1 className="text-4xl font-bold"> Pet Name: {donationdetails.name} </h1>
                        <h6 className="font-semibold">Time:{donationdetails.time}</h6>
                        <h5 className=""> <span className="font-semibold">Last Date:</span> {new Date(donationdetails.lastDate).toISOString().split('T')[0].split('-').reverse().join('/')} </h5>
                        <p> <span className="font-semibold">Short Description:</span> {donationdetails.shortDescription}</p>
                        <p> <span className="font-semibold">Long Description:</span> {donationdetails.longDescription}</p>
                        <div>
                        </div>
                        <Button className="mt-5" onClick={() => setOpenModal(true)}>Donate Now</Button>
                        <DonationModal
                            onCloseModal={onCloseModal}
                            openModal={openModal}
                            askedforId={donationdetails._id}
                            donateImg={donationdetails.image}
                            donateName={donationdetails.name}
                            petdata={donationdetails}
                        ></DonationModal>
                    </div>
                </aside>
                {/* reco */}
                <div>


                    <h1 className="font-bold text-3xl uppercase text-center my-7 underline">Recommended Donation</h1>
                    {/* <DonationCampWithInfinite></DonationCampWithInfinite> */}
                   { isLoading ? '': <section>
                        <aside className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {data.pages.map((page, pageIndex) => (
                                <React.Fragment key={pageIndex}>
                                    {page.slice(0,6).map((value) => (
                                        <div key={value._id} className="flex flex-col gap-2 border rounded">
                                            <img className="w-full h-[300px] object-cover p-2" src={value.image} />
                                            <div id="content" className="mt-3 p-2 flex flex-col">
                                                <h1 className="font-bold text-3xl">Pet Name: {value.name}</h1>
                                                <h3><span className="font-semibold">Time:</span> {value?.time}</h3>
                                                <h5>Maximum Donation: $ {value.maximumDonation}</h5>
                                                <h5>Donated Amount: $ {value?.donatedAmount ? Number(value?.donatedAmount) / 100 : 0}</h5>
                                                <Link to={`/donationdetails/${value._id}`}>
                                                    <Button gradientDuoTone="purpleToPink" className="mt-4">view details</Button>
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </React.Fragment>
                            ))}
                            <div ref={ref}></div>
                        </aside>
                        {isFetchingNextPage && (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {Array.from({ length: 9 }).map((_, index) => (
                                    <div key={index} className="flex flex-col gap-2 border rounded">
                                        <Skeleton height={400} width={'100%'} />
                                    </div>
                                ))}
                            </div>
                        )}
                    </section>}
                </div>
            </section>
        )
    );
};

export default DonationDetails;
