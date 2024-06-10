import { useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import ReactDatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import moment from "moment";
import { ToastContainer, toast } from "react-toastify";
import { Spinner } from "flowbite-react";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const EditDonation = () => {
    let { id } = useParams()
    const axiosPublic = useAxiosPublic()
    // console.log(id);
    const axiosSecure = useAxiosSecure()

    const [startDate, setStartDate] = useState(new Date());
    const {
        register,
        handleSubmit,reset
    } = useForm()


    //  const [onedonation,setOnedonation]=useState('')
    
    //  const [isLoading,setisLoading]=useState(true)
    const { data: onedonation ='', refetch ,isLoading} = useQuery({
        queryKey: ['onedonation',id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/onedonation/${id}`);
            return res.data;
        }
    })

    console.log(onedonation);
    const onSubmit = async (data) => {
        let time = moment().add(3, 'days').calendar();
        console.log(time);
        var mydate = new Date(startDate);
        // Extract year, month, and day from the date object
        var year = mydate.getFullYear();
        var month = (mydate.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
        var day = mydate.getDate().toString().padStart(2, '0');
        // Construct the desired ISO 8601 formatted string
        var date = `${year}-${month}-${day}T00:00:00Z`;
        // console.log(date);


        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });


        if (res.data.success) {
            let editioncampaign = {
                name:data.name,
                image: res.data.data.display_url,
                maximumDonation: data.maximumDonation,
                shortDescription: data.shortDescription,
                longDescription: data.longDescription,
                lastDate: date,
                time: time
            }
            console.log(editioncampaign);

            let campaignRes = await axiosSecure.put(`/editdonation/${id}`, editioncampaign)
            console.log(campaignRes.data);
            if (campaignRes.data.modifiedCount>0) {
                toast.success('Campaign update successfully')
            }

        }




        // console.log(res.data);

    }


    // console.log(res.data);



    return (
      isLoading ? <h1 className="flex justify-center">  <Spinner aria-label="Extra large spinner example" size="xl" /> </h1> :<section>
        <h1 className="font-bold text-center uppercase text-3xl my-7">Edit Donation</h1>
            <form className="" onSubmit={handleSubmit(onSubmit)}>

                <section className="flex gap-3 flex-col">
                    <article className="grid md:grid-cols-2 gap-4">

                        <div className="flex items-center border-[1px] border-black rounded-lg w-full p-1 ">
                            <span>Image:</span>
                            <input className=" p-2 w-[100%] outline-none border-0"  {...register('image', { required: true })} type="file" />
                        </div>



                        <div className="flex items-center border-[1px] border-black rounded-lg p-1" >
                            <span>Pet Name:</span>
                            <input className=" p-2 w-[100%] outline-none border-0" defaultValue={onedonation.name} type="text" {...register('name', { required: true })} id="" />
                        </div>

                    </article>

                    <article className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-center border-[1px] gap-3 border-black rounded-lg p-1 w-full" >
                            <span>Last Date:</span>
                            
                            <ReactDatePicker
                                
                                className="w-full"
                                showIcon
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                            />
                        </div>

                        <div className="flex items-center border-[1px] border-black rounded-lg p-1" >
                            <span>Maximum donation amount :</span>
                            <input className=" p-2 w-[100%] outline-none border-0" defaultValue={onedonation.maximumDonation} type="number" {...register('maximumDonation', { required: true })} id="" />
                        </div>



                    </article>


                    <article className="grid md:grid-cols-2 gap-4">

                        <div className="flex items-center border-[1px] border-black rounded-lg p-1" >
                            <span>Short description:</span>
                            <textarea rows='2' cols='10' defaultValue={onedonation.shortDescription} className=" p-2 w-[100%] outline-none border-0 "  {...register('shortDescription')} placeholder="Short description" id="" />
                        </div>


                        <div className="flex items-center border-[1px] border-black rounded-lg p-1" >
                            <span>Long description:</span>
                            <textarea className="w-full h-full outline-none border-0" defaultValue={onedonation.longDescription} placeholder="write here long description..."  {...register('longDescription')} id="" cols="30" rows="5"></textarea>
                        </div>
                    </article>
                </section>
                <input type="submit" value={'Create Campaign'} className=" px-4 py-3 bg-blue-700 text-white rounded-xl w-full mt-3" name="" id="" />
            </form>
            <ToastContainer></ToastContainer>
        </section>
    );
};

export default EditDonation;