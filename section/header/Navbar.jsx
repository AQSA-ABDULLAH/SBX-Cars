"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar bg-white shadow-md px-4 py-2">
      {/* Mobile Menu Button */}
      <div className="block md:hidden">
        <button
          className="flex items-center space-x-2"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <div className="w-6 h-1 bg-gray-800 mb-1"></div>
          <div className="w-6 h-1 bg-gray-800 mb-1"></div>
          <div className="w-6 h-1 bg-gray-800"></div>
        </button>
      </div>

      {/* Logo */}
      <div className="flex justify-center md:justify-start flex-grow">
        <Link href="/">
          <Image
            src="/Assets/Logos/sbx-cars-sb-2024.svg"
            alt="Supercar blondie"
            width={48}
            height={28}
          />
        </Link>
      </div>

      {/* Desktop Navbar Items */}
      <div className="hidden md:flex items-center space-x-4 ml-auto">
        <Link href="/auctions" className="text-gray-800 hover:text-blue-500">
          Auctions
        </Link>
        <Link href="/preview" className="text-gray-800 hover:text-blue-500">
          Preview
        </Link>
        <Link href="/results" className="text-gray-800 hover:text-blue-500">
          Results
        </Link>
        <Link href="/sell-your-vehicle" className="text-gray-800 hover:text-blue-500">
          Sell
        </Link>
        <Link href="/faq" className="text-gray-800 hover:text-blue-500">
          FAQ
        </Link>
        <Link href="/about-us" className="text-gray-800 hover:text-blue-500">
          About
        </Link>
        <button className="ml-4 py-2 px-4 bg-blue-500 text-white rounded-md">
          Sign in
        </button>
      </div>

      {/* Mobile Navbar Items */}
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } md:hidden absolute top-0 right-0 left-0 bg-white shadow-md p-4 space-y-4`}
      >
        <Link href="/auctions" className="text-gray-800">
          Auctions
        </Link>
        <Link href="/preview" className="text-gray-800">
          Preview
        </Link>
        <Link href="/results" className="text-gray-800">
          Results
        </Link>
        <Link href="/sell-your-vehicle" className="text-gray-800">
          Sell
        </Link>
        <Link href="/faq" className="text-gray-800">
          FAQ
        </Link>
        <Link href="/about-us" className="text-gray-800">
          About
        </Link>
        <button className="py-2 px-4 bg-blue-500 text-white rounded-md">
          Sign in
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

