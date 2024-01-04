import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import './style.scss';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset()

    emailjs.sendForm('service_9ojfmz5', 'template_0mlbtd1', form.current, '3f07KRNZ5e9uexiae')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  useEffect(() => {
    Aos.init({duration: 2000});
  }, [])
  return (
    <div className='div2'>
        <h3 className="contact_content_header-text" data-aos="fade-left">Lets talk</h3>

    {/* <div className="contact_content_form"> */}
    <form ref={form} onSubmit={sendEmail} className='contact_content_form' data-aos="fade-left">
    <div  className="contact_content_form_controlswrapper">
    <div className='nameWrapper' data-aos="fade-left">
      <input type="text" name="user_name" className="inputName" required/>
      <label htmlFor="user_name" className="nameLabel">Name</label>

    </div>
    <div className="emailWrapper" data-aos="fade-left">
      <input type="email" name="user_email" className="inputEmail" required/>
      <label className="emailLabel">Email</label>
    </div>
    <div className="descriptionWrapper" data-aos="fade-left">
      <textarea name="message" className="inputDescription" required/>
      <label className="descriptionLabel">Message</label>
    </div>
    </div>
      <input type="submit" value="Send" data-aos="fade-left"/>
    </form>

    </div>
  );
};
export default ContactUs