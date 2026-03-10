"use client";
import { useState } from "react";
import { Tab, Nav, Breadcrumb } from "react-bootstrap";
import { Link } from "rsuite";
import Collapse from "react-bootstrap/Collapse";
import LegalandcorPorateidentity from "./LegalandcorPorateidentity";
import BackArrow from "@/component/common/BackArrow";

interface TabTitleProps {
  number: string | number;
  title: string;
  status: string | null;
}
const TabTitle = ({ number, title, status }: TabTitleProps) => (
  <div
    className={`tab-custom-title d-flex align-items-center gap-2 
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
  // ========================
  // CONSTANTS & CONFIG
  // ========================
  const TAB_ORDER: (keyof TabStatus)[] = [
    "First",
    "second",
    "third",
    "fourth",
    "fifth",
    "sixth",
  ];
  const TOTAL_STEPS = 6;
  const STEP_MAP: Record<string, number> = {
    First: 1,
    second: 2,
    third: 3,
    fourth: 4,
    fifth: 5,
    sixth: 6,
  };
  const STEP_COLORS: Record<number, string> = {
    1: "#FFB020",
    2: "#FFB020",
    3: "#FFB020",
    4: "#0B5FD7",
    5: "#6933FF",
    6: "#00A65A",
  };

  const SUB4_STEPS = ["4.1", "4.2", "4.3"];
  const SUB6_STEPS = ["6.1", "6.2", "6.3", "6.4", "6.5", "6.6", "6.7"];

  // ========================
  // STATE - Main Navigation
  // ========================
  const [activeKey, setActiveKey] = useState<string>("First");
  const [status, setStatus] = useState<TabStatus>({
    First: null,
    second: null,
    third: null,
    fourth: null,
    fifth: null,
    sixth: null,
  });
  const [open, setOpen] = useState(false);

  // ========================
  // STATE - Sub-Step Tab 4
  // ========================
  const [activeSubStep, setActiveSubStep] = useState<string>("4.1");
  const [subStatus4, setSubStatus4] = useState({
    "4.1": null,
    "4.2": null,
    "4.3": null,
  });

  // ========================
  // STATE - Sub-Step Tab 6
  // ========================
  const [activeSubStep6, setActiveSubStep6] = useState<string>("6.1");
  const [subStatus6, setSubStatus6] = useState({
    "6.1": null,
    "6.2": null,
    "6.3": null,
    "6.4": null,
    "6.5": null,
    "6.6": null,
    "6.7": null,
  });

  // ========================
  // COMPUTED VALUES
  // ========================
  const completedSteps = Object.values(status).filter(
    (s) => s === "completed",
  ).length;
  const progress = Math.round((completedSteps / TOTAL_STEPS) * 100);
  const currentStep = STEP_MAP[activeKey] || 1;
  const progressColor = STEP_COLORS[currentStep] || "#f9a825";

  // ========================
  // HANDLERS - Main Tab Navigation
  // ========================
  const goNext = (current: string, next: string) => {
    setStatus((prev) => ({
      ...prev,
      [current as keyof TabStatus]: "completed",
    }));
    setActiveKey(next);
  };

  const handleTabClick = (key: string | null) => {
    if (!key) return;

    const clickedIndex = TAB_ORDER.indexOf(key as keyof TabStatus);

    setStatus((prev) => {
      const updated = { ...prev };

      TAB_ORDER.forEach((item, idx) => {
        if (idx < clickedIndex) {
          updated[item] = "completed";
        } else {
          updated[item] = null;
        }
      });

      return updated;
    });

    setActiveKey(key);
  };

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

  // ========================
  // HANDLERS - Sub-Step Tab 4
  // ========================
  const goToSubStep4 = (step: string) => {
    const currentIndex = SUB4_STEPS.indexOf(activeSubStep);
    const newIndex = SUB4_STEPS.indexOf(step);

    if (newIndex > currentIndex) {
      setSubStatus4((prev) => {
        const updated = { ...prev } as Record<string, string | null>;
        for (let i = currentIndex; i < newIndex; i++) {
          updated[SUB4_STEPS[i]] = "completed";
        }
        return updated as typeof prev;
      });
    }

    setActiveSubStep(step);
  };

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
      setStatus((prev) => ({
        ...prev,
        fourth: "completed",
      }));
      setActiveKey("fifth");
    }
  };

  // ========================
  // HANDLERS - Sub-Step Tab 6
  // ========================
  const goToSubStep6 = (step: string) => {
    const currentIndex = SUB6_STEPS.indexOf(activeSubStep6);
    const newIndex = SUB6_STEPS.indexOf(step);

    if (newIndex > currentIndex) {
      setSubStatus6((prev) => {
        const updated = { ...prev } as Record<string, string | null>;
        for (let i = currentIndex; i < newIndex; i++) {
          updated[SUB6_STEPS[i]] = "completed";
        }
        return updated as typeof prev;
      });
    }

    setActiveSubStep6(step);
  };

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

  // ========================
  // COMPONENT - Sub Step Title
  // ========================
  interface SubStepTitleProps {
    number: string;
    title: string;
    active: boolean;
    status: string | null;
    onClick: () => void;
  }

  const SubStepTitle = ({
    number,
    title,
    active,
    status,
    onClick,
  }: SubStepTitleProps) => (
    <Nav.Link
      className={`sub-step-link ${active ? "active" : ""} ${
        status === "completed" ? "completed" : ""
      }`}
      onClick={onClick}
    >
      <span className="sub-step-number">{number}</span>
      <span className="sub-step-title">{title}</span>
    </Nav.Link>
  );

  return (
    <div className="tabs-com-box ">
      <div className="tabs-main-box position-relative d-flex flex-wrap">
        <Tab.Container activeKey={activeKey} onSelect={handleTabClick}>
          <div className="tabs-left-box">
            <div className="tabs-side-menu-bg">
              <div className="progress-wrapper d-flex align-items-center gap-3">
                <div className="circle-progress position-relative">
                  <svg width="60" height="60">
                    <circle
                      cx="30"
                      cy="30"
                      r="26"
                      stroke="#eee"
                      strokeWidth="6"
                      fill="none"
                    />
                    <circle
                      cx="30"
                      cy="30"
                      r="26"
                      stroke={progressColor}
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
                <Nav className="flex-column tab-nav-wrapper tabs-menu-hide-show">
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

                    {/* Sub Tabs - Step 4 */}
                    {activeKey === "fourth" && (
                      <Nav className="flex-column sub-steps">
                        <Nav.Link
                          className={`tab-custom-title d-flex align-items-center gap-2 ${activeSubStep === "4.1" ? "active" : ""} 
                          ${subStatus4["4.1"] === "completed" && "completed"}`}
                          onClick={() => goToSubStep4("4.1")}
                        >
                          <span className="counter-number-sub">4.1</span>
                          <span className="text-details-sub">
                            Procurement Categories & Purchasing Rules
                          </span>
                        </Nav.Link>

                        <Nav.Link
                          className={`tab-custom-title d-flex align-items-center gap-2 ${activeSubStep === "4.2" ? "active" : ""} ${subStatus4["4.2"] === "completed" && "completed"}`}
                          onClick={() => goToSubStep4("4.2")}
                        >
                          <span className="counter-number-sub">4.2</span>
                          <span className="text-details-sub">
                            Vendor Segmentation – Kraljic Matrix
                          </span>
                        </Nav.Link>

                        <Nav.Link
                          className={`tab-custom-title d-flex align-items-center gap-2 ${activeSubStep === "4.3" ? "active" : ""} ${subStatus4["4.3"] === "completed" && "completed"}`}
                          onClick={() => goToSubStep4("4.3")}
                        >
                          <span className="counter-number-sub">4.3</span>
                          <span className="text-details-sub">
                            Procurement Organization & Roles
                          </span>
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

                    {/* Sub Tabs - Step 6 */}
                    {activeKey === "sixth" && (
                      <Nav className="flex-column sub-steps">
                        <Nav.Link
                          className={`tab-custom-title d-flex align-items-center gap-2 ${activeSubStep6 === "6.1" ? "active" : ""} ${subStatus6["6.1"] === "completed" ? "completed" : ""}`}
                          onClick={() => goToSubStep6("6.1")}
                        >
                          <span className="counter-number-sub">6.1</span>
                          <span className="text-details-sub">
                            {" "}
                            Human Resources Capabilities
                          </span>
                        </Nav.Link>

                        <Nav.Link
                          className={`tab-custom-title d-flex align-items-center gap-2 ${activeSubStep6 === "6.2" ? "active" : ""} ${subStatus6["6.2"] === "completed" ? "completed" : ""}`}
                          onClick={() => goToSubStep6("6.2")}
                        >
                          <span className="counter-number-sub">6.2</span>
                          <span className="text-details-sub">
                            Operational, Logistics & Technical Capabilities
                          </span>
                        </Nav.Link>

                        <Nav.Link
                          className={`tab-custom-title d-flex align-items-center gap-2 ${activeSubStep6 === "6.3" ? "active" : ""} ${subStatus6["6.3"] === "completed" ? "completed" : ""}`}
                          onClick={() => goToSubStep6("6.3")}
                        >
                          <span className="counter-number-sub">6.3</span>
                          <span className="text-details-sub">
                            Procurement Maturity & Operations
                          </span>
                        </Nav.Link>

                        <Nav.Link
                          className={`tab-custom-title d-flex align-items-center gap-2 ${activeSubStep6 === "6.4" ? "active" : ""} ${subStatus6["6.4"] === "completed" ? "completed" : ""}`}
                          onClick={() => goToSubStep6("6.4")}
                        >
                          <span className="counter-number-sub">6.4</span>
                          <span className="text-details-sub">
                            Compliance, Legal & Risk Profile
                          </span>
                        </Nav.Link>

                        <Nav.Link
                          className={`tab-custom-title d-flex align-items-center gap-2 ${activeSubStep6 === "6.5" ? "active" : ""} ${subStatus6["6.5"] === "completed" ? "completed" : ""}`}
                          onClick={() => goToSubStep6("6.5")}
                        >
                          <span className="counter-number-sub">6.5</span>
                          <span className="text-details-sub">
                            Sustainability & ESG
                          </span>
                        </Nav.Link>

                        <Nav.Link
                          className={`tab-custom-title d-flex align-items-center gap-2 ${activeSubStep6 === "6.6" ? "active" : ""} ${subStatus6["6.6"] === "completed" ? "completed" : ""}`}
                          onClick={() => goToSubStep6("6.6")}
                        >
                          <span className="counter-number-sub">6.6</span>
                          <span className="text-details-sub">
                            Past Performance & References
                          </span>
                        </Nav.Link>

                        <Nav.Link
                          className={`tab-custom-title d-flex align-items-center gap-2 ${activeSubStep6 === "6.7" ? "active" : ""} ${subStatus6["6.7"] === "completed" ? "completed" : ""}`}
                          onClick={() => goToSubStep6("6.7")}
                        >
                          <span className="counter-number-sub">6.7</span>
                          <span className="text-details-sub">
                            Documents Upload Repository
                          </span>
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

          <Tab.Content className="position-relative">
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

                  <span className="total-step"> of {TOTAL_STEPS}</span>
                </>
              )}
            </div>
            <Tab.Pane eventKey="First">
              <div className="tabs-content-box">
                <div className='page-title'>
                  <div className='d-flex align-items-center gap-2'>
                    <BackArrow />
                    <div className='page-title-right'>
                      <h5 className='mb-0'>Complete Profile</h5>
                      <Breadcrumb className='m-0'>
                        <Breadcrumb.Item href="">Organization Profile</Breadcrumb.Item>
                        <Breadcrumb.Item active>Legal & Corporate Identity</Breadcrumb.Item>
                      </Breadcrumb>
                    </div>
                  </div>
                </div>

                <LegalandcorPorateidentity />
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
                <div className='page-title'>
                  <div className='d-flex align-items-center gap-2'>
                    <BackArrow />
                    <div className='page-title-right'>
                      <h5 className='mb-0'>Complete Profile</h5>
                      <Breadcrumb className='m-0'>
                        <Breadcrumb.Item href="">Organization Profile</Breadcrumb.Item>
                        <Breadcrumb.Item active>Business Profile & Strategy</Breadcrumb.Item>
                      </Breadcrumb>
                    </div>
                  </div>
                </div>
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
                <div className='page-title'>
                  <div className='d-flex align-items-center gap-2'>
                    <BackArrow />
                    <div className='page-title-right'>
                      <h5 className='mb-0'>Complete Profile</h5>
                      <Breadcrumb className='m-0'>
                        <Breadcrumb.Item href="">Organization Profile</Breadcrumb.Item>
                        <Breadcrumb.Item active>Ownership & Governance</Breadcrumb.Item>
                      </Breadcrumb>
                    </div>
                  </div>
                </div>
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
                <div className='page-title'>
                  <div className='d-flex align-items-center gap-2'>
                    <BackArrow />
                    <div className='page-title-right'>
                      <h5 className='mb-0'>Complete Profile</h5>
                      <Breadcrumb className='m-0'>
                        <Breadcrumb.Item href="">Organization Profile</Breadcrumb.Item>
                        <Breadcrumb.Item active>Procurement Organization, Human  Resources capabilities & Contacts</Breadcrumb.Item>
                      </Breadcrumb>
                    </div>
                  </div>
                </div>

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
                <div className='page-title'>
                  <div className='d-flex align-items-center gap-2'>
                    <BackArrow />
                    <div className='page-title-right'>
                      <h5 className='mb-0'>Complete Profile</h5>
                      <Breadcrumb className='m-0'>
                        <Breadcrumb.Item href="">Organization Profile</Breadcrumb.Item>
                        <Breadcrumb.Item active>Financial & Accounting Information</Breadcrumb.Item>
                      </Breadcrumb>
                    </div>
                  </div>
                </div>
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
                <div className='page-title'>
                  <div className='d-flex align-items-center gap-2'>
                    <BackArrow />
                    <div className='page-title-right'>
                      <h5 className='mb-0'>Complete Profile</h5>
                      <Breadcrumb className='m-0'>
                        <Breadcrumb.Item href="">Organization Profile</Breadcrumb.Item>
                        <Breadcrumb.Item active>Prequalification & Capabilities (PQQ)</Breadcrumb.Item>
                      </Breadcrumb>
                    </div>
                  </div>
                </div>

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
