import tour1 from "/images/tour1.png";
import tour2 from "/images/tour2.png";
import tour3 from "/images/tour3.png";
import tour4 from "/images/tour4.png";
import ins from "../assets/ins.svg";
import facebook from "../assets/facebook.svg";
import youtube from "../assets/youtube.svg";
import twitter from "../assets/twitter.svg";

export default function TourGuide() {
  const list = [
    {
      title: "Jane Cooper",
      desc: "Tourist Guide",
      src: tour1,
    },
    {
      title: "Guy Hawkins",
      desc: "Tourist Guide",
      src: tour2,
    },
    {
      title: "Jenny Wilson",
      desc: "Tourist Guide",
      src: tour3,
    },
    {
      title: "Jacob Jones",
      desc: "Tourist Guide",
      src: tour4,
    },
  ];

  const icons = [facebook, twitter, ins, youtube];

  return (
    <section
      className="bg-no-repeat bg-center bg-cover max-w-screen h-[800px] py-30"
      style={{
        backgroundImage: "url('/images/background-light.png')",
      }}
    >
      <div className="flex items-center jusity-center flex-col text-secondary">
        <h3 className="font-montez text-[40px]">Meet with Guide</h3>
        <h2 className="leading-none font-manrope font-bold text-[48px] mb-30">
          Tour Guide
        </h2>
        <div className="grid grid-cols-4 gap-6 mb-16">
          {list.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-4 relative w-[312px] h-[290px] flex"
            >
              <div className="self-end w-full bg-primary/10 rounded-lg flex items-center justify-center flex-col p-4">
                <div className="flex flex-col items-center justify-center">
                  <h2 className="font-manrope font-semibold text-2xl">
                    {item.title}
                  </h2>
                  <p className="font-inter text-base mb-4">{item.desc}</p>
                </div>
                <div className="flex items-center justify-center gap-1">
                  {icons.map((icon, index) => (
                    <div
                      className="rounded-full size-8 border border-primary flex items-center justify-center"
                      key={index}
                    >
                      <img src={icon} alt="" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 size-[194px] rounded-full overflow-hidden">
                <img
                  src={item.src}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-[30px]">
          {Array(8)
            .fill(0)
            .map((_, index) => (
              <div
                className={`size-4 rounded-full ${
                  index === 1 ? "bg-primary" : "border border-secondary"
                }`}
                key={index}
              ></div>
            ))}
        </div>
      </div>
    </section>
  );
}
