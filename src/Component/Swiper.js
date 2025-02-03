import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaArrowRightLong } from "react-icons/fa6";

const projects = [
  {
    id: 1,
    img: "../Assets/img-1.png",
    date: "Jan 20, 2020",
    title: "Nicoll Townhouse",
    description:
      "Reprehenderit nulla eu ad et erit nulla eu ad eterit nulla eu ad et",
  },
  {
    id: 2,
    img: "../Assets/img-2.png",
    date: "Jan 18, 2020",
    title: "Minus Deleniti",
    description:
      "Reprehenderit nulla eu ad et erit nulla eu ad eterit nulla eu ad et",
  },
  {
    id: 3,
    img: "../Assets/img-3.png",
    date: "Jan 15, 2020",
    title: "Consequatur Dolorres",
    description:
      "Reprehenderit nulla eu ad et erit nulla eu ad eterit nulla eu ad et",
  },
];

function Swiperexample() {
  return (
    <section className="ourproject">
      <div className="container">
        <div className="text-center pt-12">
          <h1 className="text-[#407cad] uppercase">Our Projects</h1>
          <span className="font-bold text-3xl">Explore What We Offer</span>
        </div>
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mt-10"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="p-4 shadow-lg rounded-lg">
                <img src={project.img} alt={project.title} />
                <div className="mt-4">
                  <span className="text-[#407cad]">{project.date}</span>
                  <h1 className="mt-3 text-2xl">{project.title}</h1>
                  <p className="mt-5">{project.description}</p>
                  <span className="flex text-[#407cad] mt-3 font-semibold">
                    View More <FaArrowRightLong className="mt-1.5 ml-2" />
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
export default Swiperexample;
