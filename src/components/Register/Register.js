import React , {useState}from 'react'
import './register.css'
import {createUserWithEmailAndPassword,
        onAuthStateChanged
    } from 'firebase/auth'
import {auth} from '../../firebase-config'
import { useNavigate } from 'react-router-dom'

function Register() {

    const [username, setUsername] = useState("")
    const [registerEmail, setRegisterEmail] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")
    const [user , setUser] = useState({})
    const [success, setSuccess] = useState(false)

    const navigate = useNavigate();
    

    onAuthStateChanged(auth ,(currentUser)=>{
        setUser(currentUser);
    })
    

    const register  = async () =>{
        try
        {
            const user = await createUserWithEmailAndPassword(auth,registerEmail,registerPassword)
            console.log(user)
            setSuccess(true)
            navigate("/login")
        }
        catch(error){
            console.log(error.message);
        }
        
    };




  return (
    <div className='inputs'>
       <h3 id='signer'>create new account</h3>
      <div className='in-4'>
        <label>Username</label>
        <input type='text'
         placeholder='Enter your username'
         onChange={(event)=>{
            setUsername(event.target.value)
         }}
         />

        <label>Email</label>
        <input type='email' placeholder='Enter your email' 
        onChange={(event)=>{
            setRegisterEmail(event.target.value)
         }}
          required/>

        <label>Password</label>
        <input type='password' placeholder='Enter your password'
         onChange={(event)=>{
            setRegisterPassword(event.target.value)
         }}
           required/>
        <label>House Number</label>
        <input type='text' placeholder='Enter your House number'
         onChange={(event)=>{
            setRegisterPassword(event.target.value)
         }}
           required/>
          
          <label>Phone Number</label>
         <input type='text' placeholder='Enter your Phone number'
            onChange={(event)=>{
              setRegisterPassword(event.target.value)
           }}
            required/>

        


        <button id='loginBtn' onClick={register}>Sign up</button>


        {success && <p id='sucess'>Account created successfully </p>}


        

        

        


      </div> 
    </div>
  )
}

export default Register