import { useState } from "react";
import RecubyIcon from "/recubylogo.png";

interface propTypes {
  className: string;
  activeTab: Number;
}

const Header = ({ className, activeTab }: propTypes) => {
  const [showHeaderDropDown, setShowHeaderDropDown] = useState(false);
  <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-252815904-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-252815904-1');
</script>

  return (
    <header className={className}>
      <div className="px-6 py-4 flex justify-between items-center z-20 bg-white">
        <div>
          <a href="/">
            <img src={RecubyIcon} alt="recuby icon" className="h-7" />
          </a>
        </div>
        <button
          className="bg-transparent text-gray-800 font-bold py-2 pl-4 rounded inline-flex items-center md:hidden"
          onClick={() => setShowHeaderDropDown((val) => !val)}
        >
          <svg
            className="fill-current w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
        {showHeaderDropDown && (
          <div className="fixed shadow-lg flex-col top-20 left-0 min-h-full z-[9999999] w-[100%] p-[5%] bg-white border-t-4 border-[#00b4d5]">
            <nav className="space-y-[2rem]">
              <div>
                <a
                  className={
                    `px-4 text-sm font-bold py-2 hover:text-[#F6B807] ` +
                    (activeTab === 1 ? "text-[#F6B807]" : "text-black")
                  }
                  href="/"
                >
                  HOME
                </a>
              </div>
              <div>
                <a
                  className={
                    `px-4 text-sm font-bold py-2 hover:text-[#F6B807] ` +
                    (activeTab === 2 ? "text-[#F6B807]" : "text-black")
                  }
                  href="/about-us"
                >
                  ABOUT US
                </a>
              </div>
              <div>
                <a
                  className={
                    `px-4 text-sm font-bold py-2 hover:text-[#F6B807] ` +
                    (activeTab === 3 ? "text-[#F6B807]" : "text-black")
                  }
                  href="/services"
                >
                  SERVICES
                </a>
              </div>
              <div>
                <a
                  className={
                    `px-4 text-sm font-bold py-2 hover:text-[#F6B807] ` +
                    (activeTab === 4 ? "text-[#F6B807]" : "text-black")
                  }
                  href="/careers"
                >
                  CAREERS
                </a>
              </div>
              <div>
                <a
                  className={
                    `px-4 text-sm font-bold py-2 hover:text-[#F6B807] ` +
                    (activeTab === 5 ? "text-[#F6B807]" : "text-black")
                  }
                  href="/contact-us"
                >
                  CONTACT US
                </a>
              </div>
              <div>
                <a
                  className={
                    `px-4 text-sm font-bold py-2 hover:text-[#F6B807] ` +
                    (activeTab === 6 ? "text-[#F6B807]" : "text-black")
                  }
                  href="/job-portal"
                >
                  JOB PORTAL
                </a>
              </div>
            </nav>
          </div>
        )}
        <nav className="hidden md:block">
          <a
            className={
              `lg:px-4 md:px-2 lg:text-sm md:text-xs font-bold py-2 hover:text-[#F6B807] ` +
              (activeTab === 1 ? "text-[#F6B807]" : "text-black")
            }
            href="/"
          >
            HOME
          </a>
          <a
            className={
              `lg:px-4 md:px-2 lg:text-sm md:text-xs font-bold py-2 hover:text-[#F6B807] ` +
              (activeTab === 2 ? "text-[#F6B807]" : "text-black")
            }
            href="/about-us"
          >
            ABOUT US
          </a>
          <a
            className={
              `lg:px-4 md:px-2 lg:text-sm md:text-xs font-bold py-2 hover:text-[#F6B807] ` +
              (activeTab === 3 ? "text-[#F6B807]" : "text-black")
            }
            href="/services"
          >
            SERVICES
          </a>
          <a
            className={
              `lg:px-4 md:px-2 lg:text-sm md:text-xs font-bold py-2 hover:text-[#F6B807] ` +
              (activeTab === 4 ? "text-[#F6B807]" : "text-black")
            }
            href="/careers"
          >
            CAREERS
          </a>
          <a
            className={
              `lg:px-4 md:px-2 lg:text-sm md:text-xs font-bold py-2 hover:text-[#F6B807] ` +
              (activeTab === 5 ? "text-[#F6B807]" : "text-black")
            }
            href="/contact-us"
          >
            CONTACT US
          </a>
          <a
            className={
              `lg:px-4 md:px-2 lg:text-sm md:text-xs font-bold py-2 hover:text-[#F6B807] ` +
              (activeTab === 6 ? "text-[#F6B807]" : "text-black")
            }
            href="/job-portal"
          >
            JOB PORTAL
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
