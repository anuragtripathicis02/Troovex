import { Form } from "react-bootstrap";
import { PhoneInput } from "react-international-phone";


const OnlyFlagPhoneInput = () => {
  return (
    <div className="form-group flag-phone-sec" >
      <Form.Label>Contact Label</Form.Label>
      <PhoneInput defaultCountry="in"  className="w-100 d-flex position-relative align-items-center gap-2" />
    </div>
  )
}

export default OnlyFlagPhoneInput