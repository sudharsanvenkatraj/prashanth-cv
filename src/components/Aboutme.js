import React from 'react';
import aboutme from '../asserts/prasanth/images/blogimage.png'
import './css/aboutme.css';

export default function Aboutme() {

    return (
        <>
            <section class="fh5co-about-me">
                <div class="about-me-inner site-container">
                    <article class="portfolio-wrapper">
                        <div class="portfolio__img">
                            <img src={aboutme} class="about-me__profile" alt="about me profile " />
                        </div>
                        <div class="portfolio__bottom">
                            <div class="portfolio__name">
                                <span>V</span>
                                <h2 class="universal-h2">enkat Prashanth Mohan</h2>
                            </div>
                            <p>Data-Driven Problem Solver: Unlocking Business Potential with Analytics.</p>
                        </div>
                    </article>
                    <div class="about-me__text">
                        <div class="about-me-slider">
                            <div class="about-me-single-slide">
                                <h2 class="universal-h2 universal-h2-bckg">About me</h2>
                                <p><span>A</span> s a Robotics and Automation Engineer turned Business Analyst, I have spent the last three years honing my skills in analysis, process optimisation and team leadership. I am a Master's student in Management with a focus on Business Analytics to augment my analytical capabilities and empower me to make data-driven decisions. Also, completed an internship as a data analyst at Waters Corporation.
                                    <br />
                                    <br />
                                    <br />
                                    Driven by a fascination for technology and business, I have a keen interest in analysing data to gain valuable insights that can be translated into actionable strategies. My detail-oriented approach and out-of-the-box thinking enable me to identify opportunities that others might miss, while my leadership experience has taught me how to motivate and manage teams effectively.
                                    <br />
                                    <br />
                                    <br />
                                    In my previous role, I served as an interim team leader, where I was able to leverage my technical expertise and people skills to drive significant improvements in operational efficiency and team morale. I am now eager to bring my unique blend of skills and experiences to a new challenge and make a positive impact in the field of business analytics.
                                </p>
                                {/* <h4>Author</h4> */}
                                {/* <a class="p-white">See me</a> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="about-me-bckg"></div>
            </section>
            <section>
            <h2 class="universal-h2 universal-h2-bckg" style={{'marginBottom':'35px'}}>TIMELINE</h2>
                <ul>
                <li style={{ '--accent-color': '#41516C' }}>
                        <div class="date">June 2012 - May 2015</div>
                        <div class="title">Diploma</div>
                        <div class="descr">Electronics Engineering at PSG College of Technology</div>
                    </li>
                    <li style={{ '--accent-color': '#FBCA3E' }} >
                        <div class="date">June 2012 - May 2015</div>
                        <div class="title">Bachelor of Engineering</div>
                        <div class="descr">Robotics & Automation at PSG College of Technology</div>
                    </li>
                    <li style={{ '--accent-color': '#E24A68' }}>
                        <div class="date">June 2018- Feb 2019</div>
                        <div class="title">Intern</div>
                        <div class="descr">Nizan Robotics</div>
                    </li>
                    <li style={{ '--accent-color': '#1B5F8C' }}>
                        <div class="date">March 2019 - Dec 2019</div>
                        <div class="title">Regional Coordinator</div>
                        <div class="descr">SWF</div>
                    </li>
                    <li style={{ '--accent-color': '#4CADAD' }}>
                        <div class="date">Jan 2020 - July 2021</div>
                        <div class="title">Operations Analyst</div>
                        <div class="descr">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, non.</div>
                    </li>
                    <li style={{ '--accent-color': '#664cad' }}>
                        <div class="date">July 2021 - Dec 2022</div>
                        <div class="title">Operations Executive</div>
                        <div class="descr">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, non.</div>
                    </li>
                    <li style={{ '--accent-color': '#1aa0d2'}}>
                        <div class="date">Jan 2023 - May 2024</div>
                        <div class="title">M.Sc. Management with Business Analytics</div>
                        <div class="descr">Bournemouth University UK</div>
                    </li>
                    <li style={{ '--accent-color': '#337a1e' }}>
                        <div class="date">Jan 2023 - May 2024</div>
                        <div class="title">Data Analyst Intern</div>
                        <div class="descr">Waters Corporation</div>
                    </li>
                </ul>
            </section>
        </>
    )
};