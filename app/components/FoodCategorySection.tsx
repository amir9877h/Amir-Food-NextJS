import { DATABASE } from "@/data/data";
import Image from "next/image";
import React from "react";

const FoodCategorySection = () => {
  return (
    <section className="py-10 my-10 px-4 md:px-0">
      <h2 className="font-bold">دسته بندی ها</h2>
      <div className="mt-4 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {DATABASE.cats.map((item) => {
          return (
            <div key={item.id} className="h-[102px]">
              <div className="p-1 bg-white rounded-md relative h-full shadow-md">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={200}
                  height={200}
                  className="rounded-md object-cover h-full w-full"
                />
                <div className="flex items-center gap-2 px-2 py-1 bg-white rounded-se-md absolute bottom-0">
                  {item.title}
                  <Image
                    src={`/images/slide-arrow.svg`}
                    alt="arrow"
                    width={12}
                    height={12}
                    className="w-3 h-3"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FoodCategorySection;
