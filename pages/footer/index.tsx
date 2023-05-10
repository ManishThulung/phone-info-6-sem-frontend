import { SiFacebook } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";
import { BsTwitter } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { TbPhoneCall } from "react-icons/tb";
import { CiMail } from "react-icons/ci";
import { MdLocationPin } from "react-icons/md";
import Logo from "@/public/assets/logo";
const Footer = () => {
  return (
    <>
      <div className="bg-[#0f2027] xl:mt-20">
        <div className="container pt-4 pb-8">
          <div className="flex justify-center">
            <Logo />
          </div>
          <hr className="dark:bg-gray-700 mx-auto mb-8 h-[2px]  w-full rounded border-0 bg-[#dddfe0]" />
          <div className="flex w-full xl:flex-row gap-8 xl:gap-0 flex-col xl:justify-between">
            <div className="xl:w-[25%]">
              <h3 className="text-md  mb-1 font-sans font-bold text-white">
                Reach us
              </h3>
              <ul className="mt-2 flex flex-col gap-3 text-sm text-white">
                <li className="flex font-sans items-center gap-1">
                  <span className="inline">
                    <TbPhoneCall />
                  </span>
                  +977 9823695347
                </li>
                <li className="flex items-center gap-1">
                  <span>
                    <CiMail />
                  </span>
                  biratechinfo@gmail.com
                </li>
                <li className="flex font-sans items-center gap-1">
                  <span>
                    <MdLocationPin />
                  </span>
                  Patan Dhoka, Lalitpur Nepal
                </li>
              </ul>
            </div>
            <div className="xl:w-[25%]">
              <h3 className="text-md font-sans mb-1 font-bold text-white">
                Company
              </h3>
              <ul className="flex flex-col font-sans gap-3 text-sm text-white">
                <li>About</li>
                <li>Contact</li>
                <li>Blogs</li>
              </ul>
            </div>
            <div className="xl:w-[25%]">
              <h3 className="text-md mb-1 font-sans font-bold text-white">
                Legal
              </h3>
              <ul className="flex font-sans flex-col gap-3 text-sm text-white">
                <li>Privacy Policy</li>
                <li>Term & Services</li>
                <li>Term of Use</li>
                <li>Refund Policy</li>
              </ul>
            </div>
            <div className="xl:w-[25%]">
              <h3 className="text-md font-sans mb-1 font-bold text-white">
                Quick links
              </h3>
              <ul className="flex font-sans flex-col gap-3 text-sm text-white">
                <li>FAQ</li>
                <li>Downloads</li>
                <li>Forum</li>
              </ul>
            </div>
            <div className="xl:w-[25%] rounded-md bg-[#131313] p-4">
              <h4 className="text-lg font-sans font-bold text-white">
                Join Our Newsletter
              </h4>
              <div className="mt-4 flex">
                <input
                  type="text"
                  className="w-44 rounded-md border-none bg-[#1e1e1e]  p-2 text-sm text-white outline-none"
                  placeholder="Your email address"
                />
                <button className=" font-poppins h-auto rounded-sm bg-[#0f2027] p-2 text-xs text-white">
                  Subscribe
                </button>
              </div>
              <span className="w-20 font-sans text-xs text-left text-white">
                * Will Send you weekly updates about new smartphones and theri
                features
              </span>
            </div>
          </div>
        </div>
      </div>
      <div style={{ background: "black" }} className="py-3">
        <div className="container flex justify-between  ">
          <div className="text-xs font-sans text-white">
            Copyrignt ©2022 BirTechinfo
          </div>
          <ul className="flex gap-3 text-white">
            <li className="cursor-pointer">
              <a>
                <SiFacebook />
              </a>
            </li>
            <li className="cursor-pointer">
              <a>
                <RiInstagramFill />
              </a>
            </li>
            <li className="cursor-pointer">
              <a>
                <BsTwitter />
              </a>
            </li>
            <li className="cursor-pointer">
              <a>
                <AiFillLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
