import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

const DownloadApplication = () => {
  return (
    <section className="py-10 mb-10 mt-28 mx-0 sm:mx-6 grid lg:grid-cols-2 bg-body-color md:rounded-es-[124px] relative">
      <div className="px-16 py-9">
        <h1 className="text-4xl">اپلیکیشن امیرفود</h1>
        <p className="text-carbon-light my-12">
          با اپلیکیشن امیرفود به راحتی و با چند کلیک ساده می‌توانید رستوران‌ها،
          کافه‌ها، شیرینی‌فروشی‌ها و سوپرمارکت‌های نزدیک خودتان را جست‌و‌جو کرده
          و از تجربه سفارش آسان از امیرفود لذت ببرید.
        </p>
        <p className="text-sm">
          برای دریافت لینک دانلود اپلیکیشن، شماره موبایلتان رو وارد کنید
        </p>
        <div className="flex items-center justify-center p-2 rounded-lg bg-white shadow-md mt-2">
          <Input
            placeholder="09*********"
            style={{ direction: "ltr" }}
            className="text-end border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <Button>دریافت لینک</Button>
        </div>
        <div className="flex flex-wrap mt-6 gap-4 w-full items-center justify-center">
          {[1, 2, 3, 4].map((i) => {
            return (
              <Image
                key={i}
                src={`/images/social-${i}.svg`}
                alt="download"
                width={200}
                height={100}
                className="w-40"
              />
            );
          })}
        </div>
      </div>
      <div className="hidden lg:block">
        <Image
          src={`/images/phones.png`}
          alt="phones"
          width={400}
          height={400}
          className="absolute left-10 -top-32"
        />
      </div>
    </section>
  );
};

export default DownloadApplication;
