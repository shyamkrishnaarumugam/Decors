import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faHandHoldingHand, faPeopleGroup, faPersonDigging, faTruck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function Icons() {
  return (
    <>
    <div className='inline-content'>
    
    <h1 className='hr-lines'>PROJECT COMPLETION IN <span className='span-text'> 40 WORKING DAYS</span></h1>
    
    </div>
    <Container>
        <Row>
            <Col className='text-center'><FontAwesomeIcon icon={faPeopleGroup} className='icons-size' /><p>Talk to our Interior Designer</p> </Col>
            <Col className='text-center'><FontAwesomeIcon icon={faPenToSquare} className='icons-size' /> <p>Detailed Drawing and Approval</p></Col>
            <Col className='text-center'><FontAwesomeIcon icon={faPersonDigging} className='icons-size' /> <p>Production at Own Factories</p></Col>
            <Col className='text-center'><FontAwesomeIcon icon={faTruck} className='icons-size' /> <p>Material Delivery & Execution</p></Col>
            <Col className='text-center'><FontAwesomeIcon icon={faHandHoldingHand} className='icons-size' /><p>On Time Project Hand Over</p></Col>
        </Row>
    </Container>
    </>
  )
}
