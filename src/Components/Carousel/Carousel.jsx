import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";

// Images
import slide_image_1 from "../../assets/img_1.jpg";
import slide_image_2 from "../../assets/img_2.jpg";
import slide_image_3 from "../../assets/img_3.jpg";
import slide_image_4 from "../../assets/img_4.jpg";
import slide_image_5 from "../../assets/img_5.jpg";
import slide_image_6 from "../../assets/img_6.jpg";
import slide_image_7 from "../../assets/img_7.jpg";
import slide_image_8 from "../../assets/img_8.jpg";

function App() {
  const swiperRef = useRef(null);

  const slidesData = [
    { img: slide_image_1, text: "Slide 1" },
    { img: slide_image_2, text: "Slide 2" },
    { img: slide_image_3, text: "Slide 3" },
    { img: slide_image_4, text: "Slide 4" },
    { img: slide_image_5, text: "Slide 5" },
    { img: slide_image_6, text: "Slide 6" },
    { img: slide_image_7, text: "Slide 7" },
    { img: slide_image_8, text: "Slide 8" },
  ];

  const slides = [...slidesData, ...slidesData]; 

  return (
    <div className="carce mt-[25%]">
      <Swiper
  effect="coverflow"
  grabCursor={true}
  centeredSlides={true}
  loop={true}
  slidesPerView={3}        
  spaceBetween={30}        
  autoplay={{ delay: 2000, disableOnInteraction: false }}
  speed={800}
  breakpoints={{
    600: { slidesPerView: 3, spaceBetween: 30 }, 
    1024: { slidesPerView: 5, spaceBetween: 30 } 
  }}
  coverflowEffect={{
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5
  }}
  pagination={{ clickable: true }}
  navigation={true}
  modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
  className="swiper_container"
  onSwiper={(swiper) => (swiperRef.current = swiper)}
>

        {slides.map((slide, index) => (
          <SwiperSlide
  key={index}
  className="w-[500px] h-[300px] md:w-[600px] md:h-[350px] lg:w-[700px] lg:h-[400px]"
  onMouseEnter={() => swiperRef.current?.autoplay.stop()}
  onMouseLeave={() => swiperRef.current?.autoplay.start()}
>

            <div className="relative w-full h-full group overflow-hidden rounded-xl">
              {/* Image */}
              <img
                src={slide.img}
                alt={`slide_${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay (hidden until hover) */}
              <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="text-xl font-semibold text-white mb-3">
                  {slide.text}
                </div>
                <button className="px-4 py-2 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition">
                  View Details
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default App;
