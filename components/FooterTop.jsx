import React from 'react'
import logo from "../assets/logo.svg"
import { Link } from 'react-router-dom'
const FooterTop = () => {
  return (
    <div className="top">
    <div className="logo">
        <img src={logo}  alt='jebal rocky logo'/>
        <a href="https://jebalrocky.com">Jebal Rocky </a>
        
    </div>
    <ul>
        <li><a href="/home#main">Home</a></li>
        
        <li><a href="/contact">Contact</a></li>
        <li><Link to="/careers">Careers</Link></li>
        <li><a href="/home#portfolio">Projects</a></li>
    </ul>
    <div className="social-links">
        <a href="#"><i className='bx bxl-facebook'></i></a>
        <a href="#"><i className='bx bxl-instagram'></i></a>
        <a href="#"><i className='bx bxl-twitter'></i></a>
        <a href="#"><i className='bx bxl-linkedin-square'></i></a>
    </div>
</div>
  )
}

export default FooterTop