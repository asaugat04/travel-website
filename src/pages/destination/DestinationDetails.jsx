import React, { useEffect, useState } from "react";
import destinationData from "@/api/fetchDestinationData";
import { useParams } from "react-router-dom";
import ImageCarousel from "@/components/common/ImageCarousel";
import ContactDialog from "@/components/common/ContactDialog";
import DestinationCard from "@/components/home/DestinationCard";
import FaqSection from "@/components/destination/FaqSection";
import Reviews from "@/components/destination/Reviews";

function DestinationDetails() {
  const { destinationName } = useParams();
  const [data, setdata] = useState([]);
  useEffect(() => {
    setdata({
      ...destinationData,
      name: destinationName[0].toUpperCase() + destinationName.slice(1),
    });
  }, [destinationData]);
  return (
    <div>
      <div className="group relative -mb-0">
        {data?.images && (
          <ImageCarousel
            className="h-[50vh] md:h-screen "
            images={data.images}
          />
        )}
        <div className="absolute bottom-0 left-0 w-full text-white shadow-xl backdrop-blur-[1px] bg-gradient-to-t from-neutral-900 to-transparent mt-0">
          <div className="banner flex flex-col items-center justify-center gap-3">
            <div className="text-sm md:text-xl font-semibold">
              Huge Discounts on
            </div>
            <h1 className="text-2xl md:text-6xl font-bold border-b">
              <span className="text-yellow-600 ">{data.name}</span> Tour
              Packages
            </h1>
            <p className="text-xs md:text-xl">
              Starting at just{" "}
              <span className="text-xl md:text-2xl">
                {data.currency}
                {"  "}
                {data.starting_price}
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
      <div className="bg-neutral-900 m-0 w-full px-2 flex flex-row text-white justify-center gap-4 md:gap-10 items-center py-3 md:justify-around -mt-0">
        {data.external_reviews &&
          data.external_reviews.map((source) => (
            <p className="flex flex-row items-center gap-1 text-xs">
              <img className=" w-7 md:w-10" src={source.logo} alt="" />
              <span className=" flex flex-col">
                <span>
                  {source.rating}/{source.total_reviews}
                </span>
                <span className="capitalize">{source.source}</span>
              </span>
            </p>
          ))}
      </div>
      <p className="py-10 m-auto w-10/12 text-justify text-sm">
        {data?.desc?.slice(0, 800)}
      </p>
      <div>
        <h1 className="text-center text-3xl font-bold pt-7 pb-4 border-b w-fit m-auto ">
          Tours in {data.name}
        </h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 items-center gap-4 lg:w-10/12 m-auto">
          {data?.tours?.map((place, key) => (
            <DestinationCard place={place} key={key} />
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-center text-2xl font-semibold text-yellow-600 pt-20">
          Frequently Asked Questions
        </h1>
      </div>
      <div className="faq flex flex-col w-full px-5 md:px-0 m-auto md:w-10/12 shadow-sm">
        {data.faqs && <FaqSection data={data.faqs} />}
      </div>
      <div className="reviews flex flex-col w-full px-5 md:px-0 m-auto md:w-10/12 shadow-sm">
        <h1 className="text-center text-2xl font-semibold text-yellow-600 pt-20">
          Reviews
        </h1>
        {data.reviews && <Reviews reviewsData={data.reviews} />}
      </div>
    </div>
  );
}

export default DestinationDetails;
