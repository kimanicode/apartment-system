import React from 'react'
import Display from './Display'
import './review.css'

function ReviewDisplay() {
  return (
    <div classname= 'reviewDisplay'>
      <span>Customer Review</span>
      <div  className='projects-wrapper'>
        <Display 
        profileImg='p1.jpg'

        name ='Grace Wanjiku'
        company='jua group'
        description ='hello there this is  my platform. i am  seasoned software developer with over 3 years of experience in developing web and mobile applications'
        
        />
         <Display 
        profileImg='p1.jpg'

        name ='mr john'
        company='safaricom'
        description ='excellent platform'
        
        />
         <Display 
        profileImg='p1.jpg'

        name ='kimani karaba'
        company='Equity group'
        description ='monor changes needed'
        
        />
      </div>
    </div>
  )
}

export default ReviewDisplay