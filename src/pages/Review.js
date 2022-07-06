import React, { useState } from 'react'
import './review.css'
import {db} from "../firebase-config";
import { collection, addDoc } from "firebase/firestore"; 

function Review() {
  const [name , setName] = useState("");
  const [occupation , setOccupation] = useState("");
  const [content , setContent] = useState("");

  

   const addReview = async(e)=>{

    e.preventDefault()
     
  
  try {
    
    await addDoc(collection(db, "reviews"), {
      name:name,
      occupation:occupation,
      content: content,
    });
    alert('Review Added Successfully')
    setName("")
    setContent("")
    setOccupation("")

  } catch (error) {
    alert(error.message)
  }

   }


  return (
    <div className='review'>
        <h1>Customer Review</h1>
        <div className='inputs'>
             
             <div className='in-4'>
                <label>name</label>
                 <input type='text'  placeholder='Enter your name' 
                 value={name}
                   onChange ={(e)=>setName(e.target.value)}
                  />
 
             </div>

             <div className='in-4'>
                 <label>Occupation</label>
                 <input type='text'  placeholder='Company name'
                 value={occupation}
                   onChange ={(e)=>setOccupation(e.target.value)}
                 
                 /> </div>
            
             <div className='in-4'>
             <label>Message  </label>
                 <textarea   placeholder='Enter your message'
                 value={content}
                 onChange ={(e)=>setContent(e.target.value)}/> </div>


             <button onClick={addReview}>Review</button>
 
         </div>
    </div>
  )
}

export default Review