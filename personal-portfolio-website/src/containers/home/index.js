import React from "react";
import Particle from '../../utils/particles';
import "./styles.scss"
import { useNavigate } from "react-router-dom";
import {Animate} from "react-simple-animate";

function Home() {
  const navigate = useNavigate();
  const handleNavigateToContactMe = () => {
    navigate('/contact')
  }
  return (
    <div>
        <section id="home" className="home">
          <div className="home_text-wrapper">
            <h1>
              Hello, I'm Yordanos
              <br />
              Front end Developer
            </h1>
          </div>
          <Animate play duration={2.5} delay={0} start={{
            transform: 'translateX(700px)'
          }}
          end={{
            transform: 'translateY(0)'
          }}>
            <button onClick={handleNavigateToContactMe}>Hire me</button>
          </Animate>

        </section>
        <Particle />
    </div>
  )
}

export default Home;