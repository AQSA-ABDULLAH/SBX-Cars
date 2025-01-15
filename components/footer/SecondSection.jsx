import React from "react";
import Link from "next/link";
import NewsletterForm from "./NewsletterSection";

function SecondSection() {
  return (
    <div>
      <div className="row justify-between footer-navbar items-center">
        {/* FIRST SECTION */}
        <div className="col-12 col-md-6 col-xl-5">
            <NewsletterForm />
        </div>

        {/* SECOND SECTION */}
        <div className="col-12 col-md-6 col-lg-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-gray-100">

            {/* First Column */}
            <div className="footer-nav-container">
              <ul className="space-y-4">
                <li className="footer-nav-link">
                  <Link
                    href="/auctions"
                    className="nav-link text-gray-700 hover:text-blue-600"
                  >
                    Auctions
                  </Link>
                </li>
                <li className="footer-nav-link">
                  <Link
                    href="/brands"
                    className="nav-link text-gray-700 hover:text-blue-600"
                  >
                    Brands
                  </Link>
                </li>
                <li className="footer-nav-link">
                  <Link
                    href="/sell-your-vehicle"
                    className="nav-link text-gray-700 hover:text-blue-600"
                  >
                    Sell your vehicle
                  </Link>
                </li>
                <li className="footer-nav-link">
                  <Link
                    href="/faq"
                    className="nav-link text-gray-700 hover:text-blue-600"
                  >
                    FAQ
                  </Link>
                </li>
                <li className="footer-nav-link">
                  <Link
                    href="/contact-us"
                    className="nav-link text-gray-700 hover:text-blue-600"
                  >
                    Contact us
                  </Link>
                </li>
                <li className="footer-nav-link">
                  <Link
                    href="/results"
                    className="nav-link text-gray-700 hover:text-blue-600"
                  >
                    Auction Results
                  </Link>
                </li>
              </ul>
            </div>

            {/* Second Column */}
            <div className="footer-nav-container">
              <ul className="space-y-4">
                <li className="footer-nav-link">
                  <Link
                    href="/about-us"
                    className="nav-link text-gray-700 hover:text-blue-600"
                  >
                    About us
                  </Link>
                </li>
                <li className="footer-nav-link">
                  <Link
                    href="/team"
                    className="nav-link text-gray-700 hover:text-blue-600"
                  >
                    Team
                  </Link>
                </li>
                <li className="footer-nav-link">
                  <Link
                    href="/careers"
                    className="nav-link text-gray-700 hover:text-blue-600"
                  >
                    Careers
                  </Link>
                </li>
                <li className="footer-nav-link">
                  <Link
                    href="/terms-of-service"
                    className="nav-link text-gray-700 hover:text-blue-600"
                  >
                    Terms of use
                  </Link>
                </li>
                <li className="footer-nav-link">
                  <Link
                    href="/privacy-policy"
                    className="nav-link text-gray-700 hover:text-blue-600"
                  >
                    Privacy policy
                  </Link>
                </li>
                <li className="footer-nav-link">
                  <Link
                    href="/cookie-declaration"
                    className="nav-link text-gray-700 hover:text-blue-600"
                  >
                    Cookie declaration
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
