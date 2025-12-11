"use client";
import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Link } from "rsuite";
import CreateTenderOne from "./CreateTenderOne";

interface TabTitleProps {
  number: string | number;
  title: string;
  sub: string;
  status: string | null;
}

const TabTitle = ({ number, title, sub, status }: TabTitleProps) => (
  <div className={`tab-custom-title d-flex align-items-start gap-2 ${ status === "completed" ? "completed" : status === "pending" ? "pending" : "" }`}>
    <span className="tab-number">{number}</span>
    <div className="text-box-btn">
      <span className="main-title w-100">{title}</span>
      <small className="sub-title w-100">{sub}</small>
       {status && (
        <span
          className={`step-status d-block ${
            status === "completed" ? "text-success" : "text-warning"
          }`}
        >
          {status === "completed" ? "Completed" : "Pending"}
        </span>
      )}
    </div>
    <span className="line-border"></span>
  </div>
);

type StatusType = "completed" | "pending" | null;

interface TabStatus {
  First: StatusType;
  second: StatusType;
  third: StatusType;
  fourth: StatusType;
  fifth: StatusType;
  sixth: StatusType;
}

const CreatingTenderTabs = () => {
  const [activeKey, setActiveKey] = useState<string>("First");

  const [status, setStatus] = useState<TabStatus>({
    First: null,
    second: null,
    third: null,
    fourth: null,
    fifth: null,
    sixth: null,
  });

  const goNext = (current: string, next: string) => {
    setStatus((prev) => ({ ...prev, [current as keyof TabStatus]: "completed" }));
    setActiveKey(next);
  };

  const skipNext = (current: string, next: string) => {
    setStatus((prev) => ({ ...prev, [current as keyof TabStatus]: "pending" }));
    setActiveKey(next);
  };

  const handleTabClick = (key: string | null) => {
    const order: (keyof TabStatus)[] = ["First", "second", "third", "fourth", "fifth", "sixth"];
    const clickedIndex = order.indexOf(key as keyof TabStatus);

    setStatus((prev) => {
      const updated = { ...prev };
      order.forEach((item, idx) => {
        if (idx >= clickedIndex) updated[item] = null;
      });
      return updated;
    });

    if (key) setActiveKey(key);
  };

  const totalSteps = 6;
  const completedSteps = Object.values(status).filter(
    (s) => s === "completed" || s === "pending"
  ).length;
  const progress = Math.round((completedSteps / totalSteps) * 100);

  const handleConfirm = () => {
    setStatus({ First: "completed", second: "completed", third: "completed", fourth: "completed", fifth: "completed", sixth: "completed" });
  };

  return (
    <div className="tabs-com-box position-relative d-flex flex-wrap">
      <div className="progress-wrapper d-flex align-items-center gap-3">
        <div className="circle-progress position-relative">
            <svg width="60" height="60"> <circle cx="30" cy="30" r="26" stroke="#eee" strokeWidth="6" fill="none"/> <circle cx="30" cy="30" r="26" stroke="#f9a825" strokeWidth="6" fill="none" strokeDasharray={2 * Math.PI * 26}strokeDashoffset={2 * Math.PI * 26 - (progress / 100) * (2 * Math.PI * 26)} strokeLinecap="round" style={{ transition: "0.4s ease" }}/>
          </svg>
          <span className="circle-text position-absolute top-50 start-50 translate-middle" style={{ fontSize: "0.8rem", fontWeight: "bold" }}>
            {progress}%
          </span>
        </div>
        <div className="text-cer-box">
          <h5 className="m-0">Creating Tender</h5>
          <small className="text-muted">Progress Tracker</small>
        </div>
      </div>

      <Tabs activeKey={activeKey} onSelect={handleTabClick} className="tabs-main-box">
        <Tab eventKey="First" title={<TabTitle number="1" title="Required Information" sub="Provide basic details to create the tender." status={status.First}/>}>
          <div className="tabs-content-box">
             <CreateTenderOne />
          </div>
          <div className="btn-tabs-box d-flex align-items-center gap-2 justify-content-between w-100 mt-56">
            <div className="left-btn-box d-flex align-items-center gap-2">
              <Link href="" className="btn-outline fill-light-purple">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.9213 3.41438L16.4213 0.414375C16.3589 0.28977 16.2631 0.184999 16.1445 0.111808C16.0259 0.0386169 15.8893 -9.95628e-05 15.75 1.92282e-07H2.25C2.11067 -9.95628e-05 1.97406 0.0386169 1.8555 0.111808C1.73693 0.184999 1.6411 0.28977 1.57875 0.414375L0.07875 3.41438C0.0270533 3.51871 0.000105455 3.63356 0 3.75V16.5C0 16.8978 0.158035 17.2794 0.43934 17.5607C0.720644 17.842 1.10218 18 1.5 18H16.5C16.8978 18 17.2794 17.842 17.5607 17.5607C17.842 17.2794 18 16.8978 18 16.5V3.75C17.9999 3.63356 17.9729 3.51871 17.9213 3.41438ZM2.71312 1.5H15.2869L16.0369 3H1.96312L2.71312 1.5ZM16.5 16.5H1.5V4.5H16.5V16.5ZM12.5306 10.7194C12.6004 10.789 12.6557 10.8717 12.6934 10.9628C12.7312 11.0538 12.7506 11.1514 12.7506 11.25C12.7506 11.3486 12.7312 11.4462 12.6934 11.5372C12.6557 11.6283 12.6004 11.711 12.5306 11.7806L9.53063 14.7806C9.46097 14.8504 9.37825 14.9057 9.28721 14.9434C9.19616 14.9812 9.09856 15.0006 9 15.0006C8.90144 15.0006 8.80384 14.9812 8.71279 14.9434C8.62175 14.9057 8.53903 14.8504 8.46937 14.7806L5.46937 11.7806C5.32864 11.6399 5.24958 11.449 5.24958 11.25C5.24958 11.051 5.32864 10.8601 5.46937 10.7194C5.61011 10.5786 5.80098 10.4996 6 10.4996C6.19902 10.4996 6.38989 10.5786 6.53063 10.7194L8.25 12.4397V6.75C8.25 6.55109 8.32902 6.36032 8.46967 6.21967C8.61032 6.07902 8.80109 6 9 6C9.19891 6 9.38968 6.07902 9.53033 6.21967C9.67098 6.36032 9.75 6.55109 9.75 6.75V12.4397L11.4694 10.7194C11.539 10.6496 11.6217 10.5943 11.7128 10.5566C11.8038 10.5188 11.9014 10.4994 12 10.4994C12.0986 10.4994 12.1962 10.5188 12.2872 10.5566C12.3783 10.5943 12.461 10.6496 12.5306 10.7194Z" fill="currentColor"/></svg>
              </Link>
              <button className="btn-outline fill-btn d-flex align-items-center gap-1" onClick={() => goNext("First", "second")}> 
                <span>Save & Next</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2959 12.7959L9.79593 20.2959C9.58458 20.5072 9.29794 20.626 8.99905 20.626C8.70017 20.626 8.41352 20.5072 8.20218 20.2959C7.99083 20.0846 7.8721 19.7979 7.8721 19.499C7.8721 19.2001 7.99083 18.9135 8.20218 18.7021L14.9062 12L8.20405 5.2959C8.09941 5.19125 8.01639 5.06702 7.95976 4.93029C7.90313 4.79356 7.87398 4.64702 7.87398 4.49902C7.87398 4.35103 7.90313 4.20448 7.95976 4.06776C8.01639 3.93103 8.09941 3.80679 8.20405 3.70215C8.3087 3.5975 8.43293 3.51449 8.56966 3.45785C8.70639 3.40122 8.85293 3.37207 9.00093 3.37207C9.14892 3.37207 9.29546 3.40122 9.43219 3.45785C9.56892 3.51449 9.69316 3.5975 9.7978 3.70215L17.2978 11.2021C17.4026 11.3068 17.4856 11.4311 17.5422 11.5679C17.5989 11.7047 17.6279 11.8513 17.6278 11.9994C17.6276 12.1475 17.5982 12.2941 17.5412 12.4307C17.4843 12.5674 17.4009 12.6915 17.2959 12.7959Z" fill="currentColor"/></svg>
              </button>
            </div>
            <div className="right-btn-box">
              <button className="btn-outline bg-transparent border-0 text-grey" onClick={() => skipNext("First", "second")}> Skip for Now </button>
            </div>
          </div>
        </Tab>

        <Tab eventKey="second" title={<TabTitle number="2" title="Financial Timeline" sub="Tell us about the timeline, duration or deadline of project." status={status.second}/>}>
          <div className="tabs-content-box">
              tabs details 2
          </div>
          <div className="btn-tabs-box d-flex align-items-center gap-2 justify-content-between w-100 mt-56">
            <div className="left-btn-box d-flex align-items-center gap-2">
              <Link href="" className="btn-outline fill-light-purple">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.9213 3.41438L16.4213 0.414375C16.3589 0.28977 16.2631 0.184999 16.1445 0.111808C16.0259 0.0386169 15.8893 -9.95628e-05 15.75 1.92282e-07H2.25C2.11067 -9.95628e-05 1.97406 0.0386169 1.8555 0.111808C1.73693 0.184999 1.6411 0.28977 1.57875 0.414375L0.07875 3.41438C0.0270533 3.51871 0.000105455 3.63356 0 3.75V16.5C0 16.8978 0.158035 17.2794 0.43934 17.5607C0.720644 17.842 1.10218 18 1.5 18H16.5C16.8978 18 17.2794 17.842 17.5607 17.5607C17.842 17.2794 18 16.8978 18 16.5V3.75C17.9999 3.63356 17.9729 3.51871 17.9213 3.41438ZM2.71312 1.5H15.2869L16.0369 3H1.96312L2.71312 1.5ZM16.5 16.5H1.5V4.5H16.5V16.5ZM12.5306 10.7194C12.6004 10.789 12.6557 10.8717 12.6934 10.9628C12.7312 11.0538 12.7506 11.1514 12.7506 11.25C12.7506 11.3486 12.7312 11.4462 12.6934 11.5372C12.6557 11.6283 12.6004 11.711 12.5306 11.7806L9.53063 14.7806C9.46097 14.8504 9.37825 14.9057 9.28721 14.9434C9.19616 14.9812 9.09856 15.0006 9 15.0006C8.90144 15.0006 8.80384 14.9812 8.71279 14.9434C8.62175 14.9057 8.53903 14.8504 8.46937 14.7806L5.46937 11.7806C5.32864 11.6399 5.24958 11.449 5.24958 11.25C5.24958 11.051 5.32864 10.8601 5.46937 10.7194C5.61011 10.5786 5.80098 10.4996 6 10.4996C6.19902 10.4996 6.38989 10.5786 6.53063 10.7194L8.25 12.4397V6.75C8.25 6.55109 8.32902 6.36032 8.46967 6.21967C8.61032 6.07902 8.80109 6 9 6C9.19891 6 9.38968 6.07902 9.53033 6.21967C9.67098 6.36032 9.75 6.55109 9.75 6.75V12.4397L11.4694 10.7194C11.539 10.6496 11.6217 10.5943 11.7128 10.5566C11.8038 10.5188 11.9014 10.4994 12 10.4994C12.0986 10.4994 12.1962 10.5188 12.2872 10.5566C12.3783 10.5943 12.461 10.6496 12.5306 10.7194Z" fill="currentColor"/></svg>
              </Link>
              <button className="btn-outline fill-btn d-flex align-items-center gap-1" onClick={() => goNext("second", "third")}> 
                <span>Save & Next</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2959 12.7959L9.79593 20.2959C9.58458 20.5072 9.29794 20.626 8.99905 20.626C8.70017 20.626 8.41352 20.5072 8.20218 20.2959C7.99083 20.0846 7.8721 19.7979 7.8721 19.499C7.8721 19.2001 7.99083 18.9135 8.20218 18.7021L14.9062 12L8.20405 5.2959C8.09941 5.19125 8.01639 5.06702 7.95976 4.93029C7.90313 4.79356 7.87398 4.64702 7.87398 4.49902C7.87398 4.35103 7.90313 4.20448 7.95976 4.06776C8.01639 3.93103 8.09941 3.80679 8.20405 3.70215C8.3087 3.5975 8.43293 3.51449 8.56966 3.45785C8.70639 3.40122 8.85293 3.37207 9.00093 3.37207C9.14892 3.37207 9.29546 3.40122 9.43219 3.45785C9.56892 3.51449 9.69316 3.5975 9.7978 3.70215L17.2978 11.2021C17.4026 11.3068 17.4856 11.4311 17.5422 11.5679C17.5989 11.7047 17.6279 11.8513 17.6278 11.9994C17.6276 12.1475 17.5982 12.2941 17.5412 12.4307C17.4843 12.5674 17.4009 12.6915 17.2959 12.7959Z" fill="currentColor"/></svg>
              </button>
            </div>
            <div className="right-btn-box">
              <button className="btn-outline bg-transparent border-0 text-grey" onClick={() => skipNext("second", "third")}> Skip for Now </button>
            </div>
          </div>
        </Tab>

        <Tab eventKey="third" title={<TabTitle number="3" title="Enter Job Discription" sub="Tell us about the timeline, duration or deadline of project." status={status.third}/>}>
          <div className="tabs-content-box">
              tabs details 3
          </div>
          <div className="btn-tabs-box d-flex align-items-center gap-2 justify-content-between w-100 mt-56">
            <div className="left-btn-box d-flex align-items-center gap-2">
              <Link href="" className="btn-outline fill-light-purple">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.9213 3.41438L16.4213 0.414375C16.3589 0.28977 16.2631 0.184999 16.1445 0.111808C16.0259 0.0386169 15.8893 -9.95628e-05 15.75 1.92282e-07H2.25C2.11067 -9.95628e-05 1.97406 0.0386169 1.8555 0.111808C1.73693 0.184999 1.6411 0.28977 1.57875 0.414375L0.07875 3.41438C0.0270533 3.51871 0.000105455 3.63356 0 3.75V16.5C0 16.8978 0.158035 17.2794 0.43934 17.5607C0.720644 17.842 1.10218 18 1.5 18H16.5C16.8978 18 17.2794 17.842 17.5607 17.5607C17.842 17.2794 18 16.8978 18 16.5V3.75C17.9999 3.63356 17.9729 3.51871 17.9213 3.41438ZM2.71312 1.5H15.2869L16.0369 3H1.96312L2.71312 1.5ZM16.5 16.5H1.5V4.5H16.5V16.5ZM12.5306 10.7194C12.6004 10.789 12.6557 10.8717 12.6934 10.9628C12.7312 11.0538 12.7506 11.1514 12.7506 11.25C12.7506 11.3486 12.7312 11.4462 12.6934 11.5372C12.6557 11.6283 12.6004 11.711 12.5306 11.7806L9.53063 14.7806C9.46097 14.8504 9.37825 14.9057 9.28721 14.9434C9.19616 14.9812 9.09856 15.0006 9 15.0006C8.90144 15.0006 8.80384 14.9812 8.71279 14.9434C8.62175 14.9057 8.53903 14.8504 8.46937 14.7806L5.46937 11.7806C5.32864 11.6399 5.24958 11.449 5.24958 11.25C5.24958 11.051 5.32864 10.8601 5.46937 10.7194C5.61011 10.5786 5.80098 10.4996 6 10.4996C6.19902 10.4996 6.38989 10.5786 6.53063 10.7194L8.25 12.4397V6.75C8.25 6.55109 8.32902 6.36032 8.46967 6.21967C8.61032 6.07902 8.80109 6 9 6C9.19891 6 9.38968 6.07902 9.53033 6.21967C9.67098 6.36032 9.75 6.55109 9.75 6.75V12.4397L11.4694 10.7194C11.539 10.6496 11.6217 10.5943 11.7128 10.5566C11.8038 10.5188 11.9014 10.4994 12 10.4994C12.0986 10.4994 12.1962 10.5188 12.2872 10.5566C12.3783 10.5943 12.461 10.6496 12.5306 10.7194Z" fill="currentColor"/></svg>
              </Link>
              <button className="btn-outline fill-btn d-flex align-items-center gap-1" onClick={() => goNext("third", "fourth")}> 
                <span>Save & Next</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2959 12.7959L9.79593 20.2959C9.58458 20.5072 9.29794 20.626 8.99905 20.626C8.70017 20.626 8.41352 20.5072 8.20218 20.2959C7.99083 20.0846 7.8721 19.7979 7.8721 19.499C7.8721 19.2001 7.99083 18.9135 8.20218 18.7021L14.9062 12L8.20405 5.2959C8.09941 5.19125 8.01639 5.06702 7.95976 4.93029C7.90313 4.79356 7.87398 4.64702 7.87398 4.49902C7.87398 4.35103 7.90313 4.20448 7.95976 4.06776C8.01639 3.93103 8.09941 3.80679 8.20405 3.70215C8.3087 3.5975 8.43293 3.51449 8.56966 3.45785C8.70639 3.40122 8.85293 3.37207 9.00093 3.37207C9.14892 3.37207 9.29546 3.40122 9.43219 3.45785C9.56892 3.51449 9.69316 3.5975 9.7978 3.70215L17.2978 11.2021C17.4026 11.3068 17.4856 11.4311 17.5422 11.5679C17.5989 11.7047 17.6279 11.8513 17.6278 11.9994C17.6276 12.1475 17.5982 12.2941 17.5412 12.4307C17.4843 12.5674 17.4009 12.6915 17.2959 12.7959Z" fill="currentColor"/></svg>
              </button>
            </div>
            <div className="right-btn-box">
              <button className="btn-outline bg-transparent border-0 text-grey" onClick={() => skipNext("third", "fourth")}> Skip for Now </button>
            </div>
          </div>
        </Tab>

        <Tab eventKey="fourth" title={<TabTitle number="4" title="Upload Supporting Files" sub="Tell us about the timeline, duration or deadline of project." status={status.fourth}/>}>
          <div className="tabs-content-box">
              tabs details 4
          </div>
          <div className="btn-tabs-box d-flex align-items-center gap-2 justify-content-between w-100 mt-56">
            <div className="left-btn-box d-flex align-items-center gap-2">
              <Link href="" className="btn-outline fill-light-purple">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.9213 3.41438L16.4213 0.414375C16.3589 0.28977 16.2631 0.184999 16.1445 0.111808C16.0259 0.0386169 15.8893 -9.95628e-05 15.75 1.92282e-07H2.25C2.11067 -9.95628e-05 1.97406 0.0386169 1.8555 0.111808C1.73693 0.184999 1.6411 0.28977 1.57875 0.414375L0.07875 3.41438C0.0270533 3.51871 0.000105455 3.63356 0 3.75V16.5C0 16.8978 0.158035 17.2794 0.43934 17.5607C0.720644 17.842 1.10218 18 1.5 18H16.5C16.8978 18 17.2794 17.842 17.5607 17.5607C17.842 17.2794 18 16.8978 18 16.5V3.75C17.9999 3.63356 17.9729 3.51871 17.9213 3.41438ZM2.71312 1.5H15.2869L16.0369 3H1.96312L2.71312 1.5ZM16.5 16.5H1.5V4.5H16.5V16.5ZM12.5306 10.7194C12.6004 10.789 12.6557 10.8717 12.6934 10.9628C12.7312 11.0538 12.7506 11.1514 12.7506 11.25C12.7506 11.3486 12.7312 11.4462 12.6934 11.5372C12.6557 11.6283 12.6004 11.711 12.5306 11.7806L9.53063 14.7806C9.46097 14.8504 9.37825 14.9057 9.28721 14.9434C9.19616 14.9812 9.09856 15.0006 9 15.0006C8.90144 15.0006 8.80384 14.9812 8.71279 14.9434C8.62175 14.9057 8.53903 14.8504 8.46937 14.7806L5.46937 11.7806C5.32864 11.6399 5.24958 11.449 5.24958 11.25C5.24958 11.051 5.32864 10.8601 5.46937 10.7194C5.61011 10.5786 5.80098 10.4996 6 10.4996C6.19902 10.4996 6.38989 10.5786 6.53063 10.7194L8.25 12.4397V6.75C8.25 6.55109 8.32902 6.36032 8.46967 6.21967C8.61032 6.07902 8.80109 6 9 6C9.19891 6 9.38968 6.07902 9.53033 6.21967C9.67098 6.36032 9.75 6.55109 9.75 6.75V12.4397L11.4694 10.7194C11.539 10.6496 11.6217 10.5943 11.7128 10.5566C11.8038 10.5188 11.9014 10.4994 12 10.4994C12.0986 10.4994 12.1962 10.5188 12.2872 10.5566C12.3783 10.5943 12.461 10.6496 12.5306 10.7194Z" fill="currentColor"/></svg>
              </Link>
              <button className="btn-outline fill-btn d-flex align-items-center gap-1" onClick={() => goNext("fourth", "fifth")}> 
                <span>Save & Next</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2959 12.7959L9.79593 20.2959C9.58458 20.5072 9.29794 20.626 8.99905 20.626C8.70017 20.626 8.41352 20.5072 8.20218 20.2959C7.99083 20.0846 7.8721 19.7979 7.8721 19.499C7.8721 19.2001 7.99083 18.9135 8.20218 18.7021L14.9062 12L8.20405 5.2959C8.09941 5.19125 8.01639 5.06702 7.95976 4.93029C7.90313 4.79356 7.87398 4.64702 7.87398 4.49902C7.87398 4.35103 7.90313 4.20448 7.95976 4.06776C8.01639 3.93103 8.09941 3.80679 8.20405 3.70215C8.3087 3.5975 8.43293 3.51449 8.56966 3.45785C8.70639 3.40122 8.85293 3.37207 9.00093 3.37207C9.14892 3.37207 9.29546 3.40122 9.43219 3.45785C9.56892 3.51449 9.69316 3.5975 9.7978 3.70215L17.2978 11.2021C17.4026 11.3068 17.4856 11.4311 17.5422 11.5679C17.5989 11.7047 17.6279 11.8513 17.6278 11.9994C17.6276 12.1475 17.5982 12.2941 17.5412 12.4307C17.4843 12.5674 17.4009 12.6915 17.2959 12.7959Z" fill="currentColor"/></svg>
              </button>
            </div>
            <div className="right-btn-box">
              <button className="btn-outline bg-transparent border-0 text-grey" onClick={() => skipNext("fourth", "fifth")}> Skip for Now </button>
            </div>
          </div>
        </Tab>

        <Tab eventKey="fifth" title={<TabTitle number="4" title="List Requirements" sub="Tell us about the timeline, duration or deadline of project." status={status.fifth}/>}>
          <div className="tabs-content-box">
              tabs details 5
          </div>
          <div className="btn-tabs-box d-flex align-items-center gap-2 justify-content-between w-100 mt-56">
            <div className="left-btn-box d-flex align-items-center gap-2">
              <Link href="" className="btn-outline fill-light-purple">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.9213 3.41438L16.4213 0.414375C16.3589 0.28977 16.2631 0.184999 16.1445 0.111808C16.0259 0.0386169 15.8893 -9.95628e-05 15.75 1.92282e-07H2.25C2.11067 -9.95628e-05 1.97406 0.0386169 1.8555 0.111808C1.73693 0.184999 1.6411 0.28977 1.57875 0.414375L0.07875 3.41438C0.0270533 3.51871 0.000105455 3.63356 0 3.75V16.5C0 16.8978 0.158035 17.2794 0.43934 17.5607C0.720644 17.842 1.10218 18 1.5 18H16.5C16.8978 18 17.2794 17.842 17.5607 17.5607C17.842 17.2794 18 16.8978 18 16.5V3.75C17.9999 3.63356 17.9729 3.51871 17.9213 3.41438ZM2.71312 1.5H15.2869L16.0369 3H1.96312L2.71312 1.5ZM16.5 16.5H1.5V4.5H16.5V16.5ZM12.5306 10.7194C12.6004 10.789 12.6557 10.8717 12.6934 10.9628C12.7312 11.0538 12.7506 11.1514 12.7506 11.25C12.7506 11.3486 12.7312 11.4462 12.6934 11.5372C12.6557 11.6283 12.6004 11.711 12.5306 11.7806L9.53063 14.7806C9.46097 14.8504 9.37825 14.9057 9.28721 14.9434C9.19616 14.9812 9.09856 15.0006 9 15.0006C8.90144 15.0006 8.80384 14.9812 8.71279 14.9434C8.62175 14.9057 8.53903 14.8504 8.46937 14.7806L5.46937 11.7806C5.32864 11.6399 5.24958 11.449 5.24958 11.25C5.24958 11.051 5.32864 10.8601 5.46937 10.7194C5.61011 10.5786 5.80098 10.4996 6 10.4996C6.19902 10.4996 6.38989 10.5786 6.53063 10.7194L8.25 12.4397V6.75C8.25 6.55109 8.32902 6.36032 8.46967 6.21967C8.61032 6.07902 8.80109 6 9 6C9.19891 6 9.38968 6.07902 9.53033 6.21967C9.67098 6.36032 9.75 6.55109 9.75 6.75V12.4397L11.4694 10.7194C11.539 10.6496 11.6217 10.5943 11.7128 10.5566C11.8038 10.5188 11.9014 10.4994 12 10.4994C12.0986 10.4994 12.1962 10.5188 12.2872 10.5566C12.3783 10.5943 12.461 10.6496 12.5306 10.7194Z" fill="currentColor"/></svg>
              </Link>
              <button className="btn-outline fill-btn d-flex align-items-center gap-1" onClick={() => goNext("fifth", "sixth")}> 
                <span>Save & Next</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2959 12.7959L9.79593 20.2959C9.58458 20.5072 9.29794 20.626 8.99905 20.626C8.70017 20.626 8.41352 20.5072 8.20218 20.2959C7.99083 20.0846 7.8721 19.7979 7.8721 19.499C7.8721 19.2001 7.99083 18.9135 8.20218 18.7021L14.9062 12L8.20405 5.2959C8.09941 5.19125 8.01639 5.06702 7.95976 4.93029C7.90313 4.79356 7.87398 4.64702 7.87398 4.49902C7.87398 4.35103 7.90313 4.20448 7.95976 4.06776C8.01639 3.93103 8.09941 3.80679 8.20405 3.70215C8.3087 3.5975 8.43293 3.51449 8.56966 3.45785C8.70639 3.40122 8.85293 3.37207 9.00093 3.37207C9.14892 3.37207 9.29546 3.40122 9.43219 3.45785C9.56892 3.51449 9.69316 3.5975 9.7978 3.70215L17.2978 11.2021C17.4026 11.3068 17.4856 11.4311 17.5422 11.5679C17.5989 11.7047 17.6279 11.8513 17.6278 11.9994C17.6276 12.1475 17.5982 12.2941 17.5412 12.4307C17.4843 12.5674 17.4009 12.6915 17.2959 12.7959Z" fill="currentColor"/></svg>
              </button>
            </div>
            <div className="right-btn-box">
              <button className="btn-outline bg-transparent border-0 text-grey" onClick={() => skipNext("fifth", "sixth")}> Skip for Now </button>
            </div>
          </div>
        </Tab>

        <Tab eventKey="sixth" title={<TabTitle number="6" title="Preview & Publish" sub="Tell us about the timeline, duration or deadline of project." status={status.sixth}/>}>
          <div className="tabs-content-box">
              tabs details 6
          </div>
          <div className="btn-tabs-box d-flex align-items-center gap-2 justify-content-between w-100 mt-56">
            <div className="left-btn-box d-flex align-items-center gap-2">
              <Link href="" className="btn-outline fill-light-purple">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.9213 3.41438L16.4213 0.414375C16.3589 0.28977 16.2631 0.184999 16.1445 0.111808C16.0259 0.0386169 15.8893 -9.95628e-05 15.75 1.92282e-07H2.25C2.11067 -9.95628e-05 1.97406 0.0386169 1.8555 0.111808C1.73693 0.184999 1.6411 0.28977 1.57875 0.414375L0.07875 3.41438C0.0270533 3.51871 0.000105455 3.63356 0 3.75V16.5C0 16.8978 0.158035 17.2794 0.43934 17.5607C0.720644 17.842 1.10218 18 1.5 18H16.5C16.8978 18 17.2794 17.842 17.5607 17.5607C17.842 17.2794 18 16.8978 18 16.5V3.75C17.9999 3.63356 17.9729 3.51871 17.9213 3.41438ZM2.71312 1.5H15.2869L16.0369 3H1.96312L2.71312 1.5ZM16.5 16.5H1.5V4.5H16.5V16.5ZM12.5306 10.7194C12.6004 10.789 12.6557 10.8717 12.6934 10.9628C12.7312 11.0538 12.7506 11.1514 12.7506 11.25C12.7506 11.3486 12.7312 11.4462 12.6934 11.5372C12.6557 11.6283 12.6004 11.711 12.5306 11.7806L9.53063 14.7806C9.46097 14.8504 9.37825 14.9057 9.28721 14.9434C9.19616 14.9812 9.09856 15.0006 9 15.0006C8.90144 15.0006 8.80384 14.9812 8.71279 14.9434C8.62175 14.9057 8.53903 14.8504 8.46937 14.7806L5.46937 11.7806C5.32864 11.6399 5.24958 11.449 5.24958 11.25C5.24958 11.051 5.32864 10.8601 5.46937 10.7194C5.61011 10.5786 5.80098 10.4996 6 10.4996C6.19902 10.4996 6.38989 10.5786 6.53063 10.7194L8.25 12.4397V6.75C8.25 6.55109 8.32902 6.36032 8.46967 6.21967C8.61032 6.07902 8.80109 6 9 6C9.19891 6 9.38968 6.07902 9.53033 6.21967C9.67098 6.36032 9.75 6.55109 9.75 6.75V12.4397L11.4694 10.7194C11.539 10.6496 11.6217 10.5943 11.7128 10.5566C11.8038 10.5188 11.9014 10.4994 12 10.4994C12.0986 10.4994 12.1962 10.5188 12.2872 10.5566C12.3783 10.5943 12.461 10.6496 12.5306 10.7194Z" fill="currentColor"/></svg>
              </Link>
              <button className="btn-outline fill-btn d-flex align-items-center gap-1" onClick={handleConfirm}>
                <span>Confirm & Schedule</span>
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2959 12.7959L9.79593 20.2959C9.58458 20.5072 9.29794 20.626 8.99905 20.626C8.70017 20.626 8.41352 20.5072 8.20218 20.2959C7.99083 20.0846 7.8721 19.7979 7.8721 19.499C7.8721 19.2001 7.99083 18.9135 8.20218 18.7021L14.9062 12L8.20405 5.2959C8.09941 5.19125 8.01639 5.06702 7.95976 4.93029C7.90313 4.79356 7.87398 4.64702 7.87398 4.49902C7.87398 4.35103 7.90313 4.20448 7.95976 4.06776C8.01639 3.93103 8.09941 3.80679 8.20405 3.70215C8.3087 3.5975 8.43293 3.51449 8.56966 3.45785C8.70639 3.40122 8.85293 3.37207 9.00093 3.37207C9.14892 3.37207 9.29546 3.40122 9.43219 3.45785C9.56892 3.51449 9.69316 3.5975 9.7978 3.70215L17.2978 11.2021C17.4026 11.3068 17.4856 11.4311 17.5422 11.5679C17.5989 11.7047 17.6279 11.8513 17.6278 11.9994C17.6276 12.1475 17.5982 12.2941 17.5412 12.4307C17.4843 12.5674 17.4009 12.6915 17.2959 12.7959Z" fill="currentColor"/></svg>
              </button>
            </div>
            <div className="right-btn-box"></div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default CreatingTenderTabs;
