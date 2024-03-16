
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './css/project.css';

export default function Projects() {

    const styles = {
        display: 'flex',
        'align-items': 'center',
        'justify-content': 'center',

    }
    return (
        <>
            <section>
                <Row xs={1} md={2} lg={2} style={{ margin: '100px' }}>
                    <Col style={styles}>
                        <div>
                            <article class="card">
                                <header class="card__thumb">
                                    <a href=""><img src="https://images.unsplash.com/photo-1501443762994-82bd5dace89a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" /></a>
                                </header>
                                <date class="card__date">
                                    <span class="card__date__day">11</span>
                                    <br />
                                    <span class="card__date__month">Jan</span>
                                </date>
                                <div class="card__body">
                                    <div class="card__category"><a href="#">pet</a></div>
                                    <h2 class="card__title"><a href="#">an ice cream sundae party！</a></h2>
                                    <div class="card__subtitle">an ice cream sundae party！</div>
                                    <p class="card__description">5. Pour the mixture into a non-stick container and then freeze overnight. Take treating your dog a step further by turning it into an ice cream sundae party!</p>
                                </div>
                                <footer class="card__footer">
                                    <span class="icon ion-clock"></span> 10 mins ago
                                    <span class="icon ion-chatbox"></span><a href="#"> 145 comments</a>
                                </footer>
                            </article>
                        </div>
                    </Col>
                    <Col style={styles}>
                        <div>
                            <article class="card">
                                <header class="card__thumb">
                                    <a href=""><img src="https://images.unsplash.com/photo-1501443762994-82bd5dace89a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" /></a>
                                </header>
                                <date class="card__date">
                                    <span class="card__date__day">11</span>
                                    <br />
                                    <span class="card__date__month">Jan</span>
                                </date>
                                <div class="card__body">
                                    <div class="card__category"><a href="#">pet</a></div>
                                    <h2 class="card__title"><a href="#">an ice cream sundae party！</a></h2>
                                    <div class="card__subtitle">an ice cream sundae party！</div>
                                    <p class="card__description">5. Pour the mixture into a non-stick container and then freeze overnight. Take treating your dog a step further by turning it into an ice cream sundae party!</p>
                                </div>
                                <footer class="card__footer">
                                    <span class="icon ion-clock"></span> 10 mins ago
                                    <span class="icon ion-chatbox"></span><a href="#"> 145 comments</a>
                                </footer>
                            </article>
                        </div>
                    </Col>
                </Row>
            </section>
        </>
    )
}