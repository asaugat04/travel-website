import React, { useEffect, useState } from "react";
import tourData from "@/api/fetchTourData";
import { useParams } from "react-router-dom";
import ContactDialog from "@/components/common/ContactDialog";
import ImageCarousel from "@/components/common/ImageCarousel";
import CallbackForm from "@/components/common/CallbackForm";
import { IconRight } from "react-day-picker";
import { CheckIcon, Cross1Icon } from "@radix-ui/react-icons";

function TourDetails() {
  const { tourName } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    setData({
      ...tourData,
    });
  }, [tourName]);

  return (
    <div>
      <div className="group relative -mb-0">
        {data?.images && (
          <ImageCarousel
            className="h-[50vh] md:h-screen"
            images={data.images}
          />
        )}
        <div className="absolute bottom-0 left-0 w-full text-white shadow-xl backdrop-blur-[1px] bg-gradient-to-t from-neutral-900 to-transparent mt-0">
          <div className="banner flex flex-col items-center justify-center gap-3">
            <div className="text-sm md:text-xl font-semibold">
              Huge Discounts on
            </div>
            <h1 className="text-2xl md:text-6xl font-bold  w-full text-center ">
              <span className="border-b whitespace-nowrap border-b-yellow-600">
                {data.name}
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
      <div className="bg-neutral-900 m-0 w-full px-2 flex flex-row text-white justify-center gap-4 md:gap-10 items-center py-0  -mt-[1px]">
        {data.places &&
          data?.places.map((destination, index) => (
            <>
              <p
                key={index}
                className="flex flex-row items-center gap-1 text-xs py-3 md:text-2xl"
              >
                {destination}
              </p>
              {index !== data.places.length - 1 && (
                <div className="text-yellow-600 p-0 h-full text-xl">&gt;</div>
              )}
            </>
          ))}
      </div>
      <div className="body w-11/12 m-auto md:w-10/12 py-10 ">
        <div className="flex flex-col ">
          <h1 className="text-center text-3xl font-bold text-yellow-600 pb-5">
            Tour Overview
          </h1>
          <p className="text-justify text-sm">{data?.overview}</p>
        </div>

        <div className="grid md:grid-cols-8 pt-10 gap-3">
          <div className="md:col-span-5">
            <h1 className="text-center md:text-left text-3xl font-bold text-yellow-600 pb-5">
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
                          className="flex flex-row gap-2 items-center"
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
                          className="flex flex-row gap-2 items-center"
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
            <div className="flex flex-col"></div>

            {/* left side div end */}
          </div>

          {/* right side div this is hidden in small screen */}
          <div className="hidden md:block md:col-span-3 rounded-md border p-5 max-w-[500px] min-w-[400px] shadow-lg">
            <CallbackForm buttonName="Send Enquiry" />
          </div>
        </div>
        {/* end of body w-11/12 */}
      </div>
    </div>
  );
}

export default TourDetails;
