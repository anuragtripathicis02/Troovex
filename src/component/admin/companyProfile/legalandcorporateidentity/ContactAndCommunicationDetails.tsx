"use client";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import OnlyFlagPhoneInput from "@/component/common/OnlyFlagPhoneInput";

const ContactAndCommunicationDetails = () => {
    return (
        <div className='row'>
            <div className="col-md-6">
                <FloatingLabel controlId="floatingInput" label="Primary Contact Person Name" className="mb-4">
                    <Form.Control type="text" placeholder="Primary Contact Person Name" />
                </FloatingLabel>
            </div>
            <div className="col-md-6">
                <div className="fleg-box mb-4 position-relative floting-box black-filed">
                    <OnlyFlagPhoneInput label="Primary Contact Phone Number" />
                </div>
            </div>
            <div className="col-md-6">
                <div className="fleg-box mb-4 position-relative floting-box black-filed">
                    <OnlyFlagPhoneInput label="Primary Contact Email Address" />
                </div>
            </div>
             <div className="col-md-6">
                <FloatingLabel controlId="floatingInput" label="Languages Used for Communication" className="mb-4">
                    <Form.Control type="text" placeholder="English" />
                </FloatingLabel>
            </div>
            <div className="col-md-6">
                <div className="fleg-box mb-4 position-relative floting-box black-filed">
                    <OnlyFlagPhoneInput label="Country / Region of Operation" />
                </div>
            </div>
        </div>
    )
}

export default ContactAndCommunicationDetails
