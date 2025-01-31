"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false); // Define isChecked state
  const [isFixed, setIsFixed] = useState(false); // Track if the navbar is fixed

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsChecked(!isChecked);
  };

  // Handle scroll event to toggle fixed navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsFixed(true); // Make navbar fixed when scrolling
      } else {
        setIsFixed(false); // Reset back to relative position
      }
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`font-[16px] px-[16px] py-[20px] 2xl:px-[4rem] desktop:px-[16rem] grid grid-cols-[repeat(3,_minmax(0,_1fr))] gap-4 justify-center items-center w-full transition-all duration-300 ${
          isFixed ? "fixed top-0 left-0 right-0 z-10 bg-white" : "relative"
        }`}
      >
        {/* Mobile Menu Button */}
        <div>
          <div
            className="mobile-nav-button"
            data-testid="mobile-nav-option-wrapper"
            onClick={toggleMobileMenu}
          >
            <input
              type="checkbox"
              data-testid="mobile-nav-option"
              className="hidden"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            <span
              className={`line-one block w-6 h-0.5 bg-black my-1 transition-transform duration-300 ${
                isChecked ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`line-two block w-6 h-0.5 bg-black my-1 transition-opacity duration-300 ${
                isChecked ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`line-three block w-6 h-0.5 bg-black my-1 transition-transform duration-300 ${
                isChecked ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </div>
          {/* Sidebar */}
          {isMobileMenuOpen && (
            <div className="absolute min-h-screen bg-gray mt-[63px] md:mt-[84px] 2xl:mx-[4rem] desktop:mx-[16rem] inset-0 z-50">
              <div className=" w-[300px] h-screen bg-white shadow-xl p-4">
                <Sidebar />
              </div>
            </div>
          )}
        </div>

        {/* Logo */}
        <div className="flex justify-center flex-grow">
          <Link href="/">
            <img src="/assets/logo.svg" alt="logo" className="w-[15rem]" />
          </Link>
        </div>

        <section className="flex justify-end gap-3 items-center">
          {/* Desktop Search Button */}
          <div className="hidden lg:block search-desktop-button">
            <button type="button" className="base-button icon p-0">
              <div className="image-wrapper">
                <CiSearch />
              </div>
            </button>
          </div>

          {/* Desktop User Content */}
          <div className="hidden lg:block">
            <button
              data-testid="sign-in-button-nav-menu"
              type="button"
              className="hidden lg:block sign-in"
            >
              Sign in
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="nav-mobile flex gap-4 lg:hidden">
            {/* Mobile Search Button */}
            <div className="search-mobile-button">
              <button type="button" className="base-button icon ml-0">
                <div className="image-wrapper">
                  <CiSearch />
                </div>
              </button>
            </div>

            {/* Mobile User Profile */}
            <div className="user-profile-wrapper">
              <button
                data-testid="sign-in-button-nav-menu"
                type="button"
                className="base-button dark sign-in"
              >
                <div className="image-wrapper">
                  <AiOutlineUser />
                </div>
              </button>
            </div>
          </div>
        </section>
      </nav>
    </>
  );
};

export default Navbar;
