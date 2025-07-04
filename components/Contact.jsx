import React from 'react'
import Footer from './Footer'
import AboutLeft from './AboutLeft'
import { Link } from 'react-router-dom'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <>
    <div className='about'>
    <ContactForm />
      
      <div className='right'>
       <h3>Jebal Rocky Technical Contracting LLC</h3>
       <li>Sharjah</li>
       <li>United Arab Emirates</li>
       <li>Phone : +971 (2) 551 7266</li>
      </div>

      <Link className='link-button' to="/careers">Careers</Link>
    </div>
    <Footer />
    </>
  )
}

export default Contact