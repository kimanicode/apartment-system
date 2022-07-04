import React from 'react'
import './home.css'
import {CircularProgressbar}  from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';

function Home() {
  return (
    <div className='home'>
        
            

       <div className='graph-wrapper'>
       <div className='widget-graph'>
            <p id='info'>Admin Efficiency</p>
          <div className='cpb'>
          <CircularProgressbar  value={70} text = {'100%'} strokeWidth ={5} />
             
          </div>
          </div>
          <div className='widget-graph'>
            <p id='info'>User Friendly</p>
          <div className='cpb'>
          <CircularProgressbar  value={70} text = {'90%'} strokeWidth ={5} />
          </div>
          </div>
          <div className='widget-graph'>
            <p id='info'>Page Efficiency</p>
          <div className='cpb'>
          <CircularProgressbar  value={70} text = {'70%'} strokeWidth ={5} />
          </div>
          </div>
       
       
        

    </div>
    </div>
  )
}

export default Home