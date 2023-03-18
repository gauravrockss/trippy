import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Hero from '../Component/Hero';

const Contact = () => {
    const [data, setData] = useState({
        fullname: '',
        phone: '',
        email: '',
        msg: '',
    });

    const [isSend, setIsSend] = useState(false);

    const handleChange = event => {
        const { name, value } = event.target;

        setData(preVal => {
            return {
                ...preVal,
                [name]: value,
            };
        });
    };

    const formSubmit = e => {
        e.preventDefault();
        setIsSend(true);
    };
    return (
        <>
            <Hero title='Conatct Us' />
            <div className='my-4 text-center'>
                <h1>Contact Us</h1>
            </div>
            <Container>
                <Row className=' '>
                    <Col lg={6} md={12} className='mx-auto'>
                        {!isSend ? (
                            <Form onSubmit={formSubmit}>
                                <Form.Group
                                    className='mb-3'
                                    controlId='exampleForm.ControlInput1'>
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control
                                        type='text'
                                        name='fullname'
                                        value={data.fullname}
                                        onChange={handleChange}
                                        placeholder='Enter Your Name'
                                        required
                                    />
                                </Form.Group>
                                <Form.Group
                                    className='mb-3'
                                    controlId='exampleForm.ControlInput1'>
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control
                                        type='text'
                                        name='phone'
                                        value={data.phone}
                                        onChange={handleChange}
                                        placeholder='Enter Your Mobile Number'
                                        required
                                    />
                                </Form.Group>
                                <Form.Group
                                    className='mb-3'
                                    controlId='exampleForm.ControlInput1'>
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control
                                        type='email'
                                        name='email'
                                        value={data.email}
                                        onChange={handleChange}
                                        placeholder='Enter Your Email'
                                        required
                                    />
                                </Form.Group>
                                <Form.Group
                                    className='mb-3'
                                    controlId='exampleForm.ControlTextarea1'>
                                    <Form.Label>Example textarea</Form.Label>
                                    <Form.Control
                                        as='textarea'
                                        name='msg'
                                        value={data.msg}
                                        rows={3}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                <Button variant='outline-primary' type='submit'>
                                    Submit form
                                </Button>
                            </Form>
                        ) : (
                            <h5 className='text-center my-5 '>
                                Form Submit Sucessfully
                            </h5>
                        )}
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Contact;
