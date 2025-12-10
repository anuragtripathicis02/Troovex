"use client";
import Link from 'next/link'
import React, { useRef, useState } from 'react';
import { Modal, Button, Form, Dropdown } from 'react-bootstrap';
import Image from 'next/image';
import Tab from 'react-bootstrap/Tab';

import ImagesResend from "../../../../src/app/images/resend-link-img.png";


const ResetLinkSentModal = ({ show, handleClose }: any) => {
  return (
    <Modal show={show} onHide={handleClose} centered className="common-modal sm-modal pt-lg-4 pt-5">
            <Button variant="link" className="btn-close-btn" onClick={handleClose}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M19.5459 17.954C19.7572 18.1653 19.876 18.452 19.876 18.7509C19.876 19.0497 19.7572 19.3364 19.5459 19.5477C19.3346 19.7591 19.0479 19.8778 18.749 19.8778C18.4501 19.8778 18.1635 19.7591 17.9521 19.5477L12 13.5937L6.0459 19.5459C5.83455 19.7572 5.54791 19.8759 5.24902 19.8759C4.95014 19.8759 4.66349 19.7572 4.45215 19.5459C4.2408 19.3345 4.12207 19.0479 4.12207 18.749C4.12207 18.4501 4.2408 18.1635 4.45215 17.9521L10.4062 11.9999L4.45402 6.04586C4.24268 5.83451 4.12395 5.54787 4.12395 5.24898C4.12395 4.9501 4.24268 4.66345 4.45402 4.45211C4.66537 4.24076 4.95201 4.12203 5.2509 4.12203C5.54978 4.12203 5.83643 4.24076 6.04777 4.45211L12 10.4062L17.954 4.45117C18.1654 4.23983 18.452 4.12109 18.7509 4.12109C19.0498 4.12109 19.3364 4.23983 19.5478 4.45117C19.7591 4.66251 19.8778 4.94916 19.8778 5.24804C19.8778 5.54693 19.7591 5.83358 19.5478 6.04492L13.5937 11.9999L19.5459 17.954Z" fill="currentColor" />
                </svg>
            </Button>
            <Modal.Header>
                <Modal.Title>
                    <h5 className='m-0'>Reset Link Sent!</h5>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="common-modal-body">
                <div className='mb-20'>
                    <Image src={ImagesResend} alt=''/>
                </div>
                <p className='mb-0'>We’ve just sent you an email with a password reset link! Tap it to set a new password for your account and continue your journey with Throovex.</p>
            </Modal.Body>

            <Modal.Footer className='justify-content-between'>
                <div className='resend-email-text'>
                    <Link href="" className='link-underline-text'>Resend Email</Link>  <span>09:53</span>
                </div>
                <Link href="mailto:demo@gmail.com" className='btn-outline grey-btn d-inline-flex align-items-center gap-2' onClick={handleClose}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M9.75 14.25C9.75 14.4489 9.67098 14.6397 9.53033 14.7803C9.38968 14.921 9.19891 15 9 15H5.25C5.05109 15 4.86032 14.921 4.71967 14.7803C4.57902 14.6397 4.5 14.4489 4.5 14.25C4.5 14.0511 4.57902 13.8603 4.71967 13.7197C4.86032 13.579 5.05109 13.5 5.25 13.5H9C9.19891 13.5 9.38968 13.579 9.53033 13.7197C9.67098 13.8603 9.75 14.0511 9.75 14.25ZM22.5 10.875V16.5C22.5 16.8978 22.342 17.2794 22.0607 17.5607C21.7794 17.842 21.3978 18 21 18H12.75V21C12.75 21.1989 12.671 21.3897 12.5303 21.5303C12.3897 21.671 12.1989 21.75 12 21.75C11.8011 21.75 11.6103 21.671 11.4697 21.5303C11.329 21.3897 11.25 21.1989 11.25 21V18H3C2.60218 18 2.22064 17.842 1.93934 17.5607C1.65804 17.2794 1.5 16.8978 1.5 16.5V10.875C1.50174 9.38369 2.09493 7.95396 3.14944 6.89944C4.20396 5.84493 5.63369 5.25174 7.125 5.25H14.25V2.25C14.25 2.05109 14.329 1.86032 14.4697 1.71967C14.6103 1.57902 14.8011 1.5 15 1.5H18C18.1989 1.5 18.3897 1.57902 18.5303 1.71967C18.671 1.86032 18.75 2.05109 18.75 2.25C18.75 2.44891 18.671 2.63968 18.5303 2.78033C18.3897 2.92098 18.1989 3 18 3H15.75V5.25H16.875C18.3663 5.25174 19.796 5.84493 20.8506 6.89944C21.9051 7.95396 22.4983 9.38369 22.5 10.875ZM11.25 16.5V10.875C11.25 9.78098 10.8154 8.73177 10.0418 7.95818C9.26823 7.1846 8.21902 6.75 7.125 6.75C6.03098 6.75 4.98177 7.1846 4.20818 7.95818C3.4346 8.73177 3 9.78098 3 10.875V16.5H11.25ZM21 10.875C20.9988 9.78136 20.5638 8.73287 19.7904 7.95955C19.0171 7.18624 17.9686 6.75124 16.875 6.75H15.75V13.5C15.75 13.6989 15.671 13.8897 15.5303 14.0303C15.3897 14.171 15.1989 14.25 15 14.25C14.8011 14.25 14.6103 14.171 14.4697 14.0303C14.329 13.8897 14.25 13.6989 14.25 13.5V6.75H10.9453C11.5146 7.27571 11.9689 7.91363 12.2795 8.62357C12.5901 9.33352 12.7503 10.1001 12.75 10.875V16.5H21V10.875Z" fill="currentColor"/>
</svg>
Open Inbox
                </Link>
            </Modal.Footer>

        </Modal>
  )
}

export default ResetLinkSentModal
