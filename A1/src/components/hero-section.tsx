import SearchForm from "./search-form";
import arrowRightLightIcon from "../assets/arrow-right-light.svg";

export default function HeroSection() {
  return (
    <section
      className="relative bg-no-repeat bg-center bg-cover max-w-screen h-[800px]"
      style={{
        backgroundImage: "url('/images/background.png')",
      }}
    >
      <div className="text-white w-full h-full flex items-center px-[300px]">
        <div>
          <h2 className="font-montez text-[40px]">
            Get unforgetable pleasure with us
          </h2>
          <h1 className="text-[80px] font-manrope font-bold max-w-[680px] leading-tight">
            Explore beauty of the whole world
          </h1>
          <div className="flex items-center gap-4 mt-[46px]">
            <button className="bg-primary rounded-full px-9 py-[22px] flex items-center gap-2">
              Explore Tours
              <img src={arrowRightLightIcon} alt="Arrow right light icon" />
            </button>
            <button className="bg-transparent rounded-full border border-white px-9 py-[22px] flex items-center gap-2">
              Our Services
              <img src={arrowRightLightIcon} alt="Arrow right light icon" />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <div className="absolute flex flex-col items-center gap-[26px] right-18 top-1/2 -translate-y-1/2">
        <button className="size-16 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-[2px]">
          <img
            src={arrowRightLightIcon}
            alt="Arrow right light icon"
            className="rotate-270"
          />
        </button>
        <div className="space-y-[14px]">
          <div className="bg-white h-6 w-[2px]"></div>
          <div className="bg-primary h-6 w-[2px]"></div>
          <div className="bg-white h-6 w-[2px]"></div>
        </div>
        <button className="size-16 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-[2px]">
          <img
            src={arrowRightLightIcon}
            alt="Arrow right light icon"
            className="rotate-90"
          />
        </button>
      </div>
      <SearchForm />
    </section>
  );
}
