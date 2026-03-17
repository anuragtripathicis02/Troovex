"use client";
import { useState, useRef, useEffect } from "react";
import { Dropdown, ProgressBar } from "react-bootstrap";

type Props = {
  title: string;
  required?: boolean;
};

export default function FileUploadItem({ title, required }: Props) {
  const [file, setFile] = useState<any>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const intervalRef = useRef<any>(null);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    if (intervalRef.current) clearInterval(intervalRef.current);

    let progress = 0;
    const isPDF = selectedFile.type === "application/pdf";

    setFile({
      name: selectedFile.name,
      size: (selectedFile.size / 1024).toFixed(0) + " KB",
      status: "uploading",
      progress: 0,
      isValid: isPDF,
    });

    intervalRef.current = setInterval(() => {
  progress += 5; // smoother

  setFile((prev: any) => ({
    ...prev,
    progress,
    status:
      progress >= 100
        ? prev.isValid
          ? "done"
          : "error"
        : "uploading",
  }));

  if (progress >= 100) clearInterval(intervalRef.current);
}, 200); // faster update
  };

  const triggerUpload = () => fileInputRef.current?.click();

  const handleRemove = () => {
    setFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="upload-container">

      {/* LEFT */}
      <div className="left-section">

        <div className="icon-box">
            {file ? (
                <span className="upload-icons">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 14.25C21 14.4489 20.921 14.6397 20.7803 14.7803C20.6397 14.921 20.4489 15 20.25 15H18V16.5H19.5C19.6989 16.5 19.8897 16.579 20.0303 16.7197C20.171 16.8603 20.25 17.0511 20.25 17.25C20.25 17.4489 20.171 17.6397 20.0303 17.7803C19.8897 17.921 19.6989 18 19.5 18H18V19.5C18 19.6989 17.921 19.8897 17.7803 20.0303C17.6397 20.171 17.4489 20.25 17.25 20.25C17.0511 20.25 16.8603 20.171 16.7197 20.0303C16.579 19.8897 16.5 19.6989 16.5 19.5V14.25C16.5 14.0511 16.579 13.8603 16.7197 13.7197C16.8603 13.579 17.0511 13.5 17.25 13.5H20.25C20.4489 13.5 20.6397 13.579 20.7803 13.7197C20.921 13.8603 21 14.0511 21 14.25ZM8.625 16.125C8.625 16.8212 8.34844 17.4889 7.85616 17.9812C7.36387 18.4734 6.69619 18.75 6 18.75H5.25V19.5C5.25 19.6989 5.17098 19.8897 5.03033 20.0303C4.88968 20.171 4.69891 20.25 4.5 20.25C4.30109 20.25 4.11032 20.171 3.96967 20.0303C3.82902 19.8897 3.75 19.6989 3.75 19.5V14.25C3.75 14.0511 3.82902 13.8603 3.96967 13.7197C4.11032 13.579 4.30109 13.5 4.5 13.5H6C6.69619 13.5 7.36387 13.7766 7.85616 14.2688C8.34844 14.7611 8.625 15.4288 8.625 16.125ZM7.125 16.125C7.125 15.8266 7.00647 15.5405 6.7955 15.3295C6.58452 15.1185 6.29837 15 6 15H5.25V17.25H6C6.29837 17.25 6.58452 17.1315 6.7955 16.9205C7.00647 16.7095 7.125 16.4234 7.125 16.125ZM15.375 16.875C15.375 17.7701 15.0194 18.6285 14.3865 19.2615C13.7535 19.8944 12.8951 20.25 12 20.25H10.5C10.3011 20.25 10.1103 20.171 9.96967 20.0303C9.82902 19.8897 9.75 19.6989 9.75 19.5V14.25C9.75 14.0511 9.82902 13.8603 9.96967 13.7197C10.1103 13.579 10.3011 13.5 10.5 13.5H12C12.8951 13.5 13.7535 13.8556 14.3865 14.4885C15.0194 15.1215 15.375 15.9799 15.375 16.875ZM13.875 16.875C13.875 16.3777 13.6775 15.9008 13.3258 15.5492C12.9742 15.1975 12.4973 15 12 15H11.25V18.75H12C12.4973 18.75 12.9742 18.5525 13.3258 18.2008C13.6775 17.8492 13.875 17.3723 13.875 16.875ZM3.75 10.5V3.75C3.75 3.35218 3.90804 2.97064 4.18934 2.68934C4.47064 2.40804 4.85218 2.25 5.25 2.25H14.25C14.3485 2.24992 14.4461 2.26926 14.5371 2.3069C14.6282 2.34454 14.7109 2.39975 14.7806 2.46938L20.0306 7.71938C20.1003 7.78908 20.1555 7.87182 20.1931 7.96286C20.2307 8.05391 20.2501 8.15148 20.25 8.25V10.5C20.25 10.6989 20.171 10.8897 20.0303 11.0303C19.8897 11.171 19.6989 11.25 19.5 11.25C19.3011 11.25 19.1103 11.171 18.9697 11.0303C18.829 10.8897 18.75 10.6989 18.75 10.5V9H14.25C14.0511 9 13.8603 8.92098 13.7197 8.78033C13.579 8.63968 13.5 8.44891 13.5 8.25V3.75H5.25V10.5C5.25 10.6989 5.17098 10.8897 5.03033 11.0303C4.88968 11.171 4.69891 11.25 4.5 11.25C4.30109 11.25 4.11032 11.171 3.96967 11.0303C3.82902 10.8897 3.75 10.6989 3.75 10.5ZM15 7.5H17.6897L15 4.81031V7.5Z" fill="white"/></svg>
                </span>
            ) : (
                <span className="default-icons">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.0306 7.71938L14.7806 2.46938C14.7109 2.39975 14.6282 2.34454 14.5371 2.3069C14.4461 2.26926 14.3485 2.24992 14.25 2.25H5.25C4.85218 2.25 4.47064 2.40804 4.18934 2.68934C3.90804 2.97064 3.75 3.35218 3.75 3.75V20.25C3.75 20.6478 3.90804 21.0294 4.18934 21.3107C4.47064 21.592 4.85218 21.75 5.25 21.75H18.75C19.1478 21.75 19.5294 21.592 19.8107 21.3107C20.092 21.0294 20.25 20.6478 20.25 20.25V8.25C20.2501 8.15148 20.2307 8.05391 20.1931 7.96286C20.1555 7.87182 20.1003 7.78908 20.0306 7.71938ZM15 4.81031L17.6897 7.5H15V4.81031ZM18.75 20.25H5.25V3.75H13.5V8.25C13.5 8.44891 13.579 8.63968 13.7197 8.78033C13.8603 8.92098 14.0511 9 14.25 9H18.75V20.25ZM15.75 12.75C15.75 12.9489 15.671 13.1397 15.5303 13.2803C15.3897 13.421 15.1989 13.5 15 13.5H9C8.80109 13.5 8.61032 13.421 8.46967 13.2803C8.32902 13.1397 8.25 12.9489 8.25 12.75C8.25 12.5511 8.32902 12.3603 8.46967 12.2197C8.61032 12.079 8.80109 12 9 12H15C15.1989 12 15.3897 12.079 15.5303 12.2197C15.671 12.3603 15.75 12.5511 15.75 12.75ZM15.75 15.75C15.75 15.9489 15.671 16.1397 15.5303 16.2803C15.3897 16.421 15.1989 16.5 15 16.5H9C8.80109 16.5 8.61032 16.421 8.46967 16.2803C8.32902 16.1397 8.25 15.9489 8.25 15.75C8.25 15.5511 8.32902 15.3603 8.46967 15.2197C8.61032 15.079 8.80109 15 9 15H15C15.1989 15 15.3897 15.079 15.5303 15.2197C15.671 15.3603 15.75 15.5511 15.75 15.75Z" fill="#97979E"/></svg>
                </span>
            )}
        </div>

        <div className="file-details">
          <div className="title">{title}</div>

          {required && !file && (
            <div className="required">*Required</div>
          )}

          {file && (
            <>
              <div className="file-name">{file.name}</div>
              <div className="file-sub">{file.name}</div>
            </>
          )}
        </div>
      </div>

      {/* MIDDLE */}
      <div className="middle-section">

        {file && <div className="file-size">{file.size}</div>}

        {file?.status === "uploading" && (
          <div className="progress-wrapper">
           <ProgressBar now={file.progress} animated striped style={{ height: "6px", borderRadius: "10px" }}/>
            <div className="uploading-text">
              Uploading... {file.progress}%
            </div>
          </div>
        )}

        {file?.status === "done" && (
          <div className="success-text">✔ Uploaded</div>
        )}

        {file?.status === "error" && (
          <div className="error-text">❌ Upload Failed</div>
        )}
      </div>

      {/* RIGHT */}
      <div className="right-section">

        <input
          type="file"
          hidden
          ref={fileInputRef}
          onChange={handleUpload}
        />

        {!file && (
          <button className="browse-btn" onClick={triggerUpload}>
            Browse File
          </button>
        )}

        {file?.status === "uploading" && (
          <button className="cancel-btn" onClick={handleRemove}>
            Cancel
          </button>
        )}

        {file?.status === "error" && (
          <button className="retry-btn" onClick={triggerUpload}>
            Retry
          </button>
        )}

        {file?.status === "done" && (
          <Dropdown align="end">
            <Dropdown.Toggle className="menu-btn">
              ⋮
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={triggerUpload}>
                Re-upload
              </Dropdown.Item>
              <Dropdown.Item
                onClick={handleRemove}
                className="text-danger"
              >
                Remove
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        )}
      </div>
    </div>
  );
}