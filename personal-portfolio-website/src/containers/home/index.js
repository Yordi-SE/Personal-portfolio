import React from "react";
import ParticlesContainer from '../../utils/particles';
import { useEffect } from 'react';
import "./styles.scss"
import { useNavigate } from "react-router-dom";
import {Animate} from "react-simple-animate";
import { tsParticles } from "https://cdn.jsdelivr.net/npm/@tsparticles/engine@3.0.0/+esm";
import { loadAll } from "https://cdn.jsdelivr.net/npm/@tsparticles/all@3.0.0/+esm";
import { HashLink } from "react-router-hash-link";


function Home() {
  // const handleNavigateToContactMe = () => {
  //   navigate('#CONTACT')
  // }

  // tsParticles.useEffect(  useEffect(() => {
    

  //   loadParticles(configs)
  //   return () => {
  //     // tsParticles.destroy(s)
      
  // }}, []));
  
  return (
    <div id="HOMEE">
        <section id="homee" className="homee">
          <div className="homee_text-wrapper">
            <h1 className="homee_text-wrapper_header">
              Hello, I'm Yordanos
              <br />
              Frontend Developer
            </h1>
          </div>
          <Animate  play duration={2.5} delay={0} start={{
            transform: 'translateX(700px)'
          }}
          end={{
            transform: 'translateY(0)'
          }}>
            <HashLink to="#CONTACT"><button>Hire me</button></HashLink>
          </Animate>

        </section>
        <ParticlesContainer />

    </div>
  )
}

export default Home;