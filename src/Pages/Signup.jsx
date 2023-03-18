import React from 'react';
import Form from 'react-bootstrap/Form';
import { dates, months, years } from './../Services/dob';
import { Container, Button } from 'react-bootstrap';

const Signup = () => {
    return (
        <>
            <section>
                <Container className='wrapper'>
                    <div className='form mb-5'>
                        <div className='form-header mt-3 text-center'>
                            <h4 style={{ fontWeight: '500' }}>
                                Create a new account
                            </h4>
                            <p>It's quick and easy.</p>
                        </div>
                        <Form className='px-3'>
                            <div className='d-inline-flex mt-3'>
                                <Form.Group
                                    className='mb-3 w-50'
                                    controlId='formBasicEmail'>
                                    <Form.Control
                                        type='text'
                                        placeholder='first name'
                                    />
                                </Form.Group>

                                <Form.Group
                                    className='mb-3 w-50 ms-2'
                                    controlId='formBasicPassword'>
                                    <Form.Control
                                        type='text'
                                        placeholder='Surname'
                                    />
                                </Form.Group>
                            </div>
                            <Form.Group
                                className='mb-3 '
                                controlId='formBasicEmail'>
                                <Form.Control
                                    type='text'
                                    placeholder='Mobile number or email address'
                                />
                            </Form.Group>
                            <Form.Group
                                className='mb-2'
                                controlId='formBasicEmail'>
                                <Form.Control
                                    type='text'
                                    placeholder='New password'
                                />
                            </Form.Group>
                            <h3 className='m-0 p-0'>
                                <Form.Label
                                    style={{
                                        fontSize: '15px',
                                        fontWeigth: '900',
                                    }}>
                                    Date of birth
                                </Form.Label>
                            </h3>
                            <div className='d-inline-flex mb-2'>
                                <Form.Select
                                    aria-label='Default select example'
                                    className='select'>
                                    {months.map(month => (
                                        <option value={month} key={month}>
                                            {month}
                                        </option>
                                    ))}
                                </Form.Select>
                                <Form.Select
                                    aria-label='Default select example'
                                    className='select mx-3'>
                                    {years.map(year => (
                                        <option value={year} key={year}>
                                            {year}
                                        </option>
                                    ))}
                                </Form.Select>
                                <Form.Select
                                    aria-label='Default select example'
                                    className='select'>
                                    {dates.map(date => (
                                        <option value={date} key={date}>
                                            {date}{' '}
                                        </option>
                                    ))}
                                </Form.Select>
                            </div>
                            <h3 className='m-0 p-0'>
                                <Form.Label
                                    style={{
                                        fontSize: '15px',
                                        fontWeigth: '900',
                                    }}>
                                    Gender
                                </Form.Label>
                            </h3>
                            <div className='d-inline-flex m-0 p-0 mb-3'>
                                <div className='allgender d-inline-flex justify-content-between'>
                                    <span>Female</span>
                                    <span>
                                        <input type='radio' name='g' />
                                    </span>
                                </div>
                                <div className='allgender d-inline-flex justify-content-between mx-3'>
                                    <span>Male</span>
                                    <span>
                                        <input type='radio' name='g' />
                                    </span>
                                </div>
                                <div className='allgender d-inline-flex justify-content-between'>
                                    <span>Custom</span>
                                    <span>
                                        <input type='radio' name='g' />
                                    </span>
                                </div>
                            </div>
                            <div style={{ lineHeight: '1' }}>
                                <span
                                    style={{
                                        fontSize: '12px',
                                    }}>
                                    People who use our service may have uploaded
                                    your contact information to Facebook.{' '}
                                </span>
                                <a href='#link'>Learn More</a>
                            </div>
                            <div className='my-3' style={{ lineHeight: '1' }}>
                                <span
                                    style={{
                                        fontSize: '12px',
                                    }}>
                                    By clicking Sign Up, you agree to our{' '}
                                    <a href='#link'>Terms , Privacy Policy</a>{' '}
                                    and <a href='#link'> Cookies Policy.</a> You
                                    may receive SMS notifications from us and
                                    can opt out at any time.
                                </span>
                            </div>
                            <div className='text-center my-3'>
                                <Button className='signupbtn'>Sign up</Button>
                            </div>
                            <div className='text-center mb-3'>
                                <a href='#link' style={{ fontSize: '16px' }}>
                                    Already have an account?
                                </a>
                            </div>
                        </Form>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default Signup;
