import React from "react";

import {
  Carousel,
  CarouselItem,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

function ImageCarousel({ images, className = "", infiniteScroll = false }) {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 1500 + Math.random() * 1500, // to make autoplay different for each carousel
          stopOnLastSnap: !infiniteScroll,
        }),
      ]}
      className="group"
      opts={{ watchDrag: false }}
    >
      <CarouselPrevious className="left-0 md:hidden md:group-hover:inline-flex z-50 opacity-80 disabled:opacity-0" />
      <CarouselContent className={`${className}`}>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <img
              className="rounded w-full h-full object-cover"
              src={image}
              alt={`image-${index}`}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext className="right-0 md:hidden md:group-hover:inline-flex z-50 opacity-80	 disabled:opacity-0" />
    </Carousel>
  );
}

export default ImageCarousel;
