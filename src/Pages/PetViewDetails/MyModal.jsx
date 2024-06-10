
import {  Modal} from "flowbite-react";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form"
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { ToastContainer, toast } from "react-toastify";
const MyModal = ({ openModal, onCloseModal, name,allinfo}) => {
    let {location,age,category}=allinfo
    const axiosSecure=useAxiosSecure()
    const { user } = useContext(AuthContext)
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) =>{
        let adoptionRequest={
            ...data,...allinfo
        }
        console.log(adoptionRequest);

        axiosSecure.post('/adoptionrequest',adoptionRequest)
        .then(res=>{
            if (res.data.insertedId) {
               toast.success('successfully submitted')
            }
        })
    }
    return (
        <div>
            <Modal show={openModal} size="md" onClose={onCloseModal} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6">

                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">{name}</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex flex-col gap-3" >


                                {/* register your input into the hook by invoking the "register" function */}
                                <input className=" border-[2px] rounded-lg p-4" value={user?.email} {...register("email")} />

                                {/* include validation with required or other standard HTML validation rules */}
                                <input className=" border-[2px] rounded-lg p-4" value={user?.displayName} {...register("userName", { required: true })} />
                                <div className="flex items-center border-[1px] border-black rounded-lg w-full p-1 ">
                                    <span>Phone Number:</span>
                                    <input className=" p-2 w-[100%] outline-none border-0 h-full" type="text"{...register('phoneNumber', { required: true })} placeholder="+8801811122333" id="" />
                                </div>

                                <div className="flex items-center border-[1px] border-black rounded-lg w-full p-1 ">
                                    <span>Address:</span>
                                    <input className=" p-2 w-[100%] outline-none " type="text"{...register('myaddress', { required: true })} placeholder="Type your address" id="" />
                                </div>
                                {errors.exampleRequired && <span>This field is required</span>}

                                <input className="bg-purple-700 px-4 py-2 rounded text-white" type="submit" />
                            </div>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default MyModal;