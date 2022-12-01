import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper";
import { useStyles } from "../../styles";
import "swiper/css/navigation";
import { CAROUSEL_ITEMS } from "../../../../libs/utilities/constants/constants";
import { CarouselItem } from "./CarouselItem";
import classNames from "classnames";

export const Carousel = () => {
  const classes = useStyles();

  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className={classNames("mySwiper", classes.carousel)}
    >
      {CAROUSEL_ITEMS.map((item) => (
        <SwiperSlide>
          <CarouselItem item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
