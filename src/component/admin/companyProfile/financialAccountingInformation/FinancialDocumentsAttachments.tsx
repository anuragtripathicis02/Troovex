"use client";
import React from 'react'
import FileUploadItem from '@/component/common/FileUploadItem'

const FinancialDocumentsAttachments = () => {
    return (
        <div>
            <div className="p-3">
                <h5>Financial Documents & Attachments</h5>

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