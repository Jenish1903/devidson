import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaArrowRightLong } from "react-icons/fa6";
import { useEffect, useState } from "react";

function Swiperexample() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/projects")
      .then((response) => response.json())
      .then((json) => setdata(json))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <section className="ourproject">
      <div className="container">
        <div className="text-center pt-12">
          <h1 className="text-[#407cad] uppercase">Our Projects</h1>
          <span className="font-bold text-3xl">Explore What We Offer</span>
        </div>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mt-10"
        >
          {data.map((project) => (
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
