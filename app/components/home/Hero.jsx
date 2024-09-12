import React from "react";
import RightArrow from "@/public/images/rightArrow.svg";
import Image from "next/image";
import HeroImage from "@/public/images/heroImg.svg";
const Hero = () => {
  return (
    <>
      <div className="2xl:max-w-[1440px] 2xl:px-0 2xl:mx-auto relative mt-10  lg:h-auto">
        <div className="md:absolute md:top-52 md:left-24">
          <h1 className="text-primary text-[40px] xs:text-[32px] font-nohemi capitalize leading-[47.03px] font-normal">Supporting Surgeons,<br/> Saving Lives</h1>
          <div className="px-[25px] mt-6 py-3 bg-custom-gradient justify-center items-center gap-4 inline-flex text-white text-base font-medium font-primary">
            Get this from Jurhy <Image src={RightArrow} alt="Right Arrow" />
          </div>
        </div>
        <div className="w-full h-full mt-12 md:mt-0  xl:px-[90px] lg:px-[40px] 2xl:max-w-[1440px] 2xl:px-0 2xl:mx-auto px-5">
            <Image src={HeroImage} alt="Hero Image" className="w-full h-full rounded-2xl" />
        </div>
      </div>
    </>
  );
};

export default Hero;
