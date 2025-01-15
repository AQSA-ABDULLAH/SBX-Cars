import React from "react";
import Image from "next/image";

function FirstSection() {
  const socialLinks = [
    {
      href: "https://www.facebook.com/sbxcars/",
      src: "/assets/facebook.svg",
      alt: "Facebook",
    },
    {
      href: "https://www.instagram.com/sbxcars/",
      src: "/assets/instagram.svg",
      alt: "Instagram",
    },
    {
      href: "https://www.youtube.com/channel/UCBfskSqX-sx9QLDH_uFkQ_A",
      src: "/assets/youtube.svg",
      alt: "YouTube",
    },
    {
      href: "https://twitter.com/sbxcars",
      src: "/assets/twitter-x.svg",
      alt: "Twitter",
    },
    {
      href: "https://www.tiktok.com/@sbxcars",
      src: "/assets/tiktok.svg",
      alt: "TikTok",
    },
    {
      href: "https://www.linkedin.com/company/sbx-cars/",
      src: "/assets/linkedin.svg",
      alt: "LinkedIn",
    },
  ];

  return (
    <div className="flex pb-4 sm:pb-5 md:pb-0">
      <div className="wrapper">
        {/* Logo */}
        <a href="/" className="font-semibold text-[#101010]">
          <div className="image-wrapper logo">
            <img
              src="/assets/logo.svg"
              alt="SBX Cars"
              className="h-[46px] w-auto"
            />
          </div>
        </a>

        {/* Social Media Links */}
        <div className="flex mt-8 gap-6 justify-center items-center w-full">
          {socialLinks.map(({ href, src, alt }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer no-underline font-semibold text-[#101010]"
            >
              <div className="w-6 grayscale opacity-30 hover:opacity-100">
                <Image src={src} alt={alt} width={30} height={30} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FirstSection;

