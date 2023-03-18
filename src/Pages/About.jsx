import React from 'react';
import { Container } from 'react-bootstrap';
import Hero from '../Component/Hero';

const About = () => {
    return (
        <>
            <Hero
                // images='About.jpg'
                title='About Us'
            />
            <section className='my-5'>
                <Container>
                    <div>
                        <h2>OUR HISTORY</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Reiciendis consequatur voluptatibus
                            reprehenderit aspernatur ex rem impedit perferendis
                            dolorem eveniet velit praesentium commodi ab, cum
                            labore aperiam laborum harum sit corporis! Lorem
                            ipsum dolor sit amet, consectetur adipisicing elit.
                            Reiciendis consequatur voluptatibus reprehenderit
                            aspernatur ex rem impedit perferendis dolorem
                            eveniet velit praesentium commodi ab, cum labore
                            aperiam laborum harum sit corporis!
                        </p>
                    </div>
                    <div className='my-5'>
                        <h2>OUR MISSON</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Reiciendis consequatur voluptatibus
                            reprehenderit aspernatur ex rem impedit perferendis
                            dolorem eveniet velit praesentium commodi ab, cum
                            labore aperiam laborum harum sit corporis!
                        </p>
                    </div>
                    <div>
                        <h2>OUR VISION</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Reiciendis consequatur voluptatibus
                            reprehenderit aspernatur ex rem impedit perferendis
                            dolorem eveniet velit praesentium commodi ab, cum
                            labore aperiam laborum harum sit corporis!
                        </p>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default About;
