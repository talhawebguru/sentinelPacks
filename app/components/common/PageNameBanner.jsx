import React from "react";
import Image from "next/image";
import PageBannerCircle1 from "@/public/images/pageBannerCircle1.svg";
import * as motion from "framer-motion/client";

const PageNameBanner = (props) => {
  return (
    <>
      <div
        className=" 2xl:max-w-[1440px] bg-gradient-to-r-teal  2xl:mx-auto xl:mx-[90px] lg:mx-10 h-[279px] lg:mt-11 mt-6 relative z-30 xs:overflow-hidden xs:mt-5"
      >
        {/* <Image
          src={props.image}
          alt="banner"
          className="absolute -z-0 w-full h-full object-cover object-left-top inset-0"
          priority
        /> */}

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.0,
            ease: "easeInOut",
          }}
          className="text-white text-[42px] xs:text-[32px] font-normal font-nohemi absolute bottom-28 left-9 "
        >
          {props.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
          }}
          className="text-white text-base font-normal font-primary leading-normal absolute bottom-16 left-9 xl:w-[29%]"
        >
          Grab your limited-time discount and enjoy 10% off on all our products
        </motion.p>
      </div>
    </>
  );
};

export default PageNameBanner;
