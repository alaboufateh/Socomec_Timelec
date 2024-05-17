"use client";
// components/Carousel.js
import React, { useState } from "react";

const slides = [
  {
    id: 1,
    content: "Slide 1",
    backgroundColor: "bg-blue-500",
  },
  {
    id: 2,
    content: "Slide 2",
    backgroundColor: "bg-green-500",
  },
  {
    id: 3,
    content: "Slide 3",
    backgroundColor: "bg-red-500",
  },
  {
    id: 4,
    content: "Slide 4",
    backgroundColor: "bg-yellow-500",
  },
  {
    id: 5,
    content: "Slide 5",
    backgroundColor: "bg-purple-500",
  },
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 3 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 3 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-64 overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full flex transition-transform duration-300"
        style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)` }}
      >
        {slides.slice(currentSlide, currentSlide + 3).map((slide) => (
          <div
            key={slide.id}
            className={`w-full h-full flex-shrink-0 ${slide.backgroundColor} flex items-center justify-center text-white text-2xl`}
          >
            {slide.content}
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none"
        onClick={prevSlide}
      >
        Prev
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none"
        onClick={nextSlide}
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
