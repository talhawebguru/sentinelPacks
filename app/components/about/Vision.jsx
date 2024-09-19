import React from "react";
import Image from "next/image";
import VisionImg from "@/public/images/visionImg.svg";
import * as motion from "framer-motion/client";


const Vision = () => {
  return (
    <>
      <div className="flex md:justify-between md:gap-5  flex-wrap md:flex-nowrap md:mt-28   2xl:max-w-[1440px] 2xl:mx-auto xl:px-[90px] lg:px-[40px] px-5">
      <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.9,
            ease: "easeInOut",
            delay: 0.2,
            type: "spring",
            stiffness: 100,
          }}
          viewport={{ margin:"-6%"}}
          className="h-[590px] md:w-[50%] mt-10 md:mt-0 order-1 ">
          <Image src={VisionImg} alt="About Us" className="" />
        </motion.div>
        <div className="md:w-[50%] md:order-2">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 }}
            viewport={{ once: false}} 
            className="text-[#0e0e0e] text-[42px] font-normal font-nohemi capitalize mt-24 ">
          Our Vision
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
            viewport={{ once: false }}
            className="text-[#0e0e0e] text-base font-normal font-primary mt-5">
            Safecare Medical Industries Was Conceived And Established In The
            Year Of 2016 By Bin Ali Group That Plans To Give A Different
            Dimension To The Medical Industries All Across The Middle
            East.Headquartered in Abu Dhabi, UAE, SafeCare is a domestic profit
            corporation providing quality medical plastic consumable products
            across all GCC countries. With its registered subsidiary factories
            and subsidiary offices across the UK, USA, Germany, and China,
            SafeCare thrives on producing and providing quality medical products
            across the globe.
          </motion.p>
          
        </div>
        
      </div>
    </>
  );
};

export default Vision;
