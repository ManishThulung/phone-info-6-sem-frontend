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
              <h4 className="xl:text-[14px] text-[9px] text-center mt-2">
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
              <h4 className="xl:text-[14px] text-[9px] text-center mt-2">
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
          <div className="m-auto">{phone1.memory}</div>
          <div className="border-r w-[200px] border-l px-9 py-2">
            <div className="flex justify-center">
              <Storage />
            </div>
            <span className="text-[9px] flex justify-center pt-2 font-bold">
              Storage & RAM
            </span>
          </div>
          <div className="m-auto">{phone2.memory}</div>
        </div>

        <div className="border-b flex justify-center">
          <div className="m-auto">{phone1.company}</div>
          <div className="border-r border-l w-[200px] px-9 py-2">
            <div className="flex justify-center">
              <Display />
            </div>
            <span className="text-[9px] flex justify-center pt-2 font-bold">
              Display
            </span>
          </div>
          <div className="m-auto">{phone2.company}</div>
        </div>
        <div className="border-b flex justify-center">
          <div className="m-auto">{phone1.company}</div>
          <div className="border-r border-l w-[200px] px-9 py-2">
            <div className="flex justify-center">
              <Camera />
            </div>
            <span className="text-[9px] flex justify-center pt-2 font-bold">
              Camera
            </span>
          </div>
          <div className="m-auto">{phone2.company}</div>
        </div>

        <div className="border-b flex justify-center">
          <div className="border-r border-l w-[200px] px-9 py-2">
            <div className="flex justify-center">
              <Processor />
            </div>
            <span className="text-[9px] flex justify-center pt-2 font-bold">
              Processor
            </span>
          </div>
        </div>

        <div className="border-b flex justify-center">
          <div className="m-auto">{phone1.camera}</div>
          <div className="border-r border-l w-[200px] px-9 py-2">
            <div className="flex justify-center">
              <Camera />
            </div>
            <span className="text-[9px] flex justify-center pt-2 font-bold">
              Camera
            </span>
          </div>
          <div className="m-auto">{phone2.camera}</div>
        </div>
        <div className="border-b flex justify-center">
          <div className="m-auto">{phone1.battery}</div>
          <div className="border-r border-l w-[200px] px-9 py-2">
            <div className="flex justify-center">
              <Battery />
            </div>
            <span className="text-[9px] flex justify-center pt-2 font-bold">
              Battery
            </span>
          </div>
          <div className="m-auto">{phone2.battery}</div>
        </div>

        <div className="border-b flex justify-center">
          <div className="border-r border-l w-[200px] px-9 py-2">
            <div className="flex justify-center">
              <Security />
            </div>
            <span className="text-[9px] flex justify-center pt-2 font-bold">
              Security & Authentication
            </span>
          </div>
        </div>

        <div className="border-b flex justify-center">
          <div className="border-r border-l w-[200px] px-9 py-2">
            <div className="flex justify-center">
              <Nfc />
            </div>
            <span className="text-[9px] flex justify-center pt-2 font-bold">
              NFC
            </span>
          </div>
        </div>

        <div className="border-b flex justify-center">
          <div className="border-r border-l w-[200px] px-9 py-2">
            <div className="flex justify-center">
              <Network />
            </div>
            <span className="text-[9px] flex justify-center pt-2 font-bold">
              Networks
            </span>
          </div>
        </div>

        <div className="border-b flex justify-center">
          <div className="border-r border-l w-[200px] px-9 py-2">
            <div className="flex justify-center">
              <Sensor />
            </div>
            <span className="text-[9px] flex justify-center pt-2 font-bold">
              Sensors
            </span>
          </div>
        </div>
        <div className="border-b flex justify-center">
          <div className="border-r border-l w-[200px] px-9 py-2">
            <div className="flex justify-center">
              <OS />
            </div>
            <span className="text-[8px] flex justify-center pt-2 font-bold">
              Operating System
            </span>
          </div>
        </div>
        <div className="border-b flex justify-center">
          <div className="border-r border-l w-[200px] px-9 py-2">
            <div className="flex justify-center">
              <Package />
            </div>
            <span className="text-[9px] flex justify-center pt-2 font-bold">
              Package Contains
            </span>
          </div>
        </div>
        <div className="border-b flex justify-center">
          <div className="m-auto">{phone1.releaseDate}</div>
          <div className="border-r border-l w-[200px] px-9 py-2">
            <div className="flex justify-center">
              <ReleaseDate />
            </div>
            <span className="text-[9px] flex justify-center pt-2 font-bold">
              LunchDate
            </span>
          </div>
          <div className="m-auto">{phone2.releaseDate}</div>
        </div>
        <div className="border-b flex justify-center">
          <div className="m-auto">{phone1.price}</div>
          <div className="border-r border-l w-[200px] px-9 py-2">
            <div className="flex justify-center">
              <Price />
            </div>
            <span className="text-[9px] flex justify-center pt-2 font-bold">
              Price
            </span>
          </div>
          <div className="m-auto">{phone2.price}</div>
        </div>
      </div>
    </>
  );
}

export default CompareResult;
