"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import productData from "@/data/ProductList";
import ratingStar from "@/public/images/ratingStar.svg";
import { motion } from "framer-motion";

const ProductData = ({ initialLimit, selectedCategory, mobileLimit }) => {
  const [limit, setLimit] = useState(initialLimit);

  // Handle screen size to set the limit
  useEffect(() => {
    const updateLimitBasedOnScreenSize = () => {
      if (window.innerWidth <= 640) {
        setLimit(mobileLimit);
      } else {
        setLimit(initialLimit);
      }
    };

    updateLimitBasedOnScreenSize();
    window.addEventListener("resize", updateLimitBasedOnScreenSize);

    return () => {
      window.removeEventListener("resize", updateLimitBasedOnScreenSize);
    };
  }, [initialLimit, mobileLimit]);

  // Filter products by selected category
  const filteredProducts =
    selectedCategory === "All Products"
      ? productData
      : productData.filter((product) => product.category === selectedCategory);

  // Slice the products based on the limit
  const displayedProducts = limit
    ? filteredProducts.slice(0, limit)
    : filteredProducts;

  // Card animation variants for Framer Motion
  const cardVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)", // Elevates the card
      transition: { duration: 0.2, ease: "easeInOut" },
    },
  };

  return (
    <>
      {displayedProducts.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow-xl hover:shadow-2xl flex flex-col pb-4 justify-center px-5 rounded-lg transition-all duration-600 ease-in-out hover:scale-105"
        >
          {/* Link to the product detail page */}
          <Link href={`/product/${item.name.toLowerCase().replace(/ /g, "-")}`}>
            <Image
              src={item.url}
              alt={item.name}
              className="mx-auto w-full h-64 object-cover rounded-t-lg"
            />
          </Link>

          {/* Product details */}
          <div className="p-4">
            <motion.h2 
            initial={{y:50, opacity:0}}
            whileInView={{y:0, opacity:1}}
            viewport={{once:true}}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="text-[#0e0e0e] text-base font-normal font-primary capitalize mt-4 h-12">
              {item.name}
            </motion.h2>

            {/* Product rating */}
            <div className="mt-1">
              <Image src={ratingStar} alt="rating" />
            </div>

            {/* Reference */}
            <div className="text-[#0e0e0e] text-base font-normal font-primary mt-3">
              <p>REF CHK-007</p>
            </div>

            {/* View Detail Button */}
            <div className="mt-5 rounded-lg h-[42px] flex justify-center items-center bg-custom-gradient text-white text-base font-normal font-primary">
              <Link href={`/product/${item.name.toLowerCase().replace(/ /g, "-")}`}>
                <p>View Detail</p>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductData;
