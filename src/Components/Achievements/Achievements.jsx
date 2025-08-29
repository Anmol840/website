import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "./Achievements.css";
import MoviesCarousel from "../../Components/MoviesCarousel/MoviesCarousel";
import Carousel from "../../Components/Carousel/Carousel.jsx";
// Assets
import slideImg1 from "../../assets/slide-icon-1.svg";
import slideImg2 from "../../assets/slide-icon-2.svg";
import slideImg3 from "../../assets/slide-icon-3.svg";

import slideImg4 from "../../assets/slide-icon-4.svg";
import slideImg5 from "../../assets/slide-icon-5.svg";

const Achievements = () => {
  return (
    <>
    <section className="py-10">
        <Carousel
          slides={[slideImg1, slideImg2, slideImg3]}
          autoplay={true}
          interval={3000}
        />
      </section>
      <section className="py-10">
        <MoviesCarousel autoplay={true} interval={2500} />
      </section>
    </>
  );
};

export default Achievements;

