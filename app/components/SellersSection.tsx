import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const SellersSection = () => {
  return (
    <section className="py-10 mb-10 mt-10 lg:mt-52 mx-0 sm:mx-6 grid lg:grid-cols-2 bg-body-color md:rounded-3xl relative">
      <div className="px-16 py-9">
        <h1 className="text-4xl">صاحب کسب و کار هستید؟</h1>
        <p className="text-carbon-light my-12">
          با امیر فود کسب و کارتان را آنلاین کنید و فروشتان را افزایش دهید.
        </p>
        <Button className="items-center justify-center gap-1 py-2 px-2 font-bold text-xl">
          <Image
            src={`/images/shopIcon.svg`}
            alt="icon"
            width={24}
            height={24}
          />
          <p>ثبت نام فروشندگان</p>
        </Button>
      </div>
      <div className="hidden lg:block">
        <Image
          src={`/images/shop.png`}
          alt="phones"
          width={400}
          height={400}
          className="absolute left-10 -top-32"
        />
      </div>
    </section>
  );
};

export default SellersSection;
