import React, { useEffect, useState } from "react";
import PageHeaderContent from "../../components/pageHeader";
import {BsInfoCircleFill} from "react-icons/bs";
import './style.scss';
import Aos from "aos";
import 'aos/dist/aos.css';
import {useJsApiLoader, GoogleMap, Marker} from '@react-google-maps/api';
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  Input,
  SkeletonText,
  Text,
} from '@chakra-ui/react'
import { FaLocationArrow, FaTimes } from 'react-icons/fa'
import { useSelector } from "react-redux";
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
      label: "Name",
      value: "Yordanos Lemmawork",
    },
    {
      label: "Age",
      value: "22",
    },
    {
      label: "Address",
      value: "Addis Ababa, Ethiopia",
    },
    {
      label: "Email",
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
        <div className="contact_content">
        <div className="div1">

        <h3 className="personal-info" data-aos="fade-right">Personal Information</h3>

          <ul>
            {
              personalDetails.map((item, i) => {
                return (
                  <li key={i} data-aos="fade-right">
                    <span className="title">{item.label}</span>
                    <span className="value">{item.value}</span>
                  </li>
)})
}
          </ul>
        {isLoaded ? 
    <Flex
    position='relative'
    flexDirection='column'
    alignItems='center'
    h='300px'
    w='100%'
    data-aos="fade-right">
    <Box position='absolute' left={0} top={0} h={600} w='100%'>
      {/* Google Map Box */}
      <GoogleMap
        center={{ lat: 9.039457048012395, lng: 38.763700926899354 }}
        zoom={15}
        mapContainerStyle={{ width: 300, height: 300, margin: "0% auto" }}
        onLoad={map => setMap(map)}
      >
        <Marker position={{ lat: 9.039457048012395, lng: 38.763700926899354 }} />
      </GoogleMap>
    </Box>
    <Box
      p={4}
      borderRadius='lg'
      m={4}
      bgColor='white'
      shadow='base'
      minW='container.md'
      zIndex='1'
    >
      <HStack spacing={2} justifyContent='space-between'>

        <ButtonGroup>
          {/* <Button colorScheme='pink' type='submit' onClick={calculateRoute}>
            Calculate Route
          </Button>
          <IconButton
            aria-label='center back'
            icon={<FaTimes />}
            onClick={clearRoute}
          /> */}
        </ButtonGroup>
      </HStack>
      <HStack spacing={4} mt={4} justifyContent='space-between'>
        {/* <Text>Distance: {distance} </Text>
        <Text>Duration: {duration} </Text> */}
        <IconButton
          aria-label='center back'
          icon={<FaLocationArrow />}
          isRound
          onClick={() => {
            map.panTo(center)
            map.setZoom(15)
          }}
        />
      </HStack>
    </Box>
  </Flex>
   : 
          <div style={{height: 300, width: 300}}>
            is Loading...
          </div>
          }
        </div>
          <div className="div2">
            <h3 className="contact_content_header-text" data-aos="fade-left">Let's talk</h3>

            <div className="contact_content_form">
              {
                state ? <p className="handlesubmit">Thank You So much For Contacting</p> : <form className="contact_content_form" onSubmit={handleSubmit}>
                <div className="contact_content_form_controlswrapper">
                    <div className="nameWrapper" data-aos="fade-left">
                        <input name="name" className="inputName" type={'text'} required/>
                        <label htmlFor="name" className="nameLabel">Name</label>
                    </div>
                    <div className="emailWrapper" data-aos="fade-left">
                    <input name="email" className="inputEmail" type={'text'} required/>
                        <label htmlFor="email" className="emailLabel">Email</label>
                    </div>
                    <div className="descriptionWrapper" data-aos="fade-left">
                      <textarea name="description" typeof={'text'} className="inputDescription" required/>
                      <label htmlFor="description" className="descriptionLabel">Description</label>
                    </div>
                </div>
                <button data-aos="fade-left">Submit</button>
                </form>
              }

            </div>
          </div>
        </div>
      </section>
      </div>
  )
}

export default Contact;