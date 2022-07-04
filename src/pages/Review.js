import React from 'react'
import './review.css'
import {doc , setDoc} from 'firebase/firestore'

function Review() {
   const addReview = ()=>{
    
   }


  return (
    <div className='review'>
        <h1>Customer Review</h1>
        <div className='inputs'>
             
             <div className='in-4'>
                <label>name</label>
                 <input type='text'  placeholder='Enter your name'/>
 
             </div>
             <div className='in-4'>
                 <label>Company</label>
                 <input type='text'  placeholder='Company name'/> </div>
             <div className='in-4'>
             <label>Description</label>
                 <input type='text'  placeholder='Description'/> </div>
             <div className='in-4'>
             <label>Customer Image  </label>
                 <textarea   placeholder='Enter your message'/> </div>
             <button onClick={addReview}>Review</button>
 
         </div>
    </div>
  )
}

export default Review