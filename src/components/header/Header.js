import React ,{useContext}from 'react'
import { Link,useNavigate} from 'react-router-dom'
import './header.css'
import { auth } from '../../firebase-config'
import { signOut } from 'firebase/auth'

import { AuthContext } from '../../AuthProvider'





function Header() {
  //const [user , setUser] = useState({})
  // onAuthStateChanged(auth ,(currentUser)=>{
  //   setUser(currentUser);
//})
const { currentUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const navigateToLogin = async () => {
    // 👇️ navigate to /login
    if(currentUser){
      await signOut(auth);

    }
    else {
      navigate("/login");
    }
    console.log(currentUser.email)
   
    
  };
  return (
    <div  className='navbar'>
        
            <div className='logo'>Luxury Homez</div>
        <div className='nav'>
            <ul>
                <li><Link to = '/' >Home</Link></li>
                <li><Link to = '/review' >Review</Link></li>
                <li><Link to  = '/admin'>Admin</Link></li>

            </ul>
          {currentUser && <div>welcome:{currentUser.email} </div>}
            
            <div className='btn'>
              <button onClick={navigateToLogin}> {currentUser ? "Log Out" : "Log In"}</button>
            </div>
            
        </div>
    </div>

    
  )
}

export default Header