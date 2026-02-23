"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

export const TechSwiper = () => {
  const techs = [
    { icon: "devicon-react-original" },
    { icon: "devicon-nextjs-plain" },
    { icon: "devicon-tailwindcss-plain" },
    { icon: "devicon-typescript-plain" },
    { icon: "devicon-javascript-plain" },
    { icon: "devicon-nodejs-plain" },
    { icon: "devicon-html5-plain" },
    { icon: "devicon-css3-plain" },
    { icon: "devicon-sass-plain" },
    { icon: "devicon-postgresql-plain" },
    { icon: "devicon-figma-plain" },
    { icon: "devicon-framermotion-plain" },
    { icon: "devicon-express-original" },
    { icon: "devicon-axios-plain" },
  ];

  return (
    <div className="w-full py-10 overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={3} // Mobile
        loop={true}
        speed={5000} // Velocidade da transição (5s)
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
        className="tech-swiper"
      >
        {techs.map((tech, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <div className="flex items-center gap-2 text-white hover:text-[#00D1FF] transition-colors duration-300 cursor-default group">
              <i className={`${tech.icon} text-4xl`}></i>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .tech-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </div>
  );
};