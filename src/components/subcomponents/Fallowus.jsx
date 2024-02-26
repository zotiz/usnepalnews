import Link from "next/link";
import React from "react";

const Fallowus = () => {
  return (
    <div className="flex justify-between p-4 flex-wrap gap-4">
      <Link
        href="/"
        className="p-2 w-28 bg-blue-600 text-white flex justify-center items-center gap-3 rounded"
      >
        <i className="bx bxl-facebook-circle text-white text-xl hover:text-blue-500"></i>
        <p className="text-sm">Facebook</p>
      </Link>
      <Link
        href="/"
        className="p-2 w-28 bg-[#1D9BF0] text-white flex justify-center items-center gap-3 rounded"
      >
        <i className="bx bxl-twitter text-white text-xl hover:text-blue-600"></i>
        <p className="text-sm">Twitter</p>
      </Link>
      <Link
        href="/"
        className="p-2 w-28  bg-gradient-to-r from-orange-500 via-red-500 to-blue-500 text-white flex justify-center items-center gap-3 rounded"
      >
        <i className="bx bxl-instagram-alt text-white text-xl hover:text-[#DB4184]"></i>
        <p className="text-sm">Instagram</p>
      </Link>
      <Link
        href="/"
        className="p-2 w-28  bg-[#0C65C2] flex justify-center items-center gap-3 rounded "
      >
        <i class="bx bxl-linkedin  text-xl text-white"></i>
        <p className="text-sm text-white">LinkedIn</p>
      </Link>

     
      <Link
        href="/"
        className="p-2 w-28  bg-[#f42222] flex justify-center items-center gap-3 rounded "
      >
         <i class='bx bxl-youtube text-white text-xl' ></i>
        <p className="text-sm text-white">YouTube</p>
      </Link>
      <Link
        href="/"
        className="p-2 w-28  bg-[#5e1010] flex justify-center items-center gap-3 rounded "
      >
         <i className="bx bxl-tiktok text-white text-xl hover:text-red-600"></i>
        <p className="text-sm text-white">TikTok</p>
      </Link>
    </div>
  );
};

export default Fallowus;
