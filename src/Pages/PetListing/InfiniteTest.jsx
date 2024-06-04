// first


// import { useInfiniteQuery } from "@tanstack/react-query";
// import { useInView } from "react-intersection-observer";
// import useAxiosPublic from "../../Hooks/useAxiosPublic";
// import { Button } from "flowbite-react";
// import { Link } from "react-router-dom";
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';
// import React, { useRef, useState } from "react";
// import { CiSearch } from "react-icons/ci";

// const InfiniteSkelator = () => {
//     const axiosPublic = useAxiosPublic();
//     // const [getSearchValue,setGetSearchValue]=useState('')
//     let getSearchValue = useRef()
//     const [category, setCategory] = useState('');

//     const {
//         data,
//         fetchNextPage,
//         hasNextPage,
//         isFetchingNextPage,
//         isLoading,
//         refetch
//     } = useInfiniteQuery({
//         queryKey: ['petlisting'],
//         queryFn: async ({ pageParam = 1 }) => {
//             const res = await axiosPublic.get(`/petlisting?page=${pageParam}&limit=10`);
//             return res.data;
//         },
//         getNextPageParam: (lastPage) => lastPage.nextPage,
//     });

//     const { ref, inView } = useInView();

//     console.log(data);
//     // Fetch next page when the user scrolls to the bottom
//     React.useEffect(() => {
//         if (inView && hasNextPage) {
//             fetchNextPage();
//         }
//     }, [inView, hasNextPage, fetchNextPage]);

//     function handleSearchValueHold() {
//         console.log(getSearchValue.current.value);
//         console.log(category);
//     }

//         const handleCategoryChange = (e) => {
//             setCategory(e.target.value);
//             console.log(e.target.value);
//             // refetch();
//         };
//     return (
//         <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {isLoading ? (
//                 Array.from({ length: 9 }).map((_, index) => (
//                     <Skeleton key={index} height={'400px'} width={'100%'} />
//                 ))
//             ) : (
//                 <>
//                     <div className="flex h-[70px] items-center">
//                         <div className="flex justify-between mb-4 p-2 border rounded">
//                             <input
//                                 ref={getSearchValue}
//                                 type="text"
//                                 placeholder="Search by name"
//                                 // value={'searchTerm'}
//                                 // defaultValue={''}
//                                 onChange={'handleSearch'}
//                                 className="p-2 outline-none border-0"
//                             />
//                             <select
//                                 value={category}
//                                 onChange={handleCategoryChange}
//                                 className="p-2 border rounded"
//                             >
//                                 <option value="">All Categories</option>
//                                 <option value="dog">Dog</option>
//                                 <option value="cat">Cat</option>
//                                 <option value="bird">Bird</option>
//                                 {/* Add more categories as needed */}
//                             </select>
//                         </div>
//                         <CiSearch onClick={handleSearchValueHold} className=" text-3xl font-bold" />
//                     </div>
//                     {data.pages.map((page, pageIndex) => (<React.Fragment key={pageIndex}>
//                         {page.results.map((value, index) => (
//                             <div key={index} className="flex flex-col gap-2 border rounded">
//                                 <img className="w-full p-2" src={value.image} alt="" />
//                                 <div id="content" className="mt-3 p-2">
//                                     <h1 className="font-bold text-3xl">Pet Name: {value.name}</h1>
//                                     <h3>Age: {value.age}</h3>
//                                     <h5>Location: {value.location}</h5>
//                                     <Link to={`/viewdetails/${value._id}`}>
//                                         <Button gradientDuoTone="purpleToPink" className="mt-4">view details</Button>
//                                     </Link>
//                                 </div>
//                             </div>
//                         ))}
//                     </React.Fragment>
//                     ))}
//                     <div ref={ref} />
//                     {isFetchingNextPage && (
//                         Array.from({ length: 3 }).map((_, index) => (
//                             <Skeleton key={index} height={'400px'} width={'100%'} />
//                         ))
//                     )}
//                 </>
//             )
//             }
//         </section >
//     );
// };

// export default InfiniteSkelator;



// 3rd time

// import { useInfiniteQuery } from "@tanstack/react-query";
// import { useInView } from "react-intersection-observer";
// import useAxiosPublic from "../../Hooks/useAxiosPublic";
// import { Button } from "flowbite-react";
// import { Link } from "react-router-dom";
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';
// import React, { useRef, useState } from "react";
// import { CiSearch } from "react-icons/ci";

// const InfiniteSkelator = () => {
//     const axiosPublic = useAxiosPublic();
//     const searchValueRef = useRef();
//     const [category, setCategory] = useState('');
//     const [searchTerm, setSearchTerm] = useState('');

