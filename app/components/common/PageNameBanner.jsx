import React from "react";
import Image from "next/image";
import Ellipse1 from "@/public/images/Ellipse20.svg";
import Ellipse2 from "@/public/images/Ellipse21.svg";
import Ellipse3 from "@/public/images/Ellipse22.svg";
import Ellipse4 from "@/public/images/Ellipse23.svg";
import Ellipse5 from "@/public/images/Ellipse24.svg";
import * as motion from "framer-motion/client";

const PageNameBanner = (props) => {
  // Define motion variants for smooth animation
  const imageVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <>
      <div
        className=" 2xl:max-w-[1440px] bg-gradient-to-r-teal  2xl:mx-auto xl:mx-[90px] lg:mx-10 h-[279px] lg:mt-11 mt-6 relative z-30 xs:overflow-hidden xs:mt-5"
      >
        <div>
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.2, ease: "easeInOut" }}
            variants={imageVariant}
            className="absolute bottom-0"
          >
            <Image src={Ellipse1} alt="Circle" loading="eager" priority />
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.1 }}
            variants={imageVariant}
            className="absolute bottom-0 right-0"
          >
            <Image src={Ellipse2} alt="Circle" loading="eager" priority />
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
            variants={imageVariant}
            className="absolute -z-30 top-0 left-[32%]"
          >
            <Image src={Ellipse3} alt="Circle" loading="eager" priority />
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
            variants={imageVariant}
            className="absolute  top-0 right-0"
          >
            <Image src={Ellipse4} alt="Circle" loading="eager" priority />
          </motion.div>

          <motion.div
           initial={{ x: 0 }} // Start at position 0 (no movement)
           animate={{ x: [0, -20, 0] }} // Move up by 10px, then back to 0px
           transition={{
             duration: 1, // Time it takes to complete one cycle (forward and backward)
             ease: "easeInOut", // Smooth ease for in and out motion
             repeat: Infinity, // Repeat the motion infinitely
             repeatType: "mirror", // Makes the motion go back and forth
           }}
            className="absolute -z-40 top-0 bottom-0 right-0"
          >
            <Image src={Ellipse5} alt="Circle" loading="eager" priority />
          </motion.div>
        </div>

        {/* Banner Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute bottom-0 right-4"
        >
          <Image
            src={props.image}
            alt="banner"
            loading="eager"
            priority
          />
        </motion.div>

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
