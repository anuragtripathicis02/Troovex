'use client'
import React, { useEffect, useState } from 'react'
import Help from './Help'
import Bell from './Bell'
import Link from 'next/link'
import Dropdown from 'react-bootstrap/Dropdown';
import Image from "next/image";
import UserPic from "../../app/images/user-auth.png";

const DropdownAuth = () => {
  return (
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
  )
}

export default DropdownAuth
