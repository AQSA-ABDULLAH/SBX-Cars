import React from "react";
import Link from "next/link";
import NewsletterForm from "./NewsletterSection";

const links1 = [
  { href: "/", label: "Auctions" },
  { href: "/brands", label: "Brands" },
  { href: "/sell-your-vehicle", label: "Sell your vehicle" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact-us", label: "Contact us" },
  { href: "/results", label: "Auction Results" },
];

const links2 = [
  { href: "/about-us", label: "About us" },
  { href: "/team", label: "Team" },
  { href: "/careers", label: "Careers" },
  { href: "/terms-of-service", label: "Terms of use" },
  { href: "/privacy-policy", label: "Privacy policy" },
  { href: "/cookie-declaration", label: "Cookie declaration" },
];

function SecondSection() {
  const renderLinks = (links) =>
    links.map(({ href, label }) => (
      <li key={href} className="">
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
                {renderLinks(links1)}
              </ul>
            </div>

            {/* Second Column */}
            <div className="w-1/2">
              <ul className="space-y-[7px] text-[#515151] list-disc">
                {renderLinks(links2)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondSection;

