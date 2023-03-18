import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Hero from '../Component/Hero';
import Section from '../Component/Section';
import Tripcard from '../Component/Tripcard';
import deatils from '../Services/details';

const Home = () => {
    return (
        <>
            <Hero
                images='About.jpg'
                title='Your Journey Your Story'
                content=' Choose Your Favourite Destination'
                button='Travel Plan'
            />
            <section className='my-5'>
                <div className='text-center'>
                    <h2>Popular Destination</h2>
                    <p className='px-lg-0 px-4'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Id, natus.
                    </p>
                </div>
                <Section
                    title='Taal Volcano , Batangas'
                    content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, officia pariatur! Iste est distinctio, qui blanditiis atque dolorem porro reiciendis quia nemo mollitia fugit perspiciatis quisquam necessitatibus soluta laborum odit!.qui blanditiis
                        atque dolorem porro reiciendis quia nemo mollitia 
                        fugit perspiciatis quisquam necessitatibus soluta laborum odit!'
                    images='img1.jpg'
                />
                <Section
                    title='Taal Volcano , Batangas'
                    content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, officia pariatur! Iste est distinctio, qui blanditiis atque dolorem porro reiciendis quia nemo mollitia fugit perspiciatis quisquam necessitatibus soluta laborum odit!.qui blanditiis
                        atque dolorem porro reiciendis quia nemo mollitia 
                        fugit perspiciatis quisquam necessitatibus soluta laborum odit!'
                    images='img.jpg'
                    reverse='true'
                />
                <Section
                    title='Taal Volcano , Batangas'
                    content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, officia pariatur! Iste est distinctio, qui blanditiis atque dolorem porro reiciendis quia nemo mollitia fugit perspiciatis quisquam necessitatibus soluta laborum odit!.qui blanditiis
                        atque dolorem porro reiciendis quia nemo mollitia 
                        fugit perspiciatis quisquam necessitatibus soluta laborum odit!'
                    images='img1.jpg'
                />
                <Section
                    title='Taal Volcano , Batangas'
                    content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, officia pariatur! Iste est distinctio, qui blanditiis atque dolorem porro reiciendis quia nemo mollitia fugit perspiciatis quisquam necessitatibus soluta laborum odit!.qui blanditiis
                        atque dolorem porro reiciendis quia nemo mollitia 
                        fugit perspiciatis quisquam necessitatibus soluta laborum odit!'
                    images='img.jpg'
                    reverse='true'
                />
            </section>

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

export default Home;
