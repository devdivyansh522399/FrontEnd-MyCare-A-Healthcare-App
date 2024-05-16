import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const ServiceCard = ({ item, index }) => {
  const { name, desc, bgColor, textColor } = item;
  return (
    <div className="px-5 bg-cardColor p-10 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-xl">
      <h2
        className="text-[26px] leading-9 text-white
        font-[700]"
      >
        {name}
      </h2>
      <p
        className="text-[16px] leading-7 text-white
        font-[400] mt-4"
      >
        {desc}
      </p>
      <div
        className="flex items-center justify-between
        mt-[30px]"
      >
        <Link
          to="/doctors"
          className="w-[44px] h-[44px] rounded-full border
            border-solid border-[#181A1E]
            flex items-center justify-center group hover:bg-white
            hover:border-none"
        >
          <BsArrowRight
            className="group-hover:text-[#181A1E]
            w-6 h-5"
          />
        </Link>
        <span
          className="w-[44px] h-[44px] flex items-center justify-center
        text-[18px] leading-[30px] font-[600]"
          style={{
            background: `${bgColor}`,
            color: `${textColor}`,
            borderRadius: "6px 0 0 6px",
          }}
        >
          {index + 1}
        </span>
      </div>
    </div>
  );
};

export default ServiceCard;
