import { useState } from "react";
import { useForm } from "react-hook-form";
import Select from 'react-select'
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { ToastContainer, toast } from "react-toastify";
import moment from "moment";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const UpdatePet = () => {
    const { id } = useParams()
    const [imagePreview, setImagePreview] = useState()
    const [imageText, setImageText] = useState('Upload Image')
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const [valueCategory, setValueCategory] = useState('')
    const [startDate, setStartDate] = useState(new Date());

    const options = [
        { value: 'Dogs', label: 'Dogs' },
        { value: 'Cats', label: 'Cats' },
        { value: 'Birds', label: 'Birds' },
        { value: 'Fish', label: 'Fish' },
        { value: 'Farm Animals', label: 'Farm Animals' }
    ]

    const { data: onepet = '', refetch, isLoading } = useQuery({
        queryKey: ['onepet', id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/onepet/${id}`);
            return res.data;
        }
    })

    console.log(onepet);

    function handleCategory(e) {
        // console.log( e.value);
        setValueCategory(e.value)
    }

    const {
        register,
        handleSubmit,
    } = useForm()

    const onSubmit = async (data) => {
        var mydate = new Date(startDate);
        let time = moment().add(3, 'days').calendar();
        // Extract year, month, and day from the date object
        var year = mydate.getFullYear();
        var month = (mydate.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
        var day = mydate.getDate().toString().padStart(2, '0');
        // Construct the desired ISO 8601 formatted string
        var date = `${year}-${month}-${day}T00:00:00Z`;
        console.log(date);
        console.log(time);
        const imageFile = { image: data.image[0] }
      console.log(imageFile.image.name);
        setImageText(imageFile.image.name)
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });

        // console.log(res.data.success);
        if (res.data.success) {

            let pet = {

                image: res.data.data.display_url,
                date: date,
                time: time,
                adopted: false,
                name: data.name,
                age: data.age,
                location: data.location,
                category: valueCategory,
                shortDescription: data.shortDescription,
                longDescription: data.longDescription
            }

            console.log(pet);
            const petRes = await axiosSecure.put(`/updatepet/${id}`, pet);
            console.log(petRes.data)
            if (petRes.data.modifiedCount > 0) {
                toast.success('Your pet updated successfully')
            }
        }



        console.log(data);
        console.log(imageText);
    }
    console.log(imageText);




    const handleImage = e => {
        // setImagePreview(URL.createObjectURL(image))
        // console.log(image.name);
        // setImageText(image.name)
        console.log(e);
      }
    return (
        isLoading ? <h1>Loading</h1> : <section className="mt-7 ">

            <h1 className="uppercase text-center text-3xl font-bold my-3"> update pet</h1>

            <form className="" onSubmit={handleSubmit(onSubmit)}>

                <section className="flex gap-3 flex-col">
                    <article className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-center border-[1px] border-black rounded-lg w-full p-1 ">
                            <span>Image:</span>
                            {/* onChange={e => handleImage(e.target.files[0])} */}
                            <input className=" p-2 w-[100%] outline-none"  id='image'  onChange={()=>handleImage(event)}
                                accept='image/*'   {...register('image', { required: true })} type="file" />
                        </div>
                        <div className="flex items-center border-[1px] border-black rounded-lg p-1" >
                            <span> Name:</span>
                            <input className=" p-2 w-[100%] outline-none " type="text" defaultValue={onepet.name} {...register('name', { required: true })} id="" />
                        </div>


                    </article>

                    <article className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-center border-[1px] border-black rounded-lg p-1" >
                            <span> Age</span>
                            <input className=" p-2 w-[100%] outline-none " type="number" defaultValue={onepet.age} {...register('age', { required: true })} placeholder="type here Pet age" id="" />
                        </div>

                        <div className="flex items-center gap-3 justify-between border-[1px] border-black rounded-lg p-1" >
                            <span>Pet Category:</span>

                            <Select defaultValue={onepet.category} onChange={handleCategory} className="w-full outline-none" options={options} />
                        </div>
                    </article>


                    <article className="grid md:grid-cols-2 gap-4">

                        <div className="flex items-center border-[1px] border-black rounded-lg w-full p-1 ">
                            <span>Location:</span>
                            <input className=" p-2 w-[100%] outline-none" defaultValue={onepet.location} type="text"{...register('location', { required: true })} placeholder="Type your Location" id="" />
                        </div>

                        <div className="flex items-center border-[1px] border-black rounded-lg p-1" >
                            <span>Short description:</span>
                            <textarea rows='2' cols='10' className=" p-2 w-[100%] outline-none" defaultValue={onepet.shortDescription}  {...register('shortDescription')} placeholder="Short description" id="" />
                        </div>


                    </article>
                    <article className="grid grid-cols-1 md:grid-cols-1 gap-4">



                        <div className="flex items-center border-[1px] border-black rounded-lg p-1" >
                            <textarea className="w-full h-full" placeholder="write here long description..." defaultValue={onepet.longDescription}  {...register('longDescription')} id="" cols="30" rows="5"></textarea>
                        </div>

                    </article>
                </section>
                <input type="submit" value={'Update pet'} className=" px-4 py-3 bg-blue-700 text-white rounded-xl w-full mt-3" name="" id="" />
            </form>
            <ToastContainer></ToastContainer>
        </section>
    );
};

export default UpdatePet;