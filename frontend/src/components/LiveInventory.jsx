import React from 'react'
import DB from './DB'

const LiveInventory = () => {
  return (
   <>

    <div>Live Inventory</div>
    <div id="data">
    <DB userQuery={'SELECT * FROM products'}/>
        
    </div>

   </>
  )
}

export default LiveInventory