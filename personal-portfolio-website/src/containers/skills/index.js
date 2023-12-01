import React from "react";
import PageHeaderContent from "../../components/pageHeader";
import { BsInfoSquareFill } from "react-icons/bs";
import { skillsData } from "./utils";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import {Line} from "rc-progress";
import "./style.scss";
function Skills() {
  return (
    <div className="root">
      <section id="root" className="skills">
        <PageHeaderContent headerText={"My Skills"} icon={<BsInfoSquareFill size={40}/>}/>
        <div className="skills_content-wrapper">
          {
            skillsData.map((item,i) =>(
              <div key={i} className="skills_content-wrapper_inner-content">
                <Animate play duration={1} delay={0.3} start={{
                  transform:'translateX(-200px)'
                }}
                end={{
                  transform:'translatex(0)'
                }}>
                  <h3 className="skills_content-wrapper_inner-content_category-text">{item.label}</h3>
                  <div>
                    {
                      item.data.map((skillItem, j)=>(
                        <AnimateKeyframes play
                        duration={1} keyframes={["opacity: 1", "opacity: 0"]} iterationCount={1}>
                          <div className="progressbar-wrapper" key={j}>
                            <p>{skillItem.skillName}</p>
                            <Line percent={skillItem.percentage} strokeWidth="2"
                            strokeColor="#333333" trailWidth="2"
                            trailColor="#3498db"
                            strokeLinecap="square"/>

                          </div>
                        </AnimateKeyframes>
                      ))
                    }
                  </div>
                </Animate>
                </div>
            ))
          }
        </div>
      </section>
      </div>
  )
}

export default Skills;