
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";


// todo: null loadStripe
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
const Payment = ({donationAmount,askedforId}) => {
    return (
        <div>
            <div>
                <h1>Please pay </h1>
                <Elements stripe={stripePromise}>
                    <CheckoutForm donationAmount={donationAmount} askedforId={askedforId}></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;