//     const fetchPets = async ({ pageParam = 1 }) => {
//         const res = await axiosPublic.get(`/petlisting`, {
//             params: {
//                 page: pageParam,
//                 limit: pageParam === 1 ? 9 : 6,
//                 name: searchTerm,
//                 category,
//             },
//         });
//         return res.data;
//     };

//     const {
//         data,
//         fetchNextPage,
//         hasNextPage,
//         isFetchingNextPage,
//         isLoading,
//         refetch,
//     } = useInfiniteQuery({
//         queryKey: ['petlisting', searchTerm, category],
//         queryFn: fetchPets,
//         getNextPageParam: (lastPage) => lastPage.nextPage,
//     });

//     const { ref, inView } = useInView();

//     React.useEffect(() => {
//         if (inView && hasNextPage) {
//             fetchNextPage();
//         }
//     }, [inView, hasNextPage, fetchNextPage]);

//     const handleSearch = () => {
//         setSearchTerm(searchValueRef.current.value);
//         refetch();
//     };

//     const handleCategoryChange = (e) => {
//         setCategory(e.target.value);
//         refetch();
//     };

//     return (
//         <div>
//             <div className="flex justify-between mb-4 p-2 border rounded">
//                 <input
//                     ref={searchValueRef}
//                     type="text"
//                     placeholder="Search by name"
//                     className="p-2 outline-none border-0"
//                 />
//                 <select
//                     value={category}
//                     onChange={handleCategoryChange}
//                     className="p-2 border rounded"
//                 >
//                     <option value="">All Categories</option>
//                     <option value="dog">Dog</option>
//                     <option value="cat">Cat</option>
//                     <option value="bird">Bird</option>
//                     {/* Add more categories as needed */}
//                 </select>
//                 <CiSearch onClick={handleSearch} className="text-3xl font-bold cursor-pointer" />
//             </div>
//             <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {isLoading ? (
//                     Array.from({ length: 9 }).map((_, index) => (
//                         <Skeleton key={index} height={'400px'} width={'100%'} />
//                     ))
//                 ) : (
//                     <>
//                         {data.pages.map((page, pageIndex) => (
//                             <React.Fragment key={pageIndex}>
//                                 {page.results.map((value, index) => (
//                                     <div key={index} className="flex flex-col gap-2 border rounded">
//                                         <img className="w-full p-2" src={value.image} alt="" />
//                                         <div id="content" className="mt-3 p-2">
//                                             <h1 className="font-bold text-3xl">Pet Name: {value.name}</h1>
//                                             <h3>Age: {value.age}</h3>
//                                             <h5>Location: {value.location}</h5>
//                                             <Link to={`/viewdetails/${value._id}`}>
//                                                 <Button gradientDuoTone="purpleToPink" className="mt-4">view details</Button>
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </React.Fragment>
//                         ))}
//                         <div ref={ref} />
//                         {isFetchingNextPage && (
//                             Array.from({ length: 3 }).map((_, index) => (
//                                 <Skeleton key={index} height={'400px'} width={'100%'} />
//                             ))
//                         )}
//                     </>
//                 )}
//             </section>
//         </div>
//     );
// };

// export default InfiniteSkelator;



//  forth


import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import React, { useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";

const InfiniteSkelator = () => {
    const axiosPublic = useAxiosPublic();
    const searchValueRef = useRef();
    const [category, setCategory] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [currentCategory, setCurrentCategory] = useState('');

    const fetchPets = async ({ pageParam = 1 }) => {
        const res = await axiosPublic.get(`/petlisting`, {
            params: {
                page: pageParam,
                limit: pageParam === 1 ? 9 : 6,
                name: searchTerm,
                category: currentCategory,
            },
        });
        return res.data;
    };

    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isLoading,
        refetch,
    } = useInfiniteQuery({
        queryKey: ['petlisting', searchTerm, currentCategory],
        queryFn: fetchPets,
        getNextPageParam: (lastPage) => lastPage.nextPage,
    });

    const { ref, inView } = useInView();

    React.useEffect(() => {
        if (inView && hasNextPage) {
            fetchNextPage();
        }
    }, [inView, hasNextPage, fetchNextPage]);

    const handleSearch = () => {
        setSearchTerm(searchValueRef.current.value);
        setCurrentCategory(category);
        refetch();
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    return (
        <div>
            <div className="flex justify-between mb-4 p-2 border rounded">
                <input
                    ref={searchValueRef}
                    type="text"
                    placeholder="Search by name"
                    className="p-2 outline-none border-0"
                />
                <select
                    value={category}
                    onChange={handleCategoryChange}
                    className="p-2 border rounded"
                >
                    <option value="">All Categories</option>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="bird">Bird</option>
                    {/* Add more categories as needed */}
                </select>
                <CiSearch onClick={handleSearch} className="text-3xl font-bold cursor-pointer" />
            </div>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {isLoading ? (
                    Array.from({ length: 9 }).map((_, index) => (
                        <Skeleton key={index} height={'400px'} width={'100%'} />
                    ))
                ) : (
                    <>
                        {data.pages.map((page, pageIndex) => (
                            <React.Fragment key={pageIndex}>
                                {page.results.map((value, index) => (
                                    <div key={index} className="flex flex-col gap-2 border rounded">
                                        <img className="w-full p-2" src={value.image} alt="" />
                                        <div id="content" className="mt-3 p-2">
                                            <h1 className="font-bold text-3xl">Pet Name: {value.name}</h1>
                                            <h3>Age: {value.age}</h3>
                                            <h5>Location: {value.location}</h5>
                                            <Link to={`/viewdetails/${value._id}`}>
                                                <Button gradientDuoTone="purpleToPink" className="mt-4">view details</Button>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </React.Fragment>
                        ))}
                        <div ref={ref} />
                        {isFetchingNextPage && (
                            Array.from({ length: 3 }).map((_, index) => (
                                <Skeleton key={index} height={'400px'} width={'100%'} />
                            ))
                        )}
                    </>
                )}
            </section>
        </div>
    );
};

export default InfiniteSkelator;






// second

// import React, { useState } from 'react';
// import { useInfiniteQuery } from "@tanstack/react-query";
// import { useInView } from "react-intersection-observer";
// import useAxiosPublic from "../../Hooks/useAxiosPublic";
// import { Button } from "flowbite-react";
// import { Link } from "react-router-dom";
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';

// const initialLimit = 9;
// const subsequentLimit = 6;

// const InfiniteSkelator = () => {
//     const axiosPublic = useAxiosPublic();
//     const [searchTerm, setSearchTerm] = useState('');
//     const [category, setCategory] = useState('');

//     const fetchPets = async ({ pageParam = 1 }) => {
//         const res = await axiosPublic.get(`/petlisting`, {
//             params: {
//                 page: pageParam,
//                 initialLimit,
//                 subsequentLimit,
//                 name: searchTerm,
//                 category,
//             },
//         });
//         return res.data;
//     };

//     const {
//         data,
//         fetchNextPage,
//         hasNextPage,
//         isFetchingNextPage,
//         isLoading,
//         refetch,
//     } = useInfiniteQuery({
//         queryKey: ['petlisting', searchTerm, category],
//         queryFn: fetchPets,
//         getNextPageParam: (lastPage) => lastPage.nextPage,
//     });

//     const { ref, inView } = useInView();

//     // Fetch next page when the user scrolls to the bottom
//     React.useEffect(() => {
//         if (inView && hasNextPage) {
//             fetchNextPage();
//         }
//     }, [inView, hasNextPage, fetchNextPage]);

//     const handleSearch = (e) => {
//         setSearchTerm(e.target.value);
//         refetch();
//     };

//     const handleCategoryChange = (e) => {
//         setCategory(e.target.value);
//         refetch();
//     };

//     return (
//         <div>
//             <div className="flex justify-between mb-4">
//                 <input
//                     type="text"
//                     placeholder="Search by name"
//                     value={searchTerm}
//                     onChange={handleSearch}
//                     className="p-2 border rounded"
//                 />
//                 <select
//                     value={category}
//                     onChange={handleCategoryChange}
//                     className="p-2 border rounded"
//                 >
//                     <option value="">All Categories</option>
//                     <option value="dog">Dog</option>
//                     <option value="cat">Cat</option>
//                     <option value="bird">Bird</option>
//                     {/* Add more categories as needed */}
//                 </select>
//             </div>
//             <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {isLoading ? (
//                     Array.from({ length: initialLimit }).map((_, index) => (
//                         <Skeleton key={index} height={'400px'} width={'100%'} />
//                     ))
//                 ) : (
//                     <>
//                         {data.pages.map((page, pageIndex) => (
//                             <React.Fragment key={pageIndex}>
//                                 {page.results.map((value, index) => (
//                                     <div key={index} className="flex flex-col gap-2 border rounded">
//                                         <img className="w-full p-2" src={value.image} alt="" />
//                                         <div id="content" className="mt-3 p-2">
//                                             <h1 className="font-bold text-3xl">Pet Name: {value.name}</h1>
//                                             <h3>Age: {value.age}</h3>
//                                             <h5>Location: {value.location}</h5>
//                                             <Link to={`/viewdetails/${value._id}`}>
//                                                 <Button gradientDuoTone="purpleToPink" className="mt-4">view details</Button>
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </React.Fragment>
//                         ))}
//                         <div ref={ref} />
//                         {isFetchingNextPage && (
//                             Array.from({ length: subsequentLimit }).map((_, index) => (
//                                 <Skeleton key={index} height={'400px'} width={'100%'} />
//                             ))
//                         )}
//                     </>
//                 )}
//             </section>
//         </div>
//     );
// };

// export default InfiniteSkelator;


