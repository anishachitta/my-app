import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './what.css'


function Done()
{
    return (
        <Container id='body'>
            <h1>Mission</h1>
            <Row>
                <Col>
                <h2>
                    Save. Create. Send. Allocate
                </h2>

                <p>
                We visualize resources required from one non-profit location to the next. Use our tools to efficiently send and fund resources across the globe.
                </p>

                </Col>                
                </Row>



                <Row>
                <Col>
                <h2>
                    Topological Graphing
                </h2>

                <p>     
            Use our state of the art mapping tool to see the quantity of each 
            resource in various locations. See suggested ways to best distribute 
                </p>

                </Col>
                </Row>


                <Row>
                <Col>
                <h2>
                    Local Workers, more more more!
                </h2>
            
                <p>
                Allow requests from underfunded areas to request for aid! Easily allocate additional resources 
                </p>
                
                </Col>
                </Row>
        
        </Container>
    );
}


export default Done;