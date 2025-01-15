import React from 'react';
import SecondSection from './SecondSection';
import FirstSection from './FirstSection';

function Footer() {
  return (
    <div className="mt-[-1px] bg-white border-t border-solid border-[#efefef]">
      <section className="py-[50px] px-[20px]">
        <div className="flex flex-row justify-content-between align-items-center">
          <div className="w-[25%]">
            <FirstSection />
          </div>

          {/* SECOND SECTION */}
          <div className="w-[25%]">
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
