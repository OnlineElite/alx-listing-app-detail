import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { GalleryProps } from "@/interfaces";

const Slider: React.FC<GalleryProps> = ({ gallery }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  if (!gallery || gallery.length === 0) {
    return (
      <p className="text-center text-red-600 font-semibold">
        No images available
      </p>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Main Image */}
      <div className="relative overflow-hidden">
        <Image
          src={gallery[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-96 object-fill rounded-md"
          width={100}
          height={100}
        />
        {/* Arrows */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white"
        >
          <ChevronRight />
        </button>

        {/* Slide counter */}
        <div className="absolute top-2 left-2 bg-black bg-opacity-60 text-white px-2 py-1 text-sm rounded-md">
          {currentIndex + 1} / {gallery.length}
        </div>
      </div>

      {/* Title */}
      {/* <div className="bg-black text-white text-center py-2 text-lg font-medium">
        Image {currentIndex + 1}
      </div> */}

      {/* Thumbnails */}
      <div className="flex gap-2 overflow-x-auto mt-2 p-1">
        {gallery.map((img, index) => (
          <Image
            key={index}
            src={img}
            onClick={() => handleThumbnailClick(index)}
            className={`h-20 w-28 object-fill cursor-pointer rounded-md border-2 ${
              index === currentIndex ? "border-blue-500" : "border-transparent"
            } opacity-80 hover:opacity-100`}
            alt={`Thumbnail ${index + 1}`}
            width={100}
            height={100}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
