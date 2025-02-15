import React, { useState } from 'react'
import './Sidebar.css'
import Logo from "../../imgs/logo.png"
import {motion} from 'framer-motion'
import {UilSignOutAlt,UilBars} from '@iconscout/react-unicons'
import { SidebarData } from '../../Data/Data'
const Sidebar = () => {

  const[selected,setSelected]=useState(0)
  const[expanded,setExpanded] =useState(true)
  const sidebarVariants = {
    true: {
      left : '0'
    },
    false:{
      left : '-60%'
    }
  }
  console.log(window.innerWidth)
  return (
    <>
      <div className='bars' style={expanded?{left:'60'}:{left:'5%'}} onClick={()=>setExpanded(!expanded)}>
        <UilBars/>
      </div>
      <motion.div className='Sidebar'
      variants ={sidebarVariants}
      animate={window.innerWidth<=768?`${expanded}`:''}
      >
      {/*logo*/}
      <div className="logo">
        <img src={Logo} alt="" />
            <span>
                Sh<span>o</span>p
            </span>
      </div>
      {/*menu*/}
      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div
              className= {selected===index?'menuItem active':'menuItem'}
              key={index}
              onClick={()=>setSelected(index)}
            >
              <item.icon />
              <span>{item.heading}</span>
            </div>
          );
        })}
        <div className="menuItem">
          <UilSignOutAlt/>
        </div>
      </div>
    </motion.div>
    </>
  )
}

export default Sidebar