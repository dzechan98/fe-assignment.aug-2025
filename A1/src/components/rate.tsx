import shape from "/images/shape.png";
import shape5 from "../assets/shape_5.svg";
import shape6 from "../assets/shape_6.svg";

export default function Rate() {
  const list = [
    {
      title: "12",
      description: "Years Experience",
    },
    {
      title: "97%",
      description: "Rotention Rate",
    },
    {
      title: "8K",
      description: "Tour Completed",
    },
    {
      title: "19k",
      description: "Happy Travellers",
    },
  ];

  return (
    <div className="relative mt-[140px] flex items-center justify-center pb-40">
      <div className="flex gap-6 h-[468px]">
        {list.map((item, index) => (
          <div
            className={`relative size-[312px] rounded-full flex items-center justify-center border border-primary p-6 ${
              index % 2 === 0 && "self-end"
            }`}
            key={index}
          >
            <div className="rounded-full bg-primary/20 flex flex-col items-center justify-center size-full">
              <h2 className="font-manrope font-bold text-[48px] leading-none">
                {item.title}
              </h2>
              <span className="font-manrope text-2xl">{item.description}</span>
            </div>
            <div
              className={`absolute size-6 rounded-full flex items-center justify-center bg-primary/20 ${
                index % 2 === 1
                  ? "translate-y-5 top-5 -translate-x-5 right-2"
                  : "-translate-y-5 bottom-5 -translate-x-5 right-2"
              }`}
            >
              <div className="rounded-full bg-primary size-[10px]"></div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute left-[58px] top-6">
        <img src={shape} alt="" />
      </div>
      <div className="absolute left-[38px] top-0">
        <img src={shape} alt="" className="w-[15px] h-[21px]" />
      </div>
      <div className="absolute left-[154px] top-4">
        <img src={shape} alt="" className="w-[35px] h-[47px]" />
      </div>
      <div className="absolute right-[58px] top-0">
        <img src={shape5} alt="" />
      </div>
      <div className="absolute left-[58px] bottom-0">
        <img src={shape6} alt="" />
      </div>
    </div>
  );
}
