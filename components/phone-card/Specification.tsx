import Image from "next/image";
import Battery from "@/public/assets/Battery";
import Camera from "@/public/assets/Camera";
import Price from "@/public/assets/Price";
import Storage from "@/public/assets/storage";
import phonePic from "../../public/image/phone1.png";

interface PageProps {
  data: {
    name?: string;
    company?: string;
    camera?: string;
    battery?: string;
    memory?: string;
    photo?: string;
    releaseDate?: string;
    price?: number;
  };
}

function Specification({ data }: PageProps) {
  const { name, company, camera, battery, memory, photo, releaseDate, price } =
    data;
  return (
    <div>
      <div className="flex flex-col items-center gap-14 justify-center py-10">
        <div>
          <div>
            <Image
              className=" w-full h-[300px] lg:h-[400px]"
              src={photo ? photo : phonePic}
              alt="phone"
              height={200}
              width={200}
              unoptimized
            />
          </div>
          <h3 className="text-center text-sm font-semibold">{name}</h3>
          <div className="mt-5 flex justify-evenly">
            <div className="bg-[#3797ff] rounded-md h-5 w-5"></div>
            <div className="bg-black h-5 w-5 rounded-md"></div>
            <div className="bg-[#ca0000] h-5 w-5 rounded-md"></div>
          </div>
        </div>

        <div className="grid xl:grid-cols-4 grid-cols-1  ">
          <div className="xl:border-b-[3px] order-1 xl:order-none  xl:border-gray-300 xl:xl:border-r-[3px] xl:px-20 px-10 pt-2">
            <div className="flex justify-center">
              <Storage />
            </div>
            <div className="text-xs text-center">
              <span>Storage & RAM</span>
            </div>
          </div>
          <div className="xl:border-b-[3px] order-3 xl:order-none  xl:border-gray-300 xl:xl:border-r-[3px] xl:px-20 px-10 xl:py-2 py-1">
            <div className="flex justify-center">
              <Camera />
            </div>
            <div className="text-xs text-center">
              <span>Camera</span>
            </div>
          </div>
          <div className="xl:border-b-[3px] xl:order-none  order-5 xl:border-gray-300 xl:xl:border-r-[3px] xl:px-20 px-10 py-1">
            <div className="flex justify-center">
              <Battery />
            </div>
            <div className="text-xs text-center">
              <span>Release Date</span>
            </div>
          </div>
          <div className="xl:border-b-[3px] xl:order-none  order-7 xl:border-gray-300 xl:px-20 px-10 py-1">
            <div className="flex justify-center">
              <Price />
            </div>
            <div className="text-xs text-center">
              <span>Price</span>
            </div>
          </div>

          <div className="xl:border-gray-300 order-2 xl:order-none  text-[10px] xl:text-[12px] font-bold xl:xl:border-r-[3px] xl:px-10 px-10 xl:py-2 py-1">
            {/* <span>128 GB 6 GB RAM/</span>
              <span>18 GB 6 GB RAM/</span>
              <span>18 GB 6 GB RAM/</span>
              <span>18 GB 6 GB RAM/</span> */}
            {memory}
          </div>
          <div className="xl:border-gray-300 xl:order-none  order-4 flex justify-center text-[10px] xl:text-[12px] font-bold xl:xl:border-r-[3px] xl:px-10 px-10 xl:py-2 py-1">
            {camera}
          </div>
          <div className="xl:border-gray-300 xl:order-none  order-6 flex justify-center text-[10px] xl:text-[12px] font-bold xl:xl:border-r-[3px] xl:px-10 px-10 xl:py-2 py-1">
            {releaseDate ? (
              releaseDate.toString().split("T")[0]
            ) : (
              <span>2020-4-1</span>
            )}
          </div>
          <div className="xl:border-gray-300 xl:order-none  order-8 flex justify-center text-[10px] xl:text-[12px] font-bold  xl:px-10 px-10 xl:py-2 py-1">
            {price}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-6 xl:my-20 my-10">
        <div className="xl:border-t-2 xl:border-r-2 xl:border-gray-200 px-14 py-6">
          Storage & RAM
        </div>
        <div className="xl:border-t-2 col-span-5 xl:border-gray-200 px-14 py-6">
          {memory}
        </div>

        <div className="xl:border-t-2 xl:border-r-2 xl:border-gray-200 px-14 py-6">
          Battery
        </div>
        <div className="xl:border-t-2 col-span-5 xl:border-gray-200 px-14 py-6">
          {battery}
        </div>

        <div className="xl:border-t-2 xl:border-r-2 xl:border-gray-200 px-14 py-6">
          Camera
        </div>
        <div className="xl:border-t-2 col-span-5 xl:border-gray-200 px-14 py-6">
          {camera}
        </div>

        <div className="xl:border-t-2 xl:border-r-2 xl:border-gray-200 px-14 py-6">
          Launched Date
        </div>
        <div className="xl:border-t-2 col-span-5 xl:border-gray-200 px-14 py-6">
          {releaseDate ? (
            releaseDate.toString().split("T")[0]
          ) : (
            <span>2020-4-1</span>
          )}
        </div>

        <div className="xl:border-t-2 xl:border-r-2 xl:border-gray-200 px-14 py-6">
          price
        </div>
        <div className="xl:border-t-2 col-span-5 xl:border-gray-200 px-14 py-6">
          {price}
        </div>

        {/* <div className="xl:border-t-2 xl:border-r-2 xl:border-gray-200 px-14 py-6">
              01
            </div>
            <div className="xl:border-t-2 col-span-5 xl:border-gray-200 px-14 py-6">
              01
            </div>

            <div className="xl:border-t-2 xl:border-r-2 xl:border-gray-200 px-14 py-6">
              01
            </div>
            <div className="xl:border-t-2 col-span-5 xl:border-gray-200 px-14 py-6">
              01
            </div> */}
      </div>
    </div>
  );
}

export default Specification;
