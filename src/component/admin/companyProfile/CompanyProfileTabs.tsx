"use client";
import { useState } from "react";
import { Tab, Nav } from "react-bootstrap";
import { Link } from "rsuite";
import LegalandcorPorateidentity from "./LegalandcorPorateidentity";

interface TabTitleProps {
  number: string | number;
  title: string;
  sub: string;
  status: string | null;
}
const TabTitle = ({ number, title, sub, status }: TabTitleProps) => (
  <div
    className={`tab-custom-title d-flex align-items-start gap-2 
    ${status === "completed" ? "completed" : ""}`}
  >
    <span className={`tab-number ${status === "completed" ? "completed-circle" : ""}`}>
      {number}
    </span>

    <div className="text-box-btn">
      <span className="main-title w-100">{title}</span>
      <small className="sub-title w-100">{sub}</small>
    </div>

    <span className="line-border"></span>
  </div>
);

type StatusType = "completed" | null;

interface TabStatus {
  First: StatusType;
  second: StatusType;
  third: StatusType;
  fourth: StatusType;
  fifth: StatusType;
  sixth: StatusType;
}

const CompanyProfileTabs = () => { 
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
  setStatus((prev) => ({
    ...prev,
    [current as keyof TabStatus]: "completed",
  }));

  setActiveKey(next);
};

const handleTabClick = (key: string | null) => {
  if (!key) return;

  const order: (keyof TabStatus)[] = [
    "First",
    "second",
    "third",
    "fourth",
    "fifth",
    "sixth",
  ];

  const clickedIndex = order.indexOf(key as keyof TabStatus);

  setStatus((prev) => {
    const updated = { ...prev };

    order.forEach((item, idx) => {
      if (idx < clickedIndex) {
        updated[item] = "completed"; 
      } else if (idx === clickedIndex) {
        updated[item] = null;
      } else {
        updated[item] = null;
      }
    });

    return updated;
  });

  setActiveKey(key);
};

  const totalSteps = 6;
  const completedSteps = Object.values(status).filter(
    (s) => s === "completed"
  ).length;
  const progress = Math.round((completedSteps / totalSteps) * 100);

const stepMap: Record<string, number> = {
  First: 1,
  second: 2,
  third: 3,
  fourth: 4,
  fifth: 5,
  sixth: 6,
};

const currentStep = stepMap[activeKey] || 1;

const [showSteps, setShowSteps] = useState(true);  

const handleConfirm = () => {
    setStatus({ First: "completed", second: "completed", third: "completed", fourth: "completed", fifth: "completed", sixth: "completed" });
  };


  return (
    <div className="tabs-com-box ">
      <div className="tabs-main-box position-relative d-flex flex-wrap"> 
        <Tab.Container activeKey={activeKey} onSelect={handleTabClick}>
            <div className="tabs-left-box">
              <div className="tabs-side-menu-bg">
                <div className="progress-wrapper d-flex align-items-center gap-3">
                  <div className="circle-progress position-relative">
                      <svg width="60" height="60"> <circle cx="30" cy="30" r="26" stroke="#eee" strokeWidth="6" fill="none"/> <circle cx="30" cy="30" r="26" stroke="#f9a825" strokeWidth="6" fill="none" strokeDasharray={2 * Math.PI * 26}strokeDashoffset={2 * Math.PI * 26 - (progress / 100) * (2 * Math.PI * 26)} strokeLinecap="round" style={{ transition: "0.4s ease" }}/>
                    </svg>
                    <span className="circle-text position-absolute top-50 start-50 translate-middle" style={{ fontSize: "0.8rem", fontWeight: "bold" }}>
                      {progress}%
                    </span>
                  </div>
                  <div className="text-cer-box">
                    <h5 className="m-0">Organization Profile</h5>
                    <small className="text-muted">Completing Profile</small>
                  </div>
                </div>
              </div>

              <Nav className={`flex-column tab-nav-wrapper ${showSteps ? "open" : ""}`}>
                <Nav.Item>
                  <Nav.Link eventKey="First">
                    <TabTitle
                      number="1"
                      title="Legal & Corporate Identity"
                      sub="Provide basic details to create the tender."
                      status={status.First}
                    />
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="second">
                    <TabTitle
                      number="2"
                      title="Financial Timeline"
                      sub="Tell us about the timeline, duration or deadline of project."
                      status={status.second}
                    />
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="third">
                    <TabTitle
                      number="3"
                      title="Enter Job Discription"
                      sub="Tell us about the timeline, duration or deadline of project."
                      status={status.third}
                    />
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="fourth">
                    <TabTitle
                      number="4"
                      title="Upload Supporting Files"
                      sub="Tell us about the timeline, duration or deadline of project."
                      status={status.fourth}
                    />
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="fifth">
                    <TabTitle
                      number="5"
                      title="List Requirements"
                      sub="Tell us about the timeline, duration or deadline of project."
                      status={status.fifth}
                    />
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="sixth">
                    <TabTitle
                      number="6"
                      title="Preview & Publish"
                      sub="Tell us about the timeline, duration or deadline of project."
                      status={status.sixth}
                    />
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            
              <div className="see-toggle text-center">
                <button
                  className="btn btn-light w-100"
                  onClick={() => setShowSteps(!showSteps)}
                >
                  {showSteps ? "See Less" : "See More"}        </button>
              </div>
            </div>

            <Tab.Content>
              <div className="step-indicator position-absolute top-0 end-0">
                {progress === 100 ? (
                  <span className="completed-text">Completed 🎉</span>
                ) : (
                  <>
                    <span className="active-step">Step-{currentStep}</span>
                    <span className="total-step"> of {totalSteps}</span>
                  </>
                )}
              </div>
              <Tab.Pane eventKey="First">
                <div className="tabs-content-box">
                    <LegalandcorPorateidentity />
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <div className="tabs-content-box">
                  tabs details 2
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <div className="tabs-content-box">
                  tabs details 3
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <div className="tabs-content-box">
                  tabs details 4
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="fifth">
                <div className="tabs-content-box">
                  tabs details 5
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="sixth">
                <div className="tabs-content-box">
                  tabs details 6
                </div>
              </Tab.Pane>
            </Tab.Content>
        </Tab.Container>
      </div>
    </div>
  )
}

export default CompanyProfileTabs