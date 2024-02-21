"use client";
import React, { useState } from "react";

const DarkAndLight = () => {
  const [dark, setDark] = useState("sun");

  return (
    <div
      className="relative flex items-center"
      onClick={() => {
        dark == "sun" ? setDark("moon") : setDark("sun");
      }}
    >
      <i className={`bx bx-${dark} cursor-pointer text-[18px] hover:text-green-600`}></i>
    </div>
  );
};

export default DarkAndLight;
