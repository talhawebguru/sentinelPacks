import React from "react";
import RightArrow from "@/public/images/rightArrow.svg";
import Image from "next/image";
import HeroImage from "@/public/images/heroImg.svg";
import MobileHeroImage from "@/public/images/mobileHeroImg.svg";
const Hero = () => {
  return (
    <>
      <div className="2xl:max-w-[1440px] 2xl:px-0 2xl:mx-auto relative mt-10 ">
        <div className="md:absolute 2xl:top-52 2xl::left-24 lg:left-32 lg:top-36 md:left-16 md:top-16 px-5 md:px-0">
          <h1 className="text-primary text-[40px] xs:text-[32px] font-nohemi capitalize leading-[47.03px] font-normal">Supporting Surgeons,<br/> Saving Lives</h1>
          <div className="px-[25px] cursor-pointer mt-6 py-3 bg-custom-gradient justify-center items-center gap-4 inline-flex text-white text-base font-medium font-primary">
            Get this from Jurhy <Image src={RightArrow} alt="Right Arrow" />
          </div>
        </div>
        <div className="w-full h-full mt-12 md:mt-0  xl:px-[90px] lg:px-[40px] 2xl:max-w-[1440px] 2xl:px-0 2xl:mx-auto px-5 2xl:rounded-2xl 2xl:shadow">
            <Image src={HeroImage} alt="Hero Image" className="w-full h-full hidden md:block rounded-2xl shadow" />
            <Image src={MobileHeroImage} alt="Hero Image" className="w-full h-full rounded-2xl shadow md:hidden" />
            
        </div>
      </div>
    </>
  );
};

export default Hero;
