import React from 'react'
import mechanic from '../assets/mechanic.png'
import electrician from '../assets/electrician.png'
import other from '../assets/repair.png'
const WorkTradeItems = () => {
  return (
    
    <div className="skills" id="skills">
    <h5>Skilled Workforce Solutions</h5>
    <h3>Trades & Labor Services</h3> 
 
        <div className="skill-items">
                <div className="category">
                    <div className='category-head'>
                    <img src={mechanic} alt='mechanic'></img>
                    <h2>Mechanics</h2>
                    </div>
                   
                    <ul className="subcategory">
                        <li>Welders</li>
                        <li>Machine Operators</li>
                        <li>Fitters</li>
                    </ul>
                </div>
                <div className="category">
                    
                <div className='category-head'>
                    <img src={electrician} alt='Electricians'></img>
                    <h2>Electricains</h2>
                    </div>
                    <ul className="subcategory">
                        <li>AC Technician</li>
                        <li>Insulators</li>
                        <li>AC Ductman</li>
                    </ul>
                </div>
                <div className="category">
                <div className='category-head'>
                    <img src={other} alt='Other'></img>
                    <h2>Other</h2>
                    </div>
                    <ul className="subcategory">
                        <li>Masons</li>
                        <li>Painters</li>
                        <li>Carpenters</li>
                        <li>Plumbers</li>
                        <li>Fabricators</li>
                        <li>Scaffolders</li>
                        <li>Riggers</li>
                        <li>Forklift Operators</li>
                        <li>Drivers</li>
                        <li>Cleaner</li>
                        <li>Helpers</li>
                        <li>Security Guards</li>
                    </ul>
                </div>
        </div>
 
        
    </div>
    
  )
}

export default WorkTradeItems