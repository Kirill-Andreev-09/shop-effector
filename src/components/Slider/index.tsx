import React, { FC, useMemo } from "react";
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image } from "@chakra-ui/react";
import "./Slider.scss";

type SliderType = {
  images: string[];
};

const Slider: FC<SliderType> = ({ images }) => {
  const responsiveData = useMemo(() => {
    return [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: images?.length > 1 ? 2 : 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ];
  }, []);

  if (!images?.length) {
    return <></>;
  }

  return (
    <SlickSlider
      dots={false}
      infinite={true}
      arrows={false}
      className="root"
      adaptiveHeight
      slidesToShow={images?.length > 1 ? 2 : 1}
      slidesToScroll={1}
      responsive={responsiveData}
    >
      {images?.map((img: string, index: number) => {
        return (
          <Image
            key={index}
            src={img}
            alt="img"
            borderRadius="lg"
            height={100}
          />
        );
      })}
    </SlickSlider>
  );
};

export { Slider };
