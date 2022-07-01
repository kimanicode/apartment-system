import React from 'react'
import './review.css'

function Review() {
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
             <button>Review</button>
 
         </div>
    </div>
  )
}

export default Review