'use client'
import React from 'react'
import Help from './Help'
import Bell from './Bell'
import Link from 'next/link'
import Dropdown from 'react-bootstrap/Dropdown';
import Image from "next/image";

import UserPic from "../../app/images/user-auth.png";
import Logo from "../../app/images/logo-dashboard.svg";

const DashboardHeader = () => {
    return (
        <div className='header-dashboard'>
            <div className='header-container'>
                <div className='d-flex'>
                    <div className='logo me-auto'>
                        <Link href="">
                            <Image src={Logo} alt='' />
                        </Link>
                    </div>
                    <div className='flex-grow-1'>
                        <div className='d-flex align-items-center'>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardHeader
