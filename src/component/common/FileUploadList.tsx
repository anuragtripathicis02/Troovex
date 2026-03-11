
"use client";
import { useRef, useState } from "react";

type Props = {
  title: string;
  required?: boolean;
};
export default function FileUploadList ({ title, required }: Props) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState("");

  const handleBrowse = () => {
    fileRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <div className="upload-row-list d-flex alifn-items-center justify-content-between flex-wrap gap-md-3 gap-2 w-100">
      <div className="upload-left d-flex align-items-center gap-2">
        <span className="file-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.0306 7.71938L14.7806 2.46938C14.7109 2.39975 14.6282 2.34454 14.5371 2.3069C14.4461 2.26926 14.3485 2.24992 14.25 2.25H5.25C4.85218 2.25 4.47064 2.40804 4.18934 2.68934C3.90804 2.97064 3.75 3.35218 3.75 3.75V20.25C3.75 20.6478 3.90804 21.0294 4.18934 21.3107C4.47064 21.592 4.85218 21.75 5.25 21.75H18.75C19.1478 21.75 19.5294 21.592 19.8107 21.3107C20.092 21.0294 20.25 20.6478 20.25 20.25V8.25C20.2501 8.15148 20.2307 8.05391 20.1931 7.96286C20.1555 7.87182 20.1003 7.78908 20.0306 7.71938ZM15 4.81031L17.6897 7.5H15V4.81031ZM18.75 20.25H5.25V3.75H13.5V8.25C13.5 8.44891 13.579 8.63968 13.7197 8.78033C13.8603 8.92098 14.0511 9 14.25 9H18.75V20.25ZM15.75 12.75C15.75 12.9489 15.671 13.1397 15.5303 13.2803C15.3897 13.421 15.1989 13.5 15 13.5H9C8.80109 13.5 8.61032 13.421 8.46967 13.2803C8.32902 13.1397 8.25 12.9489 8.25 12.75C8.25 12.5511 8.32902 12.3603 8.46967 12.2197C8.61032 12.079 8.80109 12 9 12H15C15.1989 12 15.3897 12.079 15.5303 12.2197C15.671 12.3603 15.75 12.5511 15.75 12.75ZM15.75 15.75C15.75 15.9489 15.671 16.1397 15.5303 16.2803C15.3897 16.421 15.1989 16.5 15 16.5H9C8.80109 16.5 8.61032 16.421 8.46967 16.2803C8.32902 16.1397 8.25 15.9489 8.25 15.75C8.25 15.5511 8.32902 15.3603 8.46967 15.2197C8.61032 15.079 8.80109 15 9 15H15C15.1989 15 15.3897 15.079 15.5303 15.2197C15.671 15.3603 15.75 15.5511 15.75 15.75Z" fill="#97979E"/></svg>
        </span>
        <span className="title">
          {fileName ? fileName : title}
        </span>
      </div>

      <div className="upload-right d-flex align-items-center gap-lg-5 gap-3">
        {required && <span className="required">*Required</span>}

        <button onClick={handleBrowse} className=" d-flex align-items-center gap-2 btn-outline btn-white">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.1406 8.64375C19.0246 8.48292 18.872 8.352 18.6954 8.2618C18.5188 8.1716 18.3233 8.12471 18.125 8.125H16.875V6.875C16.875 6.54348 16.7433 6.22554 16.5089 5.99112C16.2745 5.7567 15.9565 5.625 15.625 5.625H10.2086L8.04219 4C7.82545 3.83842 7.56252 3.75078 7.29219 3.75H3.125C2.79348 3.75 2.47554 3.8817 2.24112 4.11612C2.0067 4.35054 1.875 4.66848 1.875 5V16.25C1.875 16.4158 1.94085 16.5747 2.05806 16.6919C2.17527 16.8092 2.33424 16.875 2.5 16.875H16.4922C16.6234 16.875 16.7512 16.8337 16.8577 16.757C16.9641 16.6803 17.0437 16.5721 17.0852 16.4477L19.3109 9.77031C19.3735 9.58242 19.3907 9.38238 19.3611 9.18657C19.3315 8.99076 19.256 8.80474 19.1406 8.64375ZM7.29219 5L9.625 6.75C9.73318 6.83114 9.86477 6.875 10 6.875H15.625V8.125H5.45078C5.18842 8.12498 4.9327 8.20752 4.71985 8.36091C4.507 8.51431 4.34782 8.73079 4.26484 8.97969L3.125 12.3984V5H7.29219ZM16.0422 15.625H3.36719L5.45078 9.375H18.125L16.0422 15.625Z" fill="#343342"/></svg>
          <span>Browse</span>
        </button>

        <input
          type="file"
          ref={fileRef}
          onChange={handleChange}
          hidden
        />
      </div>
    </div>
  );
}
