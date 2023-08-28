import React from "react";
import "./Project.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import textutil from "../../img/textutil.png";
import newsapp from "../../img/newsapp.png";
const Project = () => {
  return (
    <div className="project">
      <span>Projects</span>
      <Swiper
        spaceBetween={30}
        slidesPerView={2}
        grabCursor={true}
        className="project-slider"
      >
        <SwiperSlide>
          <img src={textutil} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={newsapp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={textutil} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Project;
