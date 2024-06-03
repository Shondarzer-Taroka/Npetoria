import {  Modal} from "flowbite-react";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import Payment from "../../Payment/Payment";

const DonationModal = ({ openModal, onCloseModal,askedforId}) => {
    let amounget=useRef()
    const axiosSecure=useAxiosSecure()
    const [donationAmount,setdonationAmount]=useState('')
    let holdAmount=0
    const { user } = useContext(AuthContext)
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()


    const onSubmit = (data) =>{
        // let adoptionRequest={
        //     ...data,...allinfo
        // }
        // console.log(adoptionRequest);

    }

    function handleAmount() {
        // console.log(e.target.value);
        // let taka=e.target.value
        // holdAmount=parseFloat(taka)
        setdonationAmount(amounget.current.value)
        // holdAmount=parseFloat(e.target.value)
        console.log(donationAmount,holdAmount);
    }
    console.log(donationAmount,holdAmount);
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
                                {/* <input value={user?.email} {...register("email")} /> */}
                                {/* include validation with required or other standard HTML validation rules */}
                                {/* <input value={user?.displayName} {...register("userName", { required: true })} /> */}
                                <div className="flex items-center border-[1px] border-black rounded-lg w-full p-1 ">
                                    <span>Donation Amount</span>
                                    <input onBlur={handleAmount} ref={amounget} name="amount" className=" p-2 w-[100%] outline-none border-0 h-full" type="number" placeholder="type your amount" id="" />
                                </div>
                                {/* <div className="flex items-center border-[1px] border-black rounded-lg w-full p-1 ">
                                    <span>Address:</span>
                                    <input className=" p-2 w-[100%] outline-none " type="text"{...register('address', { required: true })} placeholder="Type your address" id="" />
                                </div> */}
                                {/* errors will return when field validation fails  */}
                                {errors.exampleRequired && <span>This field is required</span>}
                                {/* <input className="bg-purple-700 px-4 py-2 rounded text-white" type="submit" /> */}
                            </div>
                        </form>
                         
                         <div>
                            {/* payment related */}
                            <Payment donationAmount={donationAmount} askedforId={askedforId}>    
                            </Payment>
                         </div>

                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default DonationModal;