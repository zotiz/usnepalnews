"use client";
import React from "react";
import TypingAnimation from "./subcomponents/TypingAnimation";
import TopSocialIcons from "./subcomponents/TopSocialIcons";

const Topbar = () => {
  const formatDate = (dateString) => {
    const options = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    };

    const formattedDate = new Date(dateString).toLocaleDateString(
      "en-US",
      options
    );
    return formattedDate;
  };

  const currentDate = formatDate(new Date().toISOString());

  return (
    <div className="max-w-[1300px] m-auto px-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="py-3 ">
          <p className="text-[13px]">{currentDate}</p>
        </div>
        <div className="bg-red-500 py-3 px-4 border-b-[1px] border-b-white">
          <p className="text-[13px] text-white font-light">Breaking News</p>
        </div>
        <div>
          <TypingAnimation />
        </div>
      </div>
      <div>
        <TopSocialIcons/>
      </div>
    </div>
  );
};

export default Topbar;
