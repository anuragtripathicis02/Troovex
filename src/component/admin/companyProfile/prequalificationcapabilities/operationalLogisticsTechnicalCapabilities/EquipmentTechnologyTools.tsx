import AddAssetsModal from '@/component/admin/modalComponent/AddAssetsModal'
import AddBoardMembersModalCSV from '@/component/admin/modalComponent/AddBoardMembersModalCSV'
import AddSoftwareLicensesModal from '@/component/admin/modalComponent/AddSoftwareLicensesModal'
import AttachmentIcon from '@/component/common/Icons/AttachmentIcon'
import Delete from '@/component/common/Icons/Delete'
import Pencil from '@/component/common/Icons/Pencil'
import Link from 'next/link'
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { TagInput } from 'rsuite'

const EquipmentTechnologyTools = () => {
    const [showBranchSiteDetails, setShowBranchSiteDetails] = useState(false);
    const [showAddMemberCSV, setShowAddMemberCSV] = useState(false);
    const [showAddSoftware, setShowAddSoftware] = useState(false);
    
    const handleBranchSiteDetails = () => {
        setShowBranchSiteDetails(true);
    };

    const handleAddMemberCSV = () => {
        setShowAddMemberCSV(true);
    };

    const handleAddSoftware = () => {
        setShowAddSoftware(true);
    };

    const handleCloseAll = () => {
        setShowBranchSiteDetails(false);
        setShowAddMemberCSV(false);
        setShowAddSoftware(false);
    };
  return ( 
    <>
        <div className="board-member-box">
            <div className="d-flex gap-3 align-items-center mb-3">
                <span className="fs-14">Heavy Equipment / Transport / Vehicles</span>
                <hr className="flex-grow-1"></hr>
            </div>
             <div className="board-location-list mt-3">
                <div className="d-flex align-items-center gap-2 mb-2 flex-wrap card-member-box location-list-box justify-content-between">
                    <p className="name">Forklift <span className='d-block'>Qty: 4  |  Capacity: 3-Ton  |  Ownership: Owned</span></p>
                    <p className="type upload-btn">
                        <Link href='' className="d-flex text-nowrap gap-2 ">
                            <AttachmentIcon /> View Attachment
                        </Link>
                    </p>
                    <ul className="p-0 m-0 list-unstyled d-flex align-items-center gap-2">
                        <li>
                            <Link href="" className="edit-btn ui-icon icon-pencil">
                                <Pencil />  
                            </Link>
                        </li>
                        <li>
                            <Link href="" className="delete-btn ui-icon icon-delete">
                                <Delete />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="d-flex align-items-center gap-2 mb-2 flex-wrap card-member-box location-list-box justify-content-between">
                    <p className="name">Delivery Van <span className='d-block'>Qty: 12  |  Size: Medium  |  Ownership: Leased</span></p>
                    <p className="type upload-btn">
                        <Link href='' className="d-flex text-nowrap gap-2 ">
                            <AttachmentIcon /> View Attachment
                        </Link>
                    </p>
                    <ul className="p-0 m-0 list-unstyled d-flex align-items-center gap-2">
                        <li>
                            <Link href="" className="edit-btn ui-icon icon-pencil">
                                <Pencil />  
                            </Link>
                        </li>
                        <li>
                            <Link href="" className="delete-btn ui-icon icon-delete">
                                <Delete />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="d-flex align-items-center gap-2 mb-2 flex-wrap card-member-box location-list-box justify-content-between">
                    <p className="name">Flatbed Truck <span className='d-block'>Qty: 6  |  Capacity: 10-Ton  |  Ownership: Owned</span></p>
                    <p className="type upload-btn">
                        <Link href='' className="d-flex text-nowrap gap-2 ">
                            <AttachmentIcon /> View Attachment
                        </Link>
                    </p>
                    <ul className="p-0 m-0 list-unstyled d-flex align-items-center gap-2">
                        <li>
                            <Link href="" className="edit-btn ui-icon icon-pencil">
                                <Pencil />  
                            </Link>
                        </li>
                        <li>
                            <Link href="" className="delete-btn ui-icon icon-delete">
                                <Delete />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="d-flex align-items-center gap-2 mb-2 flex-wrap card-member-box location-list-box justify-content-between">
                    <p className="name">Refrigerated Truck <span className='d-block'>Qty: 3  |  Capacity: Small  |  Ownership: Leased</span></p>
                    <p className="type upload-btn">
                        <Link href='' className="d-flex text-nowrap gap-2 ">
                            <AttachmentIcon /> View Attachment
                        </Link>
                    </p>
                    <ul className="p-0 m-0 list-unstyled d-flex align-items-center gap-2">
                        <li>
                            <Link href="" className="edit-btn ui-icon icon-pencil">
                                <Pencil />  
                            </Link>
                        </li>
                        <li>
                            <Link href="" className="delete-btn ui-icon icon-delete">
                                <Delete />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>      
            <div className="action-right">
                <div className="d-flex align-items-center gap-4 btn-default-box pt-3 pb-5">
                    <button type="button" onClick={handleBranchSiteDetails} className="d-inline-flex align-items-center gap-1 p-0 btn-grey-text border-0 bg-transparent">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 1.5625C8.33122 1.5625 6.69992 2.05735 5.31238 2.98448C3.92484 3.9116 2.84338 5.22936 2.20477 6.77111C1.56616 8.31286 1.39907 10.0094 1.72463 11.6461C2.05019 13.2828 2.85379 14.7862 4.03379 15.9662C5.2138 17.1462 6.71721 17.9498 8.35393 18.2754C9.99064 18.6009 11.6871 18.4338 13.2289 17.7952C14.7706 17.1566 16.0884 16.0752 17.0155 14.6876C17.9427 13.3001 18.4375 11.6688 18.4375 10C18.435 7.763 17.5453 5.61833 15.9635 4.03653C14.3817 2.45473 12.237 1.56498 10 1.5625ZM10 16.5625C8.70206 16.5625 7.43327 16.1776 6.35407 15.4565C5.27488 14.7354 4.43374 13.7105 3.93704 12.5114C3.44034 11.3122 3.31038 9.99272 3.5636 8.71972C3.81682 7.44672 4.44183 6.27739 5.35962 5.35961C6.2774 4.44183 7.44672 3.81681 8.71972 3.5636C9.99272 3.31038 11.3122 3.44034 12.5114 3.93704C13.7105 4.43374 14.7354 5.27487 15.4565 6.35407C16.1776 7.43327 16.5625 8.70206 16.5625 10C16.5606 11.7399 15.8686 13.408 14.6383 14.6383C13.408 15.8686 11.7399 16.5606 10 16.5625ZM14.0625 10C14.0625 10.2486 13.9637 10.4871 13.7879 10.6629C13.6121 10.8387 13.3736 10.9375 13.125 10.9375H10.9375V13.125C10.9375 13.3736 10.8387 13.6121 10.6629 13.7879C10.4871 13.9637 10.2486 14.0625 10 14.0625C9.75136 14.0625 9.51291 13.9637 9.33709 13.7879C9.16128 13.6121 9.0625 13.3736 9.0625 13.125V10.9375H6.875C6.62636 10.9375 6.38791 10.8387 6.21209 10.6629C6.03628 10.4871 5.9375 10.2486 5.9375 10C5.9375 9.75136 6.03628 9.5129 6.21209 9.33709C6.38791 9.16127 6.62636 9.0625 6.875 9.0625H9.0625V6.875C9.0625 6.62636 9.16128 6.3879 9.33709 6.21209C9.51291 6.03627 9.75136 5.9375 10 5.9375C10.2486 5.9375 10.4871 6.03627 10.6629 6.21209C10.8387 6.3879 10.9375 6.62636 10.9375 6.875V9.0625H13.125C13.3736 9.0625 13.6121 9.16127 13.7879 9.33709C13.9637 9.5129 14.0625 9.75136 14.0625 10Z" fill="currentColor"/></svg>
                        <span>Add More</span>
                    </button>
                     <button type="button" onClick={handleAddMemberCSV} className="d-inline-flex align-items-center gap-1 p-0 btn-blue-text border-0 bg-transparent">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.4344 5.34531L16.1844 2.84531C16.1324 2.74148 16.0526 2.65417 15.9538 2.59317C15.855 2.53218 15.7411 2.49992 15.625 2.5H4.375C4.25889 2.49992 4.14505 2.53218 4.04625 2.59317C3.94744 2.65417 3.86759 2.74148 3.81563 2.84531L2.56563 5.34531C2.52254 5.43226 2.50009 5.52797 2.5 5.625V16.25C2.5 16.5815 2.6317 16.8995 2.86612 17.1339C3.10054 17.3683 3.41848 17.5 3.75 17.5H16.25C16.5815 17.5 16.8995 17.3683 17.1339 17.1339C17.3683 16.8995 17.5 16.5815 17.5 16.25V5.625C17.4999 5.52797 17.4775 5.43226 17.4344 5.34531ZM4.76094 3.75H15.2391L15.8641 5H4.13594L4.76094 3.75ZM16.25 16.25H3.75V6.25H16.25V16.25ZM12.9422 11.4328C13.0003 11.4909 13.0464 11.5598 13.0779 11.6357C13.1093 11.7115 13.1255 11.7929 13.1255 11.875C13.1255 11.9571 13.1093 12.0385 13.0779 12.1143C13.0464 12.1902 13.0003 12.2591 12.9422 12.3172L10.4422 14.8172C10.3841 14.8753 10.3152 14.9214 10.2393 14.9529C10.1635 14.9843 10.0821 15.0005 10 15.0005C9.91787 15.0005 9.83654 14.9843 9.76066 14.9529C9.68479 14.9214 9.61586 14.8753 9.55781 14.8172L7.05781 12.3172C6.94054 12.1999 6.87465 12.0409 6.87465 11.875C6.87465 11.7091 6.94054 11.5501 7.05781 11.4328C7.17509 11.3155 7.33415 11.2497 7.5 11.2497C7.66585 11.2497 7.82491 11.3155 7.94219 11.4328L9.375 12.8664V8.125C9.375 7.95924 9.44085 7.80027 9.55806 7.68306C9.67527 7.56585 9.83424 7.5 10 7.5C10.1658 7.5 10.3247 7.56585 10.4419 7.68306C10.5592 7.80027 10.625 7.95924 10.625 8.125V12.8664L12.0578 11.4328C12.1159 11.3747 12.1848 11.3286 12.2607 11.2971C12.3365 11.2657 12.4179 11.2495 12.5 11.2495C12.5821 11.2495 12.6635 11.2657 12.7393 11.2971C12.8152 11.3286 12.8841 11.3747 12.9422 11.4328Z" fill="currentColor"/></svg>
                        <span>CSV Import</span>
                    </button>
                </div>
            </div> 
        </div>

        <div className="board-member-box">
            <div className="d-flex gap-3 align-items-center mb-3">
                <span className="fs-14">Software & Licenses Used</span>
                <hr className="flex-grow-1"></hr>
            </div>
             <div className="board-location-list mt-3">
                <div className="d-flex align-items-center gap-2 mb-2 flex-wrap card-member-box location-list-box justify-content-between">
                    <p className="name">Microsoft Office 365 <span className='d-block'>Valid up-to: 31-Dec-2026  |  License Type: Subscription</span></p>
                    <p className="type upload-btn">
                        <Link href='' className="d-flex text-nowrap gap-2 ">
                            <AttachmentIcon /> View Attachment
                        </Link>
                    </p>
                    <ul className="p-0 m-0 list-unstyled d-flex align-items-center gap-2">
                        <li>
                            <Link href="" className="edit-btn ui-icon icon-pencil">
                                <Pencil />  
                            </Link>
                        </li>
                        <li>
                            <Link href="" className="delete-btn ui-icon icon-delete">
                                <Delete />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="d-flex align-items-center gap-2 mb-2 flex-wrap card-member-box location-list-box justify-content-between">
                    <p className="name">Adobe Creative Cloud <span className='d-block'>Valid up-to: 31-Dec-2026  |  License Type: Annual License</span></p>
                    <p className="type upload-btn">
                        <Link href='' className="d-flex text-nowrap gap-2 ">
                            <AttachmentIcon /> View Attachment
                        </Link>
                    </p>
                    <ul className="p-0 m-0 list-unstyled d-flex align-items-center gap-2">
                        <li>
                            <Link href="" className="edit-btn ui-icon icon-pencil">
                                <Pencil />  
                            </Link>
                        </li>
                        <li>
                            <Link href="" className="delete-btn ui-icon icon-delete">
                                <Delete />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="d-flex align-items-center gap-2 mb-2 flex-wrap card-member-box location-list-box justify-content-between">
                    <p className="name">AutoCAD <span className='d-block'>Valid up-to: 31-Dec-2026  |  License Type: Perpetual License</span></p>
                    <p className="type upload-btn">
                        <Link href='' className="d-flex text-nowrap gap-2 ">
                            <AttachmentIcon /> View Attachment
                        </Link>
                    </p>
                    <ul className="p-0 m-0 list-unstyled d-flex align-items-center gap-2">
                        <li>
                            <Link href="" className="edit-btn ui-icon icon-pencil">
                                <Pencil />  
                            </Link>
                        </li>
                        <li>
                            <Link href="" className="delete-btn ui-icon icon-delete">
                                <Delete />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="d-flex align-items-center gap-2 mb-2 flex-wrap card-member-box location-list-box justify-content-between">
                    <p className="name">SAP ERP <span className='d-block'>Valid up-to: 31-Dec-2026  |  License Type: Enterprise License</span></p>
                    <p className="type upload-btn">
                        <Link href='' className="d-flex text-nowrap gap-2 ">
                            <AttachmentIcon /> View Attachment
                        </Link>
                    </p>
                    <ul className="p-0 m-0 list-unstyled d-flex align-items-center gap-2">
                        <li>
                            <Link href="" className="edit-btn ui-icon icon-pencil">
                                <Pencil />  
                            </Link>
                        </li>
                        <li>
                            <Link href="" className="delete-btn ui-icon icon-delete">
                                <Delete />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>      
            <div className="action-right">
                <div className="d-flex align-items-center gap-4 btn-default-box pt-3 pb-5">
                    <button type="button" onClick={handleAddSoftware} className="d-inline-flex align-items-center gap-1 p-0 btn-grey-text border-0 bg-transparent">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 1.5625C8.33122 1.5625 6.69992 2.05735 5.31238 2.98448C3.92484 3.9116 2.84338 5.22936 2.20477 6.77111C1.56616 8.31286 1.39907 10.0094 1.72463 11.6461C2.05019 13.2828 2.85379 14.7862 4.03379 15.9662C5.2138 17.1462 6.71721 17.9498 8.35393 18.2754C9.99064 18.6009 11.6871 18.4338 13.2289 17.7952C14.7706 17.1566 16.0884 16.0752 17.0155 14.6876C17.9427 13.3001 18.4375 11.6688 18.4375 10C18.435 7.763 17.5453 5.61833 15.9635 4.03653C14.3817 2.45473 12.237 1.56498 10 1.5625ZM10 16.5625C8.70206 16.5625 7.43327 16.1776 6.35407 15.4565C5.27488 14.7354 4.43374 13.7105 3.93704 12.5114C3.44034 11.3122 3.31038 9.99272 3.5636 8.71972C3.81682 7.44672 4.44183 6.27739 5.35962 5.35961C6.2774 4.44183 7.44672 3.81681 8.71972 3.5636C9.99272 3.31038 11.3122 3.44034 12.5114 3.93704C13.7105 4.43374 14.7354 5.27487 15.4565 6.35407C16.1776 7.43327 16.5625 8.70206 16.5625 10C16.5606 11.7399 15.8686 13.408 14.6383 14.6383C13.408 15.8686 11.7399 16.5606 10 16.5625ZM14.0625 10C14.0625 10.2486 13.9637 10.4871 13.7879 10.6629C13.6121 10.8387 13.3736 10.9375 13.125 10.9375H10.9375V13.125C10.9375 13.3736 10.8387 13.6121 10.6629 13.7879C10.4871 13.9637 10.2486 14.0625 10 14.0625C9.75136 14.0625 9.51291 13.9637 9.33709 13.7879C9.16128 13.6121 9.0625 13.3736 9.0625 13.125V10.9375H6.875C6.62636 10.9375 6.38791 10.8387 6.21209 10.6629C6.03628 10.4871 5.9375 10.2486 5.9375 10C5.9375 9.75136 6.03628 9.5129 6.21209 9.33709C6.38791 9.16127 6.62636 9.0625 6.875 9.0625H9.0625V6.875C9.0625 6.62636 9.16128 6.3879 9.33709 6.21209C9.51291 6.03627 9.75136 5.9375 10 5.9375C10.2486 5.9375 10.4871 6.03627 10.6629 6.21209C10.8387 6.3879 10.9375 6.62636 10.9375 6.875V9.0625H13.125C13.3736 9.0625 13.6121 9.16127 13.7879 9.33709C13.9637 9.5129 14.0625 9.75136 14.0625 10Z" fill="currentColor"/></svg>
                        <span>Add More</span>
                    </button>
                     <button type="button" onClick={handleAddMemberCSV} className="d-inline-flex align-items-center gap-1 p-0 btn-blue-text border-0 bg-transparent">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.4344 5.34531L16.1844 2.84531C16.1324 2.74148 16.0526 2.65417 15.9538 2.59317C15.855 2.53218 15.7411 2.49992 15.625 2.5H4.375C4.25889 2.49992 4.14505 2.53218 4.04625 2.59317C3.94744 2.65417 3.86759 2.74148 3.81563 2.84531L2.56563 5.34531C2.52254 5.43226 2.50009 5.52797 2.5 5.625V16.25C2.5 16.5815 2.6317 16.8995 2.86612 17.1339C3.10054 17.3683 3.41848 17.5 3.75 17.5H16.25C16.5815 17.5 16.8995 17.3683 17.1339 17.1339C17.3683 16.8995 17.5 16.5815 17.5 16.25V5.625C17.4999 5.52797 17.4775 5.43226 17.4344 5.34531ZM4.76094 3.75H15.2391L15.8641 5H4.13594L4.76094 3.75ZM16.25 16.25H3.75V6.25H16.25V16.25ZM12.9422 11.4328C13.0003 11.4909 13.0464 11.5598 13.0779 11.6357C13.1093 11.7115 13.1255 11.7929 13.1255 11.875C13.1255 11.9571 13.1093 12.0385 13.0779 12.1143C13.0464 12.1902 13.0003 12.2591 12.9422 12.3172L10.4422 14.8172C10.3841 14.8753 10.3152 14.9214 10.2393 14.9529C10.1635 14.9843 10.0821 15.0005 10 15.0005C9.91787 15.0005 9.83654 14.9843 9.76066 14.9529C9.68479 14.9214 9.61586 14.8753 9.55781 14.8172L7.05781 12.3172C6.94054 12.1999 6.87465 12.0409 6.87465 11.875C6.87465 11.7091 6.94054 11.5501 7.05781 11.4328C7.17509 11.3155 7.33415 11.2497 7.5 11.2497C7.66585 11.2497 7.82491 11.3155 7.94219 11.4328L9.375 12.8664V8.125C9.375 7.95924 9.44085 7.80027 9.55806 7.68306C9.67527 7.56585 9.83424 7.5 10 7.5C10.1658 7.5 10.3247 7.56585 10.4419 7.68306C10.5592 7.80027 10.625 7.95924 10.625 8.125V12.8664L12.0578 11.4328C12.1159 11.3747 12.1848 11.3286 12.2607 11.2971C12.3365 11.2657 12.4179 11.2495 12.5 11.2495C12.5821 11.2495 12.6635 11.2657 12.7393 11.2971C12.8152 11.3286 12.8841 11.3747 12.9422 11.4328Z" fill="currentColor"/></svg>
                        <span>CSV Import</span>
                    </button>
                </div>
            </div> 
        </div>

        <div className="multipal-select-sec mb-5 position-relative floting-box">
            <Form.Label>Technology Capabilities</Form.Label>
            <TagInput defaultValue={["EDI integration", "API integration", "Procurement system compatibility", "Digital document exchange"]}
                trigger={['Enter', 'Space', 'Comma']}
                placeholder="Core Activities"
                className="w-100 form-group"
            />
        </div>
    
        <AddAssetsModal show={showBranchSiteDetails} handleClose={handleCloseAll}/>
        <AddBoardMembersModalCSV show={showAddMemberCSV} handleClose={handleCloseAll} />
        <AddSoftwareLicensesModal show={showAddSoftware} handleClose={handleCloseAll} />
    </>

   )
}

export default EquipmentTechnologyTools