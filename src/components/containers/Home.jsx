import React from 'react'
import css from './Home.module.css'
import CustomCursor from '../CustomCursor/CustomCursor'
import NavBar from '../NavBar/NavBar'
import Header from '../Header/Header'
import Featured from '../Featured/Featured'
import About from '../About/About'
import Gallery from '../Gallery/Gallery'
import Footer from '../Footer/Footer'
import useLocoScroll from '../hooks/useLocoScroll'

const Home = () => {
  useLocoScroll()
  return (
    <>
        <CustomCursor/>

        <div className={css.mainContainer} id="main-container" data-scroll-container>
            <NavBar/>
            <Header/>
            <Featured/>
            <About/>
            <Gallery/>
            <Footer/>
        </div>
    
    
    
    
    </>
  )
}

export default Home