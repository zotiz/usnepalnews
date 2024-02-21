import React from "react";

const TimeOclock = ({textcolor}) => {
  return (
    <div className={`flex items-center gap-2 ${textcolor}`}>
      <i class="bx bxs-watch  text-xl"></i>
      <p className="text-[12px] tracking-wide">Feb 22, 2024</p>
    </div>
  );
};

export default TimeOclock;
