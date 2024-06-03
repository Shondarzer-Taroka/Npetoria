import {  Modal} from "flowbite-react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const CampaignModal = ({openModal,onCloseModal}) => {

    const axiosSecure = useAxiosSecure();
    const { data: donators = [], refetch } = useQuery({
        queryKey: ['donators'],
        queryFn: async () => {
            const res = await axiosSecure.get('/donators');
            return res.data;
        }
    })

    console.log(donators);

    return (
        <div>
             <Modal show={openModal} size="md" onClose={onCloseModal} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6">

                  
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default CampaignModal;