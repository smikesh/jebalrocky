import React, { useEffect } from 'react'
import logo from "../assets/logo.svg"
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
    const location = useLocation();

    // Scroll to the div with the id if the hash exists
    useEffect(() => {
      if (location.hash) {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, [location]);
  return (
   <>
   
       <nav>
        <div className="logo">
            <img src={logo} />
            <a href="/" >Jebal Rocky</a>
        </div>
        <ul>    
            <li><Link to="/home#main">Home</Link></li>
            <li><Link to="/services#skills">Services</Link></li>
            <li><Link to="/about#about">About</Link></li>
            <li><Link to="/portfolio#portfolio">Portfolio</Link></li>
            <li><Link to="/areas-of-expertise#expertise">Areas of Expertise</Link></li>
            <li><Link to="/trades">Trades & Labor Services</Link></li>
            
        </ul>
        
        
        <Link to='/contact'><button >Contact Us</button></Link>
        <button id="menuButton" onClick={()=>{const nav = document.querySelector('nav');
    nav.classList.toggle('open');}} >
            <i className='bx bx-menu'></i>
        </button>
    </nav>

    <div id="popupDiv" className="popup">
            <div className="popup-content">
                <span id="closeDivBtn" className="close" onClick={()=>popupDiv.style.display = 'none'}>&times;</span>
                <div className='apply-content'>
                    <b>Send your CV @</b>
                    <p>Jobs@jebalrocky.com</p>
                    <p>OR call </p>
                    <h3><i className='bx bxs-phone'>+971 (2) 551 7266</i></h3>
                </div>

            </div>
        </div>
   </>
  )
}

export default Header