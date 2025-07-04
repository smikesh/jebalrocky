import React from 'react'
import './Career.css'
import CareerJobs from './CareerJobs'
import Footer from './Footer'
export default function Career() {
  return (
    <div className='careers'>
        <div className="header">
           
        <h3>Available Vacancies</h3>
        </div>
        
        <CareerJobs />
        <Footer />

    </div>
  )
}
