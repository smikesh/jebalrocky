import React, { useEffect } from 'react'
import Main from './Main'
import Skills from './Skills'
import Portfolio from './Portfolio'
import About from './About'
import ClientsReview from './ClientsReview'
import Footer from './Footer'
import { useLocation } from 'react-router-dom'

const Home = () => {
  const location = useLocation()
  useEffect(()=>{
    if(location.hash==='#main'){
      const mainElement = document.querySelector('#main')
      if(mainElement)
      {
        mainElement.scrollIntoView({behavior:'smooth'})
      }
    }
  },[location])
  return (
    <>
        
        <Main />
        <Skills />
        <About />
        <Portfolio />
        <ClientsReview />
        <Footer />

    </>
  )
}

export default Home