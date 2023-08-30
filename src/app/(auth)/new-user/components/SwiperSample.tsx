"use client";

import { FC, ReactElement, ReactNode } from "react";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation, A11y } from "swiper/modules";
import { cn } from "@/lib/utils";

interface SwiperSampleProps {}

const SwiperSample: FC<SwiperSampleProps> = ({}) => {
  return (
    <>
      <Swiper
        modules={[Pagination, Navigation, A11y]}
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        a11y={{ enabled: true }} // for screen readers
        className="border rounded-md w-[65vw] md:w-[80vw] h-96"
      >
        <SwiperSlide className="text-center items-center flex">
          Slide 1
        </SwiperSlide>
        <SwiperSlide className="text-center items-center flex">
          Slide 2
        </SwiperSlide>
        <SwiperSlide className="text-center items-center flex">
          Slide 3
        </SwiperSlide>
        <SwiperSlide className="text-center items-center flex">
          Slide 4
        </SwiperSlide>
        <SwiperSlide className="text-center items-center flex">
          Slide 5
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperSample;
