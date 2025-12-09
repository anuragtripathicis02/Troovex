"use client";
import { useState } from "react";
import Image from "next/image";
import { Link } from "rsuite";
import HeaderLogo from '../../../src/app/images/header-logo.svg'

const Header = () => {
  return (
    <div className="header-sec">
        <div className="container-fluid">
            <div className="inner-header d-flex align-items-center justify-content-between gap-3">
                <Link href="">
                    <Image src={HeaderLogo} alt=""></Image>
                </Link>
                <ul className="d-flex p-0 m-0 list-unstyled align-items-center gap-lg-5 gap-4">
                    <li>
                        <Link href="">Terms & Condition</Link>
                    </li>
                    <li>
                        <Link href="">Privacy Policy</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header