import React, { useState } from 'react'
import {db} from "../../firebase-config";
import { collection, addDoc } from "firebase/firestore"; 

export default function Payments() {
  const [phone , setPhonenumber] = useState("");
  const [house , setHouse] = useState("");
  const[amount , setAmount] = useState("")
  const [subscription , setSubscription] = useState("")



    const pay= async(e)=>{

      e.preventDefault()
      try {
    
        await addDoc(collection(db, "payments"), {
          phone:phone,
          house:house,
          amount: amount,
          subscription:subscription
        });
        alert(' Paid Successfully')

        setPhonenumber("")
        setAmount("")
        setSubscription("")
        setHouse("")
    
      } catch (error) {
        alert(error.message)
      }

    }


  return (
    <div className='contact'>
         <div className='inputs'>
             
             <div className='in-4'>
                <label>Phone Number</label>
                 <input type='text'  placeholder='+254-777598758'
                 value ={phone} onChange ={(e)=>setPhonenumber(e.target.value)} 
                 />
 
             </div>

             <div className='in-4'>
                <label>House Number</label>
                 <input type='text'  placeholder='House Number'
                 value ={house} onChange ={(e)=>setHouse(e.target.value)} 
                 />
 
             </div>

             <div className='in-4'>
                <label>Subscription</label>
                 <input type='text'  placeholder='eg office'
                 value ={subscription} onChange ={(e)=>setSubscription(e.target.value)} 
                 />
 
             </div>

             <div className='in-4'>
                <label>Amount</label>
                 <input type='text'  placeholder='Amount'
                 value ={amount} onChange ={(e)=>setAmount(e.target.value)} 
                 />
 
             </div>
             <button onClick={pay}>Pay</button>

             </div>

    </div>
  )
}
