import React ,{useContext} from 'react'
import { AuthContext } from '../../AuthProvider'

function Profile() {
const { currentUser } = useContext(AuthContext);
console.log(currentUser)

  return (
    <div className='profile'>
        {currentUser &&
        <>
          <p>Email : {currentUser.email}</p>
         

        </>
        }
    </div>
  )
}

export default Profile