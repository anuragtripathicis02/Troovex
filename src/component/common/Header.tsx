"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import HeaderLogo from "../../../src/app/images/header-logo.svg";
import Link from "next/link";

const Header = () => {
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
    <div className="header-sec w-100 position-fixed z-3 top-0">
      <div className="container-fluid">
        <div className="inner-header d-flex align-items-center justify-content-between gap-md-3 gap-2">

          <Link href="" className="header-logo">
            <Image src={HeaderLogo} alt="" />
          </Link>

            <div className='header-right'>
                <ul className="d-flex p-0 m-0 flex-md-nowrap flex-wrap list-unstyled align-items-center gap-lg-5 gap-md-4 gap-2">
                    <li>
                    <Link href="">Terms & Condition</Link>
                    </li>
                    <li>
                    <Link href="">Privacy Policy</Link>
                    </li>
                </ul>
            </div>

          <button className={`btn d-md-none bg-transparent border-0 p-0 ${ menuOpen ? "active" : "" }`} onClick={handleMenuToggle} aria-label="Toggle Menu">
            <span className="mobile-nav">
              <span className="bar1"></span>
              <span className="bar2"></span>
              <span className="bar3"></span>
            </span>
          </button>

        </div>

        <div className={`overlay ${menuOpen ? "show" : ""}`} onClick={handleOverlayClick}></div>
      </div>
    </div>
  );
};

export default Header;
