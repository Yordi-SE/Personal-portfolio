import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeader";
import {BsInfoCircleFill} from "react-icons/bs";
import {Animate} from 'react-simple-animate';
import './style.scss';

function Contact() {
  const [state, setState] = useState(false)
  function handleSubmit() {
    setState(true)
  }
  return (
    <div>
      <section id="root" className="contact">
        <PageHeaderContent headerText={"Contact Me"} icon={<BsInfoCircleFill size={40}/>}/>
        <div className="contact_content">
          <Animate play duration={2} delay={0} start={{
            transform: "translateX(-200px)"
          }} end={{
            transform: "translateX(0px"
          }}>
            <h3 className="contact_content_header-text">Let's talk</h3>
          </Animate>
          <Animate play duration={2} delay={0} start={{
            transform: "translateX(200px)"
          }}
          end={{
            transform: "translateX(0px)"
          }}>
            <div className="contact_content_form">
              {
                state ? <p className="handlesubmit">Thank You So much For Contacting</p> : <form className="contact_content_form" onSubmit={handleSubmit}>
                <div className="contact_content_form_controlswrapper">
                    <div className="nameWrapper">
                        <input name="name" className="inputName" type={'text'} required/>
                        <label htmlFor="name" className="nameLabel">Name</label>
                    </div>
                    <div className="emailWrapper">
                    <input name="email" className="inputEmail" type={'text'} required/>
                        <label htmlFor="email" className="emailLabel">Email</label>
                    </div>
                    <div className="descriptionWrapper">
                      <textarea name="description" typeof={'text'} className="inputDescription" required/>
                      <label htmlFor="description" className="descriptionLabel">Description</label>
                    </div>
                </div>
                <button>Submit</button>
                </form>
              }

            </div>
          </Animate>
        </div>
      </section>
      </div>
  )
}

export default Contact;