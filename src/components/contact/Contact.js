import React from 'react'
import './contact.css'

function Contact() {
  return (
    <div className='contact'>
        <h1>Contact us</h1>
        <p>Let us handle your apartment, professionally</p>
        <div className='inputs'>
             
            <div className='in-4'>
               <label>name</label>
                <input type='text'  placeholder='Enter your name'/>

            </div>
            <div className='in-4'>
                <label>Email</label>
                <input type='text'  placeholder='Enter your email'/> </div>
            <div className='in-4'>
            <label>Phone number</label>
                <input type='text'  placeholder='Enter your phone number'/> </div>
            <div className='in-4'>
            <label>Message</label>
                <textarea   placeholder='Enter your message'/> </div>
            <button>Submit</button>

        </div>
    </div>
  )
}

export default Contact