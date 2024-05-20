import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function Gallery() {
  return (
    <>

        <Container className='spacer'>
            <Row>
                <h2 className='text-center gallery-head'>WHAT WE DO</h2>
            </Row>
            <Row>
                <Col md={8}>
                    <Row> 
                    <Col>
                        <div className='cardd'>
                        <div className='gallery-kitchen'><h1 className='gallery-heading p-5 text-light mb-auto'>KITCHEN</h1></div>
                        </div>
                        </Col>
                    </Row>
                    <Row className='mt-3'>
                        <Col md={6}>
                            <div  className='cardd'>
                        <div className='gallery-bedroom'><h1 className='gallery-heading text-light mb-auto'>BEDROOM</h1></div>
                        </div>
                        </Col>
                        <Col md={6}>
                            <div className='cardd'>
                        <div className='gallery-living'><h1 className='gallery-heading text-light mb-auto'>LIVING</h1></div>
                        </div>
                        </Col>
                    </Row>
                </Col>
                <Col md={4} className=''>
                    <div className='cardd'>
                <div className='gallery-dining'><h1 className='gallery-heading-dining text-light mb-0'>DINING</h1></div>
                </div>
                </Col>
            </Row>
        </Container>
    </>
  )
}
