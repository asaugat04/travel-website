import React from "react";

import {
  Carousel,
  CarouselItem,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function ImageCarousel({ images }) {
  return (
    <Carousel className="group" opts={{ watchDrag: false }}>
      <CarouselPrevious className="left-0 md:hidden md:group-hover:inline-flex z-50 backdrop-blur-md" />
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <img className="rounded" src={image} alt={`image-${index}`} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext className="right-0 md:hidden md:group-hover:inline-flex z-50 backdrop-blur-md" />
    </Carousel>
  );
}

export default ImageCarousel;
