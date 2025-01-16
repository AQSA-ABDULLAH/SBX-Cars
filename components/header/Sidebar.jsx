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


function Sidebar() {
  return (
    <div className="flex flex-col">
       {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-gray-800 hover:text-blue-500 font-medium text-lg"
        >
          {link.label}
        </Link>
      ))}
    </div>
  )
}

export default Sidebar;