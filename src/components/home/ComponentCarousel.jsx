import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function ComponentCarousel({ children }) {
  //   return <div>{"kjk"}</div>;

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full md:w-11/12 self-center m-auto "
    >
      <CarouselPrevious className=" -left-3 w-10 h-10 border-0 shadow-md md:-left-10 z-50  md:z-auto " />
      <CarouselContent className="sdlajflkjdsajldsjl">
        {children.map((child, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/2 lg:basis-1/3 h-auto"
          >
            <div className="p-1 h-full">{child}</div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext className="-right-3 w-10 h-10 border-0 shadow-md md:-right-10 z-auto md:z-auto  " />
    </Carousel>
  );
}

export default ComponentCarousel;
