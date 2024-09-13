import React from 'react'
import Image from 'next/image'
import RightArrow from '@/public/images/rightArrowP.svg'

const Banner = () => {
  return (
    <>
    <div className='sm:bg-CTA relative bg-mCTA bg-no-repeat bg-cover bg-left h-[400px]   mt-32 xs:mt-10 xl:mx-[90px] lg:px-[40px] px-5 flex flex-wrap md:flex-nowrap pb-20 md:pb-0 2xl:max-w-[1440px] 2xl:mx-auto'>
        <div className='absolute md:top-24 top-14 mb-20 md:left-[58%]'>
            <h2 className=" text-white text-[42px] xs:text-[38px] font-normal font-arial leading-[47.88px]">Enjoy up to 10% off!</h2>
            <p className='text-white text-base font-normal font-secondary leading-normal mt-4 lg:w-[400px]'>Grab your limited-time discount and enjoy 10% off on all our products</p>
            <div className="px-[25px] cursor-pointer lg:mb-20 md:mb-16  mb-5 py-3 mt-8  text-primary justify-center items-center gap-4 inline-flex bg-white text-base font-medium font-primary">
              Get this from Jurhy <Image src={RightArrow} alt="Right Arrow"  />
            </div>
        </div>
    </div>
    </>
  )
}

export default Banner