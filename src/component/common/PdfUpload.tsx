"use client";
import { useState, useRef, ChangeEvent, useEffect } from "react";

type Props = {
  title: string;
};

export default function PdfUpload({ title }: Props) {
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const [status, setStatus] = useState<"initial" | "uploading" | "uploaded">(
    "initial"
  );
  const [preview, setPreview] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const fileRef = useRef<HTMLInputElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // CLOSE DROPDOWN ON OUTSIDE CLICK
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
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

  return (
    <div className="upload-wrapper">

      {/* INITIAL STATE */}
      {status === "initial" && (
        <div className="upload-card">
<span className="b-block"> <svg width="40" height="40" viewBox="0 0 40 40" fill="none"> <path d="M35 23.75C35 24.0815 34.8683 24.3995 34.6339 24.6339C34.3995 24.8683 34.0815 25 33.75 25H30V27.5H32.5C32.8315 27.5 33.1495 27.6317 33.3839 27.8661C33.6183 28.1005 33.75 28.4185 33.75 28.75C33.75 29.0815 33.6183 29.3995 33.3839 29.6339C33.1495 29.8683 32.8315 30 32.5 30H30V32.5C30 32.8315 29.8683 33.1495 29.6339 33.3839C29.3995 33.6183 29.0815 33.75 28.75 33.75C28.4185 33.75 28.1005 33.6183 27.8661 33.3839C27.6317 33.1495 27.5 32.8315 27.5 32.5V23.75C27.5 23.4185 27.6317 23.1005 27.8661 22.8661C28.1005 22.6317 28.4185 22.5 28.75 22.5H33.75C34.0815 22.5 34.3995 22.6317 34.6339 22.8661C34.8683 23.1005 35 23.4185 35 23.75ZM14.375 26.875C14.375 28.0353 13.9141 29.1481 13.0936 29.9686C12.2731 30.7891 11.1603 31.25 10 31.25H8.75V32.5C8.75 32.8315 8.6183 33.1495 8.38388 33.3839C8.14946 33.6183 7.83152 33.75 7.5 33.75C7.16848 33.75 6.85054 33.6183 6.61612 33.3839C6.3817 33.1495 6.25 32.8315 6.25 32.5V23.75C6.25 23.4185 6.3817 23.1005 6.61612 22.8661C6.85054 22.6317 7.16848 22.5 7.5 22.5H10C11.1603 22.5 12.2731 22.9609 13.0936 23.7814C13.9141 24.6019 14.375 25.7147 14.375 26.875ZM11.875 26.875C11.875 26.3777 11.6775 25.9008 11.3258 25.5492C10.9742 25.1975 10.4973 25 10 25H8.75V28.75H10C10.4973 28.75 10.9742 28.5525 11.3258 28.2008C11.6775 27.8492 11.875 27.3723 11.875 26.875ZM25.625 28.125C25.625 29.6168 25.0324 31.0476 23.9775 32.1025C22.9226 33.1574 21.4918 33.75 20 33.75H17.5C17.1685 33.75 16.8505 33.6183 16.6161 33.3839C16.3817 33.1495 16.25 32.8315 16.25 32.5V23.75C16.25 23.4185 16.3817 23.1005 16.6161 22.8661C16.8505 22.6317 17.1685 22.5 17.5 22.5H20C21.4918 22.5 22.9226 23.0926 23.9775 24.1475C25.0324 25.2024 25.625 26.6332 25.625 28.125ZM23.125 28.125C23.125 27.2962 22.7958 26.5013 22.2097 25.9153C21.6237 25.3292 20.8288 25 20 25H18.75V31.25H20C20.8288 31.25 21.6237 30.9208 22.2097 30.3347C22.7958 29.7487 23.125 28.9538 23.125 28.125ZM6.25 17.5V6.25C6.25 5.58696 6.51339 4.95107 6.98223 4.48223C7.45107 4.01339 8.08696 3.75 8.75 3.75H23.75C23.9142 3.74987 24.0768 3.78209 24.2286 3.84483C24.3803 3.90756 24.5182 3.99958 24.6344 4.11563L33.3844 12.8656C33.5004 12.9818 33.5924 13.1197 33.6552 13.2714C33.7179 13.4232 33.7501 13.5858 33.75 13.75V17.5C33.75 17.8315 33.6183 18.1495 33.3839 18.3839C33.1495 18.6183 32.8315 18.75 32.5 18.75C32.1685 18.75 31.8505 18.6183 31.6161 18.3839C31.3817 18.1495 31.25 17.8315 31.25 17.5V15H23.75C23.4185 15 23.1005 14.8683 22.8661 14.6339C22.6317 14.3995 22.5 14.0815 22.5 13.75V6.25H8.75V17.5C8.75 17.8315 8.6183 18.1495 8.38388 18.3839C8.14946 18.6183 7.83152 18.75 7.5 18.75C7.16848 18.75 6.85054 18.6183 6.61612 18.3839C6.3817 18.1495 6.25 17.8315 6.25 17.5ZM25 12.5H29.4828L25 8.01719V12.5Z" fill="currentColor"/> </svg> </span>
          <p className="title">{title}</p>
          <p className="sub">PDF File | Max Size 2MB</p>

          <button className="upload-btn" onClick={openFileDialog}> <svg width="20" height="20" viewBox="0 0 20 20" fill="none"> <path d="M18.75 10.625V15.625C18.75 15.9565 18.6183 16.2745 18.3839 16.5089C18.1495 16.7433 17.8315 16.875 17.5 16.875H2.5C2.16848 16.875 1.85054 16.7433 1.61612 16.5089C1.3817 16.2745 1.25 15.9565 1.25 15.625V10.625C1.25 10.2935 1.3817 9.97554 1.61612 9.74112C1.85054 9.5067 2.16848 9.375 2.5 9.375H6.25C6.41576 9.375 6.57473 9.44085 6.69194 9.55806C6.80915 9.67527 6.875 9.83424 6.875 10C6.875 10.1658 6.80915 10.3247 6.69194 10.4419C6.57473 10.5592 6.41576 10.625 6.25 10.625H2.5V15.625H17.5V10.625H13.75C13.5842 10.625 13.4253 10.5592 13.3081 10.4419C13.1908 10.3247 13.125 10.1658 13.125 10C13.125 9.83424 13.1908 9.67527 13.3081 9.55806C13.4253 9.44085 13.5842 9.375 13.75 9.375H17.5C17.8315 9.375 18.1495 9.5067 18.3839 9.74112C18.6183 9.97554 18.75 10.2935 18.75 10.625ZM6.69219 6.06719L9.375 3.3836V10C9.375 10.1658 9.44085 10.3247 9.55806 10.4419C9.67527 10.5592 9.83424 10.625 10 10.625C10.1658 10.625 10.3247 10.5592 10.4419 10.4419C10.5592 10.3247 10.625 10.1658 10.625 10V3.3836L13.3078 6.06719C13.4251 6.18447 13.5841 6.25035 13.75 6.25035C13.9159 6.25035 14.0749 6.18447 14.1922 6.06719C14.3095 5.94992 14.3753 5.79086 14.3753 5.625C14.3753 5.45915 14.3095 5.30009 14.1922 5.18282L10.4422 1.43282C10.3841 1.37471 10.3152 1.32861 10.2393 1.29715C10.1635 1.2657 10.0821 1.24951 10 1.24951C9.91787 1.24951 9.83654 1.2657 9.76066 1.29715C9.68479 1.32861 9.61586 1.37471 9.55781 1.43282L5.80781 5.18282C5.69054 5.30009 5.62465 5.45915 5.62465 5.625C5.62465 5.79086 5.69054 5.94992 5.80781 6.06719C5.92509 6.18447 6.08415 6.25035 6.25 6.25035C6.41585 6.25035 6.57491 6.18447 6.69219 6.06719ZM15.625 13.125C15.625 12.9396 15.57 12.7583 15.467 12.6042C15.364 12.45 15.2176 12.3298 15.0463 12.2589C14.875 12.1879 14.6865 12.1693 14.5046 12.2055C14.3227 12.2417 14.1557 12.331 14.0246 12.4621C13.8935 12.5932 13.8042 12.7602 13.768 12.9421C13.7318 13.124 13.7504 13.3125 13.8214 13.4838C13.8923 13.6551 14.0125 13.8015 14.1667 13.9045C14.3208 14.0075 14.5021 14.0625 14.6875 14.0625C14.9361 14.0625 15.1746 13.9637 15.3504 13.7879C15.5262 13.6121 15.625 13.3736 15.625 13.125Z" fill="currentColor"/> </svg> Upload File </button>

        </div>
      )}

      {/* UPLOADING */}
      {status === "uploading" && file && (
        <div className="upload-card">

          <div className="pdf-icon">PDF</div>

          <p className="file-name">{file.name}</p>

          <div className="progress-bar">
            <div
              className="progress"
              style={{ width: `${progress}%` }}
            ></div>
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

          <div className="uploaded">

            <div className="pdf-icon small">PDF</div>

            <div className="file-info">
              <p className="file-name text-start">{file.name}</p>
              <p className="file-size text-start">
                {(file.size / 1024).toFixed(0)} KB
              </p>
            </div>

            {/* MENU */}
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

      {/* FILE INPUT */}
      <input
        type="file"
        accept="application/pdf"
        ref={fileRef}
        hidden
        onChange={handleUpload}
      />

    </div>
  );
}