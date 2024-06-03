import TrekkingImage from "../../assets/images/trekkingimg.jpg";

export default function Home() {
  const trekkingRegions = [
    {
      name: "Rara",
      image:
        "https://admin.ntb.gov.np/image-cache/rara_iw_adventure-1624440943.jpeg?p=768&s=d92dd1c1be1bc644f500dcebb932dd12",
    },
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
        className="min-h-[70vh] bg-center bg-cover flex justify-center items-end font-bold text-white "
      >
        <p className="text-white-600 font-['Cedarville Cursive,cursive'] text-5xl md:text-6xl px-4 py-20 ">
          Trekking in Nepal
        </p>
      </div>
      <div className="text-center p-5 md:p-7 text-2xl  md:text-3xl font-sans font-bold">
        Trekking Regions
      </div>
      <div className="m-auto md:w-11/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 p-5 md:p-7 ">
        {trekkingRegions.map((region, index) => (
          <div
            key={index}
            className="relative h-52 bg-cover bg-center bg-no-repeat rounded-lg hover:-mt-1 hover:shadow-lg transition-all ease-in-out duration-300"
            style={{
              backgroundImage: `url(${region.image})`,
            }}
          >
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-2 md:p-4 rounded-b-lg">
              {region.name}
            </div>
          </div>
        ))}
      </div>
      hhhkjh
    </div>
  );
}
