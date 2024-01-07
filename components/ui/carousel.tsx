"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useMediaQuery } from "react-responsive";

const images = [
  "/images/camiseta-essentials.png",
  "/images/campus.png",
  "/images/itens-imperdiveis.png",
];
const imagesMobile = [
  "/images/camiseta-essentials-mobile1.png",
  "/images/campusMobile.png",
  "/images/itens-imperdiveis-mobile.png"
];

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: "1000px" });

  const nextSlide = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentImage(index);
  };

  return (
    <div className="relative transition-opacity duration-500 ease-in-out">
      <div className="overflow-hidden transition-opacity duration-500 ease-in-out">
        {isMobile ? (
          <Image
            src={imagesMobile[currentImage]}
            alt={`Slide ${currentImage}`}
            layout="responsive"
            width={767}
            height={755}
            objectFit="cover"
          />
        ) : (
          <Image
            src={images[currentImage]}
            alt={`Slide ${currentImage}`}
            layout="responsive"
            width={1920}
            height={600}
            objectFit="cover"
          />
        )}
      </div>

      <div className="absolute inset-y-0 left-0 flex items-center">
        <button
          onClick={prevSlide}
          className="text-black p-2 rounded-full mr-2 transition-opacity duration-500 ease-in-out"
        >
          <ChevronLeft size={40} />
        </button>
      </div>

      <div className="absolute inset-y-0 right-0 flex items-center">
        <button
          onClick={nextSlide}
          className="text-black p-2 rounded-full ml-2 transition-opacity duration-500 ease-in-out"
        >
          <ChevronRight size={40} />
        </button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-4 transition-opacity duration-500 ease-in-out">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 mx-2 rounded-full ${
              currentImage === index ? "bg-gray-800" : "bg-gray-400"
            } transition-opacity duration-500 ease-in-out`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
