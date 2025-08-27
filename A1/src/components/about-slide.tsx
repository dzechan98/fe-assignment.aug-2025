import aboutSlideImg from "/images/about-slide.png";
import backgroundImg from "/images/background-color.png";

export default function AboutSlide() {
  return (
    <div className="relative flex-items-center justify-center size-[396px]">
      <img
        src={backgroundImg}
        alt=""
        className="relative w-full h-full object-cover"
      />
      <img
        src={aboutSlideImg}
        alt=""
        className="absolute left-1/2 top-1/2 -translate-1/2 z-10"
      />
    </div>
  );
}
