import React, {useState} from 'react'
import './login.css'
import {useNavigate ,Navigate} from 'react-router-dom'
import {signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from 'firebase/auth'
import {auth} from '../../firebase-config'



function Login() {
  const navigate = useNavigate();

  const navigateToRegister = () => {
    // 👇️ navigate to /register
    navigate('/register');
  };

    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    const [user , setUser] = useState({})
    const [error ,setError] = useState(false)


  //   onAuthStateChanged(auth ,(currentUser)=>{
  //     setUser(currentUser);
  // })
  


    const login  = async (e) =>{
      try
       {   e.preventDefault()
          const user = await signInWithEmailAndPassword(auth,loginEmail,loginPassword)
          navigate("/")
          console.log(user)
      }
      catch(error){
          setError(true)
      }
      
  };

  // const logout = async () =>{
  //   await signOut(auth);
  // }
  // onAuthStateChanged(auth, (User) => {
    
    

    
  // });


  const RequireAuth = ({children}) =>{
    return user ? children : <Navigate to = '/login' />
  }


  return (
    <div className=' inputs'>
      <h3 id='signer'>Sign in to account</h3>
      <div className='in-4'>
        <label>Email</label>
        <input type='email' placeholder='Enter your email'  onChange={(event)=>{
          setLoginEmail(event.target.value)
       }}/>
        <label>Password</label>
        <input type='password' placeholder='Enter your email'
        onChange={(event)=>{
          setLoginPassword(event.target.value)
       }} />

        <button id='loginBtn' onClick={login}>Login</button>

        <button id='regBtn' onClick={navigateToRegister}>  Create new account?</button>

        {error && <h4>Wrong email or password</h4> } 


      </div> 

    </div>
  )
}

export default Login