import React from 'react'
import AboutLeft from './AboutLeft'
import AboutRight from './AboutRight'

const About = () => {
  return (
    <div>
        <div className="about" id="about">
            <AboutLeft />
            <AboutRight />
        </div>
    </div>
  )
}

export default About