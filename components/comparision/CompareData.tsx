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
import { StyleTable } from "./Styled";

function CompareResult({ phone1, phone2 }: any) {
  return (
    <StyleTable>
      <tr className="photoRow">
        <td>
          <Image
            className="h-full w-full"
            src={phone1?.photo}
            alt="phone"
            width={300}
            height={300}
            unoptimized
          />
        </td>
        <td></td>
        <td>
          <Image
            className="h-full w-full"
            src={phone2?.photo}
            alt="phone"
            width={300}
            height={300}
            unoptimized
          />
        </td>
      </tr>
      <tr>
        <th>{phone1?.name}</th>
        <th>Vs</th>
        <th>{phone2?.name}</th>
      </tr>
      <tr>
        <td>{phone1?.memory}</td>
        <td className="midCol">
          <div>
            <Storage />
            <p>Storage & Memory</p>
          </div>
        </td>
        <td>{phone2?.memory}</td>
      </tr>
      <tr>
        <td>{phone1?.camera}</td>
        <td className="midCol">
          <div>
            <Storage />
            <p>Camera</p>
          </div>
        </td>
        <td>{phone2?.camera}</td>
      </tr>
      <tr>
        <td>{phone1?.display}</td>
        <td className="midCol">
          <div>
            <Storage />
            <p>Display</p>
          </div>
        </td>
        <td>{phone2?.display}</td>
      </tr>
      <tr>
        <td>{phone1?.battery}</td>
        <td className="midCol">
          <div>
            <Storage />
            <p>Battery</p>
          </div>
        </td>
        <td>{phone2?.battery}</td>
      </tr>

      <tr>
        <td>{phone1?.processor}</td>
        <td className="midCol">
          <div>
            <Storage />
            <p>Processor</p>
          </div>
        </td>
        <td>{phone2?.processor}</td>
      </tr>
      <tr>
        <td>{phone1?.securityAuthentication}</td>
        <td className="midCol">
          <div>
            <Storage />
            <p>Security & Authentication</p>
          </div>
        </td>
        <td>{phone2?.securityAuthentication}</td>
      </tr>
      <tr>
        <td>{phone1?.nfc}</td>
        <td className="midCol">
          <div>
            <Storage />
            <p>NFC</p>
          </div>
        </td>
        <td>{phone2?.nfc}</td>
      </tr>
      <tr>
        <td>{phone1?.network}</td>
        <td className="midCol">
          <div>
            <Storage />
            <p>Network</p>
          </div>
        </td>
        <td>{phone2?.network}</td>
      </tr>
      <tr>
        <td>{phone1?.sensors}</td>
        <td className="midCol">
          <div>
            <Storage />
            <p>Sensors</p>
          </div>
        </td>
        <td>{phone2?.sensors}</td>
      </tr>
      <tr>
        <td>{phone1?.os}</td>
        <td className="midCol">
          <div>
            <Storage />
            <p>Operating System</p>
          </div>
        </td>
        <td>{phone2?.os}</td>
      </tr>
      <tr>
        <td>{phone1?.packageContains}</td>
        <td className="midCol">
          <div>
            <Storage />
            <p>Package Contains</p>
          </div>
        </td>
        <td>{phone2?.packageContains}</td>
      </tr>
      <tr>
        <td>{phone1?.releaseDate}</td>
        <td className="midCol">
          <div>
            <Storage />
            <p>Lunch Date</p>
          </div>
        </td>
        <td>{phone2?.releaseDate}</td>
      </tr>
      <tr>
        <td>Rs.{phone1?.price}</td>
        <td className="midCol">
          <div>
            <Storage />
            <p>Price</p>
          </div>
        </td>
        <td>Rs.{phone2?.price}</td>
      </tr>
    </StyleTable>
  );
}

export default CompareResult;
