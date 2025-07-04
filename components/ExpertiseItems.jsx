import React from 'react'
import oil  from "../assets/oil.jpg"
import mechanical  from "../assets/mechanical.jpg"
import civil  from "../assets/civil.jpg"
import marine  from "../assets/marine.jpg"
import hospitality  from "../assets/hospitality.jpg"
import electrical  from "../assets/electrical.jpg"
import manufacturing  from "../assets/manufacturing.jpg"
import transportation  from "../assets/transportation.jpg"

const ExpertiseItems = () => {
  return (
    <>
    <div className="header">
        <div className="info">
        <h5>Services & Solutions</h5>
        <h3>Areas of Expertise</h3>
            
            
        </div>
        
    </div>

    <div className="expertise-items">
        <div className="item">
            <img src={oil}  alt='Oil and Gas'/>
            <div className="info">
                <h4>Oil and Gas</h4>
                
                
            </div>
        </div>
        
        <div className="item">
            <img src={mechanical}  alt='Mechanical Sectors'/>
            <div className="info">
                <h4>Mechanical Sectors</h4>
                
            </div>
        </div>

        <div className="item">
            <img src={electrical}  alt='Electrical Sectors'/>
            <div className="info">
                <h4>Electrical Sectors</h4>
                
            </div>
        </div>

        <div className="item">
            <img src={civil} alt='Civil Constructions'/>
            <div className="info">
                <h4>Civil Constructions</h4>
                
            </div>
        </div>

        <div className="item">
            <img src={marine}  alt='Marine'/>
            <div className="info">
                <h4>Marine</h4>
                
            </div>
        </div>

        <div className="item">
            <img src={manufacturing}  about='Production & Manufacturing'/>
            <div className="info">
                <h4>Production & Manufacturing</h4>
                
            </div>
        </div>

        <div className="item">
            <img src={hospitality}  alt='Hospitality'/>
            <div className="info" >
                <h4>Hospitality</h4>
                
            </div>
        </div>

        <div className="item">
            <img src={transportation} alt='Transportation' />
            <div className="info">
                <h4>Transportation </h4>
                
            </div>
        </div>



    </div>
</>
  )
}

export default ExpertiseItems