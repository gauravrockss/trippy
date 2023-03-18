import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { BsFillExclamationCircleFill } from 'react-icons/bs';
import { MdPermContactCalendar, MdMedicalServices } from 'react-icons/md';

const Header = () => {
    return (
        <>
            <Navbar bg='light' expand='lg' className='navbaritems'>
                <Container>
                    <Navbar.Brand
                        href='#home'
                        style={{
                            color: '#222',
                            fontSize: '2rem',
                            fontWeight: '700',
                        }}>
                        Trippy
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav
                            className='ms-auto'
                            style={{ fontSize: '1.4rem', color: 'black' }}>
                            <div className='d-flex align-items-center link'>
                                <AiFillHome className='mx-2' />
                                <NavLink to='/' className='nav-link'>
                                    Home
                                </NavLink>
                            </div>
                            <div className='d-flex align-items-center link'>
                                <BsFillExclamationCircleFill className='mx-2' />
                                <NavLink to='/about' className='nav-link'>
                                    About
                                </NavLink>
                            </div>
                            <div className='d-flex align-items-center link'>
                                <MdMedicalServices className='mx-2' />
                                <NavLink to='/services' className='nav-link'>
                                    Services
                                </NavLink>
                            </div>
                            <div className='d-flex align-items-center link'>
                                <MdPermContactCalendar className='mx-2' />
                                <NavLink to='/contact' className='nav-link'>
                                    Contact
                                </NavLink>
                            </div>
                            <NavLink to='/signup' className='btn signup'>
                                Sign Up
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
