import React, { useEffect, useState } from "react";
import PageHeaderContent from "../../components/pageHeader";
import { BsInfoCircleFill } from "react-icons/bs";
import imageOne from '../../images/image1.jpg';
import imageTwo from '../../images/image2.jpg';
import imageThree from '../../images/image3.jpg';
import './style.scss'
import imageFour from '../../images/image4.jpg';
import Aos from "aos";
import 'aos/dist/aos.css';

function Portfolio() {
  useEffect(() => {
    Aos.init({duration: 2000});
  },[])
  const [hoveredValue, sethoveredValue] = useState(null)
  const portfolioData = [
    {
      id : 1,
      name: "JobLinker Net",
      image: imageOne,
      description: "portfolio web project callded joblinker network",
      link_to: 'https://github.com/Yordi-SE/Freelance_web'
    },
    {
      id: 2,
      name: "Airbnb Clone",
      image: imageTwo,
      description: "project that clones web functionality similar to airbnb clone website",
      link_to: "https://github.com/Yordi-SE/AirBnB_clone_v2"
    },
    {
      id: 3,
      name: "School DashBoard",
      image: imageThree,
      description: "Alx react project",
      link_to: "https://github.com/Yordi-SE/alx-react"
    },
    {
      id: 4,
      name: "Personal Portfolio Web",
      image: imageFour,
      description: "my personal portfolio web",
      link_to: "https://github.com/Yordi-SE/Personal-portfolio"
    }
]
function handleHover(id){
  sethoveredValue(id)
}
  return (
      <section  >
        <PageHeaderContent headerText={"My portfolio"} icon={<BsInfoCircleFill size={40}/>} idname="PORTFOLIO"/>
        <div className="portfolio_content">
          <div className="portfolio_content_cards">
            {
              portfolioData.map((item)=>(
                <div data-aos="zoom-out-left" className="portfolio_content_cards_item" key={item.id} onMouseEnter={()=>handleHover(item.id)} onMouseLeave={()=>handleHover(null)}>
                  <a >
                    <img alt={item.description} src={item.image} width="100%" height="100%" />
                  </a>
                  <a className="overlay" href={item.link_to} target="_blank">
                    {
                      item.id === hoveredValue && (
                        <div>
                          
                          <p>{item.name}</p>
                          <button>Visit</button>
                        </div>
                      )
                    }
                  </a>

                </div>
              ))
            }
          </div>
        </div>
      </section>
  )
}

export default Portfolio;