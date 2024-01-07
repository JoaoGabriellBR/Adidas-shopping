import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CarouselProps } from "@/utils/types";

const Carousel: React.FC<CarouselProps> = ({
  slides,
  infiniteLoop = false,
  transitionDuration = 500,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index: number) => {
    if (infiniteLoop) {
      index = (index + slides.length) % slides.length;
    } else {
      index = Math.max(0, Math.min(index, slides.length - 1));
    }
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    goToSlide(currentIndex + 1);
  };

  const prevSlide = () => {
    goToSlide(currentIndex - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (infiniteLoop) {
        nextSlide();
      } else if (currentIndex < slides.length - 1) {
        nextSlide();
      }
    }, 5000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, infiniteLoop, slides.length]);

  return (
    <div className="relative">
      <div className="flex overflow-hidden">
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2"
        >
          <ChevronLeft size={35} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2"
        >
          <ChevronRight size={35} />
        </button>
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              onClick={slide.onClick}
              key={index}
              className="w-full flex-shrink-0 cursor-pointer"
            >
              {slide.content}
            </div>
          ))}
        </div>

        {/* Botões de seta */}
        <button
          className="absolute top-1/2 transform -translate-y-1/2 left-0 z-10"
          onClick={prevSlide}
        >
          <ChevronLeft size={40} />
        </button>
        <button
          className="absolute top-1/2 transform -translate-y-1/2 right-0 z-10"
          onClick={nextSlide}
        >
          <ChevronRight size={40} />
        </button>
      </div>

      {/* Botões de transição manual */}
      <div className="flex justify-center mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 mx-1 rounded-full focus:outline-none ${
              index === currentIndex ? "bg-black" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
