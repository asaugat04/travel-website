import { StarFilledIcon, StarIcon } from "@radix-ui/react-icons";
import { Progress } from "@/components/ui/progress";

import React from "react";

function Reviews({ reviewsData }) {
  return (
    <div className="flex w-full flex-col pb-20">
      <h1 className="text-xs font-semibold text-center md:text-left">
        Total Reviews:{" "}
        <span className="text-yellow-600">{reviewsData?.total_reviews}</span>
      </h1>
      <div className="grid md:grid-cols-7 mt-5 gap-7 md:gap-0">
        <div className="flex flex-col justify-center md:justify-start items-center md:col-span-2 ">
          <h1 className="text-left text-yellow-600 text-6xl p-4 pb-0">
            {reviewsData?.rating}
          </h1>
          {/* star icons */}
          <div className="icons flex flex-row ">
            {Array.from({ length: reviewsData.rating }).map((_, index) => (
              <StarFilledIcon className="text-yellow-600  " />
            ))}
          </div>
        </div>
        <div className="flex gap-2 flex-col md:col-span-5 font-bold">
          <div className="flex flex-row items-center">
            <span className="flex flex-row items-center ">
              5<StarFilledIcon className="text-yellow-500" />
            </span>
            <Progress
              indicatorClassName="bg-yellow-600"
              className="w-full ml-2 text-yellow-600"
              value={(reviewsData?.five / reviewsData?.total_reviews) * 100}
            />
          </div>
          <div className="flex flex-row items-center">
            <span className="flex flex-row items-center ">
              4<StarFilledIcon className="text-yellow-500" />
            </span>
            <Progress
              indicatorClassName="bg-yellow-600"
              className="w-full ml-2 text-yellow-600"
              value={(reviewsData?.four / reviewsData?.total_reviews) * 100}
            />
          </div>
          <div className="flex flex-row items-center">
            <span className="flex flex-row items-center ">
              3<StarFilledIcon className="text-yellow-500" />
            </span>
            <Progress
              indicatorClassName="bg-yellow-600"
              className="w-full ml-2 text-yellow-600"
              value={(reviewsData?.three / reviewsData?.total_reviews) * 100}
            />
          </div>
          <div className="flex flex-row items-center">
            <span className="flex flex-row items-center ">
              2<StarFilledIcon className="text-yellow-500" />
            </span>
            <Progress
              indicatorClassName="bg-yellow-600"
              className="w-full ml-2 text-yellow-600"
              value={(reviewsData?.two / reviewsData?.total_reviews) * 100}
            />
          </div>
          <div className="flex flex-row items-center">
            <span className="flex flex-row items-center ">
              1<StarFilledIcon className="text-yellow-500" />
            </span>
            <Progress
              indicatorClassName="bg-yellow-600"
              className="w-full ml-2 text-yellow-600"
              value={(reviewsData?.one / reviewsData?.total_reviews) * 100}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
