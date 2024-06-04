import {  Modal} from "flowbite-react";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import Payment from "../../Payment/Payment";

const DonationModal = ({ openModal, onCloseModal,askedforId,donateImg,donateName,petdata}) => {
    let amounget=useRef()
    // console.log(donateImg,donateName);
    console.log(petdata);
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
        setdonationAmount(amounget.current.value)
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
                                <div className="flex items-center border-[1px] border-black rounded-lg w-full p-1 ">
                                    <span>Donation Amount</span>
                                    <input onBlur={handleAmount} ref={amounget} name="amount" className=" p-2 w-[100%] outline-none border-0 h-full" type="number" placeholder="type your amount" id="" />
                                </div>
                                {/* errors will return when field validation fails  */}
                                {errors.exampleRequired && <span>This field is required</span>}
                            </div>
                        </form>
                         
                         <div>
                            
                            {/* payment related */}
                            <Payment donationAmount={donationAmount} askedforId={askedforId} donateImg={donateImg} donateName={donateName} petdata={petdata}>    
                            </Payment>
                         </div>

                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default DonationModal;