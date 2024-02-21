import Image from "next/image";
import Link from "next/link";
import React from "react";
import WeatherApp from "./subcomponents/WeatherApp";
import DarkAndLight from "./subcomponents/DarkAndLight";
Image;
const Navbar = () => {

  const navlink = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Nepal",
      url: "/",
    },
    {
      title: "USA",
      url: "/",
    },
    {
      title: "Tech",
      url: "/",
    },
    {
      title: "Sports",
      url: "/",
    },
  ];
  return (
    <div className="max-w-[1300px] m-auto px-4">
      <div className="flex items-center justify-between gap-10 py-2">
        <Link href="/" className="">
          <Image src="/nepaus.png" width={250} height={250} alt="nepaus post" />
        </Link>
        <div className="h-[90px] w-2/3  bg-slate-900 flex justify-center items-center text-white">
          ADS
        </div>
      </div>
      {/* Nav */}
      <div className="bg-black h-16 text-white flex justify-between items-center">
        <div>
          {navlink.map((item, index) => {
            return (
              <Link
                key={index}
                className="p-5 hover:bg-green-600"
                href={item.url}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
        <div className="pr-5 flex items-center gap-4">
          <WeatherApp/>
          |
          <DarkAndLight/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
