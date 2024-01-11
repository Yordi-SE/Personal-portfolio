import React, { useState } from "react";
import {FaBars} from 'react-icons/fa';
import { Link } from "react-router-dom";
import {HiX} from 'react-icons/hi';
import './style.scss';
import image from "../../images/image4.jpg";
import {HashLink} from 'react-router-hash-link';
import { useDispatch, useSelector } from "react-redux";
import theme_action from "../../redux/action";



function NavBar() {
    const theme = useSelector(state => state.theme)
    console.log(theme)
    const dispatch = useDispatch()
    const [toggleIcon, setToggleIcon] = useState(false);
    const handleToggleIcon = ()=> {
        setToggleIcon(!toggleIcon);
    }
  const data = [
    {
        label: "Home",
        to: '#HOMEE'
    },
    {
        label: "About",
        to: '#ABOUT'
    },
    {
        label: "Skills",
        to: '#SKILLS'
    },
    {
        label: "Resume",
        to: '#RESUME'
    },
    {
        label: "Portfolio",
        to: '#PORTFOLIO'
    },
    {
        label: "Contact",
        to: '#CONTACT'
    }
  ]
  return (
    <div>
      <nav className={theme === 1 ? "navbar1 navbar2" : "navbar1 navbar3"}>
        <div className="navbar1_container">
            <Link className="navbar1_container_logo" to={'/Personal-portfolio'}>
                <img src={image} width="30px"/>
            </Link>
        </div>
        <ul className={`navbar1_container_menu ${toggleIcon ? "active": ''}`}>
            {
                data.map((item) => {
                    return (
                        <li key={item.label} className="navbar1_container_menu_items">
                            <HashLink className="navbar1_container_menu_items_link" to={item.to}>
                                {item.label}
                            </HashLink>
                        </li>
                    )
                })
            }
            <button onClick={() => dispatch(theme_action())}>Change Theme</button>
        </ul>
        <div className="nav1-icon" onClick={handleToggleIcon}>
            {
                toggleIcon ? <HiX size={30}/> : <FaBars size={30}/>
            }
        </div>
      </nav>
    </div>
  )
}

export default NavBar
