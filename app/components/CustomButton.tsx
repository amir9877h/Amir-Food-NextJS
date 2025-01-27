import Image from "next/image";
import React from "react";

interface iButton {
  text?: string;
  svgUrl?: any;
  icon?: React.ReactNode;
  svgPosition?: "left" | "right";
}

export const PrimaryButton = ({ text, svgUrl, icon, svgPosition }: iButton) => {
  return (
    <button className="bg-primary-main font-bold text-white rounded-lg flex items-center justify-center gap-1 py-2 px-1 hover:bg-primary-light transition-all">
      {svgPosition === "right" && svgUrl && (
        <Image
          src={svgUrl}
          alt="icon"
          width={24}
          height={24}
          className="invert"
        />
      )}
      {text}
      {icon}
      {svgPosition === "left" && svgUrl && (
        <Image
          src={svgUrl}
          alt="icon"
          width={24}
          height={24}
          className="invert"
        />
      )}
    </button>
  );
};

export const SecondrayButton = ({
  text,
  svgUrl,
  icon,
  svgPosition,
}: iButton) => {
  return (
    <button className="bg-transparent text-black rounded-lg flex items-center justify-center gap-1 py-2 px-1">
      {svgPosition === "right" && svgUrl && (
        <Image
          src={svgUrl}
          alt="icon"
          width={24}
          height={24}
          className="invert"
        />
      )}
      {text}
      {icon}
      {svgPosition === "left" && svgUrl && (
        <Image
          src={svgUrl}
          alt="icon"
          width={24}
          height={24}
          className="invert"
        />
      )}
    </button>
  );
};
