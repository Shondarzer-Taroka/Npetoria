import { Button } from "flowbite-react";
import { Link } from "react-router-dom";


const DonationCampaigns = () => {
    return (
        <section>

            <aside className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

                <div className="flex flex-col gap-2 border rounded ">
                    <img className="w-full p-2" src={'https://pets-grooming.axiomthemes.com/wp-content/uploads/2016/07/image-30.jpg'} alt="" />


                    <div id="content" className="mt-3 p-2">
                        <h1 className="font-bold text-3xl">Pet Name:{'value.name'}</h1>
                        <h3>Age:{'value.age'}</h3>
                        <h5>Location:{'value.location'}</h5>

                        <Link to={`/viewdetails/${'value._id'}`}> <Button gradientDuoTone="purpleToPink" className="mt-4"> view details </Button></Link>
                    </div>
                </div>
            </aside>
        </section>
    );
};

export default DonationCampaigns;