"use client"; // Ensure this component runs on the client side in Next.js

import React from "react";

const ContactMenu = () => {
  return (
    <div className="flex flex-row lg:space-x-3 max-md:justify-between items-center bg-[#EDEDED] text-[#101010] font-semibold text-[14px] tracking-wide h-[34px] px-4 2xl:px-[4rem] desktop:px-[16rem]">
      {/* US Phone */}
      <div>
        <a href="#" className="flex gap-1">
          <span className="hidden lg:block">US</span> +1 323-407-8523
        </a>
      </div>
      
      {/* Divider */}
      <div className="border-l-2 border-gray-300 h-6"></div>

      {/* UAE Phone */}
      <div>
        <a href="#" className="flex gap-1">
          <span className="hidden lg:block">UAE</span> +971 4 876 1764
        </a>
      </div>
      
      {/* Divider */}
      <div className="border-l-2 border-gray-300 h-6"></div>

      {/* UK Phone (only shown on larger screens) */}
      <div>
        <a href="#" className="flex gap-1">
          <span className="hidden lg:block">UK</span> +44 20 4525 8014
        </a>
      </div>

      {/* Divider (hidden on smaller screens) */}
      <div className="border-l-2 border-gray-300 h-6"></div>

      {/* Email */}
      <div className="hidden lg:block text-[16px]">
        <a href="mailto:sales@sbxcars.com">
          sales@sbxcars.com
        </a>
      </div>
    </div>
  );
};

export default ContactMenu;
