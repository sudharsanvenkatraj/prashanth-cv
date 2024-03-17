
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './css/project.css';

export default function Projects() {

    const styles = {
        display: 'flex',
        'alignItems': 'center',
        'justifyContent': 'center',

    }
    return (
        <>
            <section>
                <Row xs={1} md={2} lg={2} style={{ margin: '100px' }}>
                    <Col style={styles}>
                        <div>
                            <div className="card">
                                <header className="card__thumb">
                                    <a href="/"><img src="https://images.unsplash.com/photo-1501443762994-82bd5dace89a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt='' /></a>
                                </header>
                                <div className="card__date">
                                    <span className="card__date__day">11</span>
                                    <br />
                                    <span className="card__date__month">Jan</span>
                                </div>
                                <div className="card__body">
                                    <div className="card__category">pet</div>
                                    <h2 className="card__title"> ice cream sundae party</h2>
                                    <div className="card__subtitle">an ice cream sundae party！</div>
                                    <p className="card__description">5. Pour the mixture into a non-stick container and then freeze overnight. Take treating your dog a step further by turning it into an ice cream sundae party!</p>
                                </div>
                                <footer className="card__footer">
                                    <span className="icon ion-clock"></span> 10 mins ago
                                    <span className="icon ion-chatbox"></span>145 comments
                                </footer>
                            </div>
                        </div>
                    </Col>
                    <Col style={styles}>
                        <div>
                            <div className="card">
                                <header className="card__thumb">
                                    <a href="/"><img src="https://images.unsplash.com/photo-1501443762994-82bd5dace89a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt='' /></a>
                                </header>
                                <div className="card__date">
                                    <span className="card__date__day">11</span>
                                    <br />
                                    <span className="card__date__month">Jan</span>
                                </div>
                                <div className="card__body">
                                    <div className="card__category">pet</div>
                                    <h2 className="card__title">n ice cream sundae party！</h2>
                                    <div className="card__subtitle">an ice cream sundae party！</div>
                                    <p className="card__description">5. Pour the mixture into a non-stick container and then freeze overnight. Take treating your dog a step further by turning it into an ice cream sundae party!</p>
                                </div>
                                <footer className="card__footer">
                                    <span className="icon ion-clock"></span> 10 mins ago
                                    <span className="icon ion-chatbox"></span>145 comments
                                </footer>
                            </div>
                        </div>
                    </Col>
                </Row>
            </section>
        </>
    )
}