import React from 'react'
import Header from '../../commonComponents/header'
import Sidebar from '../../commonComponents/sidebar'

const MarketPlace = () => {
  return (
    <div>
    <div className="flex flex-row">
      <div>
        {" "}
        <Sidebar />
      </div>

      <div>
        {" "}
        <Header />
      </div>
    </div>
  </div>  )
}

export default MarketPlace