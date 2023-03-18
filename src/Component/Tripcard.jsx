import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Image from './Images';

const Tripcard = props => {
    const { image, title, content } = props;
    return (
        <>
            <Col lg={4} md={6} sm={12}>
                <Card
                    className='cards mb-4 mb-lg-0'
                    style={{ position: 'unset' }}>
                    <Image name={image} />
                    <Card.Body>
                        <Card.Title style={{ fontSize: '30px' }}>
                            {title}
                        </Card.Title>

                        <Card.Text>{content}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default Tripcard;
