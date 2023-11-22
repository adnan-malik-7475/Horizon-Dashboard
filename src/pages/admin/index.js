import React from 'react'
import Header from '../../commonComponents/header'
import Sidebar from '../../commonComponents/sidebar'

const Admin = () => {
  return (
    <div>
    <div className="flex flex-row-reverse">
     

      <div>
     
        <Header />
      </div>
      <div> 
       
        <Sidebar />
      </div>
    </div>
  </div>
  )
}

export default Admin