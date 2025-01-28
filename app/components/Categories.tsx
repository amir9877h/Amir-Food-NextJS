"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { DATABASE } from "@/data/data";
import Image from "next/image";

const Categories = () => {
  return (
    <section className="py-10 my-10 mx-6">
      <Swiper
        navigation={true}
        slidesPerView={"auto"}
        spaceBetween={30}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Navigation]}
        className=""
      >
        {DATABASE.services.map((item) => {
          return (
            <SwiperSlide
              key={item.service}
              className="!w-fit bg-body-color p-4 rounded-lg ring-1 m-1 ring-carbon-alphaHigh"
            >
              <div className="w-fit flex flex-col items-center justify-center">
                <Image
                  src={item.img}
                  alt={item.service}
                  width={64}
                  height={64}
                  className="m-4"
                />
                <p className="text-sm text-carbon-dark">{item.service}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Categories;
