import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import cert from '../asserts/prasanth/images/certificate.jpeg';
import Container from 'react-bootstrap/Container';


export default function Certificates() {

    const styleImage = {
        'display': 'block',
        'margin-left': 'auto',
        'margin-right': 'auto',
        'width': '80%',
        'margin-top': '20px',
        'margin-bottom': '20px',
        'box-shadow': '0 0 20px rgba(0, 0, 0, 0.1)'
    }

    return (

        <>
        <h2 class="universal-h2 universal-h2-bckg">Certificates</h2>
            {/* <h1> Certificates</h1> */}
            <section>
                <Container>
                    <Row xs={1} md={1} lg={1} >
                        <Col >
                            <div >
                                <img src={cert} alt='certificate' style={styleImage} />
                            </div>
                        </Col>
                    </Row>
                </Container>

            </section>
        </>
    )
}