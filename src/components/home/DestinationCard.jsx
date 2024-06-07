import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ImageCarousel from "../common/ImageCarousel";
import { Button } from "../ui/button";
import ContactDialog from "../common/ContactDialog";
import PATH from "@/constants/path";

function DestinationCard({ place }) {
  return (
    <Card className="flex flex-col justify-around h-full">
      <CardHeader>
        <ImageCarousel images={place.images} />
      </CardHeader>
      <Link to={`${PATH.TOURDETAILS}${place.slug.toLowerCase()}`}>
        <CardContent>
          <div className="flex flex-row w-full justify-between text-sm py-1 pr-3 md:pr-1">
            <p className="text-slate-500 italic ">
              {place.summarized_duration}
            </p>
            <p className="text-yellow-600">
              <i className="fa-solid fa-star pr-1"></i>
              {place.rating}
            </p>
          </div>
          <CardTitle className="pb-3">{place.name}</CardTitle>
          <CardDescription>
            {place?.itinerary_destinations?.map((itenary, key) => {
              return (
                <React.Fragment key={key}>
                  <span className="text-xs font-extrabold text-slate-700 ">
                    {itenary.days}D
                  </span>
                  <span className="text-xs text-slate-900">
                    {" "}
                    {itenary.location}
                  </span>
                  {key !== place?.itinerary_destinations?.length - 1 && (
                    <span className="text-xs"> &gt; </span>
                  )}
                </React.Fragment>
              );
            })}
          </CardDescription>
          <div className="priceDesc pt-4">
            <span className="flex flex-row gap-2 block">
              {place?.tags &&
                place?.tags?.map((tag, key) => (
                  <span
                    key={key}
                    className="text-xs text-white p-1 px-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 font-semibold uppercase py-0"
                  >
                    {tag}
                  </span>
                ))}
            </span>
            <p className="text-sm text-slate-900">
              <span className="text-xl text-yellow-600 font-semibold">
                {place.currency} {place.starting_price}
              </span>
            </p>
            <p className="text-sm text-slate-500 line-through">
              {place.currency} {place.strike_through_price}
            </p>
          </div>
        </CardContent>
      </Link>
      <CardFooter className="flex flex-row ">
        <div className="basis-2/12 ">
          <a href={`tel:${place.phone}`}>
            <i className="fa-solid fa-phone border p-3 rounded border-yellow-600 text-yellow-600 "></i>
          </a>
        </div>
        <div className=" w-full m-0 px-3 py-0">
          {/* <Button
            variant="outline"
            className="w-full p-4 py-5 bg-yellow-600 m-0 text-white font-bold text-center hover:bg-yellow-500 hover:text-white"
          > */}
          <ContactDialog
            displayName="Request a call back"
            place={place}
            className="w-full p-4 py-5 bg-yellow-600 m-0 text-white font-bold text-center hover:bg-yellow-500 hover:text-white"
          />
          {/* </Button> */}
        </div>
      </CardFooter>
    </Card>
  );
}

export default DestinationCard;
