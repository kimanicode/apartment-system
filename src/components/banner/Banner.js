import React , {useContext}from 'react'
import './banner.css'
import { AuthContext } from '../../AuthProvider'
import { useNavigate} from 'react-router-dom'



function Banner() {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate()

  function navigateToPayment(){
    navigate("/payments")

  }
  return (
    <div className='banner'>
        <div className='banner-info'>
            <h3>We Build </h3>
            <br/>

            <h3>Your Dream </h3>
             
             <span>Online property management Agency, the modern way to manage  your own home, You can us to market your property</span>
             {currentUser  && <button onClick={navigateToPayment}>Pay Rent </button>}
        </div>
        <div className='banner-img'>
            <img src='/images/banner.jpg' />
        </div>
    </div>
  )
}

export default Banner