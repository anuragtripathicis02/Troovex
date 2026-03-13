"use client";
import Link from "next/link";
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import AttachmentIcon from "@/component/common/Icons/AttachmentIcon";
import Dropdown from 'react-bootstrap/Dropdown';


const ProductsServices = () => {
    return (

        <div className="sec-products-services">
            <div className="card-plan mb-4">
                <div className="d-flex gap-3 align-items-center mb-4">
                    <span className="fs-14">Products Offered</span>
                    <hr className="flex-grow-1"></hr>
                </div>
                <div className="d-md-flex gap-2 mb-3">
                    <div className="flex-grow-1 mb-2 mb-md-0">
                        <div className="search-area position-relative">
                            <div className="icon position-absolute start-0 top-0">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z" stroke="#DCDCDF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M15.8027 15.8032L20.9993 20.9998" stroke="#DCDCDF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <Form.Control type="text" placeholder="Search Tenders..." />
                        </div>

                    </div>
                    <div className="action-right">
                        <div className="d-flex align-items-center gap-2">
                            <button className="btn-outline btn-gray d-inline-flex align-items-center gap-1">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M17.4344 5.34531L16.1844 2.84531C16.1324 2.74148 16.0526 2.65417 15.9538 2.59317C15.855 2.53218 15.7411 2.49992 15.625 2.5H4.375C4.25889 2.49992 4.14505 2.53218 4.04625 2.59317C3.94744 2.65417 3.86759 2.74148 3.81563 2.84531L2.56563 5.34531C2.52254 5.43226 2.50009 5.52797 2.5 5.625V16.25C2.5 16.5815 2.6317 16.8995 2.86612 17.1339C3.10054 17.3683 3.41848 17.5 3.75 17.5H16.25C16.5815 17.5 16.8995 17.3683 17.1339 17.1339C17.3683 16.8995 17.5 16.5815 17.5 16.25V5.625C17.4999 5.52797 17.4775 5.43226 17.4344 5.34531ZM4.76094 3.75H15.2391L15.8641 5H4.13594L4.76094 3.75ZM16.25 16.25H3.75V6.25H16.25V16.25ZM12.9422 11.4328C13.0003 11.4909 13.0464 11.5598 13.0779 11.6357C13.1093 11.7115 13.1255 11.7929 13.1255 11.875C13.1255 11.9571 13.1093 12.0385 13.0779 12.1143C13.0464 12.1902 13.0003 12.2591 12.9422 12.3172L10.4422 14.8172C10.3841 14.8753 10.3152 14.9214 10.2393 14.9529C10.1635 14.9843 10.0821 15.0005 10 15.0005C9.91787 15.0005 9.83654 14.9843 9.76066 14.9529C9.68479 14.9214 9.61586 14.8753 9.55781 14.8172L7.05781 12.3172C6.94054 12.1999 6.87465 12.0409 6.87465 11.875C6.87465 11.7091 6.94054 11.5501 7.05781 11.4328C7.17509 11.3155 7.33415 11.2497 7.5 11.2497C7.66585 11.2497 7.82491 11.3155 7.94219 11.4328L9.375 12.8664V8.125C9.375 7.95924 9.44085 7.80027 9.55806 7.68306C9.67527 7.56585 9.83424 7.5 10 7.5C10.1658 7.5 10.3247 7.56585 10.4419 7.68306C10.5592 7.80027 10.625 7.95924 10.625 8.125V12.8664L12.0578 11.4328C12.1159 11.3747 12.1848 11.3286 12.2607 11.2971C12.3365 11.2657 12.4179 11.2495 12.5 11.2495C12.5821 11.2495 12.6635 11.2657 12.7393 11.2971C12.8152 11.3286 12.8841 11.3747 12.9422 11.4328Z" fill="currentColor" />
                                </svg>

                                Import</button>
                            <button className="btn-outline btn-light-blue d-inline-flex align-items-center gap-1"><svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M10 1.875C8.39303 1.875 6.82214 2.35152 5.486 3.24431C4.14985 4.1371 3.10844 5.40605 2.49348 6.8907C1.87852 8.37535 1.71762 10.009 2.03112 11.5851C2.34463 13.1612 3.11846 14.6089 4.25476 15.7452C5.39106 16.8815 6.8388 17.6554 8.41489 17.9689C9.99099 18.2824 11.6247 18.1215 13.1093 17.5065C14.594 16.8916 15.8629 15.8502 16.7557 14.514C17.6485 13.1779 18.125 11.607 18.125 10C18.1227 7.84581 17.266 5.78051 15.7427 4.25727C14.2195 2.73403 12.1542 1.87727 10 1.875ZM10 16.875C8.64026 16.875 7.31105 16.4718 6.18046 15.7164C5.04987 14.9609 4.16868 13.8872 3.64833 12.6309C3.12798 11.3747 2.99183 9.99237 3.2571 8.65875C3.52238 7.32513 4.17716 6.10013 5.13864 5.13864C6.10013 4.17715 7.32514 3.52237 8.65876 3.2571C9.99238 2.99183 11.3747 3.12798 12.631 3.64833C13.8872 4.16868 14.9609 5.04987 15.7164 6.18045C16.4718 7.31104 16.875 8.64025 16.875 10C16.8729 11.8227 16.1479 13.5702 14.8591 14.8591C13.5702 16.1479 11.8227 16.8729 10 16.875ZM13.75 10C13.75 10.1658 13.6842 10.3247 13.5669 10.4419C13.4497 10.5592 13.2908 10.625 13.125 10.625H10.625V13.125C10.625 13.2908 10.5592 13.4497 10.4419 13.5669C10.3247 13.6842 10.1658 13.75 10 13.75C9.83424 13.75 9.67527 13.6842 9.55806 13.5669C9.44085 13.4497 9.375 13.2908 9.375 13.125V10.625H6.875C6.70924 10.625 6.55027 10.5592 6.43306 10.4419C6.31585 10.3247 6.25 10.1658 6.25 10C6.25 9.83424 6.31585 9.67527 6.43306 9.55806C6.55027 9.44085 6.70924 9.375 6.875 9.375H9.375V6.875C9.375 6.70924 9.44085 6.55027 9.55806 6.43306C9.67527 6.31585 9.83424 6.25 10 6.25C10.1658 6.25 10.3247 6.31585 10.4419 6.43306C10.5592 6.55027 10.625 6.70924 10.625 6.875V9.375H13.125C13.2908 9.375 13.4497 9.44085 13.5669 9.55806C13.6842 9.67527 13.75 9.83424 13.75 10Z" fill="currentColor" />
                            </svg>

                                Add New</button>
                        </div>
                    </div>
                </div>
                <div className="table-default min-w-1000">
                    <Table className="text-center align-middle mb-2 p-0 " responsive hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product Name / Reference</th>
                                <th>UNSPSC Code</th>
                                <th>eCl@ss Code</th>
                                <th>Standards / Certifications</th>
                                <th>Unit</th>
                                <th>Quantity</th>
                                <th>Unit Price</th>
                                <th>Total Price</th>
                                <th>Attachments</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <Form.Check aria-label="option 1" className="checkbox-20" />
                                </td>
                                <td>Dell PowerEdge R750</td>
                                <td>72141001</td>
                                <td>37-01-06-01</td>
                                <td>ISO 9001, CE, RoHS</td>
                                <td>
                                    Each
                                </td>
                                <td>80</td>
                                <td>$3,50,000</td>
                                <td>$3,50,000</td>
                                <td>
                                    <Link href='' className="d-flex text-nowrap gap-2">
                                        <AttachmentIcon />
                                        View Attachment
                                    </Link>
                                </td>
                                <td>
                                    <Dropdown align="end">
                                        <Dropdown.Toggle >
                                            Action
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Form.Check aria-label="option 1" className="checkbox-20" />
                                </td>
                                <td>Dell PowerEdge R750</td>
                                <td>72141001</td>
                                <td>37-01-06-01</td>
                                <td>ISO 9001, CE, RoHS</td>
                                <td>
                                    Each
                                </td>
                                <td>80</td>
                                <td>$3,50,000</td>
                                <td>$3,50,000</td>
                                <td>
                                    <Link href='' className="d-flex text-nowrap gap-2">
                                        <AttachmentIcon />
                                        View Attachment
                                    </Link>
                                </td>
                                <td>
                                    <Dropdown align="end">
                                        <Dropdown.Toggle >
                                            Action
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Form.Check aria-label="option 1" className="checkbox-20" />
                                </td>
                                <td>Dell PowerEdge R750</td>
                                <td>72141001</td>
                                <td>37-01-06-01</td>
                                <td>ISO 9001, CE, RoHS</td>
                                <td>
                                    Each
                                </td>
                                <td>80</td>
                                <td>$3,50,000</td>
                                <td>$3,50,000</td>
                                <td>
                                    <Link href='' className="d-flex text-nowrap gap-2">
                                        <AttachmentIcon />
                                        View Attachment
                                    </Link>
                                </td>
                                <td>
                                    <Dropdown align="end">
                                        <Dropdown.Toggle >
                                            Action
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Form.Check aria-label="option 1" className="checkbox-20" />
                                </td>
                                <td>Dell PowerEdge R750</td>
                                <td>72141001</td>
                                <td>37-01-06-01</td>
                                <td>ISO 9001, CE, RoHS</td>
                                <td>
                                    Each
                                </td>
                                <td>80</td>
                                <td>$3,50,000</td>
                                <td>$3,50,000</td>
                                <td>
                                    <Link href='' className="d-flex text-nowrap gap-2">
                                        <AttachmentIcon />
                                        View Attachment
                                    </Link>
                                </td>
                                <td>
                                    <Dropdown align="end">
                                        <Dropdown.Toggle >
                                            Action
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Form.Check aria-label="option 1" className="checkbox-20" />
                                </td>
                                <td>Dell PowerEdge R750</td>
                                <td>72141001</td>
                                <td>37-01-06-01</td>
                                <td>ISO 9001, CE, RoHS</td>
                                <td>
                                    Each
                                </td>
                                <td>80</td>
                                <td>$3,50,000</td>
                                <td>$3,50,000</td>
                                <td>
                                    <Link href='' className="d-flex text-nowrap gap-2">
                                        <AttachmentIcon />
                                        View Attachment
                                    </Link>
                                </td>
                                <td>
                                    <Dropdown align="end">
                                        <Dropdown.Toggle >
                                            Action
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
            <div className="card-plan">
                <div className="d-flex gap-3 align-items-center mb-4">
                    <span className="fs-14">Services Offered</span>
                    <hr className="flex-grow-1"></hr>
                </div>
                <div className="d-md-flex gap-2 mb-3">
                    <div className="flex-grow-1 mb-2 mb-md-0">
                        <div className="search-area position-relative">
                            <div className="icon position-absolute start-0 top-0">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z" stroke="#DCDCDF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M15.8027 15.8032L20.9993 20.9998" stroke="#DCDCDF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <Form.Control type="text" placeholder="Search Tenders..." />
                        </div>

                    </div>
                    <div className="action-right">
                        <div className="d-flex align-items-center gap-2">
                            <button className="btn-outline btn-gray d-inline-flex align-items-center gap-1">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M17.4344 5.34531L16.1844 2.84531C16.1324 2.74148 16.0526 2.65417 15.9538 2.59317C15.855 2.53218 15.7411 2.49992 15.625 2.5H4.375C4.25889 2.49992 4.14505 2.53218 4.04625 2.59317C3.94744 2.65417 3.86759 2.74148 3.81563 2.84531L2.56563 5.34531C2.52254 5.43226 2.50009 5.52797 2.5 5.625V16.25C2.5 16.5815 2.6317 16.8995 2.86612 17.1339C3.10054 17.3683 3.41848 17.5 3.75 17.5H16.25C16.5815 17.5 16.8995 17.3683 17.1339 17.1339C17.3683 16.8995 17.5 16.5815 17.5 16.25V5.625C17.4999 5.52797 17.4775 5.43226 17.4344 5.34531ZM4.76094 3.75H15.2391L15.8641 5H4.13594L4.76094 3.75ZM16.25 16.25H3.75V6.25H16.25V16.25ZM12.9422 11.4328C13.0003 11.4909 13.0464 11.5598 13.0779 11.6357C13.1093 11.7115 13.1255 11.7929 13.1255 11.875C13.1255 11.9571 13.1093 12.0385 13.0779 12.1143C13.0464 12.1902 13.0003 12.2591 12.9422 12.3172L10.4422 14.8172C10.3841 14.8753 10.3152 14.9214 10.2393 14.9529C10.1635 14.9843 10.0821 15.0005 10 15.0005C9.91787 15.0005 9.83654 14.9843 9.76066 14.9529C9.68479 14.9214 9.61586 14.8753 9.55781 14.8172L7.05781 12.3172C6.94054 12.1999 6.87465 12.0409 6.87465 11.875C6.87465 11.7091 6.94054 11.5501 7.05781 11.4328C7.17509 11.3155 7.33415 11.2497 7.5 11.2497C7.66585 11.2497 7.82491 11.3155 7.94219 11.4328L9.375 12.8664V8.125C9.375 7.95924 9.44085 7.80027 9.55806 7.68306C9.67527 7.56585 9.83424 7.5 10 7.5C10.1658 7.5 10.3247 7.56585 10.4419 7.68306C10.5592 7.80027 10.625 7.95924 10.625 8.125V12.8664L12.0578 11.4328C12.1159 11.3747 12.1848 11.3286 12.2607 11.2971C12.3365 11.2657 12.4179 11.2495 12.5 11.2495C12.5821 11.2495 12.6635 11.2657 12.7393 11.2971C12.8152 11.3286 12.8841 11.3747 12.9422 11.4328Z" fill="currentColor" />
                                </svg>

                                Import</button>
                            <button className="btn-outline btn-light-blue d-inline-flex align-items-center gap-1"><svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M10 1.875C8.39303 1.875 6.82214 2.35152 5.486 3.24431C4.14985 4.1371 3.10844 5.40605 2.49348 6.8907C1.87852 8.37535 1.71762 10.009 2.03112 11.5851C2.34463 13.1612 3.11846 14.6089 4.25476 15.7452C5.39106 16.8815 6.8388 17.6554 8.41489 17.9689C9.99099 18.2824 11.6247 18.1215 13.1093 17.5065C14.594 16.8916 15.8629 15.8502 16.7557 14.514C17.6485 13.1779 18.125 11.607 18.125 10C18.1227 7.84581 17.266 5.78051 15.7427 4.25727C14.2195 2.73403 12.1542 1.87727 10 1.875ZM10 16.875C8.64026 16.875 7.31105 16.4718 6.18046 15.7164C5.04987 14.9609 4.16868 13.8872 3.64833 12.6309C3.12798 11.3747 2.99183 9.99237 3.2571 8.65875C3.52238 7.32513 4.17716 6.10013 5.13864 5.13864C6.10013 4.17715 7.32514 3.52237 8.65876 3.2571C9.99238 2.99183 11.3747 3.12798 12.631 3.64833C13.8872 4.16868 14.9609 5.04987 15.7164 6.18045C16.4718 7.31104 16.875 8.64025 16.875 10C16.8729 11.8227 16.1479 13.5702 14.8591 14.8591C13.5702 16.1479 11.8227 16.8729 10 16.875ZM13.75 10C13.75 10.1658 13.6842 10.3247 13.5669 10.4419C13.4497 10.5592 13.2908 10.625 13.125 10.625H10.625V13.125C10.625 13.2908 10.5592 13.4497 10.4419 13.5669C10.3247 13.6842 10.1658 13.75 10 13.75C9.83424 13.75 9.67527 13.6842 9.55806 13.5669C9.44085 13.4497 9.375 13.2908 9.375 13.125V10.625H6.875C6.70924 10.625 6.55027 10.5592 6.43306 10.4419C6.31585 10.3247 6.25 10.1658 6.25 10C6.25 9.83424 6.31585 9.67527 6.43306 9.55806C6.55027 9.44085 6.70924 9.375 6.875 9.375H9.375V6.875C9.375 6.70924 9.44085 6.55027 9.55806 6.43306C9.67527 6.31585 9.83424 6.25 10 6.25C10.1658 6.25 10.3247 6.31585 10.4419 6.43306C10.5592 6.55027 10.625 6.70924 10.625 6.875V9.375H13.125C13.2908 9.375 13.4497 9.44085 13.5669 9.55806C13.6842 9.67527 13.75 9.83424 13.75 10Z" fill="currentColor" />
                            </svg>

                                Add New</button>
                        </div>
                    </div>
                </div>
                <div className="table-default min-w-1000">
                    <Table className="text-center align-middle mb-2 p-0 hover" responsive hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Service Name</th>
                                <th>UNSPSC Code</th>
                                <th>eCl@ss Code</th>
                                <th>Duration / Effort</th>
                                <th>Unit</th>
                                <th>Quantity</th>
                                <th>Unit Price</th>
                                <th>Total Price</th>
                                <th>Attachments</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <Form.Check aria-label="option 1" className="checkbox-20" />
                                </td>
                                <td>Server Installation & Configuration</td>
                                <td>72141001</td>
                                <td>37-01-06-01</td>
                                <td>5 Days</td>
                                <td>
                                    Man-days
                                </td>
                                <td>5</td>
                                <td>$3,50,000</td>
                                <td>$3,50,000</td>
                                <td>
                                    <Link href='' className="d-flex text-nowrap gap-2">
                                        <AttachmentIcon />
                                        View Attachment
                                    </Link>
                                </td>
                                <td>
                                    <Dropdown align="end">
                                        <Dropdown.Toggle >
                                            Action
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Form.Check aria-label="option 1" className="checkbox-20" />
                                </td>
                                <td>Dell PowerEdge R750</td>
                                <td>72141001</td>
                                <td>37-01-06-01</td>
                                <td>ISO 9001, CE, RoHS</td>
                                <td>
                                    Each
                                </td>
                                <td>80</td>
                                <td>$3,50,000</td>
                                <td>$3,50,000</td>
                                <td>
                                    <Link href='' className="d-flex text-nowrap gap-2">
                                        <AttachmentIcon />
                                        View Attachment
                                    </Link>
                                </td>
                                <td>
                                    <Dropdown align="end">
                                        <Dropdown.Toggle >
                                            Action
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Form.Check aria-label="option 1" className="checkbox-20" />
                                </td>
                                <td>Dell PowerEdge R750</td>
                                <td>72141001</td>
                                <td>37-01-06-01</td>
                                <td>ISO 9001, CE, RoHS</td>
                                <td>
                                    Each
                                </td>
                                <td>80</td>
                                <td>$3,50,000</td>
                                <td>$3,50,000</td>
                                <td>
                                    <Link href='' className="d-flex text-nowrap gap-2">
                                        <AttachmentIcon />
                                        View Attachment
                                    </Link>
                                </td>
                                <td>
                                    <Dropdown align="end">
                                        <Dropdown.Toggle >
                                            Action
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Form.Check aria-label="option 1" className="checkbox-20" />
                                </td>
                                <td>Dell PowerEdge R750</td>
                                <td>72141001</td>
                                <td>37-01-06-01</td>
                                <td>ISO 9001, CE, RoHS</td>
                                <td>
                                    Each
                                </td>
                                <td>80</td>
                                <td>$3,50,000</td>
                                <td>$3,50,000</td>
                                <td>
                                    <Link href='' className="d-flex text-nowrap gap-2">
                                        <AttachmentIcon />
                                        View Attachment
                                    </Link>
                                </td>
                                <td>
                                    <Dropdown align="end">
                                        <Dropdown.Toggle >
                                            Action
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Form.Check aria-label="option 1" className="checkbox-20" />
                                </td>
                                <td>Dell PowerEdge R750</td>
                                <td>72141001</td>
                                <td>37-01-06-01</td>
                                <td>ISO 9001, CE, RoHS</td>
                                <td>
                                    Each
                                </td>
                                <td>80</td>
                                <td>$3,50,000</td>
                                <td>$3,50,000</td>
                                <td>
                                    <Link href='' className="d-flex text-nowrap gap-2">
                                        <AttachmentIcon />
                                        View Attachment
                                    </Link>
                                </td>
                                <td>
                                    <Dropdown align="end">
                                        <Dropdown.Toggle >
                                            Action
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default ProductsServices