import React, { useEffect, useState } from "react";
import tourData from "@/api/fetchTourData";
import { useParams } from "react-router-dom";
import ContactDialog from "@/components/common/ContactDialog";
import ImageCarousel from "@/components/common/ImageCarousel";
import CallbackForm from "@/components/common/CallbackForm";
import EndImage from "@/assets/images/endImage.avif";
import { LuHotel } from "react-icons/lu";
import { TbAirBalloon } from "react-icons/tb";
import { CheckIcon, Cross1Icon, StarFilledIcon } from "@radix-ui/react-icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Reviews from "@/components/common/Reviews";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

function TourDetails() {
  const { tourName } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    setData({
      ...tourData,
    });
  }, [tourName]);

  return (
    data &&
    data.images &&
    data.images[1] && (
      <div>
        <div className="group relative -mb-0">
          {data?.images && (
            <ImageCarousel
              className="h-[25vh] md:h-[60vh]"
              infiniteScroll
              images={data.images}
            />
          )}
          <div className="absolute bottom-0 left-0 w-full text-white shadow-xl backdrop-blur-[1px] bg-gradient-to-t from-stone-700 to-transparent -mb-1">
            <div className="banner flex flex-col items-center justify-center gap-3">
              <div className="text-sm md:text-xl font-semibold ">
                {data.duration} Tour
              </div>
              <h1 className="text-2xl md:text-6xl font-bold  w-full text-center ">
                <span className="border-b whitespace-nowrap border-b-yellow-600">
                  {data.title}
                </span>
              </h1>
              <p className="text-xs md:text-xl flex flex-col items-center">
                Starting at just{" "}
                <span className="text-xl md:text-2xl text-yellow-600 font-bold">
                  {data.currency} {data.starting_price}
                </span>
                <span className="text-sm md:text-md line-through text-stone-400 ">
                  {data.currency} {data.strike_through_price}
                </span>
              </p>
              <div className="pb-5">
                <ContactDialog
                  displayName="Request Callback"
                  className="w-full p-4 py-5 bg-yellow-600 m-0 text-white font-bold text-center hover:bg-yellow-500 hover:text-white outline-0 border-0 rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-lg bg-stone-700 m-0 w-full px-2 flex flex-row text-white justify-center gap-4 md:gap-10 items-center py-0 -mt-[1px]">
          {data.places &&
            data?.places.map((place, index) => (
              <>
                <p
                  key={index}
                  className="flex flex-row items-center gap-1 text-xs py-3 md:text-2xl"
                >
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <p className="flex flex-row items-center gap-1 border-b border-b-transparent text-xl hover:border-b-yellow-600 capitalize">
                        {place.name}
                      </p>
                    </HoverCardTrigger>
                    <HoverCardContent
                      className="bg-slate-800/80"
                      side="top"
                      asChild
                    >
                      <p className="text-center text-xs p-1 m-0 border-0 text-white rounded-sm">
                        {place.desc}
                      </p>
                    </HoverCardContent>
                  </HoverCard>
                </p>
                {index !== data.places.length - 1 && (
                  <div className="text-yellow-600 p-0 h-full text-xl">&gt;</div>
                )}
              </>
            ))}
        </div>
        <div className="body w-11/12 m-auto md:w-10/12 py-10 ">
          <div className="text-yellow-600 text-3xl text-center font-bold pb-10">
            {data.name}
          </div>
          <div className="flex flex-col ">
            <h1 className="text-center text-3xl font-bold  pb-5">
              Tour Overview
            </h1>
            <p className="text-justify text-sm">{data?.overview}</p>
          </div>

          <div className="grid md:grid-cols-8 pt-10 gap-3">
            <div className="md:col-span-5">
              <h1 className="text-center md:text-left text-3xl font-bold pb-5">
                Tour Highlights
              </h1>
              <ul className="text-sm">
                {data?.highlights &&
                  data.highlights.map((highlight, index) => (
                    <li key={index} className="flex flex-row gap-2 py-1">
                      <span className="text-yellow-600 text-lg">
                        <CheckIcon />
                      </span>
                      <span>{highlight}</span>
                    </li>
                  ))}
              </ul>

              <div className="flex flex-col pt-10 ">
                <h1 className="text-3xl font-bold pb-5 text-center md:text-left">
                  Itinerary
                </h1>
                <div className="flex flex-col">
                  {data?.itinerary &&
                    data.itinerary.map((day, index) => (
                      <div className="rounded border p-1 my-2">
                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem className="border-none" value="item-1">
                            <AccordionTrigger className="hover:no-underline">
                              <div className="flex flex-row items-center gap-3">
                                <h1 className="rounded-full bg-gradient-to-bl to-yellow-600 from-pink-600 p-1 px-2 text-white">
                                  Day {day.day}
                                </h1>
                                <p>{day.title}</p>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="text-xs m-auto w-11/12">
                                <p className="border-b pb-2">
                                  {day.description}
                                </p>
                                <div className="border-b pb-2">
                                  <div className="flex flex-row pt-3 text-sm font-bold opacity-70">
                                    <TbAirBalloon className="text-sm md:text-xl mr-1" />
                                    <span>Activity</span>
                                  </div>
                                  <div className="flex flex-col gap-3 pt-3">
                                    {day.activities.map((activity, index) => (
                                      <div
                                        key={index}
                                        className="flex flex-row gap-2"
                                      >
                                        <span className="text-yellow-600 text-lg">
                                          <CheckIcon />
                                        </span>
                                        <span>{activity}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                                <div>
                                  <div className="flex flex-row pt-5 text-sm font-bold opacity-70">
                                    <LuHotel className="text-sm md:text-xl mr-1" />
                                    <span>Stay</span>
                                  </div>
                                  <div className="flex flex-col pt-3">
                                    <h1 className="text-sm pb-0 mb-0">
                                      {day.stay.name}
                                    </h1>
                                    <em className="text-xs ">
                                      {day.stay.address}
                                    </em>
                                    <div className="flex flex-row justify-between items-center mt-5 before:content-[''] before:absolute before:top-1/2 before:right-0 before:left-0 before:border before:z-0 before:border-dashed  relative w-full  ">
                                      <div className="bg-white z-10 p-1 px-3 rounded border">
                                        <h1>Check In</h1>
                                        <p>{day.stay.checkin}</p>
                                      </div>
                                      <div className="bg-white z-10 p-1 px-3 rounded border">
                                        <h1>Check Out</h1>
                                        <p>{day.stay.checkout}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </div>
                    ))}
                </div>
              </div>

              {/* left side div end */}
            </div>

            {/* right side div this is hidden in small screen */}
            <div className="hidden md:block md:col-span-3 rounded-md border p-5 max-w-[500px] min-w-[400px] shadow-lg h-max sticky top-10 bg-gray-100/50">
              <h1 className="text-center font-bold">Enquiry Form</h1>
              <em className="text-xs text-center block font-thin">
                **Fill up this form so that we can contact you
              </em>
              <CallbackForm buttonName="Send Enquiry" />
            </div>
          </div>
          <div className="w-full mt-10">
            <img src={EndImage} alt="" />
          </div>

          <div className="mt-8 border roounded-lg p-4 shadow-md">
            <h1 className="text-2xl font-bold border-b pb-2">
              Whats inside the Package?
            </h1>
            <div className="grid grid-cols-2 w-full  text-center pt-3">
              <div className="inclusions border-r mr-5">
                <h1 className="text-left md:text-left text-xs pl-6 md:pl-0 md:text-sm font-bold pb-1">
                  Inclusions
                </h1>
                {data?.inclusions && (
                  <ul className="text-sm ">
                    {data.inclusions.map((inclusion, index) => (
                      <li
                        key={index}
                        className="flex flex-row gap-2 items-top text-left"
                      >
                        <span className="text-yellow-600 text-lg">
                          <CheckIcon />{" "}
                        </span>
                        <span>{inclusion}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="exclusions">
                <h1 className="text-left text-xs pl-6 md:pl-0 md:text-sm font-bold  pb-1">
                  Exclusions
                </h1>
                {data?.exclusions && (
                  <ul className="text-sm ">
                    {data.exclusions.map((exclusion, index) => (
                      <li
                        key={index}
                        className="flex flex-row gap-2 items-top text-left"
                      >
                        <span className="text-yellow-600 text-lg">
                          <Cross1Icon />{" "}
                        </span>
                        <span>{exclusion}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
          <div className="pt-10">
            {data?.goodToKnows && (
              <Accordion
                className="shadow-sm border px-4 rounded-sm"
                collapsible
              >
                <AccordionItem className="border-0" value="good to know">
                  <AccordionTrigger className="hover:no-underline" aschild>
                    <p className="font-bold">Good to knows</p>
                  </AccordionTrigger>

                  <AccordionContent>
                    <ul className="list-disc list-outside ml-9">
                      {data.goodToKnows.map((details, index) => (
                        <li className="px-1 py-1" key={index}>
                          {details}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            )}
          </div>

          <div className="pt-20">
            <h1 className="text-3xl font-bold text-center pb-5">
              Reviews and Ratings
            </h1>
            <Reviews reviewsData={data.ratings} />
          </div>
          <div className="flex flex-col gap-3">
            {data.reviews &&
              data.reviews.map((reviewer, index) => {
                return (
                  <div className="flex flex-col border rounded p-2">
                    <div className="flex flex-row items-top justify-between">
                      <div className="flex flex-row gap-2">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={reviewer.image}
                          alt=""
                        />
                        <div>
                          <p className="font-sm font-bold">{reviewer.name}</p>
                          <p className="font-xs font-light text-stone-400">
                            Reviewed: {reviewer.date}
                          </p>
                        </div>
                      </div>
                      <p className="flex flex-row items-center self-start text-yellow-600 md:mr-5">
                        <StarFilledIcon />
                        {Number(reviewer?.rating).toFixed(1)}/5
                      </p>
                    </div>
                    <p className="text-sm p-2">{reviewer.review}</p>
                  </div>
                );
              })}
          </div>
          {/* end of body w-11/12 */}
        </div>
      </div>
    )
  );
}

export default TourDetails;
