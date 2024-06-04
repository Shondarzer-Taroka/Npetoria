import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { AuthContext } from "../AuthProvider/AuthProvider";


const CheckoutForm = ({ donationAmount, askedforId, donateImg, donateName, petdata }) => {
    console.log(askedforId);
    const { user } = useContext(AuthContext)
    const [error, setError] = useState('')
    const stripe = useStripe()
    const elements = useElements()
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('');
    const axiosSecure = useAxiosSecure();
    let totalPrice = parseInt(donationAmount)
    console.log('total', { totalPrice });
    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice, askedforId: askedforId })
                .then(res => {
                    // console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                })
        }

    }, [axiosSecure, totalPrice, askedforId])

    function clicking(amount,transactionId) {
        let donatorinfo = {
            askedforId,
            email: user?.email,
            userName: user?.displayName,
            transactionId,
            amount: amount,
            donateImg,
            donateName,
            petdata
        }
        console.log(donatorinfo);

        axiosSecure.post('/donator', donatorinfo)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    // function handlepay(event) {
    //     event.preventDefault()
    //     console.log('jj');
    //         if (totalPrice > 0) {
    //             axiosSecure.post('/create-payment-intent', { price: totalPrice })
    //                 .then(res => {
    //                     // console.log(res.data.clientSecret);
    //                     setClientSecret(res.data.clientSecret);
    //                 })
    //         }
    // }

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('payment error', error);
            setError(error.message)

        } else {
            console.log('payment method', paymentMethod);
            setError('')
        }


        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })

        if (confirmError) {
            console.log('confirm error')
        }
        else {
            console.log('payment intent', paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                console.log('transaction id', paymentIntent.id);
                clicking(paymentIntent.amount,paymentIntent.id)
                setTransactionId(paymentIntent.id);
            }
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                {/* <form onSubmit={()=>handlepay(event)}> */}
                <button className='px-4 py-2 bg-blue-600 rounded-md text-white' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
                {/* </form> */}
                {/* disabled={!stripe || !clientSecret} */}
                <p className='text-red-600'>{error}</p>
                {transactionId && <p className="text-green-600"> Your transaction id: {transactionId}</p>}
            </form>
        </div>
    );
};

export default CheckoutForm;