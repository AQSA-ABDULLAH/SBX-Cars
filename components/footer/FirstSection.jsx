import React from 'react'
import Image from 'next/image';

function FirstSection() {
  return (
    <div className="social-container pb-4 sm:pb-5 md:pb-0">
    <div className="wrapper">
      {/* Logo */}
      <a href="/" aria-label="SBX Cars">
        <div className="image-wrapper logo">
          <Image
            src="/assets/logo.svg"
            alt="SBX Cars"
            width={150} // Adjust the width based on your needs
            height={50} // Adjust the height based on your needs
          />
        </div>
      </a>

      {/* Social Media Links */}
      <div className="social-media-container flex space-x-4 mt-4">
        <a
          className="social-link"
          href="https://www.facebook.com/sbxcars/"
          target="_blank"
          rel="nofollow"
        >
          <div className="image-wrapper grayscale">
            <Image
              src="/Assets/Icons/Social/facebook.svg"
              alt="Facebook"
              width={30}
              height={30}
            />
          </div>
        </a>
        <a
          className="social-link"
          href="https://www.instagram.com/sbxcars/"
          target="_blank"
          rel="nofollow"
        >
          <div className="image-wrapper">
            <Image
              src="/Assets/Icons/Social/instagram.svg"
              alt="Instagram"
              width={30}
              height={30}
            />
          </div>
        </a>
        <a
          className="social-link"
          href="https://www.youtube.com/channel/UCBfskSqX-sx9QLDH_uFkQ_A"
          target="_blank"
          rel="nofollow"
        >
          <div className="image-wrapper">
            <Image
              src="/Assets/Icons/Social/youtube.svg"
              alt="YouTube"
              width={30}
              height={30}
            />
          </div>
        </a>
        <a
          className="social-link"
          href="https://twitter.com/sbxcars"
          target="_blank"
          rel="nofollow"
        >
          <div className="image-wrapper">
            <Image
              src="/Assets/Icons/Social/twitter-x.svg"
              alt="Twitter"
              width={30}
              height={30}
            />
          </div>
        </a>
        <a
          className="social-link"
          href="https://www.tiktok.com/@sbxcars"
          target="_blank"
          rel="nofollow"
        >
          <div className="image-wrapper">
            <Image
              src="/Assets/Icons/Social/tiktok.svg"
              alt="TikTok"
              width={30}
              height={30}
            />
          </div>
        </a>
        <a
          className="social-link"
          href="https://www.linkedin.com/company/sbx-cars/"
          target="_blank"
          rel="nofollow"
        >
          <div className="image-wrapper">
            <Image
              src="/Assets/Icons/Social/linkedin.svg"
              alt="LinkedIn"
              width={30}
              height={30}
            />
          </div>
        </a>
      </div>
    </div>
  </div>
  )
}

export default FirstSection