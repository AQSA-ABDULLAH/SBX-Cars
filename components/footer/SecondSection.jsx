"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import NewsletterForm from "./NewsletterSection";

function SecondSection() {
  const [linksData, setLinksData] = useState({ links1: [], links2: [] });

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const response = await fetch("/footerLinks.json");
        if (!response.ok) {
          throw new Error("Failed to fetch links");
        }
        const data = await response.json();
        setLinksData(data);
      } catch (error) {
        console.error("Failed to load footer links:", error);
      }
    };

    fetchLinks();
  }, []);

  const renderLinks = (links) =>
    links.map(({ href, label }) => (
      <li key={href}>
        <Link href={href} className="hover:text-[#2b2a2a]">
          {label}
        </Link>
      </li>
    ));

  return (
    <div>
      <div className="flex flex-col space-y-10 lg:flex-row justify-between items-center">
        {/* First Section */}
        <div className="w-[100%] lg:w-[50%]">
          <NewsletterForm />
        </div>

        {/* Second Section */}
        <div className="w-[100%] lg:w-[50%] max-lg:pl-6">
          <div className="flex">
            {/* First Column */}
            <div className="w-1/2">
              <ul className="space-y-[7px] text-[#515151] list-disc">
                {renderLinks(linksData.links1)}
              </ul>
            </div>

            {/* Second Column */}
            <div className="w-1/2">
              <ul className="space-y-[7px] text-[#515151] list-disc">
                {renderLinks(linksData.links2)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondSection;


