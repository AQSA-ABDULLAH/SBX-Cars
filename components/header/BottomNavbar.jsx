"use client";
import React from "react";
import Link from "next/link";

const links = [
  { href: "/auctions", label: "Auctions" },
  { href: "/preview", label: "Preview" },
  { href: "/results", label: "Results" },
  { href: "/sell-your-vehicle", label: "Sell" },
  { href: "/faq", label: "FAQ" },
  { href: "/about-us", label: "About" },
];

function BottomNavbar() {
  return (
    <section className="flex flex-row items-center justify-center my-6 space-x-6 md:space-x-12">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-gray-800 hover:text-blue-500 font-medium text-[12px] md:text-[16px]"
        >
          {link.label}
        </Link>
      ))}
    </section>
  );
}

export default BottomNavbar;
