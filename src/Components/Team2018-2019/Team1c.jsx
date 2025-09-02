// MoviesCarousel.jsx
import React, { useRef, useState, useEffect, useCallback } from "react";
import "./Team1c.css";

// Assets
import M4 from "../../assets/Dri.jpg";

const movies = [
  { name: "Mukul Wadhokar (Captain)", des: "Mechanical Powertrain", img: M4, link: "https://www.linkedin.com/in/anmol-gour-4455a6305/" },
  { name: "Darshak Kamani (Driver)", des: "Mechanical Powertrain", img: M4, link: "https://www.linkedin.com/in/anmol-gour-4455a6305/" },
  { name: "Heramb Khandve", des: "Mechanical Powertrain", img: M4, link: "https://www.linkedin.com/in/anmol-gour-4455a6305/" },
  { name: "Ajay Sawant", des: "Mechanical Powertrain", img: M4, link: "https://www.linkedin.com/in/anmol-gour-4455a6305/" },
  { name: "Parshwal Gujar", des: "Mechanical Powertrain", img: M4, link: "https://www.linkedin.com/in/anmol-gour-4455a6305/" },
  { name: "Bilal Ali Shaikh", des: "Mechanical Powertrain", img: M4, link: "https://www.linkedin.com/in/anmol-gour-4455a6305/" },
];

const MoviesCarousel = () => {
  const containerRef = useRef(null);
  const intervalRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToIndex = useCallback((index) => {
    const container = containerRef.current;
    if (container) {
      const scrollAmount = container.clientWidth;
      container.scrollTo({ left: index * scrollAmount, behavior: "smooth" });
    }
    setCurrentIndex(index);
  }, []);

  const startAutoScroll = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % movies.length;
        scrollToIndex(nextIndex);
        return nextIndex;
      });
    }, 2500);
  };

  const stopAutoScroll = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const resumeWithDelay = () => {
    // Slight delay to ensure touch events finalize before resuming
    setTimeout(startAutoScroll, 300);
  };

  useEffect(() => {
    startAutoScroll();
    return stopAutoScroll;
  }, [startAutoScroll]);

  return (
    <div
      className="movies-list"
      onMouseEnter={stopAutoScroll}
      onMouseLeave={startAutoScroll}
      onTouchStart={stopAutoScroll}
      onTouchEnd={resumeWithDelay}
      onTouchCancel={resumeWithDelay}
      onTouchMove={stopAutoScroll}
    >
      <div className="card-container" ref={containerRef}>
        {movies.map((m, idx) => (
          <div className="card" key={idx}>
            <div className="card-img-blur-wrapper">
              <img src={m.img} alt={m.name} className="card-img" />
            </div>
            <div className="card-body">
              <h2 className="name">{m.name}</h2>
              <h6 className="des">{m.des}</h6>
              {m.link && (
                <a href={m.link} target="_blank" rel="noopener noreferrer" className="linkedin-btn">
                  View LinkedIn
                  {/* SVG icon here */}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="indicator-container">
        {movies.map((_, idx) => (
          <div
            key={idx}
            className={`indicator ${idx === currentIndex ? "active" : ""}`}
            onClick={() => scrollToIndex(idx)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default MoviesCarousel;
