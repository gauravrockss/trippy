import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AiFillFacebook, AiFillYoutube } from 'react-icons/ai';
import { BsInstagram, BsTwitter } from 'react-icons/bs';

const Footer = () => {
    return (
        <>
            <section
                className='mt-5 py-4'
                style={{ background: 'black', color: 'white' }}>
                <Container>
                    <Row>
                        <Col>
                            <div className='d-flex flex-lg-row flex-column justify-content-lg-between align-items-center justify-content-center mt-5'>
                                <div>
                                    <h2 className='text-lg-start text-center'>
                                        Trippy
                                    </h2>
                                    <p>Choose Your Favourite Destination</p>
                                </div>
                                <div className='mt-3'>
                                    <AiFillFacebook
                                        size={30}
                                        className='me-3'
                                    />
                                    <BsInstagram size={28} />
                                    <BsTwitter size={30} className='mx-3' />
                                    <AiFillYoutube size={33} />
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div className='mt-4 links'>
                        <Row className='p-lg-0 p-4'>
                            <Col>
                                <div className='d-flex flex-column mb-lg-0 mb-4'>
                                    <h3>Project</h3>
                                    <a href=''></a>Changelog
                                    <a href=''></a>Status
                                    <a href=''></a>License
                                    <a href=''></a>All Versions
                                </div>
                            </Col>
                            <Col>
                                <div className='d-flex flex-column'>
                                    <h3>Community</h3>
                                    <a href=''></a>GitHub
                                    <a href=''></a>Issues
                                    <a href=''></a>Project
                                    <a href=''></a>Twitter
                                </div>
                            </Col>
                            <Col>
                                <div className='d-flex flex-column'>
                                    <h3>Help</h3>
                                    <a href=''></a>Support
                                    <a href=''></a>Troubeshooting
                                    <a href=''></a>Contact Us
                                </div>
                            </Col>
                            <Col>
                                <div className='d-flex flex-column'>
                                    <h3>Others</h3>
                                    <a href=''></a>Terms of Services
                                    <a href=''></a>Privacy Policy
                                    <a href=''></a>License
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default Footer;
