import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Button } from "flowbite-react";


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

                                    <Button gradientDuoTone="purpleToPink" className="mt-4"> viw details </Button>
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