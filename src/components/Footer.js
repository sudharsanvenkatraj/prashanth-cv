import React from 'react';
import footerimg from '../asserts/prasanth/images/footer-img.jpg'
import { FaLinkedinIn } from "react-icons/fa";
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

export default function Footer() {
    function sendHandler(e) {
        e.preventDefault();
        // let data = {
        //     user_name : e.target.user_name.value,
        //     user_email : e.target.user_email.value,
        //     user_message : e.target.user_message.value
        // }

        emailjs.sendForm('service_zklilqv', 'template_4stk7ik', e.target, '1T4iqO5X7Fe4KawEP')
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent Successfully'
                })
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    icon: 'error',
                    title: 'Ooops, something went wrong',
                    text: error.text,
                })
            });
        e.target.reset()
        // console.log(data)
    }
    return (
        <>

            <footer class="site-footer">
                <div class="site-container">
                    <div class="footer-inner">
                        <div class="footer-info">
                            <div class="footer-info__left">
                                <img src={footerimg} alt="about me " />
                                <p>Read more about me</p>
                            </div>
                            <div class="footer-info__right">
                                <h5>Get In Touch</h5>
                                <p class="footer-phone">Phone: +44 07384020315</p>
                                <p>Email : venkatmprashanth@gmail.com</p>
                                <div class="social-icons">
                                    <FaLinkedinIn style={{ color: '#c18f59' }} />

                                </div>
                            </div>
                        </div>
                        <div class="footer-contact-form">
                            <h5>Contact Form</h5>
                            <form class="contact-form" onSubmit={(event) => sendHandler(event)}>
                                <div class="contact-form__input">
                                    <input type="text" name="user_name" placeholder="Name" />
                                    <input type="email" name="user_email" placeholder="Email" />
                                </div>
                                <textarea name="user_message"></textarea>
                                <input type="submit" name="submit" value="Submit" class="submit-button" />
                            </form>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
};