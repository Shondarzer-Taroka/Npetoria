import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";


const PetListing = () => {

    const axiosPublic = useAxiosPublic();
    const { data: petlisting = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosPublic.get('/petlisting');
            return res.data;
        }
    })

    console.log(petlisting);
    return (
        <section>

            <aside className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

                {
                    petlisting.map((value, index) => {
                        return <>
                            <div className="flex flex-col gap-2 border rounded ">
                                <img className="w-full p-2" src={value.image} alt="" />


                                <div id="content" className="mt-3 p-2">
                                    <h1 className="font-bold text-3xl">Pet Name:{value.name}</h1>
                                    <h3>Age:{value.age}</h3>
                                    <h5>Location:{value.location}</h5>

                                    <Link to={`/viewdetails/${value._id}`}> <Button gradientDuoTone="purpleToPink" className="mt-4"> view details </Button></Link>
                                </div>
                            </div>
                        </>
                    })
                }

            </aside>

        </section>
    );
};

export default PetListing;



// import { useEffect, useRef } from 'react';
// import { useInfiniteQuery } from '@tanstack/react-query';
// import useAxiosPublic from '../../Hooks/useAxiosPublic';
// import { Button } from 'flowbite-react';
// import Fetching from '../../Hooks/Fetching';

// const fetchPets = async ({ pageParam = 0 }) => {
//   const axiosPublic = useAxiosPublic();
//   const res = await axiosPublic.get('/petlisting', {
//     params: {
//       page: pageParam,
//       limit: 10, // Adjust the limit as needed
//     },
//   });
//   return res.data;
// };

// const PetListing = () => {
//   const {
//     data,
//     fetchNextPage,
//     hasNextPage,
//     isFetchingNextPage,
//     isError,
//     error,
//   } = useInfiniteQuery(['petlisting'], Fetching, {
//     getNextPageParam: (lastPage, pages) => {
//       if (lastPage.items.length === 0) return undefined;
//       return pages.length;
//     },
//   });

//   const observerElem = useRef();

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting && hasNextPage) {
//           fetchNextPage();
//         }
//       },
//       {
//         threshold: 1.0,
//       }
//     );

//     if (observerElem.current) {
//       observer.observe(observerElem.current);
//     }

//     return () => {
//       if (observerElem.current) {
//         observer.unobserve(observerElem.current);
//       }
//     };
//   }, [fetchNextPage, hasNextPage]);

//   if (isError) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <section>
//       <aside className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {data?.pages.map((page) =>
//           page.items.map((pet) => (
//             <div key={pet._id} className="flex flex-col gap-2 border rounded">
//               <img
//                 className="w-full p-2"
//                 src={pet.image || "https://pets-grooming.axiomthemes.com/wp-content/uploads/2016/07/image-30.jpg"}
//                 alt={pet.name}
//               />
//               <div id="content" className="mt-3 p-2">
//                 <h1 className="font-bold text-3xl">Pet Name: {pet.name}</h1>
//                 <h3>Age: {pet.age}</h3>
//                 <h5>Location: {pet.location}</h5>
//                 <Button gradientDuoTone="purpleToPink" className="mt-4">
//                   View details
//                 </Button>
//               </div>
//             </div>
//           ))
//         )}
//       </aside>
//       <div ref={observerElem} />
//       {isFetchingNextPage && <div>Loading more...</div>}
//     </section>
//   );
// };

// export default PetListing;
