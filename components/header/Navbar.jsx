"use client";
import React, { useState } from "react";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false); // Define isChecked state

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsChecked(!isChecked);
  };

  return (
    <>
      <nav className="font-[16px] px-[16px] py-[20px] 2xl:px-[9rem] desktop:px-[16rem] grid grid-cols-[repeat(3,_minmax(0,_1fr))] gap-4 justify-center items-center relative w-full transition-all duration-300">
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
            <div className="absolute h-[100%] bg-gray mt-[90px] inset-0 z-50">
              <div className=" w-[300px] bg-white shadow-xl p-4">
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
          <div className="search-desktop-button">
            <button type="button" className="base-button icon p-0">
              <div className="image-wrapper">
                <CiSearch />
              </div>
            </button>
          </div>

          {/* Desktop User Content */}
          <div className="user-content desktop hidden lg:flex">
            <div className="user-item">
              <button
                data-testid="sign-in-button-nav-menu"
                type="button"
                className="base-button dark sign-in"
              >
                Sign in
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="nav-mobile flex lg:hidden">
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
                <span>Sign in</span>
              </button>
            </div>
          </div>
        </section>
      </nav>
    </>
  );
};

export default Navbar;
