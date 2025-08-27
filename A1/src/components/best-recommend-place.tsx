import gradient from "/images/Gradient.png";
import gradient1 from "/images/Gradient1.png";
import gradient2 from "/images/Gradient2.png";
import gradient3 from "/images/Gradient3.png";
import icon from "../assets/Icon.svg";
import timeSecondary from "../assets/time-secondary.svg";
import arrowRightSecondary from "../assets/arrow-right-secondary.svg";

export default function BestRecommendPlace() {
  const listCards = [
    {
      title: "Ghorepani Poon Hill Trek",
      description: "Bhutan, Pokhara",
      price: "$569.00",
      time: "5 Days",
      src: gradient,
    },
    {
      title: "Langtang Valley Trekking",
      description: "Bhutan, India, Pokhara",
      price: "$600.00",
      time: "6 Days",
      src: gradient1,
    },
    {
      title: "Short Trek around Pokhara",
      description: "Bhutan, India, Tibet",
      price: "$250.00",
      time: "6 Days",
      src: gradient2,
    },
    {
      title: "Island Peak Climbing",
      description: "Nepal, Pokhara, Tibet",
      price: "$569.00",
      time: "3 Days",
      src: gradient3,
    },
  ];

  return (
    <section
      className="relative bg-no-repeat bg-center bg-cover max-w-screen h-[600px] pt-30"
      style={{
        backgroundImage: "url('/images/background-light.png')",
      }}
    >
      <div className="text-secondary flex flex-col items-center">
        <h3 className="font-montez text-[40px] text-center">
          Best Recommended Places
        </h3>
        <h2 className="text-center font-manrope font-bold text-[48px] leading-none mb-[22px]">
          Popular Destination we offer for all
        </h2>
        <p className="text-center font-inter text-[18px] max-w-[670px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="absolute w-full left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2">
        <div className="flex justify-center gap-[25px]">
          {listCards.map((card, index) => (
            <div
              className="w-[310px] rounded-2xl overflow-hidden border border-[#BCCED2]"
              key={index}
            >
              <img src={card.src} alt={card.title} />
              <div className="px-[25px] py-5">
                <h3 className="font-manrope font-medium text-lg mb-1">
                  {card.title}
                </h3>
                <div className="flex items-center font-inter text-base mb-1">
                  <img src={icon} alt="" />
                  <span className="text-[#6E7070]">{card.description}</span>
                </div>
                <p className="mb-12">
                  <span className="text-[24px]">{card.price}</span>
                  <span className="text-lg text-[#6E7070]">/Person</span>
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <img src={timeSecondary} alt="" />
                    <span className="text-secondary">{card.time}</span>
                  </div>
                  <button className="px-[21px] py-[14px] text-secondary font-medium flex items-center gap-2 rounded-full border border-[#E1E4E5]">
                    Book Now <img src={arrowRightSecondary} alt="" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 flex items-center justify-center gap-[30px] mb-4">
          {Array(8)
            .fill(0)
            .map((_, index) => (
              <div
                className={`size-4 rounded-full ${
                  index === 1 ? "bg-primary" : "border-secondary border"
                }`}
                key={index}
              ></div>
            ))}
        </div>
      </div>
    </section>
  );
}
