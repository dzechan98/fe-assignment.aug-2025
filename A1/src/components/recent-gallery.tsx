import gallery1 from "/images/gallery1.png";
import gallery2 from "/images/gallery2.png";
import gallery3 from "/images/gallery3.png";
import gallery4 from "/images/gallery4.png";
import gallery5 from "/images/gallery5.png";
import gallery6 from "/images/gallery6.png";
import gallery7 from "/images/gallery7.png";
import line from "../assets/line.svg";
import shape4 from "../assets/shape_4.svg";

export default function RecentGallery() {
  const listGalleries = [
    [gallery1],
    [gallery2, gallery3],
    [gallery4],
    [gallery5, gallery6],
    [gallery7],
  ];

  return (
    <section
      className="relative bg-no-repeat bg-center bg-contain max-w-screen h-[800px] pt-30 mt-[260px]"
      style={{
        backgroundImage: `url(${line})`,
      }}
    >
      <div className="text-secondary flex flex-col items-center px-[260px]">
        <h3 className="font-montez text-[40px]">
          Make Your Tour More Pleasure
        </h3>
        <h2 className="leading-none font-manrope font-bold text-[48px] mb-12">
          Recent Gallery
        </h2>
        <div className="flex items-center justify-center gap-4">
          {listGalleries.map((galleries, index) => (
            <div className="flex flex-col gap-4" key={index}>
              {galleries.map((gallery, idx) => (
                <div className="flex flex-col gap-4" key={idx}>
                  <img
                    src={gallery}
                    alt={`Gallery ${index + 1} - ${idx + 1}`}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="absolute left-[58px] top-2/5">
        <img src={shape4} alt="" />
      </div>
    </section>
  );
}
