import React from 'react'
import { useNavigate } from 'react-router-dom'

function MainLeft() {
  const navigate = useNavigate();

  const handleNavigate = (contact) => {
    navigate('/'+contact);  // Navigate to the "Services" page
  };
  return (
    <div>
         <div className="left">
            <h5>Hey, We are Jebal Rocky</h5>
            <h3>We provide <span>professional services </span> </h3>
            <p>
                Since our formation in 2008, Jebal Rocky has been dedicated to delivering expert manpower and technical contracting solutions. 
                With over a decade of experience, we pride ourselves on providing reliable and skilled labor tailored to meet the specific needs of your projects. 
            </p>
                
            <button onClick={()=>{handleNavigate('contact')}}>Get In Touch</button>
        </div>
    </div>
  )
}

export default MainLeft