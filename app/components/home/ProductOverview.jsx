"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,Pagination,Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import RightArrow from "@/public/images/rightArrow.svg";
import Product1 from "@/public/images/product5.png";
import Product2 from "@/public/images/product7.png";
import Product3 from "@/public/images/product8.jpg";
import { GoArrowLeft } from "react-icons/go";

const ProductOverview = () => {

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    setCurrentSlideIndex(swiper.activeIndex);
  };

  const handleNextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  return (
    <>
      <div className="relative xl:px-[90px] lg:px-[40px] px-5 2xl:max-w-[1440px] 2xl:mx-auto ">
        <Swiper
          ref={swiperRef}
          navigation={false}
          modules={[Navigation , Pagination, Autoplay]}
          pagination={{
            clickable: true,
          }}
          className="mySwiper relative"
          onSlideChange={handleSlideChange}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          <SwiperSlide>
            <h3 className="text-[#0e0e0e] mb-5 text-xl font-normal font-nohemi capitalize lg:hidden mt-10 text-left">
              Product Overview
            </h3>
            <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-normal xl:px-[90px] lg:px-[40px] 2xl:max-w-[1440px] 2xl:mx-auto  lg:py-28 relative">
              <div className="lg:w-6/12  lg:order-0 ">
                <Image
                  src={Product2}
                  alt="Product"
                  className="w-[420px] h-[500px] xs:h-[300px] shadow-xl mb-12 lg:mb-0"
                  width={420}
                  height={500}
                />
              </div>
              <div className="lg:w-6/12 lg:mt-16 xs:mt-0  lg:order-1">
                <h3 className="text-[#0e0e0e] text-xl font-normal font-nohemi capitalize hidden lg:block">
                  Product Overview
                </h3>
                <h2 className="text-[#0e0e0e] text-[42px] xs:text-[28px] font-normal font-nohemi capitalize mt-3">
                  Universal Pack
                </h2>
                <p className="text-[#0e0e0e] text-base font-normal font-primary capitalize mt-5">
                  Safecare Medical Industries Was Conceived And Established In
                  The Year Of 2016 By Bin Ali Group That Plans To Give A
                  Different Dimension To The Medical Industries All Across The
                  Middle East.Headquartered in Abu Dhabi, UAE, SafeCare is a
                  domestic profit corporation providing quality medical plastic
                  consumable products across all GCC countries.{" "}
                </p>
                <div className="px-[25px] cursor-pointer mt-12 mb-10 lg:mb-0 xs:mt-5  py-3 bg-custom-gradient justify-center items-center gap-4 inline-flex text-white text-base font-medium font-primary">
                  Buy Now <Image src={RightArrow} alt="Right Arrow" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <h3 className="text-[#0e0e0e] mb-5 text-xl font-normal font-nohemi capitalize lg:hidden mt-10 text-left">
              Product Overview
            </h3>
            <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-normal xl:px-[90px] lg:px-[40px] 2xl:max-w-[1440px] 2xl:mx-auto  lg:py-28 relative">
              <div className="lg:w-6/12  lg:order-0 ">
                <Image
                  src={Product1}
                  alt="Product"
                  className="w-[420px] h-[500px] xs:h-[300px] shadow-xl mb-12 lg:mb-0"
                  width={420}
                  height={500}
                />
              </div>
              <div className="lg:w-6/12 lg:mt-16 xs:mt-0  lg:order-1">
                <h3 className="text-[#0e0e0e] text-xl font-normal font-nohemi capitalize hidden lg:block">
                  Product Overview
                </h3>
                <h2 className="text-[#0e0e0e] text-[42px] xs:text-[28px] font-normal font-nohemi capitalize mt-3">
                  Lithotomy Pack
                </h2>
                <p className="text-[#0e0e0e] text-base font-normal font-primary capitalize mt-5">
                  Safecare Medical Industries Was Conceived And Established In
                  The Year Of 2016 By Bin Ali Group That Plans To Give A
                  Different Dimension To The Medical Industries All Across The
                  Middle East.Headquartered in Abu Dhabi, UAE, SafeCare is a
                  domestic profit corporation providing quality medical plastic
                  consumable products across all GCC countries.{" "}
                </p>
                <div className="px-[25px] cursor-pointer mt-12 mb-10 lg:mb-0 xs:mt-5  py-3 bg-custom-gradient justify-center items-center gap-4 inline-flex text-white text-base font-medium font-primary">
                  Buy Now <Image src={RightArrow} alt="Right Arrow" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <h3 className="text-[#0e0e0e] mb-5 text-xl font-normal font-nohemi capitalize lg:hidden mt-10 text-left">
              Product Overview
            </h3>
            <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-normal xl:px-[90px] lg:px-[40px] 2xl:max-w-[1440px] 2xl:mx-auto  lg:py-28 relative">
              <div className="lg:w-6/12  lg:order-0 ">
                <Image
                  src={Product3}
                  alt="Product"
                  className="w-[420px] h-[500px] xs:h-[300px] shadow-xl mb-12 lg:mb-0"
                  width={420}
                  height={500}
                />
              </div>
              <div className="lg:w-6/12 lg:mt-16 xs:mt-0  lg:order-1">
                <h3 className="text-[#0e0e0e] text-xl font-normal font-nohemi capitalize hidden lg:block">
                  Product Overview
                </h3>
                <h2 className="text-[#0e0e0e] text-[42px] xs:text-[28px] font-normal font-nohemi capitalize mt-3">
                  Minor Lacerations Tray
                </h2>
                <p className="text-[#0e0e0e] text-base font-normal font-primary capitalize mt-5">
                  Safecare Medical Industries Was Conceived And Established In
                  The Year Of 2016 By Bin Ali Group That Plans To Give A
                  Different Dimension To The Medical Industries All Across The
                  Middle East.Headquartered in Abu Dhabi, UAE, SafeCare is a
                  domestic profit corporation providing quality medical plastic
                  consumable products across all GCC countries.{" "}
                </p>
                <div className="px-[25px] cursor-pointer mt-12 mb-10 lg:mb-0 xs:mt-5  py-3 bg-custom-gradient justify-center items-center gap-4 inline-flex text-white text-base font-medium font-primary">
                  Buy Now <Image src={RightArrow} alt="Right Arrow" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div
          className="w-[63px] hidden   h-[63px] absolute top-[50%] xs:top-[49%] xl:ml-4 left-0 z-20 sm:block"
          onClick={handlePrevSlide}
        >
         
          <div className="w-12 h-12 bg-white flex items-center justify-center rounded-full shadow-lg hover:shadow-2xl cursor-pointer hover:bg-primary transition duration-300  group">
            <GoArrowLeft
              className="text-primary group-hover:text-white transition duration-300"
              size={22}
            />
          </div>
        </div>
        <div
          className="w-[63px] h-[63px] absolute top-[50%] xs:top-[49%] xl:mr-4 right-0 z-20 hidden sm:block"
          onClick={handleNextSlide}
        >
          
          <div className="w-12 h-12 bg-white flex items-center justify-center rounded-full shadow-lg hover:shadow-2xl cursor-pointer hover:bg-primary transition duration-300  group">
            <GoArrowLeft
              className="text-primary group-hover:text-white transition duration-300 -rotate-180"
              size={22}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductOverview;
