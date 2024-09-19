import React from 'react'
import * as motion from "framer-motion/client";


const AboutTitle = () => {
  return (
    <>
        <motion.h1
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 }}
        className='text-[#0e0e0e] mt-28 text-[56px] font-normal font-nohemi capitalize text-center'>About Us</motion.h1>
        <motion.p 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 }}
        className='text-[#0e0e0e] mt-4 text-base font-normal font-primary text-center xs:px-5'>Our extensive range of products is designed with input from healthcare professionals.</motion.p>
    </>
  )
}

export default AboutTitle