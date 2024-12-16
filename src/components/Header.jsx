import React from 'react'
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <div className='header'>
        <div className='text-xl font-bold'>WhatBytes</div>
        <div className='userbox'> <FaUserCircle /> <div className='ml-2'>Rahil Siddiqui</div></div>
    </div>
  )
}

export default Header