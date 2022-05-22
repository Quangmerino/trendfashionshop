import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export default function Slider(images) {
  return (
    <>
      <Swiper
        cssMode={true}
        slidesPerView={"auto"}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={images.img} alt="img slider"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={images.img} alt="img slider"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={images.img} alt="img slider"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={images.img} alt="img slider"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={images.img} alt="img slider"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={images.img} alt="img slider"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={images.img} alt="img slider"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={images.img} alt="img slider"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={images.img} alt="img slider"/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
