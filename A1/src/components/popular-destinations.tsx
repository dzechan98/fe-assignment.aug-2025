import arrowRightLightIcon from "../assets/arrow-right-light.svg";

const destinations = [
  {
    name: "Thailand",
    listings: "22 Listing",
    image: "/images/destination_1_3.png",
    position: "-translate-x-[calc(50%-540px)]",
    zIndex: "-z-2",
    blur: "blur-[4px]",
    rotation: "rotate-y-1",
  },
  {
    name: "Thailand",
    listings: "22 Listing",
    image: "/images/destination_1_2.png",
    position: "-translate-x-[calc(50%-300px)]",
    zIndex: "-z-1",
    blur: "blur-[2px]",
    rotation: "rotate-y-1",
  },
  {
    name: "Thailand",
    listings: "22 Listing",
    image: "/images/destination_1_1.png",
    position: "-translate-x-1/2",
    zIndex: "z-1",
    blur: "",
    rotation: "",
  },
  {
    name: "Nepal",
    listings: "22 Listing",
    image: "/images/destination_1_5.png",
    position: "-translate-x-[calc(50%+300px)]",
    zIndex: "-z-1",
    blur: "blur-[2px]",
    rotation: "-rotate-y-1",
  },
  {
    name: "Island",
    listings: "22 Listing",
    image: "/images/destination_1_4.png",
    position: "-translate-x-[calc(50%+540px)]",
    zIndex: "-z-2",
    blur: "blur-[4px]",
    rotation: "-rotate-y-1",
  },
];

export default function PopularDestinations() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center">
        <div className="text-[#113D48] mb-12">
          <h3 className="text-center font-montez text-[40px]">
            Top Destination
          </h3>
          <h2 className="text-center text-[48px] font-manrope font-bold leading-tight">
            Popular Destination
          </h2>
        </div>
        <div className="relative w-full h-[636px] mb-30">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className={`${destination.zIndex} opacity-0.6 ${destination.blur} absolute left-1/2 top-1/2 -translate-y-1/2 ${destination.position} ${destination.rotation} perspective-[16px]`}
            >
              <img
                src={destination.image || "/placeholder.svg"}
                alt={destination.name}
              />
              <div className="absolute inset-0 bg-[rgba(0,0,0,0.2)] rounded-4xl">
                <div className="absolute left-[42px] right-[42px] bottom-10 flex items-center justify-between text-white">
                  <div className="spacy-y-1">
                    <h2 className="font-manrope text-[24px] font-semibold">
                      {destination.name}
                    </h2>
                    <span className="font-inter text-base">
                      {destination.listings}
                    </span>
                  </div>
                  <button className="px-[35px] py-[15.5px] rounded-full border border-white flex items-center gap-1">
                    View All
                    <img
                      src={arrowRightLightIcon}
                      alt="Arrow right light icon"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
