import line from "/images/line-revert.png";
import star from "../assets/star.svg";
import shape from "/images/shape-revert.png";
import testimonial1 from "/images/testimonial1.png";
import testimonial2 from "/images/testimonial2.png";
import testimonial3 from "/images/testimonial3.png";
import client1 from "/images/client1.png";
import client2 from "/images/client2.png";
import client3 from "/images/client3.png";
import client4 from "/images/client4.png";
import client5 from "/images/client5.png";

export default function Testimonial() {
  const clients = [
    client1,
    client2,
    client3,
    client4,
    client3,
    client1,
    client5,
    client2,
  ];

  const testimonials = [
    {
      title: "Angelina Rose",
      desc: `“Solar panels adorn the roof, harnessing renewable energy to power the home and even feed excess electricity back into the grid. High-performance insulation and triple-glazed”`,
      rating: 5,
      src: testimonial1,
    },
    {
      title: "Andrew Simon",
      desc: `“A home that perfectly blends sustainability with luxury until discovered Ecoland Residence. The moment I stepped community, I knew it was where I wanted to live.”`,
      rating: 5,
      src: testimonial2,
    },
    {
      title: "Maria Doe",
      desc: `“The home boasts sleek, contemporary architecture with clean lines and expansive windows, allowing natural light to flood the interiors It incorporates passive design principles”`,
      rating: 5,
      src: testimonial3,
    },
  ];

  return (
    <section className="py-30">
      <div className="flex items-center justify-center flex-col">
        <h3 className="font-montez text-[40px] text-secondary">Testimonial</h3>
        <h2 className="leading-none font-manrope text-secondary font-bold text-[48px] mb-12">
          What Client Say About us
        </h2>
        <div
          className="relative bg-no-repeat bg-center bg-cover w-full h-[640px]"
          style={{
            backgroundImage: `url(${line})`,
          }}
        >
          <div className="h-[400px] flex items-start gap-11 mb-19">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className={`rounded-xl bg-[#e8f6f9] p-10 ${
                  index % 2 === 0 && "self-end"
                }`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <img src={item.src} alt="" />
                    <div>
                      <h2 className="font-manrope text-secondary font-semibold text-2xl">
                        {item.title}
                      </h2>
                      <span className="text-[#6E7070]">Traveller</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    {Array(item.rating)
                      .fill(0)
                      .map((_, starIndex) => (
                        <img key={starIndex} src={star} alt="" />
                      ))}
                  </div>
                </div>
                <p className="font-medium text-[20px]">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-[30px]">
            {Array(6)
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
          <div className="absolute left-[58px] top-6">
            <img src={shape} alt="" />
          </div>
        </div>
        <div className="flex items-center justify-center gap-19">
          {clients.map((client, index) => (
            <img
              src={client}
              alt={`Client ${index + 1}`}
              key={index}
              className="size-[150px] object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
