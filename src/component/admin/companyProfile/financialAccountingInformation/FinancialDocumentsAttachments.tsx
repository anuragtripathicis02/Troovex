"use client";
import React from 'react'
import FileUploadItem from '@/component/common/FileUploadItem'

const FinancialDocumentsAttachments = () => {
    return (
        <div className='pt-2 pb-2'>
            <div className="upload-file-sec">
                <FileUploadItem title="Balance Sheet" required />
                <FileUploadItem title="Income Statement" />
                <FileUploadItem title="Cash Flow Statement" />
                <FileUploadItem title="Bank Account Confirmation Document" required />
                <FileUploadItem title="Tax Registration Certificate Upload" required />
            </div>
        </div>
    )
}

export default FinancialDocumentsAttachments