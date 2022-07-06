import React from 'react'
import './sidebar.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PaidIcon from '@mui/icons-material/Paid';
import ReviewsIcon from '@mui/icons-material/Reviews';
import HouseIcon from '@mui/icons-material/House';

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='title'><h3>Lux Admin</h3>
        <hr />
        </div>
        <div className='list'>
           
            <p><DashboardIcon className ='icons' /> Dashboard</p>

            <li> < PersonOutlineIcon className ='icons' /><span>Contacts</span></li>
            <li>< PaidIcon className ='icons' /><span>Payments</span></li>
            <li>< ReviewsIcon className ='icons' /><span>Reviews</span></li>
            <li>< HouseIcon className ='icons' /><span>Properties</span></li>
        </div>
    </div>
  )
}

export default Sidebar