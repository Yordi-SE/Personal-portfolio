import React, { useEffect } from "react";
import PageHeaderContent from "../../components/pageHeader";
import { BsInfoSquareFill } from "react-icons/bs";
import { skillsData } from "./utils";
import {Line} from "rc-progress";
import { useSelector } from "react-redux";
import Aos from "aos";
import 'aos/dist/aos.css'
import "./style.scss";
function Skills() {
  const theme = useSelector(state => state.theme);
  useEffect(() =>{
    Aos.init({duration: 2000});
  },[])
  return (
    <div>
      <section  className={theme === 1 ? "skills3 skills" : "skills2 skills"}>
        <PageHeaderContent headerText={"My Skills"} icon={<BsInfoSquareFill size={40}/>} idname="SKILLS"/>
        <div className="skills_content-wrapper">
          {
            skillsData.map((item,i) =>(
              <div key={i} className="skills_content-wrapper_inner-content" data-aos="flip-right">

                  <h3 className="skills_content-wrapper_inner-content_category-text">{item.label}</h3>
                  <div>
                    {
                      item.data.map((skillItem, j)=>(

                          <div className="progressbar-wrapper" key={j}>
                            <p>{skillItem.skillName}</p>
                            <Line percent={skillItem.percentage} strokeWidth="2"
                            strokeColor={theme === 1 ? "#333333" : "#3498db"} trailWidth="2"
                            trailColor={theme === 1 ? "#3498db" : "red"}
                            strokeLinecap="square"/>

                          </div>
                      ))
                    }
                  </div>
                </div>
            ))
          }
        </div>
      </section>
      </div>
  )
}

export default Skills;