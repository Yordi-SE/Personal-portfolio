import './App.css';
import Contact from './containers/contact';
import Portfolio from './containers/portfolio';
import Skills from './containers/skills';
import Resume from './containers/resume';
import About from './containers/about';
import Home from './containers/home';
import NavBar from './components/navBar';
import FadeLoader from 'react-spinners/FadeLoader';
import { useSelector} from 'react-redux'
// import {loadFull} from "tsparticles";
import { useState,useEffect } from 'react';
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function Main2() {
  const theme = useSelector(state => state.theme)
  // const handleInit = async (Main2) => {
  //   await loadFull(Main2)
  // }
  const [loading, setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, getRandomInt(500, 5000));
  },[])
  return (
    <>
    <div className={theme === 1 ? "Main2" : "Main22"}>
      {
        loading ? <FadeLoader color={"black"} loading={loading}
        // aria-label="Loading Spinner"
        // data-testid="loader size={800}" 
        size={500}
        className='loader'/>:
        <>
        <NavBar />
        <Home/>
        <Skills />
        <Portfolio/>
        <Resume/>
        <About/>
        <Contact/>
        </>
      }
    </div>

    </>


  );
}

export default Main2;
