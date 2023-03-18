import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Hero from '../Component/Hero';
import Tripcard from '../Component/Tripcard';
import deatils from '../Services/details';

const Services = () => {
    return (
        <>
            <Hero
                // images='About.jpg'
                title='Services'
            />
            <section className='my-5'>
                <div className='text-center'>
                    <h2>Recent Trips</h2>
                    <p className='px-lg-0 px-4'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Id, natus.
                    </p>
                </div>
                <Container className='my-5'>
                    <Row className=''>
                        {deatils.map((deatil, ind) => {
                            return (
                                <Tripcard
                                    key={ind}
                                    image={deatil.image}
                                    title={deatil.title}
                                    content={deatil.content}
                                />
                            );
                        })}
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Services;
