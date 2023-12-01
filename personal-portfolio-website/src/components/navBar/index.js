import React, { useState } from "react";
import {FaBars, FaReact} from 'react-icons/fa';
import { Link } from "react-router-dom";
import {HiX} from 'react-icons/hi';
import './style.scss';
import image from "../../images/image4.jpg";

function NavBar() {
    const [toggleIcon, setToggleIcon] = useState(false);
    const handleToggleIcon = ()=> {
        setToggleIcon(!toggleIcon);
    }
  const data = [
    {
        label: "Home",
        to: '/Personal-portfolio'
    },
    {
        label: "About",
        to: '/Personal-portfolio/about'
    },
    {
        label: "Skills",
        to: '/Personal-portfolio/skills'
    },
    {
        label: "Resume",
        to: '/Personal-portfolio/resume'
    },
    {
        label: "Portfolio",
        to: '/Personal-portfolio/portfolio'
    },
    {
        label: "Contact",
        to: '/Personal-portfolio/contact'
    }
  ]
  return (
    <div>
      <nav className="navbar">
        <div className="navbar_container">
            <Link className="navbar_container_logo" to={'/Personal-portfolio'}>
                <img src="./image4.jpg" width="30px"/>
            </Link>
        </div>
        <ul className={`navbar_container_menu ${toggleIcon ? "active": ''}`}>
            {
                data.map((item) => {
                    return (
                        <li key={item.label} className="navbar_container_menu_items">
                            <Link className="navbar_container_menu_items_link" to={item.to}>
                                {item.label}
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
        <div className="nav-icon" onClick={handleToggleIcon}>
            {
                toggleIcon ? <HiX size={30}/> : <FaBars size={30}/>
            }
        </div>
      </nav>
    </div>
  )
}

export default NavBar
