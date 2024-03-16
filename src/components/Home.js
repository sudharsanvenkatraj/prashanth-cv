import React from 'react';
import prasanth from '../asserts/prasanth/images/prasanthDP.png';
import { GrAchievement } from "react-icons/gr";
import { FaJournalWhills } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";

export default function Home() {
    let dd = "Read bio >"
    return (
        <>

            <section class="fh5co-top-banner">
                <div class="top-banner__inner site-container">
                    <div class="top-banner__image">
                        <img src={prasanth} alt="author" />
                    </div>
                    <div class="top-banner__text">
                        <div class="top-banner__text-up">
                            <span class="brand-span">Hello! I'm</span>
                            <h2 class="top-banner__h2">Venkat</h2>
                        </div>
                        <div class="top-banner__text-down">
                        <h2 class="top-banner__h2">Prashanth</h2>
                        <h2 class="top-banner__h2" style={{marginLeft: '120px'}}> Mohan</h2>
                            <span class="brand-span">Data-Driven Problem Solver: Unlocking Business Potential with Analytics</span>
                        </div>
                        {/* <p>Data-Driven Problem Solver: Unlocking Business Potential with Analytics</p> */}
                        <a href="aboutme" class="brand-button"> {dd}</a>
                    </div>
                </div>
            </section>

            <div class="fh5co-counter counters">
                <div class="counter-inner site-container">
                    <div class="single-count">
                        <span class="count" data-count="50">4</span>
                        <div class="single-count__text">
                            <GrAchievement style={{ fontSize: '37px', marginRight: "10px" }} />
                            <p>Achivements</p>
                        </div>
                    </div>
                    <div class="single-count">
                        <span class="count" data-count="600">3</span>
                        <div class="single-count__text">
                            <PiCertificateFill style={{ fontSize: '37px', marginRight: "10px" }} />
                            <p> Certifications</p>
                        </div>
                    </div>
                    <div class="single-count">
                        <span class="count" data-count="2000">3</span>
                        <div class="single-count__text">
                            <FaJournalWhills style={{ fontSize: '37px' }} />
                            <p>Journals published</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
};
