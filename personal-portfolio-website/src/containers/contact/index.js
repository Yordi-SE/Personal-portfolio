import React, { useEffect, useState } from "react";
import PageHeaderContent from "../../components/pageHeader";
import {BsInfoCircleFill} from "react-icons/bs";
import './style.scss';
import Aos from "aos";
import 'aos/dist/aos.css';
import {useJsApiLoader, GoogleMap, Marker} from '@react-google-maps/api';
import { useSelector } from "react-redux";
import ContactUs from "./contactUs";
function Contact() {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, [])
  const [map, setMap] = useState(null)
  const center = { lat: 9.039457048012395, lng: 38.763700926899354 }
  let {isLoaded} = useJsApiLoader({
    googleMapsApiKey:"AIzaSyB-1bcf8UoSpzUflIzlfGXLgLQVxaBRx6A"
  })
  if (map !== null) {
    isLoaded = true
  }

  const personalDetails = [
    {
      value: "Addis Ababa, Ethiopia",
    },
    {
      value: "lemmaworkyordanos@gmail.com",
    }
  ]
  const theme = useSelector(state => state.theme)
  useEffect(() => {
    Aos.init({duration: 2000});
  }, [])
  const [state, setState] = useState(false)
  function handleSubmit() {
    setState(true)
  }
  return (
    <div>

      <section className={theme === 1 ? "contact" : "contact1"} >
        <PageHeaderContent headerText={"Contact Me"} icon={<BsInfoCircleFill size={40}/>} idname="CONTACT"/>
        <footer class="footer" id="foot" data-aos="zoom-in">
      <p className={theme === 1 ? "links2" : "links1"}>
        MY LINKS
      </p>
      <div className={theme === 1 ? "socialIcons socialIcons2" : "socialIcons socialIcons1"}>
        <a href="https://t.me/Jprecious" target="_blank"><i class="fa-brands fa-telegram"></i></a>
        <a href="https://www.facebook.com/profile.php?id=100069853353595" target="_blank"><i class="fa-brands fa-facebook"></i></a>
        <a href="https://twitter.com/Y___L1" target="_blank"><i class="fa-brands fa-twitter"></i></a>
        <a href="https://github.com/Yordi-SE" target="_blank"><i class="fa-brands fa-github"></i></a>
        <a href="mailto:lemmaworkyordanos@gmail.com" target="_blank"><i class="fa-brands fa-google"></i></a>
      </div>
    </footer>
        <div className="contact_content">
        <div className="div1">
          <ul>
            {
              personalDetails.map((item, i) => {
                return (
                  <li key={i} data-aos="fade-right">
                    <span className="value">{item.value}</span>
                  </li>
)})
}
          </ul>
        {isLoaded ? 
      <div data-aos="fade-right">

      <GoogleMap className="map" 
        center={{ lat: 9.039457048012395, lng: 38.763700926899354 }}
        zoom={15}
        mapContainerStyle={{ width: 275, height: 300, margin: "0% auto" }}
        onLoad={map => setMap(map)}
      >
        <Marker position={{ lat: 9.039457048012395, lng: 38.763700926899354 }} />
      </GoogleMap>
      </div>

   :
          <div style={{height: 300, width: 300}}>
            is Loading...
          </div>
          }
        </div>
    
              <ContactUs/>
        </div>

      </section>
      </div>
  )
}

export default Contact;