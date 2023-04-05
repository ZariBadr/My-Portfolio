import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id="contact">
      <section id='Get In Touch'>
        <h5>Get In Touch</h5>
        <h2>Contact</h2>

        <div className="container contact__container">
          <div className="contact__options">
              <article className='contact__option'>
                <MdOutlineEmail className='contact__option-icon'/> 
                <h4>Email</h4>
                <h5>badredzari@gmail.com</h5>
                <a href="mailto:dummyegator@gmail.com" target="_blank">Send a message</a>
                <RiMessengerLine className='contact__option-icon'/>
                <h4>Messanger</h4>
                <h5>Badreddine Zari</h5>
                <a href="https://m.me/profile" target="_blank">Send a message</a>
                <BsWhatsapp className='contact__option-icon'/>
                <h4>Whatsapp</h4>
                <h5>+1234567890</h5>
                <a href="https://web.whatsapp.com" target='_blank'>Send a message</a>
              </article>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required/>
            <input type="text" name='email' placeholder='Your Email' required/>
            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
        </div>
      </section>
    </section>
  )
}

export default Contact