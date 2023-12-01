import React from "react";
import PageHeaderContent from "../../components/pageHeader";
import {BsInfoCircleFill} from "react-icons/bs";
import "./styles.scss";
import { Animate } from "react-simple-animate";
import {DiApple, DiAndroid} from 'react-icons/di';
import {FaDev, FaDatabase} from 'react-icons/fa';

function About() {
  const personalDetails = [
    {
      label: "Name",
      value: "Yordanos Lemmawork",
    },
    {
      label: "Age",
      value: "22",
    },
    {
      label: "Address",
      value: "Addis Ababa, Ethiopia",
    },
    {
      label: "Email",
      value: "lemmaworkyordanos@gmail.com",
    }
  ]
  const jobSummery = "My name is Yordanos Lemmawork. I'm 4th-year Mechanical Engineering student at Addis Ababa University, simultaneously advanced as a Frontend Developer from ALX Software Engineering. Proficient in multiple programming languages. I am passionate about utilizing my technical skills and problem-solving abilities to make a positive impact on society. My journey extends beyond academia; I am an active participant in the vibrant Africa to Silicon Valley (A2SV) community. Within this dynamic ecosystem, I am a part of A2SV G5 in-person Education."
  return (
    <div>
      <section id="root" className="about">
        <PageHeaderContent headerText={"About Me"} icon={<BsInfoCircleFill size={40}/>}/>

        <div className="about_content">
          <div className="about_content_personalWrapper">        <Animate play duration={2.5} delay={0} start={{
            transform: 'translateX(-700px)'
          }}
          end={{
            transform: 'translateY(0)'
          }}>
          <h3>Frontend Developer</h3>
          <p>{jobSummery}</p>
        </Animate>

        <Animate play duration={2.5} delay={0} start={{
            transform: 'translateX(700px)'
          }}
          end={{
            transform: 'translatex(0)'
          }}>
        <h3 className="personal-info">Personal Information</h3>

          <ul>
            {
              personalDetails.map((item, i) => {
                return (
                  <li key={i}>
                    <span className="title">{item.label}</span>
                    <span className="value">{item.value}</span>
                  </li>
)})
}
          </ul>
        </Animate>
          </div>

          <div className="about_content_servicesWrapper">
          <Animate play duration={2.5} delay={0} start={{
            transform: 'translateX(700px)'
          }}
          end={{
            transform: 'translatex(0)'
          }}>
                    <div className="about_content_servicesWrapper_innerContent">
            <div>
              <FaDev size={60} color="var( --yellow-theme-main-color)"/>
            </div>
            <div>
              <DiAndroid size={60} color="var( --yellow-theme-main-color)"/>
            </div>
            <div>
              <FaDatabase size={60} color="var( --yellow-theme-main-color)"/>
            </div>
            <div>
              <DiApple size={60} color="var( --yellow-theme-main-color)"/>
            </div>
            </div>
          </Animate>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About;