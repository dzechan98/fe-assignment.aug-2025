import footer from "/images/footer.png";
import footer1 from "/images/footer1.png";
import footer2 from "/images/footer2.png";
import footer3 from "/images/footer3.png";
import footer4 from "/images/footer4.png";
import footer5 from "/images/footer5.png";
import footerBg from "/images/footer-banner.png";
import payment from "/images/payment.png";
import logo from "/images/logo-footer.png";
import ins from "../assets/ins.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import phone1 from "../assets/phone1.svg";
import phone2 from "../assets/phone2.svg";
import mail from "../assets/mail.svg";
import location from "../assets/location-primary.svg";
import chat from "../assets/chat.svg";
import inIcon from "../assets/in.svg";
import arrorwRight from "../assets/arrow-right-small.svg";

export default function Footer() {
  const listImages = [footer, footer1, footer2, footer3, footer4, footer5];
  const listLink = [facebook, twitter, inIcon, phone1, ins];

  return (
    <footer>
      <div className="px-[300px] pt-[96px]">
        <div className="flex items-center justify-between pb-13 border-b border-[#E1E4E6] mb-15">
          <h2 className="font-manrope text-secondary font-semibold text-[40px] max-w-[520px] leading-tight">
            Get Updated The Latest Newsletter
          </h2>
          <div className="flex items-center gap-4">
            <input
              className="rounded-full border border-[#6E7070] px-4 py-[22px] w-[410px]"
              placeholder="Enter your Email"
            />
            <button className="bg-secondary flex items-center justify-center gap-1 text-white py-[22px] rounded-full px-10">
              Subscribe Now
              <img src={chat} />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-8 text-secondary">
          <div className="space-y-[38px] col-span-1">
            <img src={logo} alt="" className="h-14" />
            <div className="space-y-6">
              <p className="text-[##666666]">
                Rapidiously myocardinate cross-platform intellectual capital
                model. Appropriately create interactive infrastructures
              </p>
              <div className="flex items-center gap-[10px]">
                {listLink.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-full flex items-center justify-center bg-[#E9F6F9] size-8"
                  >
                    <img src={item} alt="" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 col-span-2 mb-40">
            <div className="space-y-[26px]">
              <h3 className="font-semibold text-manrope text-2xl">
                Instagram Post
              </h3>
              <ul className="text-[#888C97] space-y-5">
                <li className="flex items-center gap-2">
                  <img src={arrorwRight} alt="" />
                  <h3>Home</h3>
                </li>
                <li className="flex items-center gap-2">
                  <img src={arrorwRight} alt="" />
                  <h3>About Us</h3>
                </li>
                <li className="flex items-center gap-2">
                  <img src={arrorwRight} alt="" />
                  <h3>Services</h3>
                </li>
                <li className="flex items-center gap-2">
                  <img src={arrorwRight} alt="" />
                  <h3>Tour Guide</h3>
                </li>
                <li className="flex items-center gap-2">
                  <img src={arrorwRight} alt="" />
                  <h3>Contact Us</h3>
                </li>
              </ul>
            </div>
            <div className="space-y-[26px]">
              <h3 className="font-semibold text-manrope text-2xl">
                Get In Touch
              </h3>
              <ul className="text-[#888C97] space-y-5">
                <li className="flex items-center gap-4">
                  <div className="bg-[#E9F6F9] rounded-full size-10 shrink-0 flex items-center justify-center">
                    <img src={phone2} alt="" />
                  </div>
                  <div className="space-y-2">
                    <span className="block">+01 234 567 890</span>
                    <span>+09 999 999 999</span>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="bg-[#E9F6F9] rounded-full size-10 shrink-0 flex items-center justify-center">
                    <img src={mail} alt="" />
                  </div>
                  <div className="space-y-2">
                    <span className="block">mailinfo00@tours.com</span>
                    <span>support24@tours.com</span>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="bg-[#E9F6F9] rounded-full size-10 shrink-0 flex items-center justify-center">
                    <img src={location} alt="" />
                  </div>
                  <div className="space-y-2">
                    <span className="block">
                      789 Inner Lane, Holy park, California, USA
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-[30px] col-span-1">
            <h3 className="font-semibold text-manrope text-2xl">
              Instagram Post
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {listImages.map((item, index) => (
                <img key={index} src={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className="text-white px-[300px] h-17 w-full flex items-center justify-between bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(${footerBg})`,
        }}
      >
        <span className="text-sm">
          Copyright 2025 Tour . All Rights Reserved.
        </span>
        <div className="flex items-center gap-[28px]">
          <span>We Accpect</span>
          <img src={payment} alt="" />
        </div>
      </div>
    </footer>
  );
}
