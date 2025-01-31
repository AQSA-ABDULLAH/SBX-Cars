"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

function BottomNavbar() {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const response = await fetch("/links.json");
        const data = await response.json();
        setLinks(data);
      } catch (error) {
        console.error("Failed to load links:", error);
      }
    };

    fetchLinks();
  }, []);

  return (
    <section className="flex flex-row items-center justify-center space-x-6 md:space-x-12">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-gray-800 py-6 hover:underline hover:decoration-[#5fb7cf] hover:decoration-4 hover:font-medium text-[12px] md:text-[16px]"
        >
          {link.label}
        </Link>
      ))}
    </section>
  );
}

export default BottomNavbar;



