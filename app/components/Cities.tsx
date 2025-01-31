import { DATABASE } from "@/data/data";
import React from "react";

const Cities = () => {
  return (
    <section className="border-t border-carbon-alphaMedium">
      <div className="px-8">
        <h1 className="mt-8 font-bold">امیرفود در شهرهای ایران</h1>
        <div className="my-8 gap-1 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12">
          {DATABASE.cities.map((city, index) => {
            return (
              <p
                key={index}
                className="text-inactive-dark text-xs cursor-pointer py-1"
              >
                {city}
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Cities;
