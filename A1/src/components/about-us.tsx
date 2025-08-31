import shape from "/images/shape.png";
import aboutUs1 from "/images/about-us1.png";
import aboutUs2 from "/images/about-us2.png";
import aboutUs3 from "/images/about-us3.png";
import arrowRightSecondary from "../assets/arrow-right-secondary.svg";

export default function AboutUs() {
  const list = [
    {
      title: "Enrich Your Mind Envision Your Future Education for Success",
      date: "Jul 10, 2024",
      time: "3 min read",
      src: aboutUs1,
    },
    {
      title: "Exploring The Green Spaces Of Realar Residence Harmony with",
      date: "Jul 10, 2024",
      time: "3 min read",
      src: aboutUs2,
    },
    {
      title: "Living sustainability: A day in the life atrealar residence",
      date: "Jul 10, 2024",
      time: "3 min read",
      src: aboutUs3,
    },
  ];

  return (
    <section className="relative bg-primary/10 py-30 px-[300px] text-secondary">
      <h3 className="font-montez text-[40px]">About Us Restaurant</h3>
      <div className="flex items-center justify-between mb-6">
        <h2 className="leading-none font-manrope font-bold text-[48px]">
          News & Articles From Tourm
        </h2>
        <button className="py-[18px] px-[26px] rounded-full border border-secondary flex items-center justify-center gap-2">
          See more articles
          <img src={arrowRightSecondary} alt="" className="size-6" />
        </button>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {list.map((item, index) => (
          <div key={index} className="space-y-8">
            <img
              src={item.src}
              alt=""
              className="rounded-2xl w-full h-[350px] object-cover"
            />
            <div className="space-y-[10px]">
              <div className="flex items-center text-[#6E7070] text-sm gap-8">
                <span className="relative before:content-[''] before:absolute before:-right-4 before:top-1/2 before:-translate-y-1/2 before:w-[1px] before:h-full before:bg-[#999]">
                  {item.date}
                </span>
                <span>{item.time}</span>
              </div>
              <h2 className="font-semibold font-manrope text-2xl">
                {item.title}
              </h2>
            </div>
            <button className="px-[26px] py-[14px] rounded-full flex items-center gap-2 justify-center border border-secondary">
              Read More
              <img src={arrowRightSecondary} alt="" className="size-[18px]" />
            </button>
          </div>
        ))}
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
