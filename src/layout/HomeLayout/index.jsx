import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderHomeLayout from '../../Components/ElementLayouts/HeaderHomeLayout'
import NavMenubar from '../../Components/ElementLayouts/NavMenubar'
import FilterBar from '../../Components/ElementLayouts/FilterBar'

import "../../style/HomePlayout.css"


const HomePlayout = () => {


  return (
    <div className='HomePlayout'>
        <HeaderHomeLayout />
        <NavMenubar />
        <div className='container'>
          <FilterBar />  
          <Outlet />
        </div>
    </div>
  )
}

export default HomePlayout