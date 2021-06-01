import React from 'react'
import Web from '../src/images/img1.png'
import { NavLink } from "react-router-dom"
import Common from './Common'

const Home =() => {
    return(
      <>
      <Common 
      name="Hey Im" 
      strong="V Sidharth"
      imgsrc={Web} 
      visit="/about" 
      btname="Get Started"/>
      </>
    )
  }

  export default Home;