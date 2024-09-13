import React from "react";
import Image from "next/image";
import RightArrow from "@/public/images/rightArrow.svg";
import AboutUS from "@/public/images/aboutUs.svg";
import * as motion from "framer-motion/client";

const AboutUs = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0.3, scale: 0.5 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          transition: {
            opacity: { duration: 1, ease: "easeInOut" }, // Slow and smooth opacity transition
            scale: { duration: 0.6, ease: "easeInOut" }, // Scale can be faster
          },
        }}
        viewport={{ margin: "-7%" }}
        className="flex md:justify-between md:gap-5  flex-wrap md:flex-nowrap md:mt-32 mt-14 xs:mt-0   2xl:max-w-[1440px] 2xl:mx-auto xl:px-[90px] lg:px-[40px] px-5"
      >
        <div className="md:w-[50%]">
          <h1 className="text-[#0e0e0e] text-[42px] font-normal font-nohemi capitalize mt-24 xs:mt-14 ">
            About Company
          </h1>
          <p className="text-[#0e0e0e] text-base font-normal font-primary mt-5">
            Safecare Medical Industries Was Conceived And Established In The
            Year Of 2016 By Bin Ali Group That Plans To Give A Different
            Dimension To The Medical Industries All Across The Middle
            East.Headquartered in Abu Dhabi, UAE, SafeCare is a domestic profit
            corporation providing quality medical plastic consumable products
            across all GCC countries. With its registered subsidiary factories
            and subsidiary offices across the UK, USA, Germany, and China,
            SafeCare thrives on producing and providing quality medical products
            across the globe.
          </p>
          <div className="px-[25px] cursor-pointer  py-3 bg-custom-gradient justify-center mt-12 items-center gap-4 inline-flex text-white text-base font-medium font-primary">
            Learn More <Image src={RightArrow} alt="Right Arrow" />
          </div>
        </div>
        <div className="h-[590px] md:w-[50%] mt-10 xs:mt-6 xs:h-auto md:mt-0 flex justify-end">
          <Image src={AboutUS} alt="About Us" className="" />
        </div>
      </motion.div>
    </>
  );
};

export default AboutUs;
