import React from "react";
import SecondSection from "./SecondSection";
import FirstSection from "./FirstSection";

function Footer() {
  return (
    <div className="2xl:px-[4rem] desktop:px-[16rem] mt-[-1px] bg-white border-t border-solid border-[#efefef]">
      <section className="py-[50px] px-[20px] ">
        <div className="flex flex-row justify-between items-center">
          <div className="w-[25%]">
            <FirstSection />
          </div>

          {/* SECOND SECTION */}
          <div className="w-[75%]">
            <SecondSection />
          </div>
        </div>
      </section>

      {/* Copyright */}
      <div className="bg-[#fafafa] text-center text-[0.9rem] font-sans">
        <div className="p-[1.2rem] mx-auto text-[#b8b8b8] text-[14px]">
          © Copyright 2024 All rights reserved SB Media USA Inc
        </div>
      </div>
    </div>
  );
}

export default Footer;
