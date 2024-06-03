import {  Modal} from "flowbite-react";

const CampaignModal = ({openModal,onCloseModal}) => {
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