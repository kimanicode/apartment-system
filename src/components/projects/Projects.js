import React from 'react';
import './projects.css'
import Single from './Single';

function Projects() {
  return (
    <div className='projects'>
        <h1>Projects</h1>
        <p>Discover the latest interior designs</p>
        <div className='projects-wrapper'>
            <Single 
              title= 'Dolphin heights'
              location = 'ruiru'
              backgroundImg ='p1.jpg'

            />
            <Single
            title= 'Pazuri heights'
            location = 'westlands'
            backgroundImg ='p2.jpg'
            
            />
            <Single
            title= 'Sharks towers'
            location = 'Parklands'
            backgroundImg ='p3.jpg'
            
            />
        </div>
    </div>
  )
}

export default Projects