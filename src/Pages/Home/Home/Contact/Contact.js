import React from 'react';
import './Contact.css'
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
import Zoom from 'react-reveal/Zoom';

const Contact = () => {
    const sendEmail = (event) => {
        event.preventDefault();

        emailjs.sendForm('service_lxld6ja', 'template_22q0k04', event.target, 'h8c9-PO5q7X9zDh7g')
            .then((result) => {
                  swal("Good job!", "Thanks for the your email!", "success");
                event.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <Zoom bottom>
        <div className='my-2 lg:mx-28 mx-5 contact' id='contact'>
            <div className='contact-form lg:mx-20'>
                <SectionTitle>Get In Touch</SectionTitle>
                <div>
                    <form onSubmit={sendEmail} class="form lg:mx-32">

                        <div class="form">
                            <div class="input-container ic1">
                                <input id="name" name='name' class="inputContact" type="text" placeholder=" " required/>
                                <div class="cut"></div>
                                <label for="firstname" class="placeholder">Name<sup>*</sup></label>
                            </div>
                            <div class="input-container ic2">
                                <input id="email" name='email' class="inputContact" type="text" placeholder=" " required/>
                                <div class="cut cut-short"></div>
                                <label for="email" class="placeholder">Email<sup>*</sup></label>
                                
                            </div>
                            <div class="input-container ic2">
                                <input id="subject" name='subject' class="inputContact" type="text" placeholder=" " required/>
                                <div class="cut"></div>
                                <label for="lastname" class="placeholder">Subject<sup>*</sup></label>
                            </div>
                            
                            <div class="input-container ic2">
                                <textarea id="message" name='message' class="inputContact text-area" type="text" placeholder=" " required/>
                                <div class="cut cut-short"></div>
                                <label for="email" class="placeholder">Message<sup>*</sup></label>
                                
                            </div>
                            <button type="text" class="submit">submit</button>
                        </div>
                    </form>
                </div>

            </div>

        </div>
        </Zoom>
    );
};

export default Contact;