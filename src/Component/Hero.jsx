import React from 'react';
import { Button } from 'react-bootstrap';
const Hero = props => {
    const { images, title, content, button } = props;
    return (
        <>
            <section className='hero'>
                <div className='background-img'>
                    {/* <div
                    style={{
                        backgroundImage: '../public/images/About.jpg',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        height: '100vh',
                        width: '100%',
                    }}> */}
                    <div className='d-flex flex-column justify-content-center align-items-center h-100 p-lg-0 p-5 text-center'>
                        <h1
                            style={{
                                fontSize: 'clamp(2.5rem,5vw,4rem)',
                            }}>
                            {title}
                        </h1>
                        <p
                            style={{
                                fontSize: '20px',
                                color: 'white',
                                fontWeight: '700',
                            }}>
                            {content}
                        </p>
                        {button && (
                            <Button className='hero-btn'>{button}</Button>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
