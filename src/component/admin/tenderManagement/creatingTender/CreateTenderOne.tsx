"use client";
import React from 'react'
import Image from "next/image";
import CountryName from '@/component/common/CountryName';
import { FloatingLabel, Form } from 'react-bootstrap'
import { TagInput } from 'rsuite';
import PersonCard from '../../../../app/images/person-card.png'
import Authority from '../../../../app/images/authority.png'
import Link from 'next/link';

const CreateTenderOne = () => {
  return (
    <div className='create-tender-sec'>
        <div className='create-tender-box mb-4'>
            <div className='heading-text'>
                <h2 className='font-14 mb-10 font-w-600'>Basic Details</h2>
            </div>
             <div className="card-simple p-20 ">
                <Form>
                    <div className='row'>
                        <div className='col-md-12 mb-4'>
                            <FloatingLabel controlId="floatingInput" label="Tender Title" className="">
                                <Form.Control type="text" placeholder="Acquisition of IT Equipment for Wilaya Administration" />
                            </FloatingLabel>
                        </div>
                        <div className='col-md-6 mb-4'>
                            <FloatingLabel controlId="floatingSelect" label="Type of Procedure">
                                <Form.Select aria-label="Floating label select example">
                                    <option>International Open</option>
                                    <option value="1">International Two</option>
                                    <option value="2">International Three</option>
                                    <option value="3">International Four</option>
                                </Form.Select>
                            </FloatingLabel>
                        </div>
                        <div className='col-md-6 mb-4'>
                            <FloatingLabel controlId="floatingSelect" label="Category">
                                <Form.Select aria-label="Floating label select example">
                                    <option>Goods</option>
                                    <option value="1">Goods Two</option>
                                    <option value="2">Goods Three</option>
                                    <option value="3">Goods Four</option>
                                </Form.Select>
                            </FloatingLabel>
                        </div>
                        <div className='col-md-12 mb-4'>
                            <FloatingLabel controlId="floatingTextarea2" label="Tender Description" className="">
                                <Form.Control as="textarea" placeholder="Supply, delivery, and installation of desktop computers, laptops, and networking devices for the Wilaya administration offices." style={{ height: '100px' }}/>
                            </FloatingLabel>
                        </div>
                        <div className='col-md-12 mb-0'>
                            <div className="multipal-select-sec position-relative floting-box">
                                <Form.Label>Company Domain</Form.Label>
                                <TagInput trigger={['Enter', 'Space', 'Comma']} placeholder="Company Domain" onCreate={(value, item) => { console.log(value, item); }} className="w-100 form-group"/>
                            </div>
                        </div>
                    </div>
                </Form>
             </div>
        </div>

        <div className='create-tender-box mb-4'>
            <div className='heading-text'>
                <h2 className='font-14 mb-10 font-w-600'>Regional info</h2>
            </div>
             <div className="card-simple p-20 ">
                <Form>
                    <div className='row'>
                        <div className='col-xxl-4 col-md-6 mb-4'>   
                            <div className="flag-code-sec position-relative floting-box">
                                <CountryName />
                            </div>
                        </div>
                        <div className='col-xxl-4 col-md-6 mb-4'>
                            <FloatingLabel controlId="floatingSelect" label="Provinces/State">
                                <Form.Select aria-label="Floating label select example">
                                    <option>Algiers</option>
                                    <option value="1">India</option>
                                    <option value="2">Algeria</option>
                                    <option value="3">UK</option>
                                </Form.Select>
                            </FloatingLabel>
                        </div>
                        <div className='col-xxl-4 col-md-6 mb-4'>
                            <FloatingLabel controlId="floatingSelect" label="City">
                                <Form.Select aria-label="Floating label select example">
                                    <option>Algiers</option>
                                    <option value="1">Algiers City 1</option>
                                    <option value="2">Algiers City 2</option>
                                    <option value="3">Algiers City 3</option>
                                </Form.Select>
                            </FloatingLabel>
                        </div>
                        <div className='col-xxl-4 col-md-6 mb-md-0 mb-4'>
                            <FloatingLabel controlId="floatingInput" label="Pin/Zip Code" className="">
                                <Form.Control type="text" placeholder="16303" />
                            </FloatingLabel>
                        </div>
                        <div className='col-xxl-8 col-md-12 mb-0'>
                            <FloatingLabel controlId="floatingInput" label="Complete Address" className="">
                                <Form.Control type="text" placeholder="2 rue Jawaharlal Nehru BP 368 RP, 16303 Baba Hassen" />
                            </FloatingLabel>
                        </div>
                    </div>
                </Form>
             </div>
        </div>

        <div className='create-tender-box mb-4'>
            <div className='heading-text'>
                <h2 className='font-14 mb-10 font-w-600'>Contact Person</h2>
            </div>
             <div className="card-simple p-20 ">
                <div className='card-person d-flex align-items-center justify-content-between gap-2 flex-wrap'>
                    <div className='card-person-details d-flex align-items-center gap-2'>
                        <div className='img-box'>
                            <Image src={PersonCard} alt=''></Image>
                        </div>
                        <div className='details-box'>
                            <h6>Khaled Bouzid</h6>
                            <p className='m-0 p-0 font-13'>Wilaya de Blida – Direction de l’Administration Générale</p>
                            <p className='p-0 m-0 font-13'>+213 25 45 78 90  |  procurement@wilaya-blida.dz</p>
                        </div>
                    </div>
                    <ul className='card-person-btn d-flex gap-2 list-unstyled p-0 m-0'>
                        <li>
                            <Link href="" className="btn-outline  gray-btn">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.2594 3.85684L11.768 0.366217C11.6519 0.250114 11.5141 0.158014 11.3624 0.0951779C11.2107 0.0323417 11.0482 0 10.884 0C10.7198 0 10.5572 0.0323417 10.4056 0.0951779C10.2539 0.158014 10.1161 0.250114 10 0.366217L0.366412 9.99981C0.249834 10.1155 0.157407 10.2531 0.0945056 10.4048C0.0316038 10.5565 -0.000518312 10.7192 6.32418e-06 10.8834V14.3748C6.32418e-06 14.7063 0.131702 15.0243 0.366123 15.2587C0.600543 15.4931 0.918486 15.6248 1.25001 15.6248H14.375C14.5408 15.6248 14.6997 15.559 14.8169 15.4418C14.9342 15.3245 15 15.1656 15 14.9998C15 14.8341 14.9342 14.6751 14.8169 14.5579C14.6997 14.4407 14.5408 14.3748 14.375 14.3748H6.50938L15.2594 5.62481C15.3755 5.50873 15.4676 5.37092 15.5304 5.21925C15.5933 5.06757 15.6256 4.905 15.6256 4.74083C15.6256 4.57665 15.5933 4.41408 15.5304 4.26241C15.4676 4.11073 15.3755 3.97292 15.2594 3.85684ZM4.74141 14.3748H1.25001V10.8834L8.12501 4.0084L11.6164 7.49981L4.74141 14.3748ZM12.5 6.61622L9.00938 3.12481L10.8844 1.24981L14.375 4.74122L12.5 6.61622Z" fill="#696873"/></svg>
                            </Link>
                        </li>
                        <li>
                            <Link href="" className="btn-outline  gray-btn">Create New</Link>
                        </li>
                    </ul>
                </div>
             </div>
        </div>

        <div className='create-tender-box mb-4'>
            <div className='heading-text'>
                <h2 className='font-14 mb-10 font-w-600'>Contracting Authority</h2>
            </div>
             <div className="card-simple p-20 ">
                <div className='card-person d-flex align-items-center justify-content-between gap-2 flex-wrap'>
                    <div className='card-person-details d-flex align-items-center gap-2'>
                        <div className='img-box'>
                            <Image src={Authority} alt=''></Image>
                        </div>
                        <div className='details-box'>
                            <h6>Wilaya de Blida – Direction de l’Administration Générale</h6>
                            <p className='m-0 p-0 font-13'>Rue Mohamed Belouizdad, Centre Ville, Blida</p>
                            <span className='p-0 m-0 font-13 text-blue d-block'>Service des Moyens Généraux</span>
                        </div>
                    </div>
                    <ul className='card-person-btn d-flex gap-2 list-unstyled p-0 m-0'>
                        <li>
                            <Link href="" className="btn-outline  gray-btn">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.2594 3.85684L11.768 0.366217C11.6519 0.250114 11.5141 0.158014 11.3624 0.0951779C11.2107 0.0323417 11.0482 0 10.884 0C10.7198 0 10.5572 0.0323417 10.4056 0.0951779C10.2539 0.158014 10.1161 0.250114 10 0.366217L0.366412 9.99981C0.249834 10.1155 0.157407 10.2531 0.0945056 10.4048C0.0316038 10.5565 -0.000518312 10.7192 6.32418e-06 10.8834V14.3748C6.32418e-06 14.7063 0.131702 15.0243 0.366123 15.2587C0.600543 15.4931 0.918486 15.6248 1.25001 15.6248H14.375C14.5408 15.6248 14.6997 15.559 14.8169 15.4418C14.9342 15.3245 15 15.1656 15 14.9998C15 14.8341 14.9342 14.6751 14.8169 14.5579C14.6997 14.4407 14.5408 14.3748 14.375 14.3748H6.50938L15.2594 5.62481C15.3755 5.50873 15.4676 5.37092 15.5304 5.21925C15.5933 5.06757 15.6256 4.905 15.6256 4.74083C15.6256 4.57665 15.5933 4.41408 15.5304 4.26241C15.4676 4.11073 15.3755 3.97292 15.2594 3.85684ZM4.74141 14.3748H1.25001V10.8834L8.12501 4.0084L11.6164 7.49981L4.74141 14.3748ZM12.5 6.61622L9.00938 3.12481L10.8844 1.24981L14.375 4.74122L12.5 6.61622Z" fill="#696873"/></svg>
                            </Link>
                        </li>
                    </ul>
                </div>
             </div>
        </div>

    </div>
  )
}

export default CreateTenderOne