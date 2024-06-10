



// third

import { useState } from "react";
import { useForm } from "react-hook-form";
import Select from 'react-select';
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { ToastContainer, toast } from "react-toastify";
import moment from "moment";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import 'react-quill/dist/quill.snow.css';


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdatePet = () => {
    const { id } = useParams();
    const [imageText, setImageText] = useState('Upload Image');
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const [valueCategory, setValueCategory] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [longDescription, setLongDescription] = useState('');

    const options = [
        { value: 'Dogs', label: 'Dogs' },
        { value: 'Cats', label: 'Cats' },
        { value: 'Birds', label: 'Birds' },
        { value: 'Fish', label: 'Fish' },
        { value: 'Farm Animals', label: 'Farm Animals' }
    ];

    const { data: onepet = '', refetch, isLoading } = useQuery({
        queryKey: ['onepet', id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/onepet/${id}`);
            return res.data;
        }
    });

    function handleCategory(e) {
        setValueCategory(e.value);
    }

    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        var mydate = new Date(startDate);
        let time = moment().add(3, 'days').calendar();
        var year = mydate.getFullYear();
        var month = (mydate.getMonth() + 1).toString().padStart(2, '0');
        var day = mydate.getDate().toString().padStart(2, '0');
        var date = `${year}-${month}-${day}T00:00:00Z`;

        const imageFile = { image: data.image[0] };
        setImageText(imageFile.image.name);
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });

        console.log(data);

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
                longDescription: longDescription
            };

            const petRes = await axiosSecure.put(`/updatepet/${id}`, pet);
            if (petRes.data.modifiedCount > 0) {
                toast.success('Your pet updated successfully');
            }
        }
    };

    // Set initial long description value when onepet data is loaded
    useState(() => {
        if (onepet.longDescription) {
            setLongDescription(onepet.longDescription);
        }
    }, [onepet]);

    // console.log(data);

    return (
        <section className="mt-7">
            <h1 className="uppercase text-center text-3xl font-bold my-3">
                {isLoading ? <Skeleton width={200} /> : 'Update Pet'}
            </h1>

            <form className="" onSubmit={handleSubmit(onSubmit)}>
                <section className="flex gap-3 flex-col">
                    <article className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-center border-[1px] border-black rounded-lg w-full p-1">
                            <span>{isLoading ? <Skeleton width={50} /> : 'Image:'}</span>
                            <input
                                className="p-2 w-[100%] outline-none"
                                id='image'
                                // onChange={() => handleImage(event)}
                                accept='image/*'
                                {...register('image', { required: true })}
                                type="file"
                            />
                        </div>
                        <div className="flex items-center border-[1px] border-black rounded-lg p-1">
                            <span>{isLoading ? <Skeleton width={50} /> : 'Name:'}</span>
                            <input
                                className="p-2 w-[100%] outline-none"
                                type="text"
                                defaultValue={isLoading ? '' : onepet.name}
                                {...register('name', { required: true })}
                            />
                        </div>
                    </article>

                    <article className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-center border-[1px] border-black rounded-lg p-1">
                            <span>{isLoading ? <Skeleton width={50} /> : 'Age:'}</span>
                            <input
                                className="p-2 w-[100%] outline-none"
                                type="number"
                                defaultValue={isLoading ? '' : onepet.age}
                                {...register('age', { required: true })}
                                placeholder="type here Pet age"
                            />
                        </div>

                        <div className="flex items-center gap-3 justify-between border-[1px] border-black rounded-lg p-1">
                            <span>{isLoading ? <Skeleton width={100} /> : 'Pet Category:'}</span>
                            {isLoading ? (
                                <Skeleton width={200} />
                            ) : (
                                <Select defaultValue={onepet.category} onChange={handleCategory} className="w-full outline-none" options={options} />
                            )}
                        </div>
                    </article>

                    <article className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-center border-[1px] border-black rounded-lg w-full p-1">
                            <span>{isLoading ? <Skeleton width={100} /> : 'Location:'}</span>
                            <input
                                className="p-2 w-[100%] outline-none"
                                defaultValue={isLoading ? '' : onepet.location}
                                type="text"
                                {...register('location', { required: true })}
                                placeholder="Type your Location"
                            />
                        </div>

                        <div className="flex items-center border-[1px] border-black rounded-lg p-1">
                            <span>{isLoading ? <Skeleton width={150} /> : 'Short description:'}</span>
                            <textarea
                                rows='2'
                                cols='10'
                                className="p-2 w-[100%] outline-none"
                                defaultValue={isLoading ? '' : onepet.shortDescription}
                                {...register('shortDescription')}
                                placeholder="Short description"
                            />
                        </div>
                    </article>

                    <article className="grid grid-cols-1 md:grid-cols-1 gap-4">

                        {/* <div className="flex items-center border-[1px] border-black rounded-lg p-1 w-full">
                            <span>{isLoading ? <Skeleton width={200} /> : 'Long description:'}</span>
                            {isLoading ? (
                                <Skeleton height={150} width="100%" />
                            ) : 
                            (
                                <ReactQuill
                                    value={longDescription}
                                    onChange={setLongDescription}
                                    theme="snow"
                                    className="w-full "
                                />
                            )}
                        </div> */}


                        <div className="flex items-center border-[1px] border-black rounded-lg p-1">
                            <span>{isLoading ? <Skeleton width={150} /> : 'Long description:'}</span>
                            <textarea
                                rows='2'
                                cols='10'
                                className="p-2 w-[100%] outline-none"
                                defaultValue={isLoading ? '' : onepet.longDescription}
                                {...register('longDescription')}
                                placeholder="Long description"
                            />
                        </div>

                    </article>
                </section>
                <input
                    type="submit"
                    value={isLoading ? <Skeleton width={100} /> : 'Update Pet'}
                    className="px-4 py-3 bg-blue-700 text-white rounded-xl w-full mt-3"
                />
            </form>
            <ToastContainer />
        </section>
    );
};

export default UpdatePet;
