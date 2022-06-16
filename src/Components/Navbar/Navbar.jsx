import React,{useState} from 'react'
import {motion,AnimateSharedLayout} from "framer-motion"

import images from "../../assets/wave.gif"
import  "./nav.css"

const Navbar = ({items,selectedId}) => {
   
  return (
    <>
      <div className="container">

      <div className="logo">
       <motion.div 
       transition={{duration:0.5,ease:"easeOut"}}>
         <img src={images} alt="logo" />
       </motion.div></div>

      <ul className="links">
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className="li-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      
      </div>
    </>
  )
}

export default Navbar