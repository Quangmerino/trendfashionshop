import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Pagination } from "swiper";

export default function SlideProduct(images) {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={images.img} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={images.img} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={images.img} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={images.img} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={images.img} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={images.img} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={images.img} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={images.img} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={images.img} alt=""/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
