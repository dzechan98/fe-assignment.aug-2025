import about1 from "/images/about_1_1.png";
import about2 from "/images/about_1_2.png";
import about3 from "/images/about_1_3.png";
import shape from "/images/shape.png";
import map3FillIcon from "../assets/map3-fill.svg";
import guideIcon from "../assets/guide.svg";
import arrowRightLightIcon from "../assets/arrow-right-light.svg";
import AboutSlide from "./about-slide";

export default function PlanTrip() {
  return (
    <section className="relative">
      <div className="flex items-start gap-[56px] px-[300px] mb-[140px]">
        <div className="w-1/2 flex items-stretch gap-6">
          <img
            src={about1}
            alt=""
            className="w-1/2 rounded-full rounded-br-none"
          />
          <div className="space-y-5 w-1/2">
            <img
              src={about2}
              alt=""
              className="h-[calc(50%-10px)] rounded-full rounded-bl-none"
            />
            <img
              src={about3}
              alt=""
              className="h-[calc(50%-10px)] rounded-full rounded-tr-none"
            />
          </div>
        </div>
        <div className="w-1/2 flex flex-col text-[#6E7070]">
          <h3 className="font-montez text-[40px] text-secondary">
            Let’s Go Together
          </h3>
          <h2 className="max-w-[320px] font-manrope font-bold text-[48px] leading-none text-secondary mb-[30px]">
            Plan Your Trip With us
          </h2>
          <p className="max-w-[500px] font-inter text-lg mb-[43px]">
            There are many variations of passages of available but the majority
            have suffered alteration in some form, by injected hum randomised
            words which don’t look even slightly.
          </p>
          <div className="flex items-start gap-4 mb-[30px]">
            <div className="flex items-center justify-center size-18 bg-primary rounded-full">
              <img src={map3FillIcon} alt="" />
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-manrope font-semibold text-secondary">
                Exclusive Trip
              </h3>
              <span className="max-w-[290x] font-inter text-base">
                There are many variations of passages of available but the
                majority.
              </span>
            </div>
          </div>
          <div className="flex items-start gap-4 mb-10">
            <div className="flex items-center justify-center size-18 bg-primary rounded-full">
              <img src={guideIcon} alt="" />
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-manrope font-semibold text-secondary">
                Professional Guide
              </h3>
              <span className="max-w-[290x] font-inter text-base">
                There are many variations of passages of available but the
                majority.
              </span>
            </div>
          </div>
          <button className="bg-secondary max-w-[190px] rounded-full flex items-center justify-center text-white text-base gap-1 px-[35px] py-[22px]">
            Learn More
            <img src={arrowRightLightIcon} alt="" />
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 right-20">
        <AboutSlide />
      </div>
      <div className="absolute left-[58px] top-40">
        <img src={shape} alt="" />
      </div>
      <div className="absolute left-[38px] top-32">
        <img src={shape} alt="" className="w-[15px] h-[21px]" />
      </div>
      <div className="absolute left-[154px] top-36">
        <img src={shape} alt="" className="w-[35px] h-[47px]" />
      </div>
    </section>
  );
}
