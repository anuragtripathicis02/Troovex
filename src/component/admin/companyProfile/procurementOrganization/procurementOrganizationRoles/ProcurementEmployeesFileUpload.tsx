import FileUploadList from '@/component/common/FileUploadList'
import React from 'react'

const ProcurementEmployeesFileUpload = () => {
    return (
        <>
            <div className="list-card-box d-flex align-items-center gap-0 justify-content-between flex-wrap mb-4">
                <FileUploadList title="Articles of Association" required />
            </div>
            <div className='text-modal-bottom'>
                <p>
                    <i>Note : Employee File Mandatory Fields :Full Name, Position, Organizational Structure (Direction / Department / Service / Process), Email Address, Phone Number, Authorization Level (Viewer / Buyer / Approver / Signatory / Admin)</i>
                </p>
            </div>
        </>
    )
}

export default ProcurementEmployeesFileUpload
