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
      <section className="relative z-10">
       
          <div className="max-w-screen-lg mx-auto px-4 
                          pt-[20%] sm:pt-[15%] md:pt-[10%] 
                          pb-[12%]  md:pb-[5%]">
            <div className="text-center relative">
              <div className="Jointe">
                <h2 className="learn-mo-line">
                  <span className="section-heading">
                    REEV ACHIEVEMENTS
                  </span>
                </h2>
              </div>
          </div> 
        </div>
      </section>

      <hr className="bg-black border-b border-red-500 mb-[0%]"></hr>
      <section className="mt-[0%] mb-[10%]">
        <Carousel
          slides={[slideImg1, slideImg2, slideImg3, slideImg4, slideImg5]}
          autoplay={true}
          interval={3000}
        />
      </section>

    
    </>
  );
};

export default Achievements;
