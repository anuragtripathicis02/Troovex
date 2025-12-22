"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import CardImgDemo from '../../../../app/images/card-img-demo.png'
import CardDemoImg from '../../../../app/images/card-demo-img.png'
import Empty from '../../../../app/images/empty.svg'
import { Link } from "rsuite";


interface TabTitleProps {
  number: string | number;
  title: string;
}

const TabTitle = ({ title, number }: TabTitleProps) => (
  <div className="tab-simple-tabs d-flex align-items-start gap-2">
    <span className="main-title w-100">{title}</span>
    <span className="tab-number">{number}</span>
  </div>
);

const ManagementTabs = () => {
   const [activeKey, setActiveKey] = useState("First");

  const tabAllRef = useRef<any>(null);
  const tab2Ref = useRef<any>(null);
  const tab3Ref = useRef<any>(null);
  const tab4Ref = useRef<any>(null);
  const tab5Ref = useRef<any>(null);
  const tab6Ref = useRef<any>(null);

  const handleTabClick = (key: any) => {
    setActiveKey(key);
  };

  // -------------------------------
  // AUTO MERGE CONTENT INTO "ALL"
  // -------------------------------
  useEffect(() => {
    if (tabAllRef.current && tab2Ref.current && tab3Ref.current && tab4Ref.current && tab5Ref.current && tab6Ref.current) {
      tabAllRef.current.innerHTML =
        tab2Ref.current.innerHTML + tab3Ref.current.innerHTML + tab4Ref.current.innerHTML + tab5Ref.current.innerHTML + tab6Ref.current.innerHTML;
    }
  }, []);


  return (
    <div className="tabs-default-box">
      <Tabs activeKey={activeKey} onSelect={handleTabClick} className="tabs-default-box">
        <Tab eventKey="First" title={<TabTitle title="All" number="(0)" />}>
            <div className="tabs-content-box mt-5 ps-30 pe-30 position-relative">
                <div className="container">
                    <div className="row justify-content-center text-center position-relative align-items-center height-empty-tabs">
                        <div className="col-lg-5 col-md-6">
                            <div className="empty-default-box ">
                                <Image src={Empty} alt="" className="m-auto"></Image>
                                <h4 className="mt-4 mb-4">No tender’s here, please create a tender first.</h4>
                                <Link href="" className="btn-outline fill-light-purple d-flex align-items-center gap-2  width-max m-auto">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 12C21 12.1989 20.921 12.3897 20.7803 12.5303C20.6397 12.671 20.4489 12.75 20.25 12.75H12.75V20.25C12.75 20.4489 12.671 20.6397 12.5303 20.7803C12.3897 20.921 12.1989 21 12 21C11.8011 21 11.6103 20.921 11.4697 20.7803C11.329 20.6397 11.25 20.4489 11.25 20.25V12.75H3.75C3.55109 12.75 3.36032 12.671 3.21967 12.5303C3.07902 12.3897 3 12.1989 3 12C3 11.8011 3.07902 11.6103 3.21967 11.4697C3.36032 11.329 3.55109 11.25 3.75 11.25H11.25V3.75C11.25 3.55109 11.329 3.36032 11.4697 3.21967C11.6103 3.07902 11.8011 3 12 3C12.1989 3 12.3897 3.07902 12.5303 3.21967C12.671 3.36032 12.75 3.55109 12.75 3.75V11.25H20.25C20.4489 11.25 20.6397 11.329 20.7803 11.4697C20.921 11.6103 21 11.8011 21 12Z" fill="currentColor"/></svg>
                                    <span>Create Tender</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row" ref={tabAllRef}></div>
                </div>
            </div>
        </Tab>

        <Tab eventKey="Second" title={<TabTitle title="Bidding Active" number="" />}>
            <div className="tabs-content-box mt-5 ps-30 pe-30 position-relative">
                <div className="container">
                    <div className="row justify-content-center text-center position-relative align-items-center height-empty-tabs">
                        <div className="col-lg-5 col-md-6">
                            <div className="empty-default-box ">
                                <Image src={Empty} alt="" className="m-auto"></Image>
                                <h4 className="mt-4 mb-4">No tender’s here, please create a tender first.</h4>
                                <Link href="" className="btn-outline fill-light-purple d-flex align-items-center gap-2  width-max m-auto">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 12C21 12.1989 20.921 12.3897 20.7803 12.5303C20.6397 12.671 20.4489 12.75 20.25 12.75H12.75V20.25C12.75 20.4489 12.671 20.6397 12.5303 20.7803C12.3897 20.921 12.1989 21 12 21C11.8011 21 11.6103 20.921 11.4697 20.7803C11.329 20.6397 11.25 20.4489 11.25 20.25V12.75H3.75C3.55109 12.75 3.36032 12.671 3.21967 12.5303C3.07902 12.3897 3 12.1989 3 12C3 11.8011 3.07902 11.6103 3.21967 11.4697C3.36032 11.329 3.55109 11.25 3.75 11.25H11.25V3.75C11.25 3.55109 11.329 3.36032 11.4697 3.21967C11.6103 3.07902 11.8011 3 12 3C12.1989 3 12.3897 3.07902 12.5303 3.21967C12.671 3.36032 12.75 3.55109 12.75 3.75V11.25H20.25C20.4489 11.25 20.6397 11.329 20.7803 11.4697C20.921 11.6103 21 11.8011 21 12Z" fill="currentColor"/></svg>
                                    <span>Create Tender</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row" ref={tab2Ref}></div>
                </div>
            </div>
        </Tab>
        <Tab eventKey="third" title={<TabTitle title="Assigned" number="" />}>
            <div className="tabs-content-box mt-5 ps-30 pe-30 position-relative">
                <div className="container">
                    <div className="row justify-content-center text-center position-relative align-items-center height-empty-tabs">
                        <div className="col-lg-5 col-md-6">
                            <div className="empty-default-box ">
                                <Image src={Empty} alt="" className="m-auto"></Image>
                                <h4 className="mt-4 mb-4">No tender’s here, please create a tender first.</h4>
                                <Link href="" className="btn-outline fill-light-purple d-flex align-items-center gap-2  width-max m-auto">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 12C21 12.1989 20.921 12.3897 20.7803 12.5303C20.6397 12.671 20.4489 12.75 20.25 12.75H12.75V20.25C12.75 20.4489 12.671 20.6397 12.5303 20.7803C12.3897 20.921 12.1989 21 12 21C11.8011 21 11.6103 20.921 11.4697 20.7803C11.329 20.6397 11.25 20.4489 11.25 20.25V12.75H3.75C3.55109 12.75 3.36032 12.671 3.21967 12.5303C3.07902 12.3897 3 12.1989 3 12C3 11.8011 3.07902 11.6103 3.21967 11.4697C3.36032 11.329 3.55109 11.25 3.75 11.25H11.25V3.75C11.25 3.55109 11.329 3.36032 11.4697 3.21967C11.6103 3.07902 11.8011 3 12 3C12.1989 3 12.3897 3.07902 12.5303 3.21967C12.671 3.36032 12.75 3.55109 12.75 3.75V11.25H20.25C20.4489 11.25 20.6397 11.329 20.7803 11.4697C20.921 11.6103 21 11.8011 21 12Z" fill="currentColor"/></svg>
                                    <span>Create Tender</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row" ref={tab3Ref}></div>
                </div>
            </div>
        </Tab>
        <Tab eventKey="fourth" title={<TabTitle title="Published" number="" />}>
            <div className="tabs-content-box mt-5 ps-30 pe-30 position-relative">
                <div className="container">
                    <div className="row justify-content-center text-center position-relative align-items-center height-empty-tabs">
                        <div className="col-lg-5 col-md-6">
                            <div className="empty-default-box ">
                                <Image src={Empty} alt="" className="m-auto"></Image>
                                <h4 className="mt-4 mb-4">No tender’s here, please create a tender first.</h4>
                                <Link href="" className="btn-outline fill-light-purple d-flex align-items-center gap-2  width-max m-auto">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 12C21 12.1989 20.921 12.3897 20.7803 12.5303C20.6397 12.671 20.4489 12.75 20.25 12.75H12.75V20.25C12.75 20.4489 12.671 20.6397 12.5303 20.7803C12.3897 20.921 12.1989 21 12 21C11.8011 21 11.6103 20.921 11.4697 20.7803C11.329 20.6397 11.25 20.4489 11.25 20.25V12.75H3.75C3.55109 12.75 3.36032 12.671 3.21967 12.5303C3.07902 12.3897 3 12.1989 3 12C3 11.8011 3.07902 11.6103 3.21967 11.4697C3.36032 11.329 3.55109 11.25 3.75 11.25H11.25V3.75C11.25 3.55109 11.329 3.36032 11.4697 3.21967C11.6103 3.07902 11.8011 3 12 3C12.1989 3 12.3897 3.07902 12.5303 3.21967C12.671 3.36032 12.75 3.55109 12.75 3.75V11.25H20.25C20.4489 11.25 20.6397 11.329 20.7803 11.4697C20.921 11.6103 21 11.8011 21 12Z" fill="currentColor"/></svg>
                                    <span>Create Tender</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row" ref={tab4Ref}></div>
                </div>
            </div>
        </Tab>
        <Tab eventKey="fifth" title={<TabTitle title="Closed" number="" />}>
            <div className="tabs-content-box mt-5 ps-30 pe-30 position-relative">
                <div className="container">
                    <div className="row justify-content-center text-center position-relative align-items-center height-empty-tabs">
                        <div className="col-lg-5 col-md-6">
                            <div className="empty-default-box ">
                                <Image src={Empty} alt="" className="m-auto"></Image>
                                <h4 className="mt-4 mb-4">No tender’s here, please create a tender first.</h4>
                                <Link href="" className="btn-outline fill-light-purple d-flex align-items-center gap-2  width-max m-auto">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 12C21 12.1989 20.921 12.3897 20.7803 12.5303C20.6397 12.671 20.4489 12.75 20.25 12.75H12.75V20.25C12.75 20.4489 12.671 20.6397 12.5303 20.7803C12.3897 20.921 12.1989 21 12 21C11.8011 21 11.6103 20.921 11.4697 20.7803C11.329 20.6397 11.25 20.4489 11.25 20.25V12.75H3.75C3.55109 12.75 3.36032 12.671 3.21967 12.5303C3.07902 12.3897 3 12.1989 3 12C3 11.8011 3.07902 11.6103 3.21967 11.4697C3.36032 11.329 3.55109 11.25 3.75 11.25H11.25V3.75C11.25 3.55109 11.329 3.36032 11.4697 3.21967C11.6103 3.07902 11.8011 3 12 3C12.1989 3 12.3897 3.07902 12.5303 3.21967C12.671 3.36032 12.75 3.55109 12.75 3.75V11.25H20.25C20.4489 11.25 20.6397 11.329 20.7803 11.4697C20.921 11.6103 21 11.8011 21 12Z" fill="currentColor"/></svg>
                                    <span>Create Tender</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row" ref={tab5Ref}></div>
                </div>
            </div>
        </Tab>
        <Tab eventKey="sixth" title={<TabTitle title="Drafts" number="" />}>
            <div className="tabs-content-box mt-5 ps-30 pe-30 position-relative">
                <div className="container">
                    <div className="row justify-content-center text-center position-relative align-items-center height-empty-tabs">
                        <div className="col-lg-5 col-md-6">
                            <div className="empty-default-box ">
                                <Image src={Empty} alt="" className="m-auto"></Image>
                                <h4 className="mt-4 mb-4">No tender’s here, please create a tender first.</h4>
                                <Link href="" className="btn-outline fill-light-purple d-flex align-items-center gap-2  width-max m-auto">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 12C21 12.1989 20.921 12.3897 20.7803 12.5303C20.6397 12.671 20.4489 12.75 20.25 12.75H12.75V20.25C12.75 20.4489 12.671 20.6397 12.5303 20.7803C12.3897 20.921 12.1989 21 12 21C11.8011 21 11.6103 20.921 11.4697 20.7803C11.329 20.6397 11.25 20.4489 11.25 20.25V12.75H3.75C3.55109 12.75 3.36032 12.671 3.21967 12.5303C3.07902 12.3897 3 12.1989 3 12C3 11.8011 3.07902 11.6103 3.21967 11.4697C3.36032 11.329 3.55109 11.25 3.75 11.25H11.25V3.75C11.25 3.55109 11.329 3.36032 11.4697 3.21967C11.6103 3.07902 11.8011 3 12 3C12.1989 3 12.3897 3.07902 12.5303 3.21967C12.671 3.36032 12.75 3.55109 12.75 3.75V11.25H20.25C20.4489 11.25 20.6397 11.329 20.7803 11.4697C20.921 11.6103 21 11.8011 21 12Z" fill="currentColor"/></svg>
                                    <span>Create Tender</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row" ref={tab6Ref}></div>
                </div>
            </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default ManagementTabs;
