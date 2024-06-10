import { useContext, useState } from "react";
import ReactDatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import moment from "moment";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const CreateDonationCampaign = () => {
    const {user}=useContext(AuthContext)
    const [startDate, setStartDate] = useState(new Date());
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()


    const onSubmit = async (data) => {
        let mytime = moment().add(3, 'days').calendar();
        console.log(mytime);
        var mydate = new Date(startDate);
        // Extract year, month, and day from the date object
        var year = mydate.getFullYear();
        var month = (mydate.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
        var day = mydate.getDate().toString().padStart(2, '0');
        // Construct the desired ISO 8601 formatted string
        var date = `${year}-${month}-${day}T00:00:00Z`;
        console.log(date);


        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });


        if (res.data.success) {
            let campaign = {
                email:user?.email,
                name: data.name,
                image: res.data.data.display_url,
                maximumDonation: data.maximumDonation,
                shortDescription: data.shortDescription,
                longDescription: data.longDescription,
                lastDate: date,
                time: mytime
            }
            console.log(campaign);

            let campaignRes = await axiosSecure.post('/createcampaign', campaign)
            console.log(campaignRes.data);
            if (campaignRes.data.insertedId) {
                toast.success('Campaign created successfully')
            }

        }




        // console.log(res.data);

    }
    return (
        <section>

            <h1 className="text-3xl font-bold uppercase text-center my-7">Create Donation Campaign</h1>

            <form className="" onSubmit={handleSubmit(onSubmit)}>

                <section className="flex gap-3 flex-col">
                    <article className="grid md:grid-cols-2 gap-4">



                        <div>
                            <div className="flex items-center border-[1px] border-black rounded-lg w-full p-1 ">
                                <span>Image:</span>
                                <input className=" p-2 w-[100%] outline-none border-0"  {...register('image', { required: true })} type="file" />
                            </div>
                            {errors.image && <span className="text-red-400">This field is required</span>}
                        </div>





                        <div>
                            <div className="flex items-center border-[1px] border-black rounded-lg p-1" >
                                <span>Pet Name:</span>
                                <input className=" p-2 w-[100%] outline-none border-0" type="text" {...register('name', { required: true })} id="" />
                            </div>
                            {errors.name && <span className="text-red-400">This field is required</span>}
                        </div>

                    </article>

                    <article className="grid md:grid-cols-2 gap-4">


                        <div>
                            <div className="flex items-center border-[1px] gap-3 border-black rounded-lg p-1 w-full" >
                                <span>Last Date:</span>
                                <ReactDatePicker
                                    className="w-full"
                                    showIcon
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                />
                            </div>
                            {errors.name && <span className="text-red-400">This field is required</span>}
                        </div>



                        <div>
                            <div className="flex items-center border-[1px] border-black rounded-lg p-1" >
                                <span>Maximum donation amount :</span>
                                <input className=" p-2 w-[100%] outline-none border-0" type="number" {...register('maximumDonation', { required: true })} id="" />
                            </div>
                            {errors.maximumDonation && <span className="text-red-400">This field is required</span>}
                        </div>



                    </article>


                    <article className="grid md:grid-cols-2 gap-4">



                        <div>
                            <div className="flex items-center border-[1px] border-black rounded-lg p-1" >
                                <span>Short description:</span>
                                <textarea rows='5' cols='10' className=" p-2 w-[100%] outline-none border-0 "  {...register('shortDescription', { required: true })} placeholder="Short description" id="" />
                            </div>
                            {errors.shortDescription && <span className="text-red-400">This field is required</span>}
                        </div>




                        <div>
                            <div className="flex items-center border-[1px] border-black rounded-lg p-1" >
                                <span>Long description:</span>
                                <textarea className="w-full h-full outline-none border-0" placeholder="write here long description..."  {...register('longDescription',{required:true})} id="" cols="30" rows="5"></textarea>
                            </div>
                            {errors.longDescription && <span className="text-red-400">This field is required</span>}
                        </div>
                    </article>
                    {/* <article className="grid grid-cols-1 md:grid-cols-1 gap-4">
                   


                    </article> */}
                </section>
                <input type="submit" value={'Create Campaign'} className=" px-4 py-3 bg-blue-700 text-white rounded-xl w-full mt-3" name="" id="" />
            </form>
            <ToastContainer></ToastContainer>
        </section>
    );
};

export default CreateDonationCampaign;