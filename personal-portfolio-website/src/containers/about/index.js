import React, {useEffect} from "react";
import PageHeaderContent from "../../components/pageHeader";
import {BsInfoCircleFill} from "react-icons/bs";
import "./styles.scss";
import name from './images/name.jpg'
import Aos from "aos";
import 'aos/dist/aos.css';
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  Input,
  SkeletonText,
  Text,
} from '@chakra-ui/react'
import { FaLocationArrow, FaTimes } from 'react-icons/fa'

function About() {
  useEffect(() => {
    Aos.init({duration: 2000});
  },[]);
  const jobSummery = "My name is Yordanos Lemmawork. I'm 4th-year Mechanical Engineering student at Addis Ababa University, simultaneously advanced as a Frontend Developer from ALX Software Engineering. Proficient in multiple programming languages. I am passionate about utilizing my technical skills and problem-solving abilities to make a positive impact on society. My journey extends beyond academia; I am an active participant in the vibrant Africa to Silicon Valley (A2SV) community. Within this dynamic ecosystem, I am a part of A2SV G5 in-person Education."
  return (
    <div>
      <section>
        <PageHeaderContent headerText={"About Me"} icon={<BsInfoCircleFill  size={40} />} idname="ABOUT"/>

        <div className="about_content">
          <div className="about_content_personalWrapper" >        
          <h3 data-aos="fade-right">Frontend Developer</h3>
          <p data-aos="fade-right">{jobSummery}</p>
        
          </div>

          <div className="about_content_servicesWrapper" data-aos="fade-left">
            <div className="overlay2">
            <img src={name} alt="profile photo"/>
            <div className="overlay"><div>
              <p>
              Perseverance is the silent architect of triumph!!!
              </p>
              <p>
                <cite>Yordanos Lemmawork</cite>
              </p>
              </div></div>
            </div>
            
          </div>
        </div>

      </section>
    </div>
  )
}

export default About;