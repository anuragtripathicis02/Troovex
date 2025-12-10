"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Link from "next/link";
import { Button } from "react-bootstrap";
import DefaultLGModal from "@/component/admin/modalComponent/DefaultLGModal";
import DefaultMDModal from "@/component/admin/modalComponent/DefaultMDModal";
import DefaultSMModal from "@/component/admin/modalComponent/DefaultSMModal";

import { DatePicker, TagInput } from 'rsuite';
import OnlyFlagPhoneInput from "@/component/common/OnlyFlagPhoneInput";
import CountryName from "@/component/common/CountryName";

import CardImgDemo from '../../src/app/images/card-img-demo.png'
import CardDemoImg from '../../src/app/images/card-demo-img.png'


export default function Home() {

  //paswaord 
  const [showPass, setShowPass] = useState(false);
  const [showCPass, setShowCPass] = useState(false);
  const [showPassLabel, setShowPassLabel] = useState(false);
  const [showCPassLabel, setShowCPassLabel] = useState(false);
  // SVG Icons for password show hide
  const EyeOpen = (
      <svg width="23" height="15" viewBox="0 0 23 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.4353 7.19625C22.4025 7.12219 21.6084 5.36062 19.8431 3.59531C17.4909 1.24312 14.52 0 11.25 0C7.97999 0 5.00905 1.24312 2.65687 3.59531C0.891554 5.36062 0.093741 7.125 0.0646785 7.19625C0.0220346 7.29217 0 7.39597 0 7.50094C0 7.60591 0.0220346 7.70971 0.0646785 7.80562C0.097491 7.87969 0.891554 9.64031 2.65687 11.4056C5.00905 13.7569 7.97999 15 11.25 15C14.52 15 17.4909 13.7569 19.8431 11.4056C21.6084 9.64031 22.4025 7.87969 22.4353 7.80562C22.4779 7.70971 22.5 7.60591 22.5 7.50094C22.5 7.39597 22.4779 7.29217 22.4353 7.19625ZM11.25 13.5C8.36437 13.5 5.84343 12.4509 3.75655 10.3828C2.90028 9.53128 2.17179 8.56027 1.59374 7.5C2.17164 6.43963 2.90014 5.4686 3.75655 4.61719C5.84343 2.54906 8.36437 1.5 11.25 1.5C14.1356 1.5 16.6566 2.54906 18.7434 4.61719C19.6014 5.4684 20.3315 6.43942 20.9109 7.5C20.235 8.76188 17.2903 13.5 11.25 13.5ZM11.25 3C10.36 3 9.48995 3.26392 8.74993 3.75839C8.0099 4.25285 7.43313 4.95566 7.09253 5.77792C6.75194 6.60019 6.66282 7.50499 6.83646 8.37791C7.01009 9.25082 7.43867 10.0526 8.06801 10.682C8.69735 11.3113 9.49917 11.7399 10.3721 11.9135C11.245 12.0872 12.1498 11.9981 12.9721 11.6575C13.7943 11.3169 14.4971 10.7401 14.9916 10.0001C15.4861 9.26005 15.75 8.39002 15.75 7.5C15.7488 6.30691 15.2742 5.16303 14.4306 4.31939C13.587 3.47575 12.4431 3.00124 11.25 3ZM11.25 10.5C10.6566 10.5 10.0766 10.3241 9.58328 9.99441C9.08993 9.66476 8.70542 9.19623 8.47835 8.64805C8.25129 8.09987 8.19188 7.49667 8.30764 6.91473C8.42339 6.33279 8.70911 5.79824 9.12867 5.37868C9.54823 4.95912 10.0828 4.6734 10.6647 4.55764C11.2467 4.44189 11.8499 4.5013 12.398 4.72836C12.9462 4.95542 13.4148 5.33994 13.7444 5.83329C14.074 6.32664 14.25 6.90666 14.25 7.5C14.25 8.29565 13.9339 9.05871 13.3713 9.62132C12.8087 10.1839 12.0456 10.5 11.25 10.5Z" fill="#97979E"/></svg>
  );

  const EyeClose = (
    <svg width="23" height="19" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.30499 0.25228C4.23913 0.178036 4.15918 0.117603 4.06979 0.0744831C3.9804 0.0313634 3.88334 0.00641467 3.78423 0.00108303C3.68513 -0.00424861 3.58595 0.0101427 3.49245 0.0434231C3.39895 0.0767035 3.31298 0.128211 3.23953 0.19496C3.16608 0.261709 3.10661 0.342373 3.06457 0.432275C3.02252 0.522177 2.99874 0.61953 2.9946 0.718692C2.99045 0.817853 3.00603 0.916851 3.04043 1.00995C3.07483 1.10304 3.12737 1.18839 3.19499 1.26103L4.99874 3.24572C1.59374 5.33541 0.129366 8.55665 0.0646785 8.7029C0.0220346 8.79882 0 8.90262 0 9.00759C0 9.11256 0.0220346 9.21636 0.0646785 9.31228C0.097491 9.38634 0.891554 11.147 2.65687 12.9123C5.00905 15.2635 7.97999 16.5067 11.25 16.5067C12.9306 16.5162 14.5942 16.1702 16.1316 15.4913L18.1941 17.761C18.2599 17.8353 18.3399 17.8957 18.4293 17.9388C18.5186 17.9819 18.6157 18.0069 18.7148 18.0122C18.8139 18.0176 18.9131 18.0032 19.0066 17.9699C19.1001 17.9366 19.1861 17.8851 19.2595 17.8183C19.333 17.7516 19.3924 17.6709 19.4345 17.581C19.4765 17.4911 19.5003 17.3938 19.5044 17.2946C19.5086 17.1955 19.493 17.0965 19.4586 17.0034C19.4242 16.9103 19.3717 16.8249 19.3041 16.7523L4.30499 0.25228ZM8.74218 7.36228L12.6487 11.6607C12.0605 11.9702 11.386 12.0755 10.7314 11.9602C10.0768 11.8448 9.47896 11.5153 9.03188 11.0234C8.58481 10.5315 8.31377 9.90501 8.26134 9.24236C8.2089 8.5797 8.37804 7.91839 8.74218 7.36228ZM11.25 15.0067C8.36437 15.0067 5.84343 13.9576 3.75655 11.8895C2.89997 11.0382 2.17145 10.0671 1.59374 9.00665C2.03343 8.18259 3.43687 5.87634 6.0328 4.37728L7.7203 6.22884C7.06699 7.06557 6.73052 8.10631 6.77036 9.16713C6.81021 10.2279 7.22379 11.2405 7.93802 12.0259C8.65225 12.8112 9.62114 13.3188 10.6734 13.4589C11.7257 13.599 12.7936 13.3625 13.6884 12.7913L15.0694 14.3101C13.8506 14.7777 12.5553 15.0139 11.25 15.0067ZM11.8125 6.06009C11.6171 6.0228 11.4444 5.90939 11.3326 5.74483C11.2208 5.58027 11.1789 5.37802 11.2162 5.18259C11.2535 4.98716 11.3669 4.81455 11.5315 4.70273C11.6961 4.59091 11.8983 4.54905 12.0937 4.58634C13.0496 4.77166 13.92 5.26101 14.575 5.98142C15.23 6.70183 15.6346 7.61469 15.7284 8.58384C15.7469 8.78188 15.686 8.97917 15.5591 9.1323C15.4322 9.28544 15.2496 9.38188 15.0516 9.4004C15.0281 9.40178 15.0047 9.40178 14.9812 9.4004C14.7938 9.40121 14.6128 9.33178 14.474 9.20581C14.3352 9.07983 14.2486 8.90643 14.2312 8.71978C14.1681 8.07515 13.8986 7.46811 13.4628 6.98891C13.0271 6.50972 12.4482 6.18397 11.8125 6.06009ZM22.4325 9.31228C22.3931 9.4004 21.4434 11.5032 19.305 13.4185C19.2319 13.4861 19.1461 13.5384 19.0527 13.5724C18.9592 13.6065 18.8599 13.6216 18.7605 13.6169C18.6611 13.6122 18.5636 13.5878 18.4738 13.545C18.3839 13.5023 18.3035 13.4421 18.2371 13.368C18.1708 13.2938 18.1198 13.2072 18.0873 13.1132C18.0547 13.0192 18.0412 12.9196 18.0475 12.8203C18.0537 12.721 18.0797 12.624 18.1239 12.5348C18.168 12.4457 18.2295 12.3662 18.3047 12.301C19.3538 11.3585 20.2351 10.2445 20.9109 9.00665C20.3319 7.94519 19.6018 6.97348 18.7434 6.12197C16.6566 4.05572 14.1356 3.00665 11.25 3.00665C10.642 3.00591 10.0349 3.05514 9.43499 3.15384C9.33743 3.1711 9.23741 3.16885 9.14073 3.14723C9.04404 3.12561 8.95259 3.08505 8.87167 3.02788C8.79074 2.97072 8.72195 2.89809 8.66925 2.81419C8.61656 2.73029 8.58101 2.63678 8.56466 2.53906C8.54832 2.44134 8.55149 2.34135 8.57401 2.24487C8.59652 2.14838 8.63793 2.05731 8.69584 1.97692C8.75375 1.89653 8.82702 1.82842 8.9114 1.7765C8.99579 1.72459 9.08963 1.68991 9.18749 1.67447C9.86921 1.56191 10.559 1.50578 11.25 1.50665C14.52 1.50665 17.4909 2.74978 19.8431 5.10197C21.6084 6.86728 22.4025 8.62884 22.4353 8.7029C22.4779 8.79882 22.5 8.90262 22.5 9.00759C22.5 9.11256 22.4779 9.21636 22.4353 9.31228H22.4325Z" fill="#97979E"/></svg>
  );


  // LG Modal 
    const [showFilterDefaultLG, setShowFilterDefaultLG] = useState(false);
    const handleFilterDefaultLG = () => {
        setShowFilterDefaultLG(true);
    };

  // MD Modal 

    const [showFilterDefaultMD, setShowFilterDefaultMD] = useState(false);
    const handleFilterDefaultMD = () => {
        setShowFilterDefaultMD(true);
    };

  // SM Modal 

    const [showFilterDefaultSM, setShowFilterDefaultSM] = useState(false);
    const handleFilterDefaultSM = () => {
        setShowFilterDefaultSM(true);
    };

    const handleCloseAll = () => {
        setShowFilterDefaultLG(false);
        setShowFilterDefaultMD(false);
        setShowFilterDefaultSM(false);
    };


// file upload
    
  const [fileSelected, setFileSelected] = useState(false);


  return (
    <div className="container pt-5 pb-5 pb-5 mb-5">
      <main>
      
      {/* form with floting  */}

        <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
          <Form.Control type="text" placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingTextarea2" label="Comments" className="mb-3">
          <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: '100px' }}/>
        </FloatingLabel>
        <FloatingLabel controlId="floatingSelect" label="Works with selects">
          <Form.Select aria-label="Floating label select example">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </FloatingLabel>

        {/* from without floting  */}

         <Form className="mt-5 mb-3">
          <Form.Group className="mb-3 form-group" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3 form-group" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Form.Group className="mb-3 form-group" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Form.Group>
          
          {/* default btn outline  */}
          <Button type="submit" className="btn-outline"> Submit outline</Button>
          
          {/* default btn fill  */}
          <Link href="" className="btn-outline fill-btn"> Submit fill</Link>  

          <div className="mt-3">

          {/* checkbox btn  */}
            <Form.Check aria-label="option 1" />
            <Form.Check aria-label="option 1" checked/>
            <Form.Check aria-label="option 1" checked disabled/>
          
          {/* radio btn  */}
            <Form.Check type="radio" aria-label="radio 1" />
            <Form.Check type="radio" aria-label="radio 1" checked/>
            <Form.Check type="radio" aria-label="radio 1" checked disabled/>

          {/* switch btn  */}
            <Form.Check type="switch" id="custom-switch" label="my name is anurag" className="switch-btn"/>
            <Form.Check type="switch" label="" id="checked-custom-switch" className="switch-btn" checked/>
          
          </div>


        </Form>

    {/* default para text  */}

        <p>my name is anurag tripathi</p>
          my name is anurag tripathi
        <h1>my name is anurag tripathi</h1>
        <h2>my name is anurag tripathi</h2>
        <h3>my name is anurag tripathi</h3>
        <h4>my name is anurag tripathi</h4>
        <h5>my name is anurag tripathi</h5>
        <h6>my name is anurag tripathi</h6>

      {/* default link text***/ }

        <Link href="">my name is anurag tripathi</Link>


      </main>

    {/* <!-----modal lg----> */}
    <div className="w-100">

      <Button type="button" className="btn-outline mt-2" onClick={handleFilterDefaultLG}> Modal LG </Button>
      <DefaultLGModal show={showFilterDefaultLG} handleClose={handleCloseAll}/>
    
    </div>

    {/* <!-----modal md----> */}      
    
    <div className="w-100">

      <Button type="button" className="btn-outline mt-2" onClick={handleFilterDefaultMD}> Modal MD </Button>
      < DefaultMDModal show={showFilterDefaultMD} handleClose={handleCloseAll}/>

    </div>

    {/* <!-----modal md----> */}      
    
    <div className="w-100">
      <Button type="button" className="btn-outline mt-2" onClick={handleFilterDefaultSM}> Modal sm </Button>
      <DefaultSMModal show={showFilterDefaultSM} handleClose={handleCloseAll}/>
    </div>


    {/* //floting password */}

      <div className="floating-password-wrapper mb-3 mt-4 position-relative">
        <FloatingLabel controlId="password" label="Password">
          <Form.Control type={showPass ? "text" : "password"} placeholder="Enter your password" />
        </FloatingLabel>

        <span className="password-eye" onClick={() => setShowPass(!showPass)}>
          {showPass ? EyeClose : EyeOpen}
        </span>
      </div>

      <div className="floating-password-wrapper mb-3 mt-4 position-relative">
        <FloatingLabel controlId="cpassword" label="Confirm Password">
          <Form.Control type={showCPass ? "text" : "password"} placeholder="Re-enter password" />
        </FloatingLabel>

        <span className="password-eye" onClick={() => setShowCPass(!showCPass)}>
          {showCPass ? EyeClose : EyeOpen}
        </span>
      </div>
    
    {/* //simple label password */}

        <Form.Group className="mb-3 mt-4 simple-password-wrapper form-group position-relative" >
          <Form.Label>password</Form.Label>
          <Form.Control type={showPassLabel ? "text" : "password"} placeholder="password"/>
          <span className="password-eye" onClick={() => setShowPassLabel(!showPassLabel)}>
            {showPassLabel ? EyeClose : EyeOpen}
          </span>
        </Form.Group>

        <Form.Group className="mb-3 mt-4 simple-password-wrapper form-group position-relative" >
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type={showCPassLabel ? "text" : "password"} placeholder="Confirm Password"/>
          <span className="password-eye" onClick={() => setShowCPassLabel(!showCPassLabel)}>
            {showCPassLabel ? EyeClose : EyeOpen}
          </span>
        </Form.Group>

    {/* calendar simple label  */}

        <div className="calendar-box mb-3 mt-4 position-relative">
          <Form.Label className="d-block">Calendar </Form.Label>
          <DatePicker className="w-100"/>
        </div>

    {/* calendar floting label  */}

        <div className="calendar-box floating-calendar-box mb-3 mt-4 position-relative">
          <Form.Label>Calendar </Form.Label>
          <DatePicker className="w-100"/>
        </div>


    {/* timepicker simple label  */} 

        <div className="timepicker-box mb-3 mt-4 position-relative">
          <Form.Label className="d-block">Time Picker </Form.Label>
          <DatePicker format="HH:mm"  className="w-100"/>
        </div>

   {/* floating timepicker simple label  */} 

        <div className="timepicker-box floating-timepicker-box mb-3 mt-4 position-relative">
          <Form.Label className="d-block">Time Picker </Form.Label>
          <DatePicker format="HH:mm"  className="w-100"/>
        </div>

    {/* upload file simple label  */} 


      <Form.Group controlId="formFile" className="mb-3 mt-4 position-relative upload-input-box form-group">
        <Form.Label>Upload File</Form.Label>
        <Form.Control type="file" className={fileSelected ? "file-selected" : "w-100 position-relative"} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { const input = e.target as HTMLInputElement; if (input.files && input.files.length > 0) {setFileSelected(true);}}}/>
          <span className="link-icon">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5304 8.46926C15.6001 8.53892 15.6555 8.62164 15.6932 8.71269C15.7309 8.80373 15.7504 8.90133 15.7504 8.99989C15.7504 9.09845 15.7309 9.19605 15.6932 9.2871C15.6555 9.37814 15.6001 9.46086 15.5304 9.53052L9.53041 15.5305C9.46072 15.6002 9.378 15.6555 9.28695 15.6932C9.19591 15.7309 9.09833 15.7503 8.99978 15.7503C8.90123 15.7503 8.80365 15.7309 8.71261 15.6932C8.62156 15.6555 8.53884 15.6002 8.46915 15.5305C8.39947 15.4608 8.3442 15.3781 8.30649 15.2871C8.26877 15.196 8.24936 15.0984 8.24936 14.9999C8.24936 14.9013 8.26877 14.8038 8.30649 14.7127C8.3442 14.6217 8.39947 14.5389 8.46915 14.4693L14.4692 8.46926C14.5388 8.39953 14.6215 8.34421 14.7126 8.30647C14.8036 8.26873 14.9012 8.2493 14.9998 8.2493C15.0983 8.2493 15.1959 8.26873 15.287 8.30647C15.378 8.34421 15.4608 8.39953 15.5304 8.46926ZM20.2123 3.78739C19.7248 3.29983 19.146 2.91307 18.509 2.6492C17.872 2.38532 17.1893 2.24951 16.4998 2.24951C15.8103 2.24951 15.1276 2.38532 14.4906 2.6492C13.8536 2.91307 13.2748 3.29983 12.7873 3.78739L9.96915 6.60458C9.82842 6.74531 9.74936 6.93618 9.74936 7.1352C9.74936 7.33423 9.82842 7.5251 9.96915 7.66583C10.1099 7.80656 10.3008 7.88562 10.4998 7.88562C10.6988 7.88562 10.8897 7.80656 11.0304 7.66583L13.8485 4.85333C14.5544 4.163 15.504 3.77887 16.4912 3.78431C17.4785 3.78975 18.4238 4.18431 19.122 4.88237C19.8202 5.58043 20.2149 6.52566 20.2205 7.51294C20.2261 8.50022 19.8422 9.44988 19.152 10.1558L16.3329 12.974C16.1922 13.1146 16.1131 13.3053 16.113 13.5042C16.1129 13.7032 16.1918 13.894 16.3324 14.0347C16.473 14.1755 16.6638 14.2546 16.8627 14.2547C17.0617 14.2548 17.2525 14.1758 17.3932 14.0352L20.2123 11.2124C20.6998 10.7249 21.0866 10.1461 21.3505 9.5091C21.6143 8.87211 21.7502 8.18937 21.7502 7.49989C21.7502 6.81041 21.6143 6.12767 21.3505 5.49068C21.0866 4.85368 20.6998 4.2749 20.2123 3.78739ZM12.9692 16.333L10.151 19.1511C9.80423 19.5057 9.39053 19.788 8.93389 19.9816C8.47725 20.1752 7.98674 20.2763 7.49076 20.279C6.99477 20.2818 6.50318 20.1861 6.04443 19.9975C5.58569 19.809 5.1689 19.5313 4.81822 19.1805C4.46753 18.8298 4.18991 18.4129 4.00143 17.9542C3.81294 17.4954 3.71734 17.0038 3.72016 16.5078C3.72298 16.0118 3.82416 15.5213 4.01785 15.0647C4.21154 14.6081 4.49388 14.1944 4.84853 13.8477L7.66572 11.0305C7.80645 10.8898 7.88551 10.6989 7.88551 10.4999C7.88551 10.3009 7.80645 10.11 7.66572 9.96926C7.52499 9.82853 7.33412 9.74947 7.13509 9.74947C6.93607 9.74947 6.7452 9.82853 6.60447 9.96926L3.78728 12.7874C2.80266 13.772 2.24951 15.1074 2.24951 16.4999C2.24951 17.8923 2.80266 19.2278 3.78728 20.2124C4.7719 21.197 6.10732 21.7502 7.49978 21.7502C8.89224 21.7502 10.2277 21.197 11.2123 20.2124L14.0304 17.3933C14.171 17.2526 14.25 17.0618 14.2499 16.8628C14.2498 16.6639 14.1707 16.4732 14.0299 16.3325C13.8892 16.1919 13.6984 16.113 13.4994 16.1131C13.3005 16.1132 13.1098 16.1923 12.9692 16.333Z" fill="#97979E"/></svg>
          </span>
      </Form.Group>
      

    {/* Floting upload file simple label  */} 


      <Form.Group controlId="formFile" className="mb-3 mt-4 position-relative upload-input-box floating-upload-input-box form-group">
        <Form.Label>Upload File</Form.Label>
        <Form.Control type="file" className={fileSelected ? "file-selected" : "w-100 position-relative"} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { const input = e.target as HTMLInputElement; if (input.files && input.files.length > 0) {setFileSelected(true);}}}/>
        <span className="link-icon">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5304 8.46926C15.6001 8.53892 15.6555 8.62164 15.6932 8.71269C15.7309 8.80373 15.7504 8.90133 15.7504 8.99989C15.7504 9.09845 15.7309 9.19605 15.6932 9.2871C15.6555 9.37814 15.6001 9.46086 15.5304 9.53052L9.53041 15.5305C9.46072 15.6002 9.378 15.6555 9.28695 15.6932C9.19591 15.7309 9.09833 15.7503 8.99978 15.7503C8.90123 15.7503 8.80365 15.7309 8.71261 15.6932C8.62156 15.6555 8.53884 15.6002 8.46915 15.5305C8.39947 15.4608 8.3442 15.3781 8.30649 15.2871C8.26877 15.196 8.24936 15.0984 8.24936 14.9999C8.24936 14.9013 8.26877 14.8038 8.30649 14.7127C8.3442 14.6217 8.39947 14.5389 8.46915 14.4693L14.4692 8.46926C14.5388 8.39953 14.6215 8.34421 14.7126 8.30647C14.8036 8.26873 14.9012 8.2493 14.9998 8.2493C15.0983 8.2493 15.1959 8.26873 15.287 8.30647C15.378 8.34421 15.4608 8.39953 15.5304 8.46926ZM20.2123 3.78739C19.7248 3.29983 19.146 2.91307 18.509 2.6492C17.872 2.38532 17.1893 2.24951 16.4998 2.24951C15.8103 2.24951 15.1276 2.38532 14.4906 2.6492C13.8536 2.91307 13.2748 3.29983 12.7873 3.78739L9.96915 6.60458C9.82842 6.74531 9.74936 6.93618 9.74936 7.1352C9.74936 7.33423 9.82842 7.5251 9.96915 7.66583C10.1099 7.80656 10.3008 7.88562 10.4998 7.88562C10.6988 7.88562 10.8897 7.80656 11.0304 7.66583L13.8485 4.85333C14.5544 4.163 15.504 3.77887 16.4912 3.78431C17.4785 3.78975 18.4238 4.18431 19.122 4.88237C19.8202 5.58043 20.2149 6.52566 20.2205 7.51294C20.2261 8.50022 19.8422 9.44988 19.152 10.1558L16.3329 12.974C16.1922 13.1146 16.1131 13.3053 16.113 13.5042C16.1129 13.7032 16.1918 13.894 16.3324 14.0347C16.473 14.1755 16.6638 14.2546 16.8627 14.2547C17.0617 14.2548 17.2525 14.1758 17.3932 14.0352L20.2123 11.2124C20.6998 10.7249 21.0866 10.1461 21.3505 9.5091C21.6143 8.87211 21.7502 8.18937 21.7502 7.49989C21.7502 6.81041 21.6143 6.12767 21.3505 5.49068C21.0866 4.85368 20.6998 4.2749 20.2123 3.78739ZM12.9692 16.333L10.151 19.1511C9.80423 19.5057 9.39053 19.788 8.93389 19.9816C8.47725 20.1752 7.98674 20.2763 7.49076 20.279C6.99477 20.2818 6.50318 20.1861 6.04443 19.9975C5.58569 19.809 5.1689 19.5313 4.81822 19.1805C4.46753 18.8298 4.18991 18.4129 4.00143 17.9542C3.81294 17.4954 3.71734 17.0038 3.72016 16.5078C3.72298 16.0118 3.82416 15.5213 4.01785 15.0647C4.21154 14.6081 4.49388 14.1944 4.84853 13.8477L7.66572 11.0305C7.80645 10.8898 7.88551 10.6989 7.88551 10.4999C7.88551 10.3009 7.80645 10.11 7.66572 9.96926C7.52499 9.82853 7.33412 9.74947 7.13509 9.74947C6.93607 9.74947 6.7452 9.82853 6.60447 9.96926L3.78728 12.7874C2.80266 13.772 2.24951 15.1074 2.24951 16.4999C2.24951 17.8923 2.80266 19.2278 3.78728 20.2124C4.7719 21.197 6.10732 21.7502 7.49978 21.7502C8.89224 21.7502 10.2277 21.197 11.2123 20.2124L14.0304 17.3933C14.171 17.2526 14.25 17.0618 14.2499 16.8628C14.2498 16.6639 14.1707 16.4732 14.0299 16.3325C13.8892 16.1919 13.6984 16.113 13.4994 16.1131C13.3005 16.1132 13.1098 16.1923 12.9692 16.333Z" fill="#97979E"/></svg>
          </span>
      </Form.Group>


    {/* cuntry code with flag */}

    <div className="fleg-box mb-3 mt-4 position-relative">
      <OnlyFlagPhoneInput />
    </div>

    
    {/* floting cuntry code with flag */}
    
    <div className="fleg-box mb-3 mt-4 position-relative floting-box">
      <OnlyFlagPhoneInput />
    </div>

    {/* cuntry with fleag only */}

    <div className="flag-code-sec mb-3 mt-4 position-relative">
      <CountryName />
    </div>

    {/* Floting cuntry with fleag only */}
    
    <div className="flag-code-sec mb-3 mt-4 position-relative floting-box">
      <CountryName />
    </div>

    {/* multipal tags select  */}
 
    <div className="multipal-select-sec mb-3 mt-4 position-relative">
        <Form.Label>Company Domain</Form.Label>
        <TagInput trigger={['Enter', 'Space', 'Comma']} placeholder="Company Domain" onCreate={(value, item) => { console.log(value, item); }} className="w-100 form-group"/>
    </div>
    
    {/* floting multipal tags select  */}
 
    <div className="multipal-select-sec mb-3 mt-4 position-relative floting-box">
        <Form.Label>Company Domain</Form.Label>
        <TagInput trigger={['Enter', 'Space', 'Comma']} placeholder="Company Domain" onCreate={(value, item) => { console.log(value, item); }} className="w-100 form-group"/>
    </div>

    {/* card common box */}
    <div className="row">
      <div className="col-lg-3 mb-4">
        <div className="card-simple p-12 ">
          <div className="img-box position-relative">
            <Image src={CardImgDemo} alt=""></Image>
            <ul className="card-top-box position-absolute list-unstyled m-0 d-flex align-items-center justify-content-between gap-2">
              <li className="left-card-box">12 hours ago</li>
              <li className="right-card-text">
                <span className="btn-lighter-blue">Opening Soon</span>
              </li>
            </ul>
          </div>
          <div className="text-box">
              <h6>IT Support Services Annual Contract – AMC for hardware & networking</h6>
              <div className="card-inline-text d-flex align-items-center gap-2">
                <span className="img">
                  <Image src={CardDemoImg} alt=""></Image>
                </span>
                <span className="text">Wilaya de Blida – Direction de l’Administration Générale</span>
              </div>
              <ul className="p-0 m-0 d-flex align-items-center gap-2 justify-content-between list-unstyled">
                  <li className="card-btn d-flex align-items-center gap-1">123456 <span>AD</span></li>
                  <li className="card-btn d-flex align-items-center gap-1">123456 <span>AD</span></li>
                  <li className="card-btn d-flex align-items-center gap-1">123456 <span>AD</span></li>
              </ul>
          </div>
        </div>
      </div>
    </div>

  </div>
  );
}
