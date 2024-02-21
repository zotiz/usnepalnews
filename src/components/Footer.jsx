import Image from "next/image";
import React from "react";
import TopSocialIcons from "./subcomponents/TopSocialIcons";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#111111] text-white ">
      <div className="max-w-[1300px] m-auto pt-12 px-4">
        <div className="grid grid-cols-5 gap-8 ">
          <div className=" flex justify-center items-start">
            <Image width={200} height={200} src="/nepauslight.png" alt="asdf"  />
          </div>
          <div className="col-span-3">
            <div className="flex justify-around border-b-[0.5px] border-gray-400 pb-4">
            <div className="border-l-[0.5px] border-gray-500 pl-3 flex flex-col items-center gap-1 justify-center py-1">
              <p className="font-semibold text-gray-400">प्रधान सम्पादक</p>
              <p className="text-sm">Jeevan Raj Dahal</p>
            </div>
          
            <div className="border-l-[0.5px] pl-3 flex flex-col items-center gap-1 py-1 justify-center border-gray-500">
              <p className="font-semibold text-gray-400">प्रबन्ध सम्पादक</p>
              <p className="text-sm">Jeean Dahal</p>
            </div>
            <div className="border-l-[0.5px] pl-3 flex flex-col items-center py-1 gap-1 justify-center border-gray-500">
              <p className="font-semibold text-gray-400">कार्यकारी सम्पादक</p>
              <p className="text-sm">Jeevan Dahal</p>
            </div>
            </div>
            <div className="flex justify-around py-6 text-gray-400">
              <Link href="/" className="hover:text-gray-100">हाम्रो टीम</Link>
              <Link href="/" className="hover:text-gray-100">हाम्रो बारेमा</Link>
              <Link href="/" className="hover:text-gray-100">गोपनीयता नीति</Link>
              <Link href="/" className="hover:text-gray-100">सम्पर्क गर्नुहोस्</Link>
              <Link href="/" className="hover:text-gray-100">विज्ञापन</Link>
            </div>
          </div>
          
          <div className="flex flex-col gap-4 ">
            <TopSocialIcons />
            <div className="flex flex-col gap-1">
            <p className="font-semibold tracking-wider">बर्दिबास, महोत्तरी, नेपाल </p>
             <p className="text-gray-400">9849000000 </p> 
              <p className="text-gray-400">nepausnews@gmail.com</p>
            </div>
            
          </div>
        </div>
    
         
       
      </div>
      <div className="bg-gray-500 h-[1px]"/>
      <div className="py-8 text-center text-[13px] text-gray-400 bg-black">
          <p>© Copyright {new Date().getFullYear()}, All Rights Reserved | Designed & Devevloped by : Jyoti Dahal</p>
        </div>
    </div>
  );
};

export default Footer;
