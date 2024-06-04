
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";


// todo: null loadStripe
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
const Payment = ({donationAmount,askedforId,donateImg,donateName,petdata}) => {
    // const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
    return (
        <div>
            <div>
                <h1>Please pay </h1>
                <Elements stripe={stripePromise}>
                    <CheckoutForm petdata={petdata} donationAmount={donationAmount} askedforId={askedforId} donateImg={donateImg} donateName={donateName}></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;