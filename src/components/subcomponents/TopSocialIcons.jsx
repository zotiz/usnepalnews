import Link from "next/link";
import React from "react";

const TopSocialIcons = () => {
  return (
    <div className="flex gap-3 items-center">
      <Link href="/">
        <i className="bx bxl-facebook-circle text-gray-600 text-xl hover:text-blue-600"></i>
      </Link>
      <Link href="/">
        <i className="bx bxl-twitter text-gray-600 text-xl hover:text-blue-600"></i>
      </Link>
      <Link href="/">
        <i className="bx bxl-instagram-alt text-gray-600 text-xl hover:text-[#DB4184]"></i>
      </Link>
      <Link href="/">
        <i className="bx bxl-tiktok text-gray-600 text-xl hover:text-red-600"></i>
      </Link>
      <Link href="/">
        <i className="bx bx-globe text-xl text-gray-600  hover:text-green-700"></i>
      </Link>
      <Link href="/">
        <i className="bx bxs-user-circle text-xl text-gray-600  hover:text-green-700"></i>
      </Link>
      <Link href='/'>
        <i className="bx bx-menu text-xl text-gray-600  hover:text-green-700"></i>
      </Link>
    </div>
  );
};

export default TopSocialIcons;
