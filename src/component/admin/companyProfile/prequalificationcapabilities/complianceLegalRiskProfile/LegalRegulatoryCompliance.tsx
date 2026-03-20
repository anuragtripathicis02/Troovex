import React from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'
import { TagInput } from 'rsuite'
import PdfUpload from "@/component/common/PdfUpload";
import FileUploadItem from '@/component/common/FileUploadItem';

const LegalRegulatoryCompliance = () => {
  return (
    <div className="row pt-3">
        <div className='col-md-12 mb-4'>
            <FloatingLabel controlId="floatingTextarea2" label="Applicable Procurement Laws / Regulations" className="mb-0">
                <Form.Control as="textarea" placeholder="Applicable Procurement Laws / Regulations" style={{ height: '100px' }} />
            </FloatingLabel>
        </div>
        <div className='col-md-12 mb-4'>
            <FloatingLabel controlId="floatingTextarea2" label="ESG Commitments Description" className="mb-0">
                <Form.Control as="textarea" placeholder="ESG Commitments Description" style={{ height: '100px' }} />
            </FloatingLabel>
        </div>
        <div className='col-lg-4 col-md-12 mb-4'>
            <FloatingLabel controlId="floatingSelect" label="Sanctions Screening Status">
                <Form.Select aria-label="Sanctions Screening Status">
                    <option>Pending</option>
                    <option value="1">Pending 1</option>
                    <option value="2">Pending 2</option>
                    <option value="3">Pending 3</option>
                </Form.Select>
            </FloatingLabel>
        </div>
        <div className='col-lg-8 col-md-12 mb-4'>
            <div className="multipal-select-sec mb-0 position-relative floting-box">
                <Form.Label>User Departments Using Procurement</Form.Label>
                <TagInput defaultValue={["GDPR", "Local data protection law"]}
                    trigger={['Enter', 'Space', 'Comma']}
                    placeholder="Core Activities"
                    className="w-100 form-group"
                />
            </div>
        </div>
        <div className='col-12 mb-2'>
            <div className="d-flex gap-3 align-items-center mb-2">
                <span className="fs-14 d-flex gap-2 align-items-center">
                    Litigation History
                </span>
                <hr className="flex-grow-1"></hr>
            </div>
        </div>
        
        <div className='col-xl-4 col-md-12 mb-4'>
            <div className='row'>
                <div className='col-md-12 mb-4'>
                    <FloatingLabel controlId="floatingSelect" label="Litigation History status">
                        <Form.Select aria-label="Litigation History status">
                            <option>Yes</option>
                            <option value="1">No</option>
                        </Form.Select>
                    </FloatingLabel>
                </div>
                <div className='col-md-12 mb-0'>
                    <Form.Label className="fs-14">Attachment</Form.Label>
                    <PdfUpload title="Upload Attachment" subtitle="PDF File | Max Size 2MB" type="pdf" icon={<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M35 23.75C35 24.0815 34.8683 24.3995 34.6339 24.6339C34.3995 24.8683 34.0815 25 33.75 25H30V27.5H32.5C32.8315 27.5 33.1495 27.6317 33.3839 27.8661C33.6183 28.1005 33.75 28.4185 33.75 28.75C33.75 29.0815 33.6183 29.3995 33.3839 29.6339C33.1495 29.8683 32.8315 30 32.5 30H30V32.5C30 32.8315 29.8683 33.1495 29.6339 33.3839C29.3995 33.6183 29.0815 33.75 28.75 33.75C28.4185 33.75 28.1005 33.6183 27.8661 33.3839C27.6317 33.1495 27.5 32.8315 27.5 32.5V23.75C27.5 23.4185 27.6317 23.1005 27.8661 22.8661C28.1005 22.6317 28.4185 22.5 28.75 22.5H33.75C34.0815 22.5 34.3995 22.6317 34.6339 22.8661C34.8683 23.1005 35 23.4185 35 23.75ZM14.375 26.875C14.375 28.0353 13.9141 29.1481 13.0936 29.9686C12.2731 30.7891 11.1603 31.25 10 31.25H8.75V32.5C8.75 32.8315 8.6183 33.1495 8.38388 33.3839C8.14946 33.6183 7.83152 33.75 7.5 33.75C7.16848 33.75 6.85054 33.6183 6.61612 33.3839C6.3817 33.1495 6.25 32.8315 6.25 32.5V23.75C6.25 23.4185 6.3817 23.1005 6.61612 22.8661C6.85054 22.6317 7.16848 22.5 7.5 22.5H10C11.1603 22.5 12.2731 22.9609 13.0936 23.7814C13.9141 24.6019 14.375 25.7147 14.375 26.875ZM11.875 26.875C11.875 26.3777 11.6775 25.9008 11.3258 25.5492C10.9742 25.1975 10.4973 25 10 25H8.75V28.75H10C10.4973 28.75 10.9742 28.5525 11.3258 28.2008C11.6775 27.8492 11.875 27.3723 11.875 26.875ZM25.625 28.125C25.625 29.6168 25.0324 31.0476 23.9775 32.1025C22.9226 33.1574 21.4918 33.75 20 33.75H17.5C17.1685 33.75 16.8505 33.6183 16.6161 33.3839C16.3817 33.1495 16.25 32.8315 16.25 32.5V23.75C16.25 23.4185 16.3817 23.1005 16.6161 22.8661C16.8505 22.6317 17.1685 22.5 17.5 22.5H20C21.4918 22.5 22.9226 23.0926 23.9775 24.1475C25.0324 25.2024 25.625 26.6332 25.625 28.125ZM23.125 28.125C23.125 27.2962 22.7958 26.5013 22.2097 25.9153C21.6237 25.3292 20.8288 25 20 25H18.75V31.25H20C20.8288 31.25 21.6237 30.9208 22.2097 30.3347C22.7958 29.7487 23.125 28.9538 23.125 28.125ZM6.25 17.5V6.25C6.25 5.58696 6.51339 4.95107 6.98223 4.48223C7.45107 4.01339 8.08696 3.75 8.75 3.75H23.75C23.9142 3.74987 24.0768 3.78209 24.2286 3.84483C24.3803 3.90756 24.5182 3.99958 24.6344 4.11563L33.3844 12.8656C33.5004 12.9818 33.5924 13.1197 33.6552 13.2714C33.7179 13.4232 33.7501 13.5858 33.75 13.75V17.5C33.75 17.8315 33.6183 18.1495 33.3839 18.3839C33.1495 18.6183 32.8315 18.75 32.5 18.75C32.1685 18.75 31.8505 18.6183 31.6161 18.3839C31.3817 18.1495 31.25 17.8315 31.25 17.5V15H23.75C23.4185 15 23.1005 14.8683 22.8661 14.6339C22.6317 14.3995 22.5 14.0815 22.5 13.75V6.25H8.75V17.5C8.75 17.8315 8.6183 18.1495 8.38388 18.3839C8.14946 18.6183 7.83152 18.75 7.5 18.75C7.16848 18.75 6.85054 18.6183 6.61612 18.3839C6.3817 18.1495 6.25 17.8315 6.25 17.5ZM25 12.5H29.4828L25 8.01719V12.5Z" fill="#97979E"/></svg>} />
                </div>
            </div>
        </div>
        <div className='col-xl-8 col-md-12 mb-4'>
            <FloatingLabel controlId="floatingTextarea2" label="Applicable Procurement Laws / Regulations" className="mb-0 h-100">
                <Form.Control as="textarea" placeholder="Applicable Procurement Laws / Regulations" style={{ height: '100%' }} />
            </FloatingLabel>
        </div>
        <div className='col-12 mb-2'>
            <div className="d-flex gap-3 align-items-center mb-2">
                <span className="fs-14 d-flex gap-2 align-items-center">
                    Blacklisting History
                </span>
                <hr className="flex-grow-1"></hr>
            </div>
        </div>
        <div className='col-xl-4 col-md-12 mb-4'>
            <FloatingLabel controlId="floatingSelect" label="Blacklisting History status">
                <Form.Select aria-label="Blacklisting History status">
                    <option>Yes</option>
                    <option value="1">No</option>
                </Form.Select>
            </FloatingLabel>
        </div>
        <div className='col-12 mb-2'>
            <div className="d-flex gap-3 align-items-center mb-2">
                <span className="fs-14 d-flex gap-2 align-items-center">
                    Required File Upload
                </span>
                <hr className="flex-grow-1"></hr>
            </div>
        </div>
        <div className='col-12 mb-4'>
            <div className="upload-file-sec">
                <FileUploadItem title="ustainable Procurement Policy" required />
                <FileUploadItem title="Code of Ethics" required/>
                <FileUploadItem title="Anti-Corruption Policy" required/>
                <FileUploadItem title="Regulatory Compliance Permit" required />
                <FileUploadItem title="Regulatory Compliance Licenses" required />
                <FileUploadItem title="Import / Export authorizations" required />
            </div>
        </div>
        <div className='col-12 mb-2'>
            <div className="d-flex gap-3 align-items-center mb-2">
                <span className="fs-14 d-flex gap-2 align-items-center">
                    Acknowledgements & Declarations
                </span>
                <hr className="flex-grow-1"></hr>
            </div>
        </div>
        <div className='col-md-12 mb-4'>
            <div className="d-flex acknowledgements-sec align-items-center gap-2 mb-2 flex-wrap card-member-box justify-content-between">
                <div className='left-text-box'>
                    <p className='declarations-name'>Anti-Fraud / Anti-Corruption Declaration</p>
                    <p className='m-0'>We, the undersigned, affirm that <strong> [Company Name] </strong>operates in strict adherence to this <span> Anti-Fraud / Anti-Corruption Declaration</span> and will continue to uphold these principles in all business activities.</p>
                </div>
                <div className='right-text-box'>
                    <button className='btn-outline btn-light-blue d-inline-flex align-items-center gap-1'>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.1243 13.125H4.98834C5.19616 12.7156 5.40475 12.2945 5.61334 11.8664C6.78522 11.9953 8.15866 11.1805 9.72741 9.43359C10.118 10.4852 10.8563 11.85 12.1165 11.875C12.8243 11.8891 13.5313 11.4688 14.2587 10.5961C14.7891 11.2305 15.8821 11.875 18.1243 11.875C18.29 11.875 18.449 11.8092 18.5662 11.6919C18.6834 11.5747 18.7493 11.4158 18.7493 11.25C18.7493 11.0842 18.6834 10.9253 18.5662 10.8081C18.449 10.6908 18.29 10.625 18.1243 10.625C15.7469 10.625 15.0438 9.80859 14.9993 9.36641C15.0063 9.23228 14.9681 9.09968 14.8907 8.98988C14.8134 8.88008 14.7014 8.79945 14.5727 8.76094C14.439 8.72078 14.2959 8.72571 14.1653 8.77499C14.0347 8.82426 13.9239 8.91514 13.8501 9.03359C12.9071 10.482 12.336 10.6297 12.1376 10.625C11.4922 10.6125 10.836 9.1 10.611 8.01406C10.587 7.89775 10.5303 7.79069 10.4477 7.70542C10.365 7.62014 10.2598 7.56018 10.1443 7.53256C10.0288 7.50493 9.9078 7.51078 9.79551 7.54943C9.68321 7.58808 9.58425 7.65792 9.51022 7.75078C7.93209 9.73047 6.87428 10.3969 6.21569 10.5695C6.87897 9.09531 7.37428 7.80078 7.69147 6.71094C8.22428 4.87969 8.26334 3.59922 7.80944 2.79687C7.57506 2.37656 7.07975 1.875 6.086 1.875C4.83131 1.875 3.84147 3.06094 3.36959 5.12891C3.08912 6.35625 3.04303 7.72344 3.24303 8.87891C3.44303 10.0344 3.85787 10.875 4.461 11.3742C4.16959 11.9773 3.87272 12.5664 3.58366 13.125H1.87428C1.70852 13.125 1.54955 13.1908 1.43234 13.3081C1.31513 13.4253 1.24928 13.5842 1.24928 13.75C1.24928 13.9158 1.31513 14.0747 1.43234 14.1919C1.54955 14.3092 1.70852 14.375 1.87428 14.375H2.92194C2.03756 16.0156 1.35006 17.1594 1.33912 17.1781C1.29457 17.2485 1.26453 17.3271 1.25077 17.4092C1.23701 17.4914 1.23982 17.5755 1.25902 17.6565C1.27822 17.7376 1.31343 17.814 1.36258 17.8812C1.41173 17.9485 1.47383 18.0052 1.54523 18.0481C1.61662 18.0911 1.69587 18.1193 1.77833 18.1311C1.86078 18.1429 1.94477 18.1382 2.02536 18.1171C2.10594 18.096 2.1815 18.059 2.2476 18.0083C2.31369 17.9576 2.36898 17.8942 2.41022 17.8219C2.42194 17.8016 3.29069 16.3539 4.33991 14.375H18.1243C18.29 14.375 18.449 14.3092 18.5662 14.1919C18.6834 14.0747 18.7493 13.9158 18.7493 13.75C18.7493 13.5842 18.6834 13.4253 18.5662 13.3081C18.449 13.1908 18.29 13.125 18.1243 13.125ZM4.58834 5.40703C4.89928 4.04219 5.50162 3.125 6.086 3.125C6.50241 3.125 6.64069 3.27031 6.72116 3.41172C6.95553 3.82812 7.23053 5.30156 5.02897 10.1609C4.38365 9.27969 4.16412 7.26562 4.58834 5.40703Z" fill="currentColor"/></svg>
                        <span>Sign Document</span>
                    </button>
                </div>
            </div>
            <div className="d-flex acknowledgements-sec align-items-center gap-2 mb-2 flex-wrap card-member-box justify-content-between">
                <div className='left-text-box'>
                    <p className='declarations-name'>Conflict of Interest Declaration</p>
                    <p className='m-0'>We, the undersigned, affirm that <strong> [Company Name]</strong> operates in strict adherence to this <span> Conflict of Interest Declaration</span> and will continue to uphold these principles in all business activities.</p>
                </div>
                <div className='right-text-box'>
                    <div className="d-flex align-items-center gap-2">
                        <button className="btn-outline btn-gray d-inline-flex align-items-center gap-1 py-2 px-3">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.3211 9.74688C19.2937 9.68516 18.632 8.21719 17.1609 6.74609C15.2008 4.78594 12.725 3.75 9.99999 3.75C7.27499 3.75 4.79921 4.78594 2.83905 6.74609C1.36796 8.21719 0.703118 9.6875 0.678899 9.74688C0.643362 9.82681 0.625 9.91331 0.625 10.0008C0.625 10.0883 0.643362 10.1748 0.678899 10.2547C0.706243 10.3164 1.36796 11.7836 2.83905 13.2547C4.79921 15.2141 7.27499 16.25 9.99999 16.25C12.725 16.25 15.2008 15.2141 17.1609 13.2547C18.632 11.7836 19.2937 10.3164 19.3211 10.2547C19.3566 10.1748 19.375 10.0883 19.375 10.0008C19.375 9.91331 19.3566 9.82681 19.3211 9.74688ZM9.99999 15C7.5953 15 5.49452 14.1258 3.75546 12.4023C3.0419 11.6927 2.43483 10.8836 1.95312 10C2.4347 9.11636 3.04179 8.30717 3.75546 7.59766C5.49452 5.87422 7.5953 5 9.99999 5C12.4047 5 14.5055 5.87422 16.2445 7.59766C16.9595 8.307 17.5679 9.11619 18.0508 10C17.4875 11.0516 15.0336 15 9.99999 15ZM9.99999 6.25C9.25831 6.25 8.53329 6.46993 7.9166 6.88199C7.29992 7.29404 6.81927 7.87971 6.53544 8.56494C6.25162 9.25016 6.17735 10.0042 6.32205 10.7316C6.46674 11.459 6.82389 12.1272 7.34834 12.6517C7.87279 13.1761 8.54097 13.5333 9.2684 13.6779C9.99583 13.8226 10.7498 13.7484 11.4351 13.4645C12.1203 13.1807 12.7059 12.7001 13.118 12.0834C13.5301 11.4667 13.75 10.7417 13.75 10C13.749 9.00576 13.3535 8.05253 12.6505 7.34949C11.9475 6.64645 10.9942 6.25103 9.99999 6.25ZM9.99999 12.5C9.50554 12.5 9.02219 12.3534 8.61107 12.0787C8.19994 11.804 7.87951 11.4135 7.69029 10.9567C7.50107 10.4999 7.45157 9.99723 7.54803 9.51227C7.64449 9.02732 7.88259 8.58186 8.23222 8.23223C8.58186 7.8826 9.02731 7.6445 9.51227 7.54804C9.99722 7.45157 10.4999 7.50108 10.9567 7.6903C11.4135 7.87952 11.804 8.19995 12.0787 8.61107C12.3534 9.0222 12.5 9.50555 12.5 10C12.5 10.663 12.2366 11.2989 11.7678 11.7678C11.2989 12.2366 10.663 12.5 9.99999 12.5Z" fill="currentColor"/></svg>
                            Read</button>
                        <button className="btn-outline btn-gray d-inline-flex align-items-center gap-1 py-2 px-3">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.7711 5.625H15.625V3.125C15.625 2.95924 15.5592 2.80027 15.4419 2.68306C15.3247 2.56585 15.1658 2.5 15 2.5H5C4.83424 2.5 4.67527 2.56585 4.55806 2.68306C4.44085 2.80027 4.375 2.95924 4.375 3.125V5.625H3.22891C2.1375 5.625 1.25 6.46641 1.25 7.5V13.75C1.25 13.9158 1.31585 14.0747 1.43306 14.1919C1.55027 14.3092 1.70924 14.375 1.875 14.375H4.375V16.875C4.375 17.0408 4.44085 17.1997 4.55806 17.3169C4.67527 17.4342 4.83424 17.5 5 17.5H15C15.1658 17.5 15.3247 17.4342 15.4419 17.3169C15.5592 17.1997 15.625 17.0408 15.625 16.875V14.375H18.125C18.2908 14.375 18.4497 14.3092 18.5669 14.1919C18.6842 14.0747 18.75 13.9158 18.75 13.75V7.5C18.75 6.46641 17.8625 5.625 16.7711 5.625ZM5.625 3.75H14.375V5.625H5.625V3.75ZM14.375 16.25H5.625V12.5H14.375V16.25ZM17.5 13.125H15.625V11.875C15.625 11.7092 15.5592 11.5503 15.4419 11.4331C15.3247 11.3158 15.1658 11.25 15 11.25H5C4.83424 11.25 4.67527 11.3158 4.55806 11.4331C4.44085 11.5503 4.375 11.7092 4.375 11.875V13.125H2.5V7.5C2.5 7.15547 2.82734 6.875 3.22891 6.875H16.7711C17.1727 6.875 17.5 7.15547 17.5 7.5V13.125ZM15.625 9.0625C15.625 9.24792 15.57 9.42918 15.467 9.58335C15.364 9.73752 15.2176 9.85768 15.0463 9.92864C14.875 9.99959 14.6865 10.0182 14.5046 9.98199C14.3227 9.94581 14.1557 9.85652 14.0246 9.72541C13.8935 9.5943 13.8042 9.42725 13.768 9.2454C13.7318 9.06354 13.7504 8.87504 13.8214 8.70373C13.8923 8.53243 14.0125 8.38601 14.1667 8.283C14.3208 8.17998 14.5021 8.125 14.6875 8.125C14.9361 8.125 15.1746 8.22377 15.3504 8.39959C15.5262 8.5754 15.625 8.81386 15.625 9.0625Z" fill="currentColor"/></svg>
                            Print</button>
                    </div>
                </div>
            </div>
        </div>

    </div>

  )
}

export default LegalRegulatoryCompliance