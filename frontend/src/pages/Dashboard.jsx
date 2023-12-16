import React from 'react'

const Dashboard = () => {

    
  return (
    <>
    <div>Dashboard</div>
    <div className='navbar'>
        <div>Live Inventory</div>
        <div>✨AI Predictive Analysis</div>
        <div>Settings</div>
    </div>


    <div className='inventory_page'>
        Inventory Content
    </div>

    <div className='ai_page'>
        AI Content
    </div>

    <div className='settings_page'>
        Settings Content
    </div>
    </>
  )
}

export default Dashboard