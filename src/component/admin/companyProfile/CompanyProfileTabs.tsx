"use client";
import { useState } from "react";
import { Tab, Nav } from "react-bootstrap";
import { Link } from "rsuite";
import Collapse from 'react-bootstrap/Collapse';
import LegalandcorPorateidentity from "./LegalandcorPorateidentity";


interface TabTitleProps {
  number: string | number;
  title: string;
  status: string | null;
}
const TabTitle = ({ number, title, status }: TabTitleProps) => (
  <div
    className={`tab-custom-title d-flex align-items-start gap-2 
    ${status === "completed" ? "completed" : ""}`}
  >
    <span
      className={`tab-number ${status === "completed" ? "completed-circle" : ""}`}
    >
      {number}
    </span>

    <div className="text-box-btn">
      <span className="main-title w-100">{title}</span>
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
  const [subStatus4, setSubStatus4] = useState({
    "4.1": null,
    "4.2": null,
    "4.3": null,
  });
  const [activeSubStep, setActiveSubStep] = useState<string>("4.1");
  const handleSubNext = () => {
    setSubStatus4((prev) => ({
      ...prev,
      [activeSubStep]: "completed",
    }));

    if (activeSubStep === "4.1") {
      setActiveSubStep("4.2");
    } else if (activeSubStep === "4.2") {
      setActiveSubStep("4.3");
    } else if (activeSubStep === "4.3") {
      goNext("fourth", "fifth");
    }
  };

  const [subStatus6, setSubStatus6] = useState({
    "6.1": null,
    "6.2": null,
    "6.3": null,
    "6.4": null,
    "6.5": null,
    "6.6": null,
    "6.7": null,
  });
  const [activeSubStep6, setActiveSubStep6] = useState<string>("6.1");
  const handleSubNext6 = () => {
    setSubStatus6((prev) => ({
      ...prev,
      [activeSubStep6]: "completed",
    }));

    if (activeSubStep6 === "6.1") {
      setActiveSubStep6("6.2");
    } else if (activeSubStep6 === "6.2") {
      setActiveSubStep6("6.3");
    } else if (activeSubStep6 === "6.3") {
      setActiveSubStep6("6.4");
    } else if (activeSubStep6 === "6.4") {
      setActiveSubStep6("6.5");
    } else if (activeSubStep6 === "6.5") {
      setActiveSubStep6("6.6");
    } else if (activeSubStep6 === "6.6") {
      setActiveSubStep6("6.7");
    }
  };

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
    (s) => s === "completed",
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


  const handleConfirm = () => {
    setStatus({
      First: "completed",
      second: "completed",
      third: "completed",
      fourth: "completed",
      fifth: "completed",
      sixth: "completed",
    });
  };

  
  const [open, setOpen] = useState(false);
  
  return (
    <div className="tabs-com-box ">
      <div className="tabs-main-box position-relative d-flex flex-wrap">
        <Tab.Container activeKey={activeKey} onSelect={handleTabClick}>
          <div className="tabs-left-box">
            <div className="tabs-side-menu-bg">
              <div className="progress-wrapper d-flex align-items-center gap-3">
                <div className="circle-progress position-relative">
                  <svg width="60" height="60">
                    {" "}
                    <circle
                      cx="30"
                      cy="30"
                      r="26"
                      stroke="#eee"
                      strokeWidth="6"
                      fill="none"
                    />{" "}
                    <circle
                      cx="30"
                      cy="30"
                      r="26"
                      stroke="#f9a825"
                      strokeWidth="6"
                      fill="none"
                      strokeDasharray={2 * Math.PI * 26}
                      strokeDashoffset={
                        2 * Math.PI * 26 - (progress / 100) * (2 * Math.PI * 26)
                      }
                      strokeLinecap="round"
                      style={{ transition: "0.4s ease" }}
                    />
                  </svg>
                  <span
                    className="circle-text position-absolute top-50 start-50 translate-middle"
                    style={{ fontSize: "0.8rem", fontWeight: "bold" }}
                  >
                    {progress}%
                  </span>
                </div>
                <div className="text-cer-box">
                  <h5 className="m-0">Organization Profile</h5>
                  <small className="text-muted">Completing Profile</small>
                </div>
              </div>
            </div>
            <Collapse in={open}>
                      <div>
                <Nav
                className="flex-column tab-nav-wrapper tabs-menu-hide-show" >
                <Nav.Item>
                    <Nav.Link eventKey="First">
                    <TabTitle
                        number="1"
                        title="Legal & Corporate Identity"
                        status={status.First}
                    />
                    </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link eventKey="second">
                    <TabTitle
                        number="2"
                        title="Business Profile & Strategy"
                        status={status.second}
                    />
                    </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link eventKey="third">
                    <TabTitle
                        number="3"
                        title="Ownership & Governance"
                        status={status.third}
                    />
                    </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link eventKey="fourth">
                    <TabTitle
                        number="4"
                        title="Procurement Organization, Human  Resources capabilities & Contacts"
                        status={status.fourth}
                    />
                    </Nav.Link>

                    {/* Sub Tabs */}
                    {activeKey === "fourth" && (
                    <Nav className="flex-column sub-steps">
                        <Nav.Link
                        className={`${activeSubStep === "4.1" ? "active" : ""} ${subStatus4["4.1"] === "completed" ? "completed" : ""}`}
                        onClick={() => setActiveSubStep("4.1")}
                        >
                        <span>4.1</span> Procurement Categories & Purchasing Rules
                        </Nav.Link>

                        <Nav.Link
                        className={`${activeSubStep === "4.2" ? "active" : ""} ${subStatus4["4.2"] === "completed" ? "completed" : ""}`}
                        onClick={() => setActiveSubStep("4.2")}
                        >
                        <span>4.2</span> Vendor Segmentation – Kraljic Matrix
                        </Nav.Link>

                        <Nav.Link
                        className={`${activeSubStep === "4.3" ? "active" : ""} ${subStatus4["4.3"] === "completed" ? "completed" : ""}`}
                        onClick={() => setActiveSubStep("4.3")}
                        >
                        <span>4.3</span>Procurement Organization & Roles
                        </Nav.Link>
                    </Nav>
                    )}
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link eventKey="fifth">
                    <TabTitle
                        number="5"
                        title="Financial & Accounting Information"
                        status={status.fifth}
                    />
                    </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link eventKey="sixth">
                    <TabTitle
                        number="6"
                        title="Prequalification & capabilities PQQ"
                        status={status.sixth}
                    />
                    </Nav.Link>

                    {activeKey === "sixth" && (
                    <Nav className="flex-column sub-steps">
                        <Nav.Link
                        className={`${activeSubStep6 === "6.1" ? "active" : ""} ${subStatus6["6.1"] === "completed" ? "completed" : ""}`}
    onClick={() => setActiveSubStep6("6.1")}
                        >
                        <span>6.1</span> Human Resources Capabilities
                        </Nav.Link>

                        <Nav.Link
                        className={`${activeSubStep6 === "6.2" ? "active" : ""} ${subStatus6["6.2"] === "completed" ? "completed" : ""}`}
    onClick={() => setActiveSubStep6("6.2")}
                        >
                        <span>6.2</span> Operational, Logistics & Technical
                        Capabilities
                        </Nav.Link>

                        <Nav.Link
                        className={`${activeSubStep6 === "6.3" ? "active" : ""} ${subStatus6["6.3"] === "completed" ? "completed" : ""}`}
    onClick={() => setActiveSubStep6("6.3")}
                        >
                        <span>6.3</span> Procurement Maturity & Operations
                        </Nav.Link>

                        <Nav.Link
                        className={`${activeSubStep6 === "6.4" ? "active" : ""} ${subStatus6["6.4"] === "completed" ? "completed" : ""}`}
    onClick={() => setActiveSubStep6("6.4")}
                        >
                        <span>6.4</span> Compliance, Legal & Risk Profile
                        </Nav.Link>

                        <Nav.Link
                        className={`${activeSubStep6 === "6.5" ? "active" : ""} ${subStatus6["6.5"] === "completed" ? "completed" : ""}`}
    onClick={() => setActiveSubStep6("6.5")}
                        >
                        <span>6.5</span> Sustainability & ESG
                        </Nav.Link>

                        <Nav.Link
                        className={`${activeSubStep6 === "6.6" ? "active" : ""} ${subStatus6["6.6"] === "completed" ? "completed" : ""}`}
    onClick={() => setActiveSubStep6("6.6")}
                        >
                        <span>6.6</span> Past Performance & References
                        </Nav.Link>

                        <Nav.Link
                        className={`${activeSubStep6 === "6.7" ? "active" : ""} ${subStatus6["6.7"] === "completed" ? "completed" : ""}`}
    onClick={() => setActiveSubStep6("6.7")}
                        >
                        <span>6.7</span> Documents Upload Repository
                        </Nav.Link>
                    </Nav>
                    )}
                </Nav.Item>
                </Nav>
                </div>
            </Collapse>
            <div className="see-toggle text-center">
              <button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
            >
                <span className="see-all">See All</span>
                <span className="see-less">See Less</span>
            </button>
            </div>
          </div>

          <Tab.Content>
            <div className="step-indicator position-absolute top-0 end-0">
              {progress === 100 ? (
                <span className="completed-text">Completed 🎉</span>
              ) : (
                <>
                  <span className="active-step">
                    Step-
                    {activeKey === "fourth"
                      ? `4.${activeSubStep.split(".")[1]}`
                      : activeKey === "sixth"
                        ? `6.${activeSubStep6.split(".")[1]}`
                        : currentStep}
                  </span>

                  <span className="total-step"> of {totalSteps}</span>
                </>
              )}
            </div>
            <Tab.Pane eventKey="First">
              <div className="tabs-content-box">
                <LegalandcorPorateidentity/>
                <div className="text-end mt-4">
                  <Link
                    className="btn-outline fill-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      goNext("First", "second");
                    }}
                  >
                    Save & Next
                  </Link>
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <div className="tabs-content-box">
                tabs details 2
                <div className="text-end mt-4">
                  <Link
                    className="btn-outline fill-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      goNext("second", "third");
                    }}
                  >
                    Save & Next
                  </Link>
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              <div className="tabs-content-box">
                tabs details 3
                <div className="text-end mt-4">
                  <Link
                    className="btn-outline fill-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      goNext("third", "fourth");
                    }}
                  >
                    Save & Next
                  </Link>
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="fourth">
              <div className="tabs-content-box">
                {activeSubStep === "4.1" && <div>tabs details 4.1</div>}

                {activeSubStep === "4.2" && <div>tabs details 4.2</div>}

                {activeSubStep === "4.3" && <div>tabs details 4.3</div>}

                <div className="text-end mt-4">
                  <Link
                    className="btn-outline fill-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubNext();
                    }}
                  >
                    {activeSubStep === "4.3" ? "Save & Next" : "Save & Next"}
                  </Link>
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="fifth">
              <div className="tabs-content-box">
                tabs details 5
                <div className="text-end mt-4">
                  <Link
                    className="btn-outline fill-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      goNext("fifth", "sixth");
                    }}
                  >
                    Save & Next
                  </Link>
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="sixth">
              <div className="tabs-content-box">
                {activeSubStep6 === "6.1" && <div>tabs details 6.1</div>}

                {activeSubStep6 === "6.2" && <div>tabs details 6.2</div>}

                {activeSubStep6 === "6.3" && <div>tabs details 6.3</div>}

                {activeSubStep6 === "6.4" && <div>tabs details 6.4</div>}

                {activeSubStep6 === "6.5" && <div>tabs details 6.5</div>}

                {activeSubStep6 === "6.6" && <div>tabs details 6.6</div>}

                {activeSubStep6 === "6.7" && <div>tabs details 6.7</div>}

                <div className="text-end mt-4">
                  {activeSubStep6 !== "6.7" ? (
                    <Link
                      className="btn-outline fill-btn"
                      onClick={(e) => {
                        e.preventDefault();
                        handleSubNext6();
                      }}
                    >
                      Save & Next
                    </Link>
                  ) : (
                    <Link className="btn-outline fill-btn">Publish</Link>
                  )}
                </div>
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </div>
  );
};

export default CompanyProfileTabs;
