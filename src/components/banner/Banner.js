import React from 'react'
import './banner.css'

function Banner() {
  return (
    <div className='banner'>
        <div className='banner-info'>
            <h3>We Build </h3>
            <br/>

            <h3>Your Dream </h3>
             
             <span>Online property management Agency, the modern way to manage  your own home, You can us to market your property</span>
             <button>Pay Rent </button>
        </div>
        <div className='banner-img'>
            <img src='/images/banner.jpg' />
        </div>
    </div>
  )
}

export default Banner