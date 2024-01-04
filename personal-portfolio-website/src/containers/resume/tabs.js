import { useState, useEffect } from "react";
import React from 'react';
import './style.css'
import Aos from "aos";
import 'aos/dist/aos.css';
import { useSelector } from "react-redux";

function Tabs() {
  const theme = useSelector(state => state.theme);
  useEffect(() => {
    Aos.init({duration: 2000});
  },[])
  const [toggle, setToggle] = useState(1)
  return (
    <div className={theme === 1 ? "countainer countainer1" : "countainer countainer"} >
      <div className="bloc-tabs">
        <div className={toggle === 1 ? "tabs active-tabs" : "tabs" + (theme === 1 ? "" : " tabs2")} onClick={()=> setToggle(1)}>Tab 1</div>
        <div className={toggle === 2 ? "tabs active-tabs" : "tabs" + (theme === 1 ? "" : " tabs2")} onClick={()=>setToggle(2)}>Tab 2</div>
        <div className={toggle === 3 ? "tabs active-tabs" : "tabs" + (theme === 1 ? "" : " tabs2")} onClick={()=>setToggle(3)}>Tab 3</div>

      </div>
      <div className="content-tabs" >
        <div className={toggle === 1? "content active-content" : "content"}>

          <h1>Projects</h1>
          <ul className="ul_wrapper" >
          <li className="list_wrapper" data-aos='zoom-in'>
          <h1 className="list_wrapper_header">A freelancing web application called JobLinker Net</h1>
          <ul className="ul">
  <li>
  Designed and developed JobLinker Net, a web application enabling users to post job vacancies and apply for job
listings.<br/>
  </li>
  <li>
  Implemented user-friendly features for job posting and job application, simplifying the job search and hiring
process.<br/>
  </li>
  <li>
  Engineered the backend with Flask and SQLAlchemy, facilitating efficient data management and secure data
storage.<br/>
  </li>
  <li>
Created a responsive and visually appealing user interface using HTML, CSS, and Bootstrap to ensure a seamless
user experience across devices.<br/>
  </li>
  <li>
  Implemented user authentication and authorization for secure access to the platform's features.
  </li>

  </ul>
  </li>
  </ul>

        </div>
        <div className={toggle === 2 ? "content active-content" : "content"}>
        <h1>Projects</h1>
        <ul className="ul_wrapper" >
    <li  className="list_wrapper" data-aos='zoom-in'>
    <h1 className="list_wrapper_header">Airbnb clone</h1>
    <ul className="ul">
    <li>
  Developed a web application replicating the core features of Airbnb, a rental and lodging website.
  </li>
  <li>
  Utilized a comprehensive tech stack, including MySQL for database management, a custom file storage engine for
media handling, SQLAlchemy for ORM, Flask for backend development, and HTML, CSS, and jQuery for the
frontend.<br/>
  </li>
  <li>
  Created a responsive web design using HTML, CSS, and jQuery to ensure a consistent user experience across various
devices.<br/>
  </li>
<li>
Utilized RESTful API<br/>

</li>
<li>
Conducted comprehensive testing and debugging to identify and address issues, improving the overall stability and
reliability of the application.<br/>
</li>
</ul>
    </li>
          </ul>

        </div>
        <div className={toggle === 3 ? "content active-content" : "content"}>
        <h1>Projects</h1>
          <ul className="ul_wrapper2" >
          <li className="list_wrapper2" data-aos='zoom-in'>
          <h1 className="list_wrapper_header">A freelancing web application called JobLinker Net

          </h1>
          <ul className="ul">
  <li>
  Designed and developed JobLinker Net, a web application enabling users to post job vacancies and apply for job
listings.<br/>
  </li>
  <li>
  Implemented user-friendly features for job posting and job application, simplifying the job search and hiring
process.<br/>
  </li>
  <li>
  Engineered the backend with Flask and SQLAlchemy, facilitating efficient data management and secure data
storage.<br/>
  </li>
  <li>
Created a responsive and visually appealing user interface using HTML, CSS, and Bootstrap to ensure a seamless
user experience across devices.<br/>
  </li>
  <li>
  Implemented user authentication and authorization for secure access to the platform's features.
  </li>
  </ul>
          </li>
          </ul>
        </div>
      </div>
      
    </div>
  )
}

export default Tabs
