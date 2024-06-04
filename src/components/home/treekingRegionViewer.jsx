export default function TreekingRegionViewer({ region }) {
  return (
    <div
      className="relative h-52 bg-cover bg-center bg-no-repeat rounded-lg hover:-mt-1 hover:shadow-lg transition-all ease-in-out duration-300"
      style={{
        backgroundImage: `url(${region.image})`,
      }}
    >
      <div className="absolute bottom-0 left-0 right-0 bg-yellow-600 bg-opacity-40 backdrop-blur-[2px] text-white p-2 md:p-4 rounded-b-lg">
        {region.name}
      </div>
    </div>
  );
}
