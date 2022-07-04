import React from 'react'

import SingleService from './SingleService'

function Service() {
  return (
    <div className='service'>
        <h1>Servicess</h1>
        <p>Select and pay for your subscription</p>
        <div className='projects-wrapper'>
        <SingleService
              title= 'Office'
              price= 'Amount: Ksh 10000'
              backgroundImg ='office.jpg'

            />
            <SingleService 
              title= 'Show room'
              price = 'Amount = Ksh 40000'
              backgroundImg ='sr.jpg'

            />
             <SingleService 
              title= 'Residential'
              price ='AmountKsh 15000'
              backgroundImg ='p1.jpg'

            />


        </div>
    </div>
  )
}

export default Service