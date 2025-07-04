import React, { useState } from 'react'
import './ContactForm.css'
export default function ContactForm() {
    const [formData,setFormData] = useState({
        name:'',
        email:'',
        mobile:'',
        message:''
    });

const handleChange = (e)=>{
const {name, value} = e.target;
console.log(e.target)
setFormData(({...formData,[name]:value }))
}

  return (
    <div className="contact-form">
    <form >
        <div><h2>Contact Us</h2></div>
    <div>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
    </div>
    <div>
      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      
    </div>
    <div>
      <label>Mobile:</label>
      <input
        type="mobile"
        name="mobile"
        value={formData.mobile}
        onChange={handleChange}
      />
      
    </div>
    <div>
      <label>Message:</label>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
      />
    </div>
    <div>
    <button onClick={(e)=>{
        e.preventDefault();
        document.querySelector('.contact-form span').style.display="block"
        console.log(formData)


    }}>Submit</button> <span>Your request is submitted...</span>
    </div>
   
  </form>
    </div>
 
  )
}
