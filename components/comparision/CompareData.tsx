import phone from "../../public/image/phone1.png";
import Battery from "@/public/assets/Battery";
import Camera from "@/public/assets/Camera";
import Display from "@/public/assets/Display";
import Network from "@/public/assets/Network";
import Nfc from "@/public/assets/Nfc";
import OS from "@/public/assets/OS";
import Package from "@/public/assets/Package";
import Price from "@/public/assets/Price";
import Processor from "@/public/assets/Processor";
import ReleaseDate from "@/public/assets/ReleaseDate";
import Security from "@/public/assets/Security";
import Sensor from "@/public/assets/Sensor";
import Storage from "@/public/assets/storage";
import Image from "next/image";
import { ComparePhone } from "@/redux/types/phone";

function CompareResult({ phone1, phone2 }: ComparePhone) {
  return (
    <>
      <div className="border-t border-gray-200 my-4">
        <div className="flex mt-9 justify-between px-9">
          <div>
            <div className="xl:w-[200px] xl:h-[32vh] w-[90px] h-[14vh]">
              <Image
                className="h-full w-full"
                src={phone1.photo ? phone1.photo : phone}
                alt="phone"
                width={300}
                height={300}
                unoptimized
              />
              <h4 className="xl:text-2xl text-xl font-bold text-center my-2">
                {phone1.name}
              </h4>
            </div>
            <div className="mt-12 flex justify-evenly">
              <div className="bg-[#3797ff] rounded-sm h-4 w-4"></div>
              <div className="bg-black h-4 w-4 rounded-sm"></div>
              <div className="bg-[#ca0000] h-4 w-4 rounded-sm"></div>
            </div>
          </div>
          <div>
            <div className="xl:w-[200px] w-[90px] xl:h-[32vh] h-[14vh]">
              <Image
                className="h-full w-full"
                src={phone2.photo ? phone2.photo : phone}
                alt="phone"
                width={300}
                height={300}
                unoptimized
              />
              <h4 className="xl:text-2xl text-xl font-bold text-center my-2">
                {phone2.name}
              </h4>
            </div>
            <div className="mt-12 flex justify-evenly">
              <div className="bg-[#3797ff] rounded-sm h-4 w-4"></div>
              <div className="bg-black h-4 w-4 rounded-sm"></div>
              <div className="bg-[#ca0000] h-4 w-4 rounded-sm"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center flex-col my-9">
        <div className="border-t border-b flex justify-center">
          <div className="m-auto text-lg font-medium">{phone1.memory}</div>
          <div className="border-r border-l w-[280px] px-9 py-4">
            <div className="flex justify-center">
              <Storage />
            </div>
            <span className="text-base lg:text-lg flex justify-center pt-1 font-semibold">
              Storage & RAM
            </span>
          </div>
          <div className="m-auto text-lg font-medium">{phone2.memory}</div>
        </div>

        <div className="border-b flex justify-center">
          <div className="m-auto text-lg font-medium">{phone1.company}</div>
          <div className="border-r border-l w-[280px] px-9 py-4">
            <div className="flex justify-center">
              <Display />
            </div>
            <span className="text-base lg:text-lg flex justify-center pt-1 font-semibold">
              Display
            </span>
          </div>
          <div className="m-auto text-lg font-medium">{phone2.company}</div>
        </div>
        <div className="border-b flex justify-center">
          <div className="m-auto text-lg font-medium">{phone1.company}</div>
          <div className="border-r border-l w-[280px] px-9 py-4">
            <div className="flex justify-center">
              <Camera />
            </div>
            <span className="text-base lg:text-lg flex justify-center pt-1 font-semibold">
              Camera
            </span>
          </div>
          <div className="m-auto text-lg font-medium">{phone2.company}</div>
        </div>

        <div className="border-b flex justify-center">
          <div className="border-r border-l w-[280px] px-9 py-4">
            <div className="flex justify-center">
              <Processor />
            </div>
            <span className="text-base lg:text-lg flex justify-center pt-1 font-semibold">
              Processor
            </span>
          </div>
        </div>

        <div className="border-b flex justify-center">
          <div className="m-auto text-lg font-medium">{phone1.camera}</div>
          <div className="border-r border-l w-[280px] px-9 py-4">
            <div className="flex justify-center">
              <Camera />
            </div>
            <span className="text-base lg:text-lg flex justify-center pt-1 font-semibold">
              Camera
            </span>
          </div>
          <div className="m-auto text-lg font-medium">{phone2.camera}</div>
        </div>
        <div className="border-b flex justify-center">
          <div className="m-auto text-lg font-medium">{phone1.battery}</div>
          <div className="border-r border-l w-[280px] px-9 py-4">
            <div className="flex justify-center">
              <Battery />
            </div>
            <span className="text-base lg:text-lg flex justify-center pt-1 font-semibold">
              Battery
            </span>
          </div>
          <div className="m-auto text-lg font-medium">{phone2.battery}</div>
        </div>

        <div className="border-b flex justify-center">
          <div className="border-r border-l w-[280px] px-9 py-4">
            <div className="flex justify-center">
              <Security />
            </div>
            <span className="text-base lg:text-lg flex justify-center pt-1 font-semibold">
              Security & Authentication
            </span>
          </div>
        </div>

        <div className="border-b flex justify-center">
          <div className="border-r border-l w-[280px] px-9 py-4">
            <div className="flex justify-center">
              <Nfc />
            </div>
            <span className="text-base lg:text-lg flex justify-center pt-1 font-semibold">
              NFC
            </span>
          </div>
        </div>

        <div className="border-b flex justify-center">
          <div className="border-r border-l w-[280px] px-9 py-4">
            <div className="flex justify-center">
              <Network />
            </div>
            <span className="text-base lg:text-lg flex justify-center pt-1 font-semibold">
              Networks
            </span>
          </div>
        </div>

        <div className="border-b flex justify-center">
          <div className="border-r border-l w-[280px] px-9 py-4">
            <div className="flex justify-center">
              <Sensor />
            </div>
            <span className="text-base lg:text-lg flex justify-center pt-1 font-semibold">
              Sensors
            </span>
          </div>
        </div>
        <div className="border-b flex justify-center">
          <div className="border-r border-l w-[280px] px-9 py-4">
            <div className="flex justify-center">
              <OS />
            </div>
            <span className="text-base lg:text-lg flex justify-center pt-1 font-semibold">
              Operating System
            </span>
          </div>
        </div>
        <div className="border-b flex justify-center">
          <div className="border-r border-l w-[280px] px-9 py-4">
            <div className="flex justify-center">
              <Package />
            </div>
            <span className="text-base lg:text-lg flex justify-center pt-1 font-semibold">
              Package Contains
            </span>
          </div>
        </div>
        <div className="border-b flex justify-center">
          <div className="m-auto text-lg font-medium">{phone1.releaseDate}</div>
          <div className="border-r border-l w-[280px] px-9 py-4">
            <div className="flex justify-center">
              <ReleaseDate />
            </div>
            <span className="text-base lg:text-lg flex justify-center pt-1 font-semibold">
              LunchDate
            </span>
          </div>
          <div className="m-auto text-lg font-medium">{phone2.releaseDate}</div>
        </div>
        <div className="border-b flex justify-center">
          <div className="m-auto text-lg font-medium">{phone1.price}</div>
          <div className="border-r border-l w-[280px] px-9 py-4">
            <div className="flex justify-center">
              <Price />
            </div>
            <span className="text-base lg:text-lg flex justify-center pt-1 font-semibold">
              Price
            </span>
          </div>
          <div className="m-auto text-lg font-medium">{phone2.price}</div>
        </div>
      </div>
    </>
  );
}

export default CompareResult;
