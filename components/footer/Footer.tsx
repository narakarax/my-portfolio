import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { FaMailBulk, FaSkype, FaGithub, FaDiscord, FaTelegram, FaLinkedin } from 'react-icons/fa';
const Footer = ({}) => {
   
  const sendEmail = () => {    
    window.open("mailto:aaronchupa610@gmail.com?subject=About Project");
  };
  return (
    <div className="Footer bg-black border-t border-dashed w-full ">
      <div className='w-full text-center text-white p-2'>
        © Copyright 2021 By <span className='text-yellow-500'>Oleksandr Lukianchuk</span>
      </div>
    </div>
  )
}

export default Footer
