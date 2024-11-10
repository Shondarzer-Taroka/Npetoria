
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import React, { useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import 'tailwindcss/tailwind.css';
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
                subsequentLimit: 10, // Use 10 for all pages
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

    useEffect(() => {
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
            <div className="flex justify-between items-center mb-4 p-2 border rounded">
                <input
                    ref={searchValueRef}
                    type="text"
                    placeholder="Search by name"
                    className="p-2 outline-none border-0"
                />
                <select
                    value={category}
                    onChange={handleCategoryChange}
                    // className={`bg-red-500`}
                    className={`${localStorage.getItem('theme') === 'dark' ? 'bg-gray-600 text-white' : 'bg-white text-black'}`}
                // className="p-2 border rounded text-black dark:text-white"
                >
                    <option value="">All Categories</option>
                    <option value="Dogs">Dogs</option>
                    <option value="Cats">Cats</option>
                    <option value="Birds">Birds</option>
                    <option value="Fish">Fish</option>
                    <option value="Farm Animals">Farm Animals</option>
                    {/* Add more categories as needed */}
                </select>
                <CiSearch onClick={handleSearch} className="text-3xl font-bold cursor-pointer" />
            </div>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {isLoading ? (
                    Array.from({ length: 10 }).map((_, index) => (
                        <Skeleton key={index} height={'400px'} width={'100%'} />
                    ))
                ) : (
                    <>
                        {data.pages.map((page, pageIndex) => (
                            <React.Fragment key={pageIndex}>
                                {page.results.map((value, index) => (
                                    <div key={index} className="flex flex-col gap-2 border rounded">
                                        <img className="w-full h-[300px] object-cover p-2" src={value.image} alt="" />
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
                            Array.from({ length: 10 }).map((_, index) => (
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



