"use client";
import React, { useState, useEffect } from "react";

const slides = [
  { img: "machine1.png", title: "Bel" },
  { img: "machine2.png", title: "Diris'A20-A40'" },
  { img: "machine3.png", title: "AtysM" },
  { img: "machine4.png", title: "Bel" },
  { img: "machine5.png", title: "PSM102" },
  { img: "machine6.png", title: "Bel" },
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 3 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 3 ? 0 : prev + 1));
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(slideInterval); // Clear interval on component unmount
  }, []);

  return (
    <div className="relative w-full h-64 overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full flex transition-transform duration-300"
        style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)` }}
      >
        {slides.concat(slides.slice(0, 2)).map((slide, index) => (
          <div
            key={index}
            className="2xl:w-1/4 lg:w-1/3 w-1/2 h-full flex-shrink-0 flex items-center justify-center rounded-xl text-white p-4 font-bold lg:text-lg text-sm"
          >
            <div className="bg-white p-4 rounded-xl">
              <p className="text-blue">{slide.title}</p>
              <img src={`./assets/${slide.img}`} alt={slide.title} />
            </div>
          </div>
        ))}
      </div>
      <div
        className="absolute top-1/2 left-4 transform -translate-y-1/2 px-4 py-2 bg-lightPurple font-bold text-blue rounded-md"
        onClick={prevSlide}
      >
        Prev
      </div>
      <div
        className="absolute top-1/2 right-4 transform -translate-y-1/2 px-4 py-2 bg-lightPurple font-bold text-blue rounded-md"
        onClick={nextSlide}
      >
        Next
      </div>
    </div>
  );
};

export default Carousel;
