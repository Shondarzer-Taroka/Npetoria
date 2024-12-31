

// // third
// import { Button } from "flowbite-react";
// import { Link } from "react-router-dom";
// import { useInfiniteQuery } from "@tanstack/react-query";
// import Skeleton from "react-loading-skeleton";
// import { useInView } from "react-intersection-observer";
// import React from "react";
// import useAxiosPublic from "../../Hooks/useAxiosPublic";

// const DonationCampWithInfinite = () => {
//     const axiosPublic = useAxiosPublic();
    
//     const {
//         data,
//         fetchNextPage,
//         hasNextPage,
//         isFetchingNextPage,
//         isLoading,
//         isError,
//         error,
//     } = useInfiniteQuery({
//         queryKey: ['donationcampaign'],
//         queryFn: async ({ pageParam = 0 }) => {
//             const res = await axiosPublic.get(`/donationcampaign?page=${pageParam}&limit=10`);
//             console.log(res.data);
//             return res.data;
//         },
//         getNextPageParam: (lastPage, pages) => {
//             return lastPage.length === 10 ? pages.length : undefined;
//         }
//     });

//     const { ref, inView } = useInView({
//         threshold: 1.0,
//         onChange: (inView) => {
//             if (inView && hasNextPage) {
//                 fetchNextPage();
//             }
//         }
//     });

//     if (isLoading) {
//         return (
//             <section>
               
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                     {Array.from({ length: 9 }).map((_, index) => (
//                         <div key={index} className="flex flex-col gap-2 border rounded">
//                             <Skeleton height={400} width={'100%'} />
//                         </div>
//                     ))}
//                 </div>
//             </section>
//         );
//     }

//     if (isError) {
//         return <div>Error: {error.message}</div>;
//     }

//     return (
//         <section>
//             <aside className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {data.pages.map((page, pageIndex) => (
//                     <React.Fragment key={pageIndex}>
//                         {page.map((value) => (
//                             <div key={value._id} className="flex flex-col gap-2 border rounded">
//                                 <img className="w-full h-[300px] object-cover p-2" src={value.image} />
//                                 <div id="content" className="mt-3 p-2 flex flex-col">
//                                     <h1 className="font-bold text-3xl">Pet Name: {value.name}</h1>
//                                     <h3><span className="font-semibold">Time:</span> {value?.time}</h3>
//                                     <h5>Maximum Donation: $ {value.maximumDonation}</h5>
//                                     <h5>Donated Amount: $ {value?.donatedAmount ? Number(value?.donatedAmount)/100 : 0}</h5>
//                                     <Link to={`/donationdetails/${value._id}`}>
//                                         <Button gradientDuoTone="purpleToPink" className="mt-4">view details</Button>
//                                     </Link>
//                                 </div>
//                             </div>
//                         ))}
//                     </React.Fragment>
//                 ))}
//                 <div ref={ref}></div>
//             </aside>
//             {isFetchingNextPage && (
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                     {Array.from({ length: 9 }).map((_, index) => (
//                         <div key={index} className="flex flex-col gap-2 border rounded">
//                             <Skeleton height={400} width={'100%'} />
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </section>
//     );
// };

// export default DonationCampWithInfinite;






















import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { useInfiniteQuery } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";
import { useInView } from "react-intersection-observer";
import React from "react";
import { FaDollarSign, FaRegClock, FaHeart } from "react-icons/fa";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const DonationCampWithInfinite = () => {
    const axiosPublic = useAxiosPublic();

    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isLoading,
        isError,
        error,
    } = useInfiniteQuery({
        queryKey: ['donationcampaign'],
        queryFn: async ({ pageParam = 0 }) => {
            const res = await axiosPublic.get(`/donationcampaign?page=${pageParam}&limit=10`);
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

    if (isLoading) {
        return (
            <section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {Array.from({ length: 9 }).map((_, index) => (
                        <div key={index} className="flex flex-col gap-2 border rounded shadow-lg">
                            <Skeleton height={400} width={'100%'} />
                        </div>
                    ))}
                </div>
            </section>
        );
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <section>
            <aside className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.pages.map((page, pageIndex) => (
                    <React.Fragment key={pageIndex}>
                        {page.map((value) => (
                            <div key={value._id} className="flex flex-col gap-2 border rounded shadow-lg hover:shadow-xl transition-shadow duration-200">
                                <img className="w-full h-[300px] object-cover p-2 rounded-t" src={value.image} alt={value.name} />
                                <div id="content" className="mt-3 p-4 flex flex-col">
                                    <h1 className="font-bold text-2xl mb-2">{value.name}</h1>
                                    <p className="flex items-center gap-2 text-gray-600 mb-1">
                                        <FaRegClock />
                                        <span>Time: {value?.time}</span>
                                    </p>
                                    <p className="flex items-center gap-2 text-gray-600 mb-1">
                                        <FaDollarSign />
                                        <span>Maximum Donation: $ {value.maximumDonation}</span>
                                    </p>
                                    <p className="flex items-center gap-2 text-gray-600 mb-1">
                                        <FaHeart className="text-red-500" />
                                        <span>Donated Amount: $ {value?.donatedAmount ? Number(value?.donatedAmount) / 100 : 0}</span>
                                    </p>
                                    <Link to={`/donationdetails/${value._id}`} className="mt-4">
                                        <Button gradientDuoTone="purpleToPink">View Details</Button>
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
                        <div key={index} className="flex flex-col gap-2 border rounded shadow-lg">
                            <Skeleton height={400} width={'100%'} />
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default DonationCampWithInfinite;
