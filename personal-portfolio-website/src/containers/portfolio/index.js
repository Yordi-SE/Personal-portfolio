import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeader";
import { BsInfoCircleFill } from "react-icons/bs";
import imageOne from '../../images/image1.jpg';
import imageTwo from '../../images/image2.jpg';
import imageThree from '../../images/image3.jpg';
import './style.scss'
import imageFour from '../../images/image4.jpg';

function Portfolio() {
  const [hoveredValue, sethoveredValue] = useState(null)
  const portfolioData = [
    {
      id : 1,
      name: "JobLinker Net",
      image: imageOne,
      description: "portfolio web project callded joblinker network"
    },
    {
      id: 2,
      name: "Airbnb Clone",
      image: imageTwo,
      description: "project that clones web functionality similar to airbnb clone website"
    },
    {
      id: 3,
      name: "School DashBoard",
      image: imageThree,
      description: "Alx react project"
    },
    {
      id: 4,
      name: "Personal Portfolio Web",
      image: imageFour,
      description: "my personal portfoli web"
    }
]
const filterData = [
  {
    filterId : 1,
    label: 'All'
  },
  {
    filterId: 2,
    label: 'Developement',
  },
  {
    filterId: 3,
    label: 'Design'
  }
]
function handleHover(id){
  sethoveredValue(id)
}
  return (
    <div>
      <section id="root" className="about">
        <PageHeaderContent headerText={"My portfolio"} icon={<BsInfoCircleFill size={40}/>}/>
        <div className="portfolio_content">
          <div className="portfolio_content_cards">
            {
              portfolioData.map((item)=>(
                <div className="portfolio_content_cards_item" key={item.id} onMouseEnter={()=>handleHover(item.id)} onMouseLeave={()=>handleHover(null)}>
                  <a>
                    <img alt={item.description} src={item.image} width="100%" height="100%" />
                  </a>
                  <div className="overlay">
                    {
                      item.id === hoveredValue && (
                        <div>
                          <p>{item.name}</p>
                          <button>Visit</button>
                        </div>
                      )
                    }
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
      </div>
  )
}

export default Portfolio;