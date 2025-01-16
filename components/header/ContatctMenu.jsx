"use client"; // Ensure this component runs on the client side in Next.js

import React from "react";

const ContactMenu = () => {
  return (
    <div className="flex flex-col space-y-4 md:flex-row md:space-x-8 md:space-y-0 md:items-center bg-[#EDEDED] h-[34px] px-4 2xl:px-[9rem] desktop:px-[16rem]">
      {/* US Phone */}
      <div className="phone">
        <a href="tel:+13234078523" className="text-gray-800 hover:text-blue-500">
          <span className="font-semibold">US</span> +1 323-407-8523
        </a>
      </div>
      
      {/* Divider */}
      <div className="divider hidden md:block border-l-2 border-gray-300 h-8"></div>

      {/* UAE Phone */}
      <div className="phone">
        <a href="tel:+97148761764" className="text-gray-800 hover:text-blue-500">
          <span className="font-semibold">UAE</span> +971 4 876 1764
        </a>
      </div>
      
      {/* Divider */}
      <div className="divider hidden md:block border-l-2 border-gray-300 h-8"></div>

      {/* UK Phone (only shown on larger screens) */}
      <div className="phone hidden md:block">
        <a href="tel:+442045258014" className="text-gray-800 hover:text-blue-500">
          <span className="font-semibold">UK</span> +44 20 4525 8014
        </a>
      </div>

      {/* Divider (hidden on smaller screens) */}
      <div className="divider hidden md:block border-l-2 border-gray-300 h-8"></div>

      {/* Email */}
      <div className="email">
        <a href="mailto:sales@sbxcars.com" className="text-gray-800 hover:text-blue-500">
          sales@sbxcars.com
        </a>
      </div>
    </div>
  );
};

export default ContactMenu;
