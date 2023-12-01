import React from "react";
import PageHeaderContent from "../../components/pageHeader";
import { BsInfoCircleFill } from "react-icons/bs";

function Resume() {
  return (
    <div>
      <section id="root" className="about">
        <PageHeaderContent headerText={"My Resume"} icon={<BsInfoCircleFill size={40}/>}/>
      </section>    </div>
  )
}

export default Resume;