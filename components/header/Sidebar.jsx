import Image from 'next/image'

const Sidebar = () => {
  return (
    <div id="sidebar" className="sidebar shadow-none">
      <div className="container relative">
        <nav className="top-navbar">
          <div className="navbar-row-top flex justify-between items-center">
            <div className="start flex items-center space-x-4">
              {/* Mobile Nav Button for Desktop */}
              <div className="desktop-start-items">
                <div className="mobile-nav-button" data-testid="mobile-nav-option-wrapper">
                  <input type="checkbox" data-testid="mobile-nav-option" />
                  <span className="line-one block"></span>
                  <span className="line-two block"></span>
                  <span className="line-three block"></span>
                </div>
              </div>

              {/* Mobile Nav Button for Mobile */}
              <div className="mobile-start-items">
                <div className="mobile-nav-button">
                  <input type="checkbox" />
                  <span className="line-one block"></span>
                  <span className="line-two block"></span>
                  <span className="line-three block"></span>
                </div>
              </div>
            </div>

            {/* Center - Logo */}
            <div className="center">
              <a className="logo" href="/">
                <div className="image-wrapper" data-testid="logo-image">
                  <Image
                    src="/Assets/Logos/sbx-cars-sb-2024.svg"
                    alt="Supercar Blondie"
                    width={48}
                    height={28}
                  />
                </div>
              </a>
            </div>

            {/* End - Search and Sign-In */}
            <div className="end flex items-center space-x-4">
              <div className="search-desktop-button">
                <button
                  data-testid="search-button"
                  type="button"
                  className="base-button icon p-0"
                >
                  <div className="image-wrapper">
                    <Image
                      src="/Assets/Icons/search-thin.svg"
                      alt="Search Icon"
                      width={20}
                      height={20}
                    />
                  </div>
                </button>
              </div>

              <div className="user-content desktop">
                <button
                  data-testid="sign-in-button-nav-menu"
                  type="button"
                  className="base-button dark sign-in"
                >
                  Sign in
                </button>
              </div>

              <div className="nav-mobile">
                <div className="search-mobile-button">
                  <button type="button" className="base-button icon ml-0">
                    <div className="image-wrapper">
                      <Image
                        src="/Assets/Icons/search-thin.svg"
                        alt="Search Icon"
                        width={20}
                        height={20}
                      />
                    </div>
                  </button>
                </div>
                <div className="user-profile-wrapper">
                  <button
                    data-testid="sign-in-button-nav-menu"
                    type="button"
                    className="base-button dark sign-in"
                  >
                    <div className="image-wrapper">
                      <Image
                        src="/Assets/Icons/profile.svg"
                        alt="Profile Icon"
                        width={20}
                        height={20}
                      />
                    </div>
                    <span>Sign in</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Navbar Items */}
          <div className="navbar-row-bottom hidden md:flex">
            <div className="nav-list">
              <div className="nav-item">
                <a href="auctions" className="nav-link">Auctions</a>
              </div>
              <div className="nav-item">
                <a href="/preview" className="nav-link">Preview</a>
              </div>
              <div className="nav-item">
                <a href="/results" className="nav-link">Results</a>
              </div>
              <div className="nav-item">
                <a href="sell-your-vehicle" className="nav-link">Sell</a>
              </div>
              <div className="nav-item">
                <a href="faq" className="nav-link">FAQ</a>
              </div>
              <div className="nav-item">
                <a href="about-us" className="nav-link">About</a>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="nav-list mobile-nav-list md:hidden">
            <div className="nav-item">
              <a href="live-auctions" className="nav-link">Auctions</a>
            </div>
            <div className="nav-item">
              <a href="preview" className="nav-link">Preview</a>
            </div>
            <div className="nav-item">
              <a href="/results" className="nav-link">Results</a>
            </div>
            <div className="nav-item">
              <a href="sell-your-vehicle" className="nav-link">Sell</a>
            </div>
            <div className="nav-item">
              <a href="faq" className="nav-link">FAQ</a>
            </div>
            <div className="nav-item">
              <a href="about-us" className="nav-link">About</a>
            </div>
          </div>
        </nav>

        {/* Desktop Sidebar Navigation */}
        <div className="desktop-nav-wrapper">
          <div className="desktop-nav-container side-menu">
            <ul>
              <li>
                <a href="auctions"><span>Auctions</span></a>
              </li>
              <li>
                <a href="preview"><span>Preview</span></a>
              </li>
              <li>
                <a href="results"><span>Results</span></a>
              </li>
              <li>
                <a href="sell-your-vehicle"><span>Sell Your Vehicle</span></a>
              </li>
              <li>
                <a href="about-us"><span>About Us</span></a>
              </li>
              <li>
                <a href="team"><span>Team</span></a>
              </li>
              <li>
                <a href="press"><span>Press</span></a>
              </li>
              <li>
                <a href="careers"><span>Careers</span></a>
              </li>
              <li>
                <a href="contact-us"><span>Contact Us</span></a>
              </li>
              <li>
                <div className="powered-by">
                  <span>Powered by</span>
                  <a href="https://supercarblondie.com/" target="_blank">
                    <Image
                      src="/Assets/Logos/supercar-blondie.svg"
                      alt="Supercar Blondie"
                      width={100}
                      height={50}
                    />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar











{/* <div className="contacts-banner-wrapper">
<div className="container">
  <div className="contact-menu">
    <div className="phone">
      <a href="tel:+13234078523">
        <span className="font-medium">US</span> +1 323-407-8523
      </a>
    </div>
    <div className="divider"></div>
    <div className="phone">
      <a href="tel:+97148761764">
        <span className="font-medium">UAE</span> +971 4 876 1764
      </a>
    </div>
    <div className="divider"></div>
    <div className="phone hidden md:block">
      <a href="tel:+442045258014">
        <span className="font-medium">UK</span> +44 20 4525 8014
      </a>
    </div>
    <div className="divider hidden md:block"></div>
    <div className="email">
      <a href="mailto:sales@sbxcars.com">sales@sbxcars.com</a>
    </div>
  </div>
</div>
</div> */}