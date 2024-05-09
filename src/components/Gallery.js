import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function Gallery() {
  return (
    <>

        <Container>
            <Row>
                <h2 className='text-center gallery-head'>WHAT WE DO</h2>
            </Row>
            <Row>
                <Col md={8}>
                    <Row> 
                    <Col className='cardd'>
                        <div className='gallery-kitchen'><h1 className='gallery-heading p-5 text-light'>KITCHEN</h1></div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='cardd'>
                        <div className='gallery-bedroom'><h1 className='gallery-heading text-light'>BEDROOM</h1></div>

                        </Col>
                        <Col className='cardd'>
                        <div className='gallery-living'><h1 className='gallery-heading text-light'>LIVING</h1></div>

                        </Col>
                    </Row>
                </Col>
                <Col md={4} className='cardd'>
                <div className='gallery-dining'><h1 className='gallery-heading-dining text-light'>DINING</h1></div>

                </Col>
            </Row>
        </Container>
    </>
  )
}
