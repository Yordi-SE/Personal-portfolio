import React from "react";
import PageHeaderContent from "../../components/pageHeader";
import { BsInfoCircleFill } from "react-icons/bs";
import JustifiedExample from './tabs'

function Resume() {
  return (
    <div>
      <section>
        <PageHeaderContent headerText={"My Resume"} icon={<BsInfoCircleFill size={40}/>}/>
      </section>
      <JustifiedExample/>
      </div>
  )
}

export default Resume;