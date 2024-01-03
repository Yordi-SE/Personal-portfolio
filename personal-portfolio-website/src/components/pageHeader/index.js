import './style.scss';

import React from 'react'
import Aos from "aos";
import 'aos/dist/aos.css'

function PageHeaderContent({headerText, icon, idname}) {
  return (
    <div  className='wrapper' id={idname}>
      <h2 >
        {headerText}
      </h2>
      <span>
        {icon}
      </span>
    </div>
  )
}

export default PageHeaderContent
