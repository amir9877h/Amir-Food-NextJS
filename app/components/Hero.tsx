"use client";
import Image from "next/image";
import React from "react";
import { PrimaryButton, SecondrayButton } from "./CustomButton";
import ShopIcon from "../../public/images/shopIcon.svg";
import { LuUser } from "react-icons/lu";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";

const Hero = () => {
  return (
    <div className="py-10 my-10 grid grid-cols-2 bg-body-color md:rounded-es-[124px] relative overflow-hidden">
      <div className="grow">
        <div className="ms-4">
          <p
            className="text-6xl font-bold text-primary-main text-end rtl:direction-ltr"
            style={{ direction: "ltr" }}
          >
            Amir<span>!</span>
          </p>
          <p className="ms-4 text-6xl font-bold text-primary-main">Food</p>
        </div>
        <div className="md:mt-28 ms-10">
          <div className="flex items-center">
            <p className="text-3xl md:text-5xl min-w-fit">سفارش انلاین</p>
            <Swiper
              slidesPerView={1}
              loop={true}
              direction="vertical"
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              modules={[Autoplay]}
              className="md:h-[52px] h-12 !min-w-fit !ms-2 text-primary-main text-3xl md:text-5xl"
              centeredSlides={true}
            >
              <SwiperSlide>نان</SwiperSlide>
              <SwiperSlide>میوه</SwiperSlide>
              <SwiperSlide>قهوه</SwiperSlide>
              <SwiperSlide>پیتزا</SwiperSlide>
              <SwiperSlide>غذا</SwiperSlide>
              <SwiperSlide>خوار و بار</SwiperSlide>
            </Swiper>
          </div>
          <p className="text-carbon-light">
            سفارش آنلاین غذا ، میوه، نان، شیرینی و ...
          </p>
        </div>
        <div className="mt-12">
          <SearchInput />
        </div>
      </div>
      <div className="grid">
        <div className="flex justify-end">
          <div className="flex md:hidden px-8 w-fit">
            <SecondrayButton icon={<LuUser className="w-6 h-6" />} />
          </div>
          <div className="hidden md:flex gap-2 w-fit px-8">
            <SecondrayButton
              text="ثبت نام فروشندگان"
              svgUrl={ShopIcon}
              svgPosition="right"
            />
            <PrimaryButton text={`ورود یا عضویت`} />
          </div>
        </div>
        <div className="relative h-[616px]">
          <Image
            src={`/hero-image.png`}
            width={652}
            height={616}
            alt="پیتزا"
            className="object-cover absolute right-0 -bottom-10"
            style={{
              minWidth: "652px",
              minHeight: "616px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

const SearchInput = () => {
  return (
    <div className="flex items-center justify-between gap-2 bg-white rounded-full p-1 shadow-md max-w-[460px] min-w-fit w-full mx-8">
      <div className="flex gap-1 ms-2">
        <IoLocationOutline className="h-6 w-6 text-carbon-light" />
        <input
          type="text"
          placeholder="ابتدا ادرستان را انتخاب کنید."
          className="bg-transparent outline-none"
        />
      </div>
      <div className="p-3 cursor-pointer bg-primary-main rounded-full text-white">
        <IoIosSearch className="w-6 h-6" />
      </div>
    </div>
  );
};
