import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './header.css'
//import MyGlobe from './globe';

function HeaderSec() {
    return (
        <Container fluid id ='head'>
            <Row className="justify-content-center align-items-center" style={{ height: '100vh' }}>
                
                <Col>
                    <h1>Welcome to ResourceMap</h1>
                </Col>
            </Row>
        </Container>
    );
}

export default HeaderSec;
