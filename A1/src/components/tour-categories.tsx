const categories = [
  {
    name: "Wildlife",
    image: "/images/category_1_4.png",
    rotation: "-rotate-10",
    translation: "translate-y-16",
  },
  {
    name: "Walking",
    image: "/images/category_1_5.png",
    rotation: "-rotate-5",
    translation: "translate-y-4",
  },
  {
    name: "Cruises",
    image: "/images/category_1_1.png",
    rotation: "",
    translation: "",
  },
  {
    name: "Hiking",
    image: "/images/category_1_2.png",
    rotation: "rotate-5",
    translation: "translate-y-4",
  },
  {
    name: "Airbirds",
    image: "/images/category_1_3.png",
    rotation: "rotate-10",
    translation: "translate-y-16",
  },
];

export default function TourCategories() {
  return (
    <section
      className="relative pb-[120px] bg-no-repeat bg-center w-full"
      style={{
        backgroundImage: "url('/images/bg-overlay.png')",
        height: "800px",
      }}
    >
      <div className="mx-18 flex flex-col items-center">
        <h3 className="mt-[175px] font-montez text-[40px] text-[#113D48]">
          Wornderful Place For You
        </h3>
        <h2 className="font-manrope text-[48px] text-[#113D48] leading-none mb-10">
          Tour Categories
        </h2>
        <div className="grid grid-cols-5 gap-10 mb-[46px]">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`${category.rotation} ${category.translation} flex flex-col items-center gap-y-2`}
            >
              <img
                src={category.image || "/placeholder.svg"}
                alt={category.name}
              />
              <h3 className="font-manrope text-semibold text-[24px]">
                {category.name}
              </h3>
              <span className="font-inter text-sm font-semibold text-[#6E7070]">
                See more
              </span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-[30px]">
          <div className="size-4 bg-primary rounded-full"></div>
          <div className="size-4 border border-[#113D48] rounded-full"></div>
          <div className="size-4 border border-[#113D48] rounded-full"></div>
          <div className="size-4 border border-[#113D48] rounded-full"></div>
          <div className="size-4 border border-[#113D48] rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
