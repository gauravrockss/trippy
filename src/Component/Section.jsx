import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Images from './Images';

const Section = props => {
    const { title, content, images, reverse = false } = props;
    return (
        <>
            <div className='mt-5 h-100'>
                <Container>
                    <Row
                        className={`text-lg-start ${
                            reverse && 'flex-row-reverse'
                        } align-items-center `}>
                        <Col lg={6} className='px-5'>
                            <h2>{title}</h2>
                            <p>{content}</p>
                        </Col>
                        <Col lg={6} className='mt-5'>
                            <div className='destination'>
                                <Images name={images} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Section;
