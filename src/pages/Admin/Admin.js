import React from 'react'
import Sidebar from './comps/sidebar/Sidebar'
import Home from  './comps/disp/Home'
import './admin.css'


export const Admin = () => {
  return (
    <div className='admin'>
      <Sidebar />
      <Home />
      

    </div>
  )
}
