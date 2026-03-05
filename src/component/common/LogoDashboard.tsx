'use client'
import Link from 'next/link'
import Image from "next/image";
import Logo from "../../app/images/logo-dashboard.svg";

const LogoDashboard = () => {
  return (
      <div className='logo me-auto'>
            <Link href="">
                <Image src={Logo} alt='' />
            </Link>
        </div>
  )
}

export default LogoDashboard
