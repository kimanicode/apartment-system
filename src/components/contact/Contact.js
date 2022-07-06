import React, { useState } from 'react'
import './contact.css'
import {db} from "../../firebase-config";
import { collection, addDoc } from "firebase/firestore"; 

function Contact() {
    const [customerName , setCustname] = useState("");
    const [customerEmail , setCustemail] = useState("");
    const [message , setMessage] = useState("");
    const [phoneNumber, setPhone] = useState("");


    const addContact = async(e)=>{

        e.preventDefault()
         
      
      try {
        
        await addDoc(collection(db, "contacts"), {
          customerEmail:customerEmail,
          customerName:customerName,
          message: message,
          phoneNumber:phoneNumber
        });
        alert('Contact Added Successfully')
        setCustname("")
        setMessage("")
        setPhone("")
        setCustemail("")
    
      } catch (error) {
        alert(error.message)
      }
    
       }

    

  return (
    <div className='contact'>
        <h1>Contact us</h1>
        <p>Let us handle your apartment, professionally</p>
        <div className='inputs'>
             
            <div className='in-4'>
               <label>name</label>
                <input type='text'  placeholder='Enter your name'
                value ={customerName} onChange ={(e)=>setCustname(e.target.value)} />

            </div>
            <div className='in-4'>
                <label>Email</label>
                <input type='text'  placeholder='Enter your email'
                value ={customerEmail} onChange ={(e)=>setCustemail(e.target.value)}
                /> </div>
            <div className='in-4'>
            <label>Phone number</label>
                <input type='text'  placeholder='Enter your phone number'
                value ={phoneNumber} onChange ={(e)=>setPhone(e.target.value)} />
                 </div>
            <div className='in-4'>
            <label>Message</label>
                <textarea   placeholder='Enter your message'
                value ={message} onChange ={(e)=>setMessage(e.target.value)}
                /> </div>
            <button onClick={addContact}>Submit</button>

        </div>
    </div>
  )
}

export default Contact