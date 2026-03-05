'use client'
import React, { useEffect, useState } from 'react'
import Help from './Help'
import Bell from './Bell'
import Link from 'next/link'
import Dropdown from 'react-bootstrap/Dropdown';
import Image from "next/image";

import UserPic from "../../app/images/user-auth.png";
import Logo from "../../app/images/logo-dashboard.svg";
import BackArrow from './BackArrow'
import LogoDashboard from './LogoDashboard'
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const DashboardHeader = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add("menu-open");
        } else {
            document.body.classList.remove("menu-open");
        }
    }, [menuOpen]);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    const handleOverlayClick = () => {
        setMenuOpen(false);
    };

    return (
        <div className='header-dashboard position-fixed top-0 w-100 z-3'>
            <div className='header-container'>
                <div className='d-flex'>
                    <LogoDashboard />
                    <div className='flex-grow-1'>
                        <div className='d-flex align-items-center'>
                            <div className='page-title'>
                                <div className='d-flex align-items-center gap-2'>
                                    <BackArrow />
                                    <div className='page-title-right'>
                                        <h5 className='mb-0'>Complete Profile</h5>
                                        <Breadcrumb className='m-0'>
                                            <Breadcrumb.Item href="">Dashboard</Breadcrumb.Item>
                                            <Breadcrumb.Item href="">
                                                Organization Profile
                                            </Breadcrumb.Item>
                                            <Breadcrumb.Item active>Legal & Corporate Identity</Breadcrumb.Item>
                                        </Breadcrumb>
                                    </div>
                                </div>
                            </div>
                            <div className='ms-auto'>
                                <div className='d-flex align-items-center gap-3'>
                                    <Link href="" className='d-inline-block'>
                                        <Help />
                                    </Link>
                                    <Link href="" className='d-inline-block'>
                                        <Bell />
                                    </Link>
                                    <div className='user-auth'>
                                        <Dropdown className='user-pic'>
                                            <Dropdown.Toggle id="dropdown-basic">
                                                <Image src={UserPic} alt='' />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu align='end'>
                                                <Dropdown.Item href="#/action-1">Logout</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <button className={`btn d-xl-none bg-transparent border-0 p-0 ${menuOpen ? "active" : ""}`} onClick={handleMenuToggle} aria-label="Toggle Menu">
                                        <span className="mobile-nav">
                                            <span className="bar1"></span>
                                            <span className="bar2"></span>
                                            <span className="bar3"></span>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`overlay ${menuOpen ? "show" : ""}`} onClick={handleOverlayClick}></div>
            </div>
        </div>
    )
}

export default DashboardHeader
