import locationIcon from "../assets/location.svg";
import timeIcon from "../assets/time.svg";
import arrowDownBoldIcon from "../assets/arrow-down-bold.svg";
import arrowDownIcon from "../assets/arrow-down.svg";
import arrowRightLightIcon from "../assets/arrow-right-light.svg";
import maskGroupIcon from "/images/mask-group.png";
import logoIcon from "../assets/logo.svg";

export default function Header() {
  return (
    <header>
      <div className="header-top h-[47px] border-b border-[#E1E4E5]">
        <div className="h-full mx-18 flex items-center justify-between">
          <div className="flex items-center gap-11.5">
            <div className="flex items-center gap-2 relative before:content-[''] before:absolute before:-right-6 before:top-1/2 before:-translate-y-1/2 before:w-[1px] before:h-full before:bg-[#999]">
              <img src={locationIcon} alt="Location icon" />
              <span className="font-medium text-sm">
                45 New Eskaton Road, Austria
              </span>
            </div>
            <div className="flex items-center gap-2">
              <img src={timeIcon} alt="Time icon" />
              <span className="font-medium text-sm">
                Sun to Friday: 8.00 am - 7.00 pm, Austria
              </span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <button className="flex items-center justify-center gap-1 h-8.5 w-25 rounded-full text-sm border border-[#E1E4E5]">
              Language
              <img src={arrowDownBoldIcon} alt="Arrow down bold icon" />
            </button>
            <div className="flex items-center gap-8">
              <span className="font-medium text-sm relative before:content-[''] before:absolute before:-right-4 before:top-1/2 before:-translate-y-1/2 before:w-[1px] before:h-full before:bg-[#999]">
                Faq
              </span>
              <span className="font-medium text-sm relative before:content-[''] before:absolute before:-right-4 before:top-1/2 before:-translate-y-1/2 before:w-[1px] before:h-full before:bg-[#999]">
                Support
              </span>
              <span className="flex items-center gap-2 font-medium text-sm">
                Sign in/ Register
                <img src={arrowDownIcon} alt="Arrow down bold icon" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="header-bottom h-[92px] flex items-center">
        <div className="relative h-full px-18 w-max-content flex items-center">
          <img
            src={maskGroupIcon}
            alt="Mask group"
            className="absolute inset-0 h-[92px]"
          />
          <img src={logoIcon} alt="Logo" className="z-1" />
        </div>
        <div className="flex-1 flex items-center justify-between mr-18">
          <nav>
            <ul className="flex items-center gap-[46.5px] font-base">
              <li className="flex items-center gap-1">
                Home
                <img src={arrowDownIcon} alt="Arrow down icon" />
              </li>
              <li>About Us</li>
              <li className="flex items-center gap-1">
                Destinations
                <img src={arrowDownIcon} alt="Arrow down icon" />
              </li>
              <li>Service</li>
              <li className="flex items-center gap-1">
                Trip
                <img src={arrowDownIcon} alt="Arrow down icon" />
              </li>
              <li className="flex items-center gap-1">
                Pages
                <img src={arrowDownIcon} alt="Arrow down icon" />
              </li>
              <li className="flex items-center gap-1">
                Blog
                <img src={arrowDownIcon} alt="Arrow down icon" />
              </li>
              <li>Contact Us</li>
            </ul>
          </nav>
          <button className="text-white font-base flex items-center gap-2 bg-secondary rounded-full py-4.5 px-9">
            Request A Quote
            <img src={arrowRightLightIcon} alt="Arrow right light icon" />
          </button>
        </div>
      </div>
    </header>
  );
}
