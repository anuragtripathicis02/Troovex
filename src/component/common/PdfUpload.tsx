"use client";
import { useState, useRef, ChangeEvent, useEffect, ReactNode } from "react";

type Props = {
  title: string;
  subtitle: string;
  type: "pdf" | "image" | "video";
  icon?: ReactNode;
};

export default function FileUpload({ title, subtitle, type, icon }: Props) {
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const [status, setStatus] = useState<"initial" | "uploading" | "uploaded">(
    "initial"
  );
  const [preview, setPreview] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const fileRef = useRef<HTMLInputElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const isPdf = file?.type === "application/pdf";
  const isImage = file?.type.startsWith("image/");
  const isVideo = file?.type.startsWith("video/");

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const openFileDialog = () => {
    if (fileRef.current) {
      fileRef.current.value = "";
      fileRef.current.click();
    }
  };

  const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    setMenuOpen(false);
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
    setStatus("uploading");

    let percent = 0;

    const interval = setInterval(() => {
      percent += 10;
      setProgress(percent);

      if (percent >= 100) {
        clearInterval(interval);
        setStatus("uploaded");
      }
    }, 300);
  };

  const handleDelete = () => {
    setFile(null);
    setPreview(null);
    setStatus("initial");
    setMenuOpen(false);
  };

  const handleEdit = () => {
    setMenuOpen(false);
    openFileDialog();
  };

  const getIcon = () => {
    if (icon) return icon;

    if (type === "pdf") return "PDF";
    if (type === "image") return "IMG";
    if (type === "video") return "VID";
  };

  const getAcceptType = () => {
    if (type === "pdf") return "application/pdf";
    if (type === "image") return "image/*";
    if (type === "video") return "video/*";
  };

  return (
    <div className="upload-wrapper">

      {/* INITIAL */}
      {status === "initial" && (
        <div className="upload-card">

          <div className="pdf-icon">
            {getIcon()}
          </div>

          <p className="title">{title}</p>

          {subtitle && (
            <p className="sub">{subtitle}</p>
          )}

          <button className="upload-btn" onClick={openFileDialog}>
            <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 9.37549V14.3755C17.5 14.707 17.3683 15.025 17.1339 15.2594C16.8995 15.4938 16.5815 15.6255 16.25 15.6255H1.25C0.918479 15.6255 0.600537 15.4938 0.366116 15.2594C0.131696 15.025 0 14.707 0 14.3755V9.37549C0 9.04397 0.131696 8.72603 0.366116 8.49161C0.600537 8.25719 0.918479 8.12549 1.25 8.12549H5C5.16576 8.12549 5.32473 8.19134 5.44194 8.30855C5.55915 8.42576 5.625 8.58473 5.625 8.75049C5.625 8.91625 5.55915 9.07522 5.44194 9.19243C5.32473 9.30964 5.16576 9.37549 5 9.37549H1.25V14.3755H16.25V9.37549H12.5C12.3342 9.37549 12.1753 9.30964 12.0581 9.19243C11.9408 9.07522 11.875 8.91625 11.875 8.75049C11.875 8.58473 11.9408 8.42576 12.0581 8.30855C12.1753 8.19134 12.3342 8.12549 12.5 8.12549H16.25C16.5815 8.12549 16.8995 8.25719 17.1339 8.49161C17.3683 8.72603 17.5 9.04397 17.5 9.37549ZM5.44219 4.81768L8.125 2.13409V8.75049C8.125 8.91625 8.19085 9.07522 8.30806 9.19243C8.42527 9.30964 8.58424 9.37549 8.75 9.37549C8.91576 9.37549 9.07473 9.30964 9.19194 9.19243C9.30915 9.07522 9.375 8.91625 9.375 8.75049V2.13409L12.0578 4.81768C12.1751 4.93495 12.3341 5.00084 12.5 5.00084C12.6659 5.00084 12.8249 4.93495 12.9422 4.81768C13.0595 4.7004 13.1253 4.54134 13.1253 4.37549C13.1253 4.20964 13.0595 4.05058 12.9422 3.9333L9.19219 0.183304C9.13414 0.125194 9.06521 0.0790945 8.98934 0.0476418C8.91346 0.0161891 8.83213 0 8.75 0C8.66787 0 8.58654 0.0161891 8.51066 0.0476418C8.43479 0.0790945 8.36586 0.125194 8.30781 0.183304L4.55781 3.9333C4.44054 4.05058 4.37465 4.20964 4.37465 4.37549C4.37465 4.54134 4.44054 4.7004 4.55781 4.81768C4.67509 4.93495 4.83415 5.00084 5 5.00084C5.16585 5.00084 5.32491 4.93495 5.44219 4.81768ZM14.375 11.8755C14.375 11.6901 14.32 11.5088 14.217 11.3546C14.114 11.2005 13.9676 11.0803 13.7963 11.0094C13.625 10.9384 13.4365 10.9198 13.2546 10.956C13.0727 10.9922 12.9057 11.0815 12.7746 11.2126C12.6435 11.3437 12.5542 11.5107 12.518 11.6926C12.4818 11.8745 12.5004 12.063 12.5714 12.2343C12.6423 12.4056 12.7625 12.552 12.9167 12.655C13.0708 12.758 13.2521 12.813 13.4375 12.813C13.6861 12.813 13.9246 12.7142 14.1004 12.5384C14.2762 12.3626 14.375 12.1241 14.375 11.8755Z" fill="#696873"/></svg>
            Upload File
          </button>

        </div>
      )}

      {/* UPLOADING */}
      {status === "uploading" && file && (
        <div className="upload-card">

          <div className="pdf-icon">
            {getIcon()}
          </div>

          <p className="file-name">{file.name}</p>

          <div className="progress-bar">
            <div
              className="progress"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="progress-text">
            Uploading... {progress}%
          </p>

        </div>
      )}

      {/* UPLOADED */}
      {status === "uploaded" && file && (
        <div className="upload-card preview-card">

          {preview && (
            <>
              {isPdf && (
                <iframe
                  src={preview}
                  width="100%"
                  height="140"
                  style={{
                    border: "none",
                    borderRadius: "10px",
                    marginBottom: "10px",
                  }}
                />
              )}

              {isImage && (
                <img
                  src={preview}
                  width="100%"
                  height="140"
                  style={{
                    objectFit: "cover",
                    borderRadius: "10px",
                    marginBottom: "10px",
                  }}
                />
              )}

              {isVideo && (
                <video
                  src={preview}
                  width="100%"
                  height="140"
                  controls
                  style={{
                    borderRadius: "10px",
                    marginBottom: "10px",
                  }}
                />
              )}
            </>
          )}

          <div className="uploaded">

            <div className="pdf-icon small">
              {getIcon()}
            </div>

            <div className="file-info">
              <p className="file-name text-start">{file.name}</p>
              <p className="file-size text-start">
                {(file.size / 1024).toFixed(0)} KB
              </p>
            </div>

            <div className="menu-wrapper" ref={menuRef}>

              <button
                className="menu"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                ⋮
              </button>

              {menuOpen && (
                <div className="dropdown-menu">

                  <button onClick={handleEdit}>
                    Replace document
                  </button>

                  <button
                    onClick={handleDelete}
                    className="delete"
                  >
                    Remove document
                  </button>

                </div>
              )}

            </div>

          </div>

        </div>
      )}

      <input
        type="file"
        accept={getAcceptType()}
        ref={fileRef}
        hidden
        onChange={handleUpload}
      />

    </div>
  );
}