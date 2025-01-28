"use client";
import Image from "next/image";
import React, { useState } from "react";
import ShopIcon from "../../public/images/shopIcon.svg";
import { LuUser } from "react-icons/lu";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const Hero = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [iBtnDisabled, setIsBtnDisabled] = useState<boolean>(true);
  const regex = new RegExp("^09\\d{8}$");

  // Add these constants outside your component
  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const defaultCenter = {
    lat: 35.6892, // Default coordinates (you can change these)
    lng: 51.389,
  };

  // Inside your Hero component, add this state
  const [map, setMap] = useState(null);

  // Add this handler
  const onLoad = React.useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <div className="py-10 my-10 grid grid-cols-2 bg-body-color md:rounded-es-[124px] relative overflow-hidden">
      <div className="grow">
        <div className="ms-4">
          <p
            className="text-6xl font-bold text-primary-main text-end rtl:direction-ltr"
            style={{ direction: "ltr" }}
          >
            Amir<span className=" italic">!</span>
          </p>
          <p className="ms-4 text-6xl font-bold text-primary-main">Food</p>
        </div>
        <div className="md:mt-28 ms-10">
          <div className="flex items-center h-[64px]">
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
              className="md:h-[52px] h-12 !min-w-fit !ms-2 text-primary-main text-3xl md:text-5xl flex items-center mt-4"
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
          <Dialog>
            <DialogTrigger>
              <SearchInput />
            </DialogTrigger>
            <DialogTitle className="hidden">
              <p className="text-2xl font-bold">جستجوی آدرس</p>
            </DialogTitle>
              <DialogContent className="rounded-lg max-w-[480px]">
                <DialogHeader>
                  <DialogDescription asChild>
                    <p className="text-start font-bold !text-2xl pt-4">
                      انتخاب آدرس
                    </p>
                  </DialogDescription>
                </DialogHeader>
                <div>
                  <p className="text-carbon-light text-sm">
                    برای مشاهده مناسب‌ترین پیشنهادها به شما، ابتدا موقعیتتان را
                    مشخص کنید.
                  </p>
                  {/* show map here */}
                  <div className="h-[400px] w-full mt-4">
                    <LoadScript
                      googleMapsApiKey={
                        (process.env.GOOGLE_MAPS_API_KEY as string) || ""
                      }
                    >
                      <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={defaultCenter}
                        zoom={13}
                        onLoad={onLoad}
                        onUnmount={onUnmount}
                      ></GoogleMap>
                    </LoadScript>
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit" className="w-full font-bold text-xl">
                    تایید
                  </Button>
                </DialogFooter>
              </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="grid">
        <div className="flex justify-end">
          <div className="flex gap-2 w-fit px-8">
            <Button
              variant={"ghost"}
              className="hidden hover:bg-transparent md:flex bg-transparent text-black rounded-lg items-center justify-center gap-1 py-2 px-1"
            >
              <Image
                src={ShopIcon}
                alt="icon"
                width={24}
                height={24}
                className="invert"
              />
              <p>ثبت نام فروشندگان</p>
            </Button>
            <Dialog>
              <DialogTrigger>
                <p className=" px-1 py-2 rounded-lg bg-primary-main font-bold text-lg text-white hidden md:flex">{`ورود یا عضویت`}</p>
                <LuUser className="flex md:hidden w-6 h-6" />
              </DialogTrigger>
              <DialogContent className="rounded-lg max-w-[480px]">
                <DialogHeader>
                  <DialogTitle asChild>
                    <div className="absolute top-1 left-4">
                      <p
                        className="text-sm font-bold text-primary-main rtl:direction-ltr"
                        style={{ direction: "ltr" }}
                      >
                        Amir<span className=" italic">!</span>
                      </p>
                      <p className="ms-1 text-sm -mt-2 font-bold text-primary-main">
                        Food
                      </p>
                    </div>
                  </DialogTitle>
                  <DialogDescription asChild>
                    <p className="text-start font-bold !text-3xl md:!text-4xl pt-4">
                      ورود <span className="font-normal">یا</span> عضویت
                    </p>
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid items-center gap-4">
                    <Label htmlFor="phoneNumber" className="text-right">
                      شماره تلفن همراه
                    </Label>
                    <Input
                      id="phoneNumber"
                      value={phoneNumber}
                      onChange={(e) => {
                        setPhoneNumber(e.target.value);
                        setIsBtnDisabled(!regex.test(phoneNumber));
                      }}
                      className=""
                    />
                    <p className="text-xs text-carbon-light">{`شماره با 09 شروع میشود`}</p>
                  </div>
                </div>
                <DialogFooter>
                  <Button
                    type="submit"
                    className="w-full font-bold text-xl disabled:bg-inactive-alphaHigh disabled:text-carbon-light"
                    disabled={iBtnDisabled}
                  >
                    ادامه
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
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
    <div className="flex items-center justify-between gap-2 bg-white rounded-full p-1 shadow-md max-w-[460px] min-w-fit w-full mx-8 relative z-10">
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
