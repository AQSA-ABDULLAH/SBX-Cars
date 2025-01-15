"use client";
import React from "react";
import Link from "next/link";

function BottomNavbar() {
  return (
    <section className="hidden md:flex flex-row items-center justify-center space-y-4 md:space-x-8 md:space-y-0">
      <Link
        href="/auctions"
        className="text-gray-800 hover:text-blue-500 font-medium text-lg"
      >
        Auctions
      </Link>
      <Link
        href="/preview"
        className="text-gray-800 hover:text-blue-500 font-medium text-lg"
      >
        Preview
      </Link>
      <Link
        href="/results"
        className="text-gray-800 hover:text-blue-500 font-medium text-lg"
      >
        Results
      </Link>
      <Link
        href="/sell-your-vehicle"
        className="text-gray-800 hover:text-blue-500 font-medium text-lg"
      >
        Sell
      </Link>
      <Link
        href="/faq"
        className="text-gray-800 hover:text-blue-500 font-medium text-lg"
      >
        FAQ
      </Link>
      <Link
        href="/about-us"
        className="text-gray-800 hover:text-blue-500 font-medium text-lg"
      >
        About
      </Link>
    </section>
  );
}

export default BottomNavbar;


// "use client";

// import React, { useState } from "react";
// import Link from "next/link";

// const BottomNavbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <nav className="navbar bg-white shadow-md px-4 py-2">
//       {/* Mobile Menu Button */}
//       <div className="block md:hidden">
//         <button
//           className="flex items-center space-x-2"
//           onClick={toggleMobileMenu}
//           aria-label="Toggle mobile menu"
//         >
//           <div className="w-6 h-1 bg-gray-800 mb-1"></div>
//           <div className="w-6 h-1 bg-gray-800 mb-1"></div>
//           <div className="w-6 h-1 bg-gray-800"></div>
//         </button>
//       </div>

//       {/* Logo */}
//       <div className="flex justify-center md:justify-start flex-grow">
//         <Link href="/">
//           <img
//             src="/Assets/Logos/sbx-cars-sb-2024.svg"
//             alt="Supercar blondie"
//             width={48}
//             height={28}
//           />
//         </Link>
//       </div>

//       {/* Desktop Navbar Items */}
//       <div className="hidden md:flex items-center space-x-4 ml-auto">
//         <Link href="/auctions" className="nav-link">
//           Auctions
//         </Link>
//         <Link href="/preview" className="nav-link">
//           Preview
//         </Link>
//         <Link href="/results" className="nav-link">
//           Results
//         </Link>
//         <Link href="/sell-your-vehicle" className="nav-link">
//           Sell
//         </Link>
//         <Link href="/faq" className="nav-link">
//           FAQ
//         </Link>
//         <Link href="/about-us" className="nav-link">
//           About
//         </Link>
//       </div>

//       {/* Mobile Navbar Items */}
//       <div
//         className={`${
//           isMobileMenuOpen ? "block" : "hidden"
//         } md:hidden absolute top-0 right-0 left-0 bg-white shadow-md p-4 space-y-4`}
//       >
//         <Link href="/auctions" className="nav-link">
//           Auctions
//         </Link>
//         <Link href="/preview" className="nav-link">
//           Preview
//         </Link>
//         <Link href="/results" className="nav-link">
//           Results
//         </Link>
//         <Link href="/sell-your-vehicle" className="nav-link">
//           Sell
//         </Link>
//         <Link href="/faq" className="nav-link">
//           FAQ
//         </Link>
//         <Link href="/about-us" className="nav-link">
//           About
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default BottomNavbar;
