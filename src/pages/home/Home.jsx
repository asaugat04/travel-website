import TrekkingImage from "../../assets/images/trekkingimg.jpg";
import TreekingRegionViewer from "@/components/home/treekingRegionViewer";
import PlacesCarousel from "@/components/home/PlacesCarousel";
import apiData from "@/api/fetch";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setData(apiData);
  });
  const trekkingRegions = [
    {
      name: "Annapurna",
      image:
        "https://admin.ntb.gov.np/image-cache/poonhill_pg_adventure-1624441115.jpeg?p=768&s=736cfcfe4bed837aee9f2584ccb64676",
    },
    {
      name: "Langtang",
      image:
        "https://admin.ntb.gov.np/image-cache/langtang6-1624441180.jpeg?p=768&s=fff1833e8caa72107ff70b871b873ef0",
    },
    {
      name: "Manaslu",
      image:
        "https://admin.ntb.gov.np/image-cache/manaslu_ght_adventure-1624441019.jpeg?p=768&s=f58c8901488ac576fa78d4895027c6a5",
    },
    {
      name: "Mustang",
      image:
        "https://admin.ntb.gov.np/image-cache/mustang_tk_adventure-1624441098.jpeg?p=768&s=4b3c814a21b09607ab74159ae77df2a3",
    },
    {
      name: "Taplejung",
      image:
        "https://admin.ntb.gov.np/image-cache/taplejung_ght_adventure-1624441316.jpeg?p=768&s=f4813d1335aabaaa4e28ccead40d47ff",
    },
  ];
  return (
    <div>
      <div
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0) 50%), url(${TrekkingImage})`,
          fontFamily: '"Cedarville Cursive", cursive',
        }}
        className="min-h-[25vh] md:min-h-[70vh] bg-center bg-cover flex justify-center items-end font-bold text-white "
      >
        <p className="text-white-600 font-['Cedarville Cursive,cursive'] text-5xl md:text-6xl px-4 py-7 md:py-20 ">
          Trekking in Nepal
        </p>
      </div>
      <div className="text-center p-5 md:p-7 text-2xl  md:text-3xl font-sans font-bold text-yellow-600">
        Trekking Regions
      </div>
      <div className="m-auto md:w-11/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 p-5 md:p-7 ">
        {trekkingRegions.map((region, index) => (
          <TreekingRegionViewer key={index} region={region} />
        ))}
      </div>
      <div className="country-wise-travel-wrapper flex flex-col items-center justify-center">
        <h1 className="text-4xl py-5 font-bold border-t-2 mt-4  w-full text-center">
          National tours
        </h1>
        <PlacesCarousel destination={"Pokhara"} data={data} />
        <PlacesCarousel destination={"Mustang"} data={data} />
        <PlacesCarousel destination={"Manang"} data={data} />

        <h1 className="text-4xl py-5 font-bold border-t-2 mt-4  w-full text-center">
          International tours
        </h1>
        <PlacesCarousel destination={"Switzerland"} data={data} />
        <PlacesCarousel destination={"Australia"} data={data} />
        <PlacesCarousel destination={"USA"} data={data} />
      </div>
    </div>
  );
}
