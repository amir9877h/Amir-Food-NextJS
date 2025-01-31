import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white2 p-12 flex flex-wrap gap-12 justify-between">
      <div className="flex gap-6">
        <div className="">
          <p
            className="text-3xl font-bold text-primary-main rtl:direction-ltr"
            style={{ direction: "ltr" }}
          >
            Amir<span className=" italic">!</span>
          </p>
          <p
            className=" text-3xl font-bold text-primary-main"
            style={{ direction: "ltr" }}
          >
            Food
          </p>
        </div>
        <div>
          <h1 className="text-primary-main text-xl">امیرفود</h1>
          <p className="text-xs text-carbon-light">
            تجربه سفارش غذا، از زودفود تا امیرفود
          </p>
          <div className="flex gap-2 flex-row-reverse mt-4">
            {[
              "/images/aparat.svg",
              "/images/instagram.svg",
              "/images/linkedin.svg",
              "/images/telegram.svg",
              "/images/twitter.svg",
            ].map((icon, index) => (
              <Image
                src={icon}
                key={index}
                alt="icon"
                width={100}
                height={100}
                className="w-10 cursor-pointer h-10 bg-white border border-carbon-alphaHigh rounded-full shadow-sm p-2"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 text-carbon-light text-sm">
        {[
          "درباره امیرفود",
          "فرصت های شغلی",
          "وبلاگ",
          "قوانین سایت",
          "حریم خصوصی",
          "ثبت نام فروشندگان",
        ].map((item, index) => (
          <p key={index} className="cursor-pointer">
            {item}
          </p>
        ))}
      </div>
      <div className="flex flex-col gap-2 text-carbon-light text-sm">
        {[
          "تماس با امیرفود",
          "پرسش های متداول",
          "ثبت شکایات",
          "اپلیکیشن موبایل",
        ].map((item, index) => (
          <p key={index} className="cursor-pointer">
            {item}
          </p>
        ))}
      </div>
      <div className="flex">
        {["/images/enamad.png", "/images/senf.png"].map((item, index) => (
          <Image
            key={index}
            src={item}
            alt="namad"
            width={100}
            height={100}
            className="w-16 h-24 object-contain"
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
