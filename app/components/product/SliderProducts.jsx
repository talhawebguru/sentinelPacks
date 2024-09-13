"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  Thumbs,
  FreeMode,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import Image from "next/image";
import Product1 from "@/public/images/product5.png";
import Product2 from "@/public/images/product7.png";
import Product3 from "@/public/images/product8.jpg";
import { GoArrowLeft } from "react-icons/go";
import LeftSliderArrow from "@/public/images/leftSliderArrow.svg";
import RightSliderArrow from "@/public/images/rightSliderArrow.svg";
const SliderProducts = (props) => {
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

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <div className="relative">
        <Swiper
          ref={swiperRef}
          navigation={false}
          loop={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[Navigation, Thumbs , FreeMode]}
          className="mySwiper relative"
          onSlideChange={handleSlideChange}
          autoplay // Change delay to 1000 milliseconds (1 second)
        >
          <SwiperSlide>
            <Image
              src={props.product}
              alt="Product"
              className="h-[500px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Product1} alt="Product" className="h-[500px]" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Product2} alt="Product" className="h-[500px]" />
          </SwiperSlide>
        </Swiper>
        <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
          <SwiperSlide>
            <Image
              src={props.product}
              alt="Product"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Product1} alt="Product" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Product2} alt="Product"  />
          </SwiperSlide>
      </Swiper>
        <div
          className="w-[63px] hidden  h-[63px] absolute bottom-0 xl:ml-4 left-0 z-20 sm:block"
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
          className="w-[63px] h-[63px] absolute bottom-0 xl:mr-4 right-0 z-20 hidden sm:block"
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

export default SliderProducts;
