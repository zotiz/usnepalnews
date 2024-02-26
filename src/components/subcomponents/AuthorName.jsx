import React from "react";

const Author = ({ authorName }) => {
  return (
    <div className="flex items-center gap-2">
      <i class="bx bx-user-circle text-xl"></i>
      <p className="text-[12px] tracking-wide"> {authorName}</p>
    </div>
  );
};

export default Author;
