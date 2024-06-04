import { Link } from "react-router-dom";
import PATH from "@/constants/path";
import DestinationCard from "./DestinationCard";
import ComponentCarousel from "./ComponentCarousel";
export default function PlacesCarousel({ data, destination }) {
  return (
    <div className="flex flex-col w-11/12">
      <div className="flex flex-row justify-between p-3  py-10 md:m-auto w-full md:w-11/12">
        <h1 className="text-2xl font-bold text-left">{destination}</h1>
        <Link
          to={PATH.switzerland}
          className="text-yellow-600 flex items-center gap-2 font-bold"
        >
          View all
          <span className="icon rounded-full bg-yellow-600 text-white inline-block w-7 h-7 text-center p-1">
            <i className="fa-solid fa-angle-right"></i>
          </span>
        </Link>
      </div>
      <div className="flex flex-row gap-3 ">
        <ComponentCarousel>
          {data.map((place, index) => (
            <DestinationCard place={place} key={index} />
          ))}
        </ComponentCarousel>
      </div>
    </div>
  );
}
