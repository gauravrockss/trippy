import React from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const Signup = () => {
    return (
        <>
            <div className='formsignup my-5'>
                <div className='text-center'>
                    <h2>Sign up</h2>
                    <p
                        className='mb-4'
                        style={{ fontSize: '1rem', color: '#666' }}>
                        Create a free account with your email.
                    </p>
                </div>
                <Form style={{ maxWidth: '300px' }}>
                    <Form.Group className='mb-3' controlId='formBasicEmail'>
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Enter Full name'
                        />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='formBasicEmail'>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type='email' placeholder='Enter email' />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formBasicPassword'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' placeholder='Password' />
                    </Form.Group>

                    <Button
                        variant='primary'
                        type='submit'
                        className='formbtn w-100'>
                        Submit
                    </Button>
                </Form>
                <div className='form-section mt-3'>
                    <p>
                        Have an account? <a href=''> Log in</a>{' '}
                    </p>
                </div>
            </div>
        </>
    );
};

export default Signup;
