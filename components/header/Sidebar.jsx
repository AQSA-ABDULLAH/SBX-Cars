"use client";
import React from "react";
import Link from "next/link";

const links = [
  { href: "/auctions", label: "Auctions" },
  { href: "/preview", label: "Preview" },
  { href: "/results", label: "Results" },
  { href: "/sell-your-vehicle", label: "Sell Your Vehicle" },
  { href: "/about-us", label: "About Us" },
  { href: "/team", label: "Team" },
  { href: "/press", label: "Press" },
  { href: "/career", label: "Careers" },
  { href: "/faq", label: "Contact Us" }
];


function Sidebar() {
  return (
    <div className="flex flex-col space-y-8">
